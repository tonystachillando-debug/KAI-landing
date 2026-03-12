<?php
// Configura gli headers per consentire le richieste dal dominio principale e gestire le preflight (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Rispondi subito alle richieste preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ottieni i dati inviati nel corpo della richiesta (JSON)
    $inputJSON = file_get_contents('php://input');
    $data = json_decode($inputJSON, true);

    if (!$data) {
        // Fallback per POST form-data classico (se mai servisse)
        $data = $_POST;
    }

    $to = 'sales@amazix.com';
    $subject = isset($data['_subject']) ? $data['_subject'] : 'Nuova richiesta dal sito KAI';
    $cc = isset($data['_cc']) ? $data['_cc'] : '';
    $userEmail = isset($data['email']) ? $data['email'] : (isset($data['workEmail']) ? $data['workEmail'] : '');

    // Costruisci il corpo del messaggio principale
    $messageBody = "Hai ricevuto una nuova richiesta dal sito KAI:\n\n";
    foreach ($data as $key => $value) {
        // Ignora le chiavi di servizio (che iniziano con _)
        if (strpos($key, '_') !== 0 && $key !== 'autoresponse' && $key !== 'email' && $key !== 'workEmail') {
            $messageBody .= ucfirst($key) . ": " . strip_tags($value) . "\n";
        }
    }
    
    // Aggiungi l'email inserita
    if ($userEmail) {
        $messageBody .= "Email dell'utente: " . strip_tags($userEmail) . "\n";
    }

    // Configura gli headers dell'email principale
    $fromAddress = "noreply@amazix.com";
    $headers = "From: KAI - AmaZix <" . $fromAddress . ">\r\n";
    if ($userEmail) {
        $headers .= "Reply-To: " . strip_tags($userEmail) . "\r\n";
    }
    if ($cc) {
        $headers .= "Cc: " . strip_tags($cc) . "\r\n";
    }
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Invia l'email principale (al team di vendita)
    $mailSent = mail($to, $subject, $messageBody, $headers);

    // Se è richiesta una risposta automatica (autoresponse) all'utente, e sappiamo la sua email, la inviamo
    if (isset($data['_autoresponse']) && !empty($data['_autoresponse']) && $userEmail) {
        $autoSubject = "Thank you for contacting KAI";
        $autoBody = strip_tags($data['_autoresponse']);
        
        $autoHeaders = "From: KAI - AmaZix <noreply@amazix.com>\r\n";
        $autoHeaders .= "Reply-To: " . $to . "\r\n";
        $autoHeaders .= "X-Mailer: PHP/" . phpversion();

        mail($userEmail, $autoSubject, $autoBody, $autoHeaders);
    }

    if ($mailSent) {
        echo json_encode(['success' => true, 'message' => 'L\'email è stata inviata con successo.']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Si è verificato un errore nell\'invio dell\'email.']);
    }

} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Metodo non consentito.']);
}
?>

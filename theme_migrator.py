import os
import re

def process_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r') as f:
        content = f.read()

    # Define exact string mapping first, regex later if needed
    
    # Text mapping
    content = content.replace('text-moss', 'text-white')
    content = content.replace('text-charcoal', 'text-white')
    content = content.replace('text-cream', 'text-white')
    content = content.replace('text-clay', 'text-orange')
    
    # Backgrounds
    content = content.replace('bg-cream', 'bg-black')
    # Use border trick for old solid moss backgrounds to make them glowy technical panels
    content = content.replace('bg-moss', 'bg-teal/10 border border-teal/20')
    content = content.replace('bg-charcoal', 'bg-black')
    content = content.replace('bg-clay', 'bg-orange')
    
    # Be careful with bg-white inside cards, change to charcoal to contrast against black bg
    content = content.replace('bg-white', 'bg-charcoal')
    
    # Borders
    content = content.replace('border-moss', 'border-white')
    content = content.replace('border-charcoal', 'border-white')
    
    # Mathing radii
    content = content.replace('rounded-[4rem]', 'rounded-3xl')
    content = content.replace('rounded-[3rem]', 'rounded-3xl')
    content = content.replace('rounded-[2.5rem]', 'rounded-2xl')
    content = content.replace('rounded-[2rem]', 'rounded-2xl')
    
    # Typography
    content = content.replace('font-serif', '')
    content = content.replace('italic', '')

    # Fix up any weird artifacts
    content = re.sub(r'\s+', ' ', content).replace('className=" ', 'className="')
    
    # Write back, but I need to format the JSX properly? 
    # Collapsing whitespace via `re.sub` will break JSX return lines. 
    # Let's SKIP the aggressive whitespace collapse and just do literal replacements.

    pass

def process_safely(filepath):
    print(f"Processing safely {filepath}...")
    with open(filepath, 'r') as f:
        content = f.read()

    # Mappings
    replacements = {
        r'\bbg-cream\b': 'bg-black',
        r'\bbg-charcoal\b': 'bg-black',
        r'\bbg-moss\b': 'bg-teal/10 border border-teal/20 backdrop-blur-md',
        r'\bbg-clay\b': 'bg-orange',
        r'\bbg-white\b': 'bg-charcoal',
        
        r'\btext-moss\b': 'text-white',
        r'\btext-charcoal\b': 'text-white',
        r'\btext-cream\b': 'text-white',
        r'\btext-clay\b': 'text-orange',
        
        r'\bborder-moss\b': 'border-white',
        
        r'rounded-\[4rem\]': 'rounded-3xl',
        r'rounded-\[3rem\]': 'rounded-3xl',
        r'rounded-\[2\.5rem\]': 'rounded-2xl',
        r'rounded-\[2rem\]': 'rounded-2xl',
        
        r'\bfont-serif\b': '',
        r'\bitalic\b': '',
    }

    new_content = content
    for pattern, replacement in replacements.items():
        new_content = re.sub(pattern, replacement, new_content)

    with open(filepath, 'w') as f:
        f.write(new_content)

def main():
    target_dirs = ['src', 'src/components', 'src/components/features']
    root_val = '/Users/stazione/.gemini/antigravity/playground/eternal-planetary'
    
    for dir_path in target_dirs:
        full_dir = os.path.join(root_val, dir_path)
        if not os.path.exists(full_dir): continue
        
        for file in os.listdir(full_dir):
            if file.endswith('.jsx'):
                process_safely(os.path.join(full_dir, file))

if __name__ == '__main__':
    main()

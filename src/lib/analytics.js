/**
 * analytics.js — KAI / amazix.ai
 *
 * Centralised event tracking utility.
 * Pushes to window.dataLayer (consumed by GTM) AND calls gtag() directly
 * so events are captured even before GTM has loaded.
 *
 * GTM IDs: GTM-WHKR8TDW   GA4: G-47H2RPPM3V
 */

const GA4_ID = 'G-47H2RPPM3V';

/** Safe wrapper — calls gtag() only if it exists */
function gtag(...args) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

/** Push an event to the GTM dataLayer */
function pushDataLayer(event, data = {}) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...data });
  }
}

// ─── Page Views ────────────────────────────────────────────────────────────────

/**
 * Call on every React route change.
 * @param {string} path  e.g. '/', '/checkout', '/thank-you'
 * @param {string} title Page title
 */
export function trackPageView(path, title = document.title) {
  const url = `https://amazix.ai${path}`;

  // GA4 direct
  gtag('event', 'page_view', {
    page_title: title,
    page_location: url,
    send_to: GA4_ID,
  });

  // GTM dataLayer
  pushDataLayer('page_view', {
    page_path: path,
    page_title: title,
    page_location: url,
  });
}

// ─── Lead / CTA Events ─────────────────────────────────────────────────────────

/**
 * Fire when any primary CTA is clicked ("Start Pilot", "Book a Call", etc.)
 * @param {string} ctaLabel  Human-readable label of the button
 * @param {string} [plan]    Plan tier if relevant, e.g. 'starter', 'growth'
 */
export function trackCTAClick(ctaLabel, plan = null) {
  gtag('event', 'generate_lead', {
    event_category: 'CTA',
    event_label: ctaLabel,
    plan_tier: plan,
    send_to: GA4_ID,
  });

  pushDataLayer('cta_click', {
    cta_label: ctaLabel,
    plan_tier: plan,
  });
}

// ─── Checkout Events ───────────────────────────────────────────────────────────

/**
 * Fire when the user enters the checkout flow and confirms registration.
 * @param {string} plan    e.g. 'starter', 'growth', 'launch', 'institutional'
 * @param {number} value   Numeric plan price (no $ sign)
 * @param {string} currency  Default 'USD'
 */
export function trackBeginCheckout(plan, value, currency = 'USD') {
  gtag('event', 'begin_checkout', {
    currency,
    value: Number(value),
    items: [{ item_name: `KAI ${plan}`, item_id: plan, price: Number(value) }],
    send_to: GA4_ID,
  });

  pushDataLayer('begin_checkout', {
    plan_tier: plan,
    value: Number(value),
    currency,
  });
}

// ─── Purchase / Primary Conversion ─────────────────────────────────────────────

/**
 * Fire on the /thank-you page — this is the primary Google Ads conversion goal.
 * @param {string} plan    e.g. 'starter'
 * @param {number} value   Numeric plan price
 * @param {string} [currency]
 */
export function trackPurchase(plan, value, currency = 'USD') {
  const transactionId = `KAI-${Date.now()}`; // deterministic enough for a SPA

  gtag('event', 'purchase', {
    transaction_id: transactionId,
    currency,
    value: Number(value),
    items: [{ item_name: `KAI ${plan}`, item_id: plan, price: Number(value) }],
    send_to: GA4_ID,
  });

  pushDataLayer('purchase', {
    transaction_id: transactionId,
    plan_tier: plan,
    value: Number(value),
    currency,
  });
}

// ─── Call Scheduling ───────────────────────────────────────────────────────────

/**
 * Fire when BookCallModal is successfully submitted.
 */
export function trackScheduleCall() {
  gtag('event', 'schedule_call', {
    event_category: 'Engagement',
    event_label: 'Book a Call Modal Submitted',
    send_to: GA4_ID,
  });

  pushDataLayer('schedule_call', {
    event_label: 'Book a Call Modal Submitted',
  });
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';

const ACCENT = '#2BC48A';

export default function App() {
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset || 0;
          if (y > 60 && y > lastYRef.current) {
            setHeaderHidden(true);
          } else if (y < lastYRef.current || y <= 60) {
            setHeaderHidden(false);
          }
          lastYRef.current = y <= 0 ? 0 : y;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="he-page" style={{ '--he-accent': ACCENT } as React.CSSProperties}>
      {/* NAV */}
      <div className={`he-header-wrap${headerHidden ? ' he-header-hidden' : ''}`}>
        <header className="he-header">
          <div className="he-brand">
            <img
              src="https://appcdn.goqii.com/storeimg/95371_1794902620.png"
              alt="GOQii HealthEngage — Clinic Practice Management"
              className="he-brand-logo"
              referrerPolicy="no-referrer"
            />
          </div>
          <nav className="he-nav">
            <a href="#problem">The problem</a>
            <a href="#gap">The gap</a>
            <a href="#loop">The loop</a>
            <a href="#features">Features</a>
            <a href="#why">Why HealthEngage</a>
          </nav>
        </header>
      </div>

      {/* HERO */}
      <section className="he-hero-section">
        <div className="he-container he-hero">
          <div className="he-hero-copy">
            <span className="he-hero-eyebrow">New in HealthEngage CPM</span>
            <h1 className="he-hero-h1">
              AI navigates.
              <br />
              Your doctor decides.
            </h1>
            <p className="he-hero-p">
              The Clinic Practice Management enhancement gives every clinic an AI case assistant and every patient a 24x7 companion in the GOQii app — with a named, registered doctor signing every prescription.
            </p>
            <div className="he-hero-actions">
              <a href="#features" className="he-btn-primary" style={{ background: ACCENT }}>
                See what it does
              </a>
              <a href="#cta" className="he-btn-secondary">
                Request a demo
              </a>
            </div>
            <div className="he-hero-checks">
              <span className="he-hero-check-item">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E8558" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Doctor-signed Rx
              </span>
              <span className="he-hero-check-item">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E8558" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Consent before any AI
              </span>
              <span className="he-hero-check-item">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E8558" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Data stays in-country
              </span>
            </div>
          </div>

          {/* Hero mock: patient thread */}
          <div className="he-chat-card">
            <div className="he-chat-header">
              <div className="he-chat-identity">
                <div className="he-chat-avatar">
                  <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a7 7 0 0 1 7 7v3a7 7 0 0 1-14 0V9a7 7 0 0 1 7-7z" />
                    <path d="M8 21h8" />
                  </svg>
                </div>
                <div className="he-brand-text">
                  <span className="he-chat-name">GOQii Health Companion</span>
                  <span className="he-chat-status">Online · replies in seconds</span>
                </div>
              </div>
              <span className="he-chat-time">2:14 AM</span>
            </div>
            <div className="he-bubble-patient">My son has had a fever of 102°F since last night.</div>
            <div className="he-bubble-ai">
              How old is he, and is there any cough, vomiting or rash? I can see his last three temperature readings from the GOQii app.
            </div>
            <div className="he-bubble-patient">Five. A little cough, not eating.</div>
            <div className="he-bubble-ai">
              I&apos;ve prepared a summary for a paediatrician. A doctor will review and sign within minutes.
            </div>
            <div className="he-rx-card" style={{ border: `1.5px solid ${ACCENT}` }}>
              <div className="he-rx-top">
                <span className="he-rx-label">Doctor-signed prescription</span>
                <svg role="img" aria-label="Signed" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E8558" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <span className="he-rx-doc">Dr. [DOCTOR NAME] · MBBS, MD · Reg. [NUMBER]</span>
              <span className="he-rx-meta">
                Paracetamol syrup 5 ml, every 6 h · Reviewed &amp; signed · Saved to vault · Reminders set
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="he-problem-section">
        <div className="he-container he-problem-inner">
          <div className="he-section-head">
            <span className="he-eyebrow he-eyebrow-dark">The problem</span>
            <h2 className="he-h2" style={{ color: '#FFFFFF' }}>
              Clinics, patients and records all work alone.
            </h2>
            <p className="he-lead" style={{ color: '#CBD5E1' }}>
              The consult is the only place where a doctor, a patient and a record meet — and it is the most time-starved moment in healthcare.
            </p>
          </div>
          <div className="he-problem-grid">
            <div className="he-problem-card">
              <div className="he-problem-icon">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3>Doctors drown in intake</h3>
              <p>History, old reports, medicine lists and notes eat the consult. The clinical decision gets whatever time is left.</p>
            </div>
            <div className="he-problem-card">
              <div className="he-problem-icon">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                  <path d="M10.3 3.9L2.5 17.5A2 2 0 0 0 4.2 20.5h15.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                </svg>
              </div>
              <h3>Patients wait, then guess</h3>
              <p>At 2 AM the choices are a symptom checker with a disclaimer or a queue in the morning. Nobody is accountable for the answer.</p>
            </div>
            <div className="he-problem-card">
              <div className="he-problem-icon">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="7" height="7" rx="1.5" />
                  <rect x="14" y="4" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
              </div>
              <h3>Records live in silos</h3>
              <p>Vitals in a wearable app, labs on paper, prescriptions on WhatsApp. The next doctor starts from a blank page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GAP */}
      <section id="gap" className="he-gap-section">
        <div className="he-container he-gap-inner">
          <div className="he-section-head">
            <span className="he-eyebrow">The gap</span>
            <h2 className="he-h2">Every tool does one part. None closes the loop.</h2>
            <p className="he-lead">
              Ask, triage, doctor, prescription, record, reminder — today that is four apps and a phone call. HealthEngage CPM runs it as one thread.
            </p>
          </div>

          <div className="he-gap-grid">
            <div className="he-gap-today">
              <span className="he-gap-today-label">What exists today</span>
              <div className="he-gap-today-rows">
                <div className="he-gap-today-row">
                  <span className="he-gap-today-title">Symptom checkers</span>
                  <span className="he-gap-today-desc">Answer, then tell you to see a doctor</span>
                </div>
                <div className="he-gap-today-row">
                  <span className="he-gap-today-title">Teleconsult apps</span>
                  <span className="he-gap-today-desc">A doctor, but no AI prep and a long wait</span>
                </div>
                <div className="he-gap-today-row">
                  <span className="he-gap-today-title">HIS and EMR</span>
                  <span className="he-gap-today-desc">Records, but no patient entry and no AI</span>
                </div>
                <div className="he-gap-today-row he-gap-today-row-last">
                  <span className="he-gap-today-title">Wearable apps</span>
                  <span className="he-gap-today-desc">Vitals, but no clinical decision behind them</span>
                </div>
              </div>
            </div>

            <div className="he-gap-cpm">
              <span className="he-gap-cpm-label">HealthEngage CPM</span>
              <div className="he-gap-cpm-rows">
                <div className="he-gap-cpm-row">
                  <div className="he-gap-check-badge">
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="he-gap-cpm-copy">
                    <span className="he-gap-cpm-title">AI asks the doctor&apos;s questions, 24x7</span>
                    <span className="he-gap-cpm-desc">Chat, voice note or call — English, Hindi, Hinglish, Arabic</span>
                  </div>
                </div>
                <div className="he-gap-cpm-row">
                  <div className="he-gap-check-badge">
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="he-gap-cpm-copy">
                    <span className="he-gap-cpm-title">A registered doctor signs within minutes</span>
                    <span className="he-gap-cpm-desc">Pre-summarised case, one tap to confirm, name and number on the Rx</span>
                  </div>
                </div>
                <div className="he-gap-cpm-row">
                  <div className="he-gap-check-badge">
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="he-gap-cpm-copy">
                    <span className="he-gap-cpm-title">One record for the whole family</span>
                    <span className="he-gap-cpm-desc">Consults, Rx, reports and wearable vitals in one timeline the patient owns</span>
                  </div>
                </div>
                <div className="he-gap-cpm-row he-gap-cpm-row-last">
                  <div className="he-gap-check-badge">
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="he-gap-cpm-copy">
                    <span className="he-gap-cpm-title">Vitals already in the case</span>
                    <span className="he-gap-cpm-desc">DeviceDataHub feeds the last 30 days of readings into every case automatically</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOOP */}
      <section id="loop" className="he-loop-section">
        <div className="he-container he-loop-inner">
          <div className="he-section-head">
            <span className="he-eyebrow">How it works</span>
            <h2 className="he-h2">One thread, five steps, zero hand-offs lost.</h2>
          </div>
          <div className="he-loop-grid">
            <div aria-hidden="true" className="he-loop-connector" />
            <div className="he-loop-card">
              <span className="he-loop-step">1</span>
              <h3>Patient asks</h3>
              <p>Any symptom, any hour, in their own words. Add a photo, a lab report or an old prescription.</p>
            </div>
            <div className="he-loop-card">
              <span className="he-loop-step">2</span>
              <h3>AI prepares</h3>
              <p>Follow-up questions, red flags, extracted reports and wearable vitals become a structured case summary.</p>
            </div>
            <div className="he-loop-card he-loop-card-focus">
              <span className="he-loop-step">3</span>
              <h3>Doctor decides</h3>
              <p>Differentials, guideline-based options and safety checks on screen. The doctor confirms, edits and signs.</p>
            </div>
            <div className="he-loop-card">
              <span className="he-loop-step">4</span>
              <h3>Record keeps</h3>
              <p>Signed Rx, consult note and reports land in the patient&apos;s vault — shareable with any doctor, revocable any time.</p>
            </div>
            <div className="he-loop-card">
              <span className="he-loop-step">5</span>
              <h3>Reach follows up</h3>
              <p>Medicine, refill and test reminders in-app; a voice call from Reach when a reminder is ignored.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="he-features-section">
        <div className="he-container he-features-inner">
          <div className="he-section-head">
            <span className="he-eyebrow">What ships</span>
            <h2 className="he-h2">Built for the doctor. Felt by the patient.</h2>
          </div>
          <div className="he-features-grid">
            <div className="he-feature-group">
              <div className="he-feature-group-head">
                <div className="he-feature-icon-doc">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 12 0V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                    <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                </div>
                <div className="he-feature-head-text">
                  <span className="he-feature-group-title">For doctors</span>
                  <span className="he-feature-group-sub">Clinic Practice Management console</span>
                </div>
              </div>
              <div className="he-feature-tiles">
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">AI case assistant</span>
                  <span className="he-feature-tile-desc">Summary, red flags and next questions in seconds, each with its evidence</span>
                </div>
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">Report and image ingestion</span>
                  <span className="he-feature-tile-desc">Lab PDFs and photos become typed values with reference ranges</span>
                </div>
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">Differentials with ICD-10</span>
                  <span className="he-feature-tile-desc">Ranked, with confidence and the investigations that separate them</span>
                </div>
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">Safety checks before signing</span>
                  <span className="he-feature-tile-desc">Interactions, allergies, dose by age and weight, pregnancy, duplicates</span>
                </div>
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">Auto-drafted SOAP note</span>
                  <span className="he-feature-tile-desc">From the thread or an ambient recording; the doctor edits and signs</span>
                </div>
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">Review queue and signed Rx</span>
                  <span className="he-feature-tile-desc">Urgency-ordered queue; digital signature, registry number and pharmacy QR</span>
                </div>
              </div>
            </div>

            <div className="he-feature-group he-feature-group-patient">
              <div className="he-feature-group-head">
                <div className="he-feature-icon-pat">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="2" width="12" height="20" rx="2.5" />
                    <path d="M11 18h2" />
                  </svg>
                </div>
                <div className="he-feature-head-text">
                  <span className="he-feature-group-title">For patients</span>
                  <span className="he-feature-group-sub he-feature-group-sub-pat">Inside the GOQii app</span>
                </div>
              </div>
              <div className="he-feature-tiles">
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">24x7 Health Companion</span>
                  <span className="he-feature-tile-desc">Chat, voice note or call; replies in the language you use</span>
                </div>
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">Doctor hand-off in one tap</span>
                  <span className="he-feature-tile-desc">See the queue, get the signed Rx with the doctor&apos;s name on it</span>
                </div>
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">Health Vault</span>
                  <span className="he-feature-tile-desc">Consults, Rx, reports and vitals in one timeline; export or share, revoke any time</span>
                </div>
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">Report reader</span>
                  <span className="he-feature-tile-desc">Photograph a lab report and get it explained, trended against last time</span>
                </div>
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">Family profiles</span>
                  <span className="he-feature-tile-desc">Children and parents under one account, each with their own vault and consent</span>
                </div>
                <div className="he-feature-tile">
                  <span className="he-feature-tile-title">Clinical reminders</span>
                  <span className="he-feature-tile-desc">Doses from the signed Rx, refills, tests and vaccines; a Reach call if ignored</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="he-why-section">
        <div className="he-container he-why-inner">
          <div className="he-section-head" style={{ maxWidth: '780px' }}>
            <span className="he-eyebrow">Why HealthEngage</span>
            <h2 className="he-h2">The clinical loop sits on a platform that already runs.</h2>
            <p className="he-lead">
              A standalone clinical-AI tool has to build the data, voice and residency layers from scratch. HealthEngage already has them in production.
            </p>
          </div>
          <div className="he-why-grid">
            <div className="he-why-card">
              <span className="he-why-label">DeviceDataHub</span>
              <span className="he-why-title">Vitals and wearables already in every case</span>
              <span className="he-why-desc">BP, glucose, SpO2, sleep and fall events from GOQii and third-party devices.</span>
            </div>
            <div className="he-why-card">
              <span className="he-why-label">Reach</span>
              <span className="he-why-title">Voice in and out, on phone and WhatsApp</span>
              <span className="he-why-desc">Doctor callbacks, refill calls and escalated reminders run on the agent you already have.</span>
            </div>
            <div className="he-why-card">
              <span className="he-why-label">Residency</span>
              <span className="he-why-title">Data stays in the patient&apos;s country</span>
              <span className="he-why-desc">Separate regional instances for India, Saudi Arabia, UAE, UK and US — inference included.</span>
            </div>
            <div className="he-why-card">
              <span className="he-why-label">HE-APIC</span>
              <span className="he-why-title">API-first for insurers and ISVs</span>
              <span className="he-why-desc">Every CPM service is a tenant-scoped API with webhooks, so partners embed the loop in their own app.</span>
            </div>
          </div>

          <div className="he-trust-strip">
            <span className="he-trust-item">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              A registered doctor signs every prescription
            </span>
            <span className="he-trust-item">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Consent before any AI feature runs
            </span>
            <span className="he-trust-item">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Encrypted, in-region hosting
            </span>
            <span className="he-trust-item">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M8 13h8M8 17h8" />
              </svg>
              Full audit trail of AI suggestion and doctor edits
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="he-cta-section">
        <div className="he-container he-cta-inner">
          <div className="he-cta-panel" style={{ background: ACCENT }}>
            <div className="he-cta-copy">
              <h2 className="he-cta-h2">Put a doctor behind every answer.</h2>
              <p className="he-cta-p">
                See the CPM enhancement running on your clinic&apos;s data, or embed it in your own app through HealthEngage APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="he-footer">
        <div className="he-container he-footer-inner">
          <div className="he-footer-top">
            <div className="he-footer-brand">
              <img
                src="https://appcdn.goqii.com/storeimg/95371_1794902620.png"
                alt="GOQii HealthEngage — Clinic Practice Management"
                className="he-footer-logo"
                referrerPolicy="no-referrer"
              />
              <p className="he-footer-tagline">Clinic Practice Management — AI navigates. Your doctor decides.</p>
            </div>

            <div className="he-footer-col">
              <span className="he-footer-heading">Platform</span>
              <div className="he-footer-links">
                <a href="#problem">The problem</a>
                <a href="#gap">The gap</a>
                <a href="#loop">The loop</a>
                <a href="#features">Features</a>
                <a href="#why">Why HealthEngage</a>
              </div>
            </div>

            <div className="he-footer-col">
              <span className="he-footer-heading">Capabilities</span>
              <div className="he-footer-links">
                <a href="#features">For doctors</a>
                <a href="#features">For patients</a>
                <a href="#why">DeviceDataHub</a>
                <a href="#why">Reach</a>
                <a href="#why">HE-APIC</a>
              </div>
            </div>

            <div className="he-footer-col">
              <span className="he-footer-heading">Trust &amp; Residency</span>
              <div className="he-footer-links">
                <span className="he-footer-text-item">Doctor-signed Rx</span>
                <span className="he-footer-text-item">Consent before any AI</span>
                <span className="he-footer-text-item">Encrypted, in-region hosting</span>
                <span className="he-footer-text-item">India · Saudi Arabia · UAE · UK · US</span>
              </div>
            </div>
          </div>

          <div className="he-footer-bottom">
            <p className="he-disclaimer">
              HealthEngage CPM assists clinicians; it does not diagnose or prescribe. Every prescription is reviewed and signed by a physician registered in the patient&apos;s jurisdiction. Feature availability varies by region and tenant configuration.
            </p>
            <p className="he-footer-copy">© 2026 GOQii HealthEngage. Clinic Practice Management.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

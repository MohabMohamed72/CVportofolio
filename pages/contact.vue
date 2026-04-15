<template>
  <div class="page-contact">
    <section class="section">
      <div class="container">
        <span class="section-label">// Get In Touch</span>
        <h1 class="section-title">Let's <span class="gradient-text">Work Together</span></h1>
        <p class="section-subtitle">Have a project in mind? Looking for a frontend developer? Let's connect!</p>

        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <div class="info-card" v-for="item in contactItems" :key="item.label">
              <div class="info-icon" v-html="item.icon" />
              <div>
                <span class="info-label">{{ item.label }}</span>
                <a :href="item.href" class="info-value" target="_blank">{{ item.value }}</a>
              </div>
            </div>

            <div class="social-links">
              <a href="https://github.com/MohabMohamed72" target="_blank" class="social-link" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/mohab-mohamed-a5121024b" target="_blank" class="social-link" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:mohabmohamedd772@gmail.com" class="social-link" aria-label="Email">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>

            <div class="availability-card">
              <span class="avail-dot" />
              <div>
                <strong>Currently Available</strong>
                <p>Open to full-time positions, freelance projects, and collaborations.</p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label>Your Name</label>
                <input type="text" v-model="form.name" placeholder="John Doe" required />
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" v-model="form.email" placeholder="john@example.com" required />
              </div>
              <div class="form-group">
                <label>Subject</label>
                <input type="text" v-model="form.subject" placeholder="Project Inquiry" />
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea v-model="form.message" rows="5" placeholder="Tell me about your project..." required />
              </div>
              <button type="submit" class="btn-primary submit-btn" :class="{ sent: submitted }">
                <template v-if="!submitted">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </template>
                <template v-else>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Message Sent!
                </template>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Contact' })

const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  const mailtoLink = `mailto:mohabmohamedd772@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`
  window.open(mailtoLink, '_blank')
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 3000)
}

const contactItems = [
  {
    label: 'Email',
    value: 'mohabmohamedd772@gmail.com',
    href: 'mailto:mohabmohamedd772@gmail.com',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'
  },
  {
    label: 'Phone',
    value: '+20 100 759 9123',
    href: 'tel:+201007599123',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'
  },
  {
    label: 'Location',
    value: 'Mansoura, Egypt',
    href: '#',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  },
  // {
  //   label: 'Portfolio',
  //   value: 'portfolio772.vercel.app',
  //   href: 'https://portfolio772.vercel.app/',
  //   icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
  // },
]
</script>

<style scoped>
.page-contact { padding-top: 100px; }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  margin-top: 56px;
}

/* Info Cards */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.info-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: var(--transition);
}
.info-card:hover {
  border-color: var(--border-hover);
}
.info-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: rgba(66, 211, 146, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
}
.info-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  display: block;
  margin-bottom: 2px;
}
.info-value {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text);
  transition: var(--transition);
}
.info-value:hover { color: var(--primary); }

.social-links {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}
.social-link {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: var(--transition);
}
.social-link:hover {
  color: var(--primary);
  border-color: var(--border-hover);
  transform: translateY(-2px);
}

.availability-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  background: rgba(66, 211, 146, 0.05);
  border: 1px solid rgba(66, 211, 146, 0.15);
  border-radius: var(--radius);
  margin-top: 8px;
}
.avail-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary);
  animation: pulse 2s infinite;
  flex-shrink: 0;
  margin-top: 4px;
}
.availability-card strong {
  font-size: 0.95rem;
  display: block;
  margin-bottom: 4px;
}
.availability-card p {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Form */
.contact-form-wrapper {
  padding: 36px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-group label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 18px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text);
  font-family: var(--font);
  font-size: 0.92rem;
  transition: var(--transition);
  outline: none;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(66, 211, 146, 0.1);
}
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}
.form-group textarea { resize: vertical; min-height: 120px; }
.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 16px;
  font-size: 1rem;
}
.submit-btn.sent {
  background: #22c55e;
}

@media (max-width: 768px) {
  .page-contact { padding-top: 80px; }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 28px;
    margin-top: 36px;
  }

  .contact-form-wrapper {
    padding: 20px 16px;
  }

  .info-card {
    padding: 14px 16px;
    gap: 12px;
  }

  .info-icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }

  .info-value {
    font-size: 0.82rem;
    word-break: break-all;
  }

  .social-links {
    flex-wrap: wrap;
    gap: 10px;
  }

  .availability-card {
    padding: 14px;
    gap: 10px;
  }

  .form-group input,
  .form-group textarea {
    padding: 12px 14px;
    font-size: 0.88rem;
  }

  .submit-btn {
    padding: 14px;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .contact-grid { gap: 20px; }

  .contact-form-wrapper { padding: 16px 12px; }

  .info-card { padding: 12px; }

  .info-value { font-size: 0.78rem; }
}
</style>

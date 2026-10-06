<script setup lang="ts">
useHead({ title: "Contact" });
const { personalInfo } = usePortfolioData();
const channels = [
  {
    label: "Email",
    text: "mohabmohamedd772@gmail.com",
    href: "mailto:mohabmohamedd772@gmail.com",
  },
  {
    label: "WhatsApp",
    text: "+20 100 759 9123",
    href: "https://wa.me/201007599123",
  },
  {
    label: "LinkedIn",
    text: "View professional profile",
    href: personalInfo.linkedin,
  },
  { label: "GitHub", text: "View repositories", href: personalInfo.github },
];
</script>
<template>
  <main>
    <PageHeader
      label="Contact"
      title="Contact Me"
      description="Have a project, opportunity, or question? Feel free to get in touch."
    />
    <div class="page-content contact-layout">
      <aside>
        <p class="availability">
          <i aria-hidden="true"></i> AVAILABLE FOR OPPORTUNITIES
        </p>
        <div class="contact-channel-list">
          <a
            v-for="channel in channels"
            :key="channel.label"
            :href="channel.href"
            :target="channel.label !== 'Email' ? '_blank' : undefined"
            :rel="channel.label !== 'Email' ? 'noopener noreferrer' : undefined"
            class="contact-channel"
            ><span class="meta">{{ channel.label }}</span
            ><strong>{{ channel.text }}</strong
            ><span class="channel-arrow" aria-hidden="true">↗</span></a
          >
          <div class="contact-channel">
            <span class="meta">Location</span><strong>Mansoura, Egypt</strong>
          </div>
        </div>
        <p class="contact-aside-note">
          A complicated interface?<br />That's usually the interesting part.
        </p>
        <p class="contact-aside-note">
          Use email or WhatsApp directly, or send a message here.
        </p>
      </aside>
      <SystemWindow
        file="CONTACT.EXE"
        label="COMMUNICATION TERMINAL"
        class="contact-window"
        ><h2>Send a Message</h2>
        <ContactForm
      /></SystemWindow>
    </div>
  </main>
</template>

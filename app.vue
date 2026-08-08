<template>
  <div>
    <main>
      <HeroBlock id="hero" />
      <ProjectsBlock id="projects" />
      <ContactBlock id="contact" />
    </main>
    <FooterBlock id="footer" />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-192px.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
    },
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
    {
      name: 'description',
      content:
        'Sam Carty is an experienced software engineer specializing in full-stack web and mobile development. View projects, experience and contact information.',
    },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  title: 'Sam Carty | Full-Stack & Mobile Software Engineer',
})
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>

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

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>

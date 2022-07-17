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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

html {
  scroll-behavior: smooth;
}
</style>

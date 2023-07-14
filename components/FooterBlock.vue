<template>
  <footer class="section">
    <div class="container">
      <p class="copyright heading-subtitle">© Sam Carty {{ currentYear }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBlock',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
.copyright {
  font-weight: bold;
}
</style>

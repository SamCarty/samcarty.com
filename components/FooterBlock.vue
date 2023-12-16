<template>
  <footer class="section">
    <div class="container">
      <p class="copyright heading-caption">© Sam Carty {{ currentYear }}</p>
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
  color: $c-text-light;
}

footer {
  background: $c-primary;
}
</style>

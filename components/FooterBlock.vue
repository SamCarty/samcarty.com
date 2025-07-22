<template>
  <footer class="section">
    <div class="container">
      <div class="attributions">
        <p class="footer-heading heading-caption">Attributions</p>
        <ul>
          <li>
            theme park icon used in the Park Times logo is by Slamet Widodo from
            <a
              href="https://thenounproject.com/browse/icons/term/theme-park/"
              target="_blank"
              title="theme park Icons"
              >Noun Project</a
            >
            (CC BY 3.0)
          </li>
        </ul>
      </div>

      <p class="footer-heading heading-caption">
        © Sam Carty {{ currentYear }}
      </p>
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
.footer-heading {
  color: $c-text-light;
  margin-bottom: 2rem;
}

.attributions {
  max-width: 400px;
  margin: 0 auto 5rem auto;

  p {
    margin: 0;
  }

  li {
    text-align: start;
    list-style-type: disc;
    margin: $m-small 0;
  }
}

footer {
  background: $c-primary;
}
</style>

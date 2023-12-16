<template>
  <section class="hero-block">
    <div class="hero-block__header">
      <h1 class="heading-primary">
        <span
          class="heading-subtitle hero-block__header__heading hero-block__header__heading--greeting"
          >HELLO WORLD, I'M</span
        >Sam Carty
      </h1>
      <p class="hero-block__header__bio">
        I'm a <strong>software engineer</strong> with extensive experience
        developing <strong>full-stack web applications</strong>, currently
        working at
        <a href="https://coop.co.uk" target="_blank">The Co-operative Group</a>.
      </p>
      <p class="hero-block__header__bio">
        My previous experience includes working with startup
        <a href="https://findothers.com" target="_blank">Find Others</a>
        to help build a central hub for victims of injustices to unite and take action.
      </p>
      <p class="hero-block__header__bio">
        I'm also interested in <strong>mobile development</strong>, with a
        successful Android app
        <a
          href="https://play.google.com/store/apps/details?id=com.zarg.ontime"
          target="_blank"
          >live in the Play Store</a
        >.
      </p>
      <p class="hero-block__header__bio">
        Why not check out what else
        <a href="#projects">I've been working on</a>?
      </p>
    </div>

    <ScrollArrow link="#projects" class="hero-block__scroll" />
  </section>
</template>

<script>
export default {
  name: 'HeroBlock',
}
</script>

<style lang="scss" scoped>
.hero-block {
  background-color: $c-secondary;
  background-image: url('https://res.cloudinary.com/samcarty/image/upload/v1658098487/portfolio/cartographer_pplfpn.png');
  height: 100vh;
  min-height: 800px;
  color: $c-text-light;

  * {
    color: $c-text-light;
  }

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 2rem;

    &__heading {
      margin: -4rem 0 1rem 0;

      &--greeting {
        font-family: monospace;
        color: $c-accent;
      }
    }

    &__bio {
      max-width: 42rem;
      font-size: 1rem;
      margin-top: 2rem;
      line-height: 1.6;

      @media (min-width: $bp-tablet) {
        font-size: 1.5rem;
        margin-top: 4rem;
      }
    }
  }

  &__scroll {
    margin: 0 auto;
  }
}
</style>

<template>
  <section class="hero-block">
    <div class="hero-block__header">
      <h1 class="heading-primary">
        <span
          class="heading-subtitle hero-block__header__heading hero-block__header__heading--greeting"
          >Hi, I'm</span
        >Sam Carty
      </h1>

      <p class="hero-block__header__bio">
        I'm a software engineer who builds things people actually use - from
        mobile apps to full-stack web apps.
      </p>

      <p class="hero-block__header__bio">
        I built
        <a href="https://getontime.uk" target="_blank">Ontime</a>, helping
        10,000+ commuters catch their train every day, and
        <a href="https://parktimes.co" target="_blank">Park Times</a>, helping
        theme park guests plan ahead.
      </p>

      <p class="hero-block__header__bio">
        Currently working at
        <a href="https://coop.co.uk" target="_blank">Co-op</a>, helping to build
        and maintain a selection of customer-facing services.
      </p>
    </div>

    <ScrollArrow link="#projects" class="hero-block__scroll" />
  </section>
</template>

<script setup>
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

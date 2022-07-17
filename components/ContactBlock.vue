<template>
  <section class="section section--primary contact-block">
    <div class="container">
      <h3 class="heading-subtitle">
        Feel free to pop me an email at
        <a href="mailto:me@samcarty.com" target="_blank">me@samcarty.com</a>
      </h3>

      <ul class="contact-block__socials">
        <li>
          <SocialLink
            label="LinkedIn"
            url="https://www.linkedin.com/in/sam-carty-234923111/"
            icon="https://res.cloudinary.com/samcarty/image/upload/v1658098487/portfolio/linkedin-icon_xyunct.svg"
          />
        </li>
        <li>
          <SocialLink
            label="GitHub"
            url="https://github.com/SamCarty"
            icon="https://res.cloudinary.com/samcarty/image/upload/v1658098487/portfolio/github-icon_h9ejxs.svg"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactBlock',
}
</script>

<style lang="scss" scoped>
.contact-block {
  &__socials {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
  }
}
</style>

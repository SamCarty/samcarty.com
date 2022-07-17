<template>
  <section class="section skills-block">
    <div class="container">
      <h2 class="heading-secondary section-header">
        Skills<span class="heading-subtitle">I've obtained</span>
      </h2>

      <div class="skills-block__list">
        <SkillTile
          v-for="(skill, index) in skills"
          :key="index"
          :skill="skill"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsBlock',
  computed: {
    skills() {
      return [
        {
          name: 'Backend',
          description:
            'Experienced with backend API development using <strong>Django</strong>, <strong>Flask</strong> and <strong>Express</strong>, and both <strong>SQL</strong> and <strong>noSQL</strong> databases.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1658068159/portfolio/portfolio-find-others_uae6m5.png',
        },
        {
          name: 'Frontend',
          description:
            'Experienced with frontend single-page application development using <strong>Vue</strong> & <strong>Nuxt</strong>.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1658073783/portfolio/ontime_nrhkk5.png',
        },
        {
          name: 'DevOps',
          description:
            'Experienced with provisioning and maintaining <strong>Google Cloud Platform</strong> projects for performance and scalability.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1658076962/portfolio/gameplan_zkswhp.png',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.skills-block {
  &__list {
    display: grid;
    grid-template: auto / 1fr;
    gap: 2rem;
    margin: 0 auto;
    max-width: 900px;

    @media (min-width: $bp-tablet) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>

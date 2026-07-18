<template>
  <section class="section section--primary projects-block">
    <div class="container">
      <h2 class="heading-secondary section-header">
        <span class="heading-subtitle">Featured</span>
        Projects
      </h2>

      <div class="projects-block__list">
        <ProjectTile
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
          class="projects-block__tile"
          :class="{ 'projects-block__tile--wide': project.wide }"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsBlock',
  computed: {
    projects() {
      return [
        {
          name: 'Co-op',
          description:
            "I'm currently a Software Engineer at Co-op, helping to build and maintain a selection of customer-facing products.",
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1658068159/portfolio/coop-logo.png',
          url: 'https://coop.co.uk',
          wide: true,
        },
        {
          name: 'Ontime',
          description: 'Real-time train tracking for iOS and Android.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1778178093/samcarty.com_card_background-2_x27bdc.png',
          url: 'https://getontime.uk',
        },
        {
          name: 'Park Times',
          description: 'Live theme park wait times web app - built in NextJS.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1753220444/park-times-logo_jkyimk.png',
          url: 'https://parks.samcarty.com',
        },
        {
          name: 'Find Others',
          description:
            'Co-developed both backend and frontend for campaigning and legal tools startup Find Others.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1702683692/portfolio/portfolio-find-others_uae6m5.png',
        },
        {
          name: 'Codenames',
          description:
            'A simple name generator for creating a random unique codename for your next project.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1658077272/portfolio/codename-machine_u3yyk8.png',
          url: 'https://samcarty.com/codenamemachine',
        },
        {
          name: 'GamePlan',
          description:
            'Video games recommender system using Django to suggest relevant titles to gamers.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1658076962/portfolio/gameplan_zkswhp.png',
          url: 'https://github.com/SamCarty/GamePlanWebApp',
        },
        {
          name: 'The COVID Memorial',
          description:
            'Co-developed a memorial for all those lost to COVID-19 and put a face and story to every number.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1658076799/portfolio/chrome_GwGLQ8o5TA_uakrjv.png',
          url: 'https://thecovid.memorial',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.projects-block {
  &__list {
    display: grid;
    grid-template: auto / 1fr;
    gap: 1rem;
    margin: 0 auto;
    padding-inline: 1rem;
    max-width: 850px;

    @media (min-width: $bp-tablet) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      padding-inline: 0;
    }
  }

  &__tile {
    &--wide {
      @media (min-width: $bp-tablet) {
        grid-column: span 2;
      }
    }
  }
}
</style>

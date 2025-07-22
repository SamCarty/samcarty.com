<template>
  <section class="section section--primary projects-block">
    <div class="container">
      <h2 class="heading-secondary section-header">
        Projects<span class="heading-subtitle">I've worked on</span>
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
          name: 'The Co-operative Group',
          description:
            'Software Engineer at Co-op, helping to develop and maintain a selection of customer-facing products.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1658068159/portfolio/coop-logo.png',
          url: 'https://coop.co.uk',
          wide: true,
        },
        {
          name: 'Find Others',
          description:
            'Co-developed both backend and frontend for campaigning and legal tools startup Find Others.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1702683692/portfolio/portfolio-find-others_uae6m5.png',
          url: 'https://findothers.com',
        },
        {
          name: 'Ontime',
          description:
            'Java & Kotlin-based Android app for tracking live train times. Now with over 10,000 active users!',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1658073783/portfolio/ontime_nrhkk5.png',
          url: 'https://play.google.com/store/apps/details?id=com.zarg.ontime',
        },
        {
          name: 'Park Times',
          description: 'Live theme park wait times web app - built in NextJS.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1753220444/park-times-logo_jkyimk.png',
          url: 'https://parks.samcarty.com',
        },
        {
          name: 'The Covid Memorial',
          description:
            'Co-developed a memorial for all those lost to COVID-19 and put a face and story to every number.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1658076799/portfolio/chrome_GwGLQ8o5TA_uakrjv.png',
          url: 'https://thecovid.memorial',
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
          name: 'Codename Machine',
          description:
            'A simple name generator for creating a random unique codename for your next project.',
          imageUrl:
            'https://res.cloudinary.com/samcarty/image/upload/c_scale,h_360/v1658077272/portfolio/codename-machine_u3yyk8.png',
          url: 'https://samcarty.com/codenamemachine',
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

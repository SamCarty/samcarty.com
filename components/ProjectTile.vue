<template>
  <a
    :href="project.url"
    target="_blank"
    class="project-tile"
    :style="`background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${project.imageUrl});`"
  >
    <div class="project-tile__inner">
      <h3 class="heading-subtitle project-tile__title">{{ project.name }}</h3>
      <p class="project-tile__description">{{ project.description }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProjectTile',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.project-tile {
  position: relative;
  width: 100%;
  padding: 2rem 2rem 56.25% 2rem;
  background-size: cover;
  transition: 0.2s ease-in-out all;

  &:hover {
    transform: scale(1.1);
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    right: 0;
    height: 100%;
    max-width: 80%;

    * {
      color: $c-text-light;
      text-align: left;
    }
  }

  &__title {
    margin-bottom: 1rem;
  }

  &__description {
    font-weight: normal;
  }
}
</style>

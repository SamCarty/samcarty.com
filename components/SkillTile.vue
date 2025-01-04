<template>
  <div class="skill-tile">
    <h3 class="skill-tile__name">{{ skill.name }}</h3>
    <p class="skill-tile__description" v-html="skill.description" />
  </div>
</template>

<script>
export default {
  name: 'SkillTile',
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.skill-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 14rem;
  margin: 0 auto;

  &__image {
    border-radius: 50%;
    object-fit: cover;
    width: 8rem;
    height: 8rem;
    margin-bottom: 1rem;
  }

  &__name {
    font-size: 1.75rem;
  }
}
</style>

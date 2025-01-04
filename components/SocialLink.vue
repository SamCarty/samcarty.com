<template>
  <a class="social-link" :aria-label="label" :href="url" target="_blank">
    <img :src="icon" :alt="`${label} logo`" />
  </a>
</template>

<script>
export default {
  name: 'SocialLink',
  props: {
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.social-link {
  display: block;
  border-radius: 50%;
  background-color: $c-secondary;
  padding: 1.25rem;
  width: 5rem;
  height: 5rem;
}
</style>

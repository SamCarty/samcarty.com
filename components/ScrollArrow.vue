<template>
  <a :href="link" aria-label="Scroll down" class="scroll-arrow">
    <svg class="arrows">
      <path class="arrow-1" d="M0 0 L30 32 L60 0"></path>
      <path class="arrow-2" d="M0 20 L30 52 L60 20"></path>
      <path class="arrow-3" d="M0 40 L30 72 L60 40"></path>
    </svg>
  </a>
</template>

<script>
export default {
  name: 'ScrollArrow',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
$width: 60px;
$height: 80px;

.scroll-arrow {
  display: block;
  position: relative;

  &:hover {
    outline: none !important;
  }

  .arrows {
    position: absolute;
    left: 50%;
    margin-left: calc($width / -2);
    bottom: 20px;
    width: $width;
    height: $height;
  }

  .arrows path {
    stroke: $c-accent;
    fill: transparent;
    stroke-width: 2px;
    animation: arrow-movement 2s infinite;

    &.arrow-1 {
      animation-delay: -1s;
    }

    &.arrow-2 {
      animation-delay: -0.5s;
    }

    &.arrow-3 {
      animation-delay: 0s;
    }
  }

  @keyframes arrow-movement {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>

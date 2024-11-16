<script setup>
</script>

<template>
  <header class="header">
    <div class="header__logo">
      SoundFront 🎵
    </div>
    <div class="header__navigation">
      Uploads from <a href="https://instagram.com/frontroh.music/" rel="noreferrer" target="_blank" class="header__link">Frontroh</a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--color-primary);
  color: var(--player-text-color);
  margin-bottom: 2rem;
  border-radius: var(--border-radius);
  &__logo,
  &__link {
    text-transform: uppercase;
  }
  &__navigation {
    font-size: 0.9rem;
  }
  a {
    color: var(--player-text-color);
  }

}
</style>
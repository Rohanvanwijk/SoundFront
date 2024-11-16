<script setup>
import { gql } from '@apollo/client/core';
import { useHygraph } from "~/src/composables/hygraph.js";
import TrackItem from "~/src/components/TrackItem.vue";
import HeaderNavigation from "~/src/components/HeaderNavigation.vue";
import FooterNavigation from "~/src/components/FooterNavigation.vue";

const foo = useHygraph();
  const { data, error } = await useAsyncData('users', () => {

    return foo.query({
      query: gql`
      query MyQuery {
      tracks(orderBy: releaseDate_DESC) {
        id
        title
       trackUrl
       thumbnailUrl
       releaseDate
      body {
        text
      }
      }
  }`,
    });

  })

</script>

<template>
  <div class="wrap">

    <header-navigation />
    <h1>Live set uploads</h1>
    <ClientOnly fallback-tag="span" fallback="Loading live sets...">
      <ul class="tracks__list">
        <li v-for="track in data.data.tracks" :key="track.id" class="tracks__list-item">
          <track-item :title="`${track.title} (${track.releaseDate})`" :details="track.body.text" :file-url="track.trackUrl" :image-url="track.thumbnailUrl" />
        </li>
      </ul>
    </ClientOnly>

    <footer-navigation />
  </div>
</template>

<style lang="scss">
:root {
  --color-muted: #e5e5f7;
  --color-primary: #00313E;
  --border-radius: .2rem;
  --player-background: #00123e;
  --player-font-size-small: .7rem;
  --player-font-weight: 400;
  --player-font-weight-bold: 600;
  --player-text-color: #ffffff;
  --player-icon-color: var(--player-text-color);
  --player-link-color: var(--player-text-color);
  --player-progress-color: #41b883;
  --player-buffered-color: #41b883;
  --player-seeker-color: #ffffff;
  --player-input-range-color: var(--player-text-color);
}
html {
  font-family: sans-serif, Arial;
}
.wrap {
  max-width: 40rem;
  padding-inline: 2rem;
  margin: 0 auto;
}

.tracks {
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>

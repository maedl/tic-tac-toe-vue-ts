<script setup lang="ts">
import { Player } from '../models/Player';

interface IPlayerViewProps {
  player: Player
}

const props = defineProps<IPlayerViewProps>();

</script>

<template>

  <div class="grid grid-cols-2 my-2">
    <h2>name</h2>
    <div>{{ props.player.name }}</div>
    <div class="flex justify-center"> {{ props.player.score }}</div>
  </div>

</template>

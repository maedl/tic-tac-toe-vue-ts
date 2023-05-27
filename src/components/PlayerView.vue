<template>

    <div class="flex justify-around my-2">
      <div>{{ props.player.name }}</div>
      <div> {{ props.player.playingPiece }}</div>
    </div>

</template>

<script setup lang="ts">
import { Player } from '../models/Player';


interface IPlayerViewProps {
  player: Player
}

const props = defineProps<IPlayerViewProps>();

</script>

<style lang="scss" scoped>

</style>
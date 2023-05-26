<template>
<PlayerInput @add-player="addPlayer"></PlayerInput>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import PlayerInput from './PlayerInput.vue';
import { Player } from '../models/Player';

const players = ref<Player[]>([])

const addPlayer = (playerName: string) => {
  players.value = [
    ...players.value,
    new Player(playerName, 'X')
  ];

  console.log(players);
}

</script>

<style lang="scss" scoped>

</style>
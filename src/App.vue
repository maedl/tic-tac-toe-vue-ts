<script setup lang="ts">
import { ref } from 'vue';
import SelectPlayers from './components/SelectPlayers.vue';
import GameBoard from './components/GameBoard.vue';

const maxPlayers = ref(false);

const gameFull = () => {
  maxPlayers.value = true;
}

</script>

<template>

<SelectPlayers @max-players="gameFull" v-if="!maxPlayers"></SelectPlayers>
<GameBoard v-else></GameBoard>
 
</template>

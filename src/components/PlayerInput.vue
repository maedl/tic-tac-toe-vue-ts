<template>
  <form @submit.prevent="$emit('add-player', playerInput)" class="flex justify-center items-center">
    <label for="player-name">Spelare:</label>
    <input type="text" name="player-name" v-model="playerInput" class="text-black rounded-md mx-4 h-10 px-2">
    <button class="btn" :btnText="btnText">{{ btnText }}</button>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Player } from '../models/Player';

defineEmits<{ 
  (e: 'add-player', playerName: string) :void,
}> ();

const playerInput = ref('');
const btnText = ref('');

onMounted(() => {
  btnText.value = 'Spara';
})

const handleClick = () => {
  const player = new Player('', '')

  btnText.value = 'Spela';
}

</script>

<style lang="scss" scoped>

</style>
<script setup lang="ts">
import { ref } from 'vue';
import { GamePiece } from '../models/Player';

const emit = defineEmits<{ 
  (e: 'add-player', playerName: string) :void,
}> ();

const playerInput = ref('');
const btnText = ref('Save');
const playerPiece = ref(GamePiece.X)

const handleSubmit = () => {
  emit('add-player', playerInput.value);
  playerInput.value = '';
  btnText.value = 'Start game';
  playerPiece.value = GamePiece.O
}

</script>

<template>
  <form 
    @submit.prevent="handleSubmit" 
    class="flex flex-col justify-center items-center w-full"
  >
    <label 
    for="player-name" 
    class="text-lg"
    >
      Player
      <span :playerPiece="playerPiece">
        {{ ' ' + playerPiece + ':' }}
      </span>
    </label>
    <div class="flex flex-col">
      <input 
        type="text" 
        name="player-name" 
        v-model="playerInput" 
        class="text-black rounded-md mx-4 h-10 px-2 my-4"
      >
      <button class="btn" :btnText="btnText">{{ btnText }}</button>
    </div>
  </form>
</template>

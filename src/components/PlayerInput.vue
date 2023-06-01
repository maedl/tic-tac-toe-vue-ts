<script setup lang="ts">
import { ref } from 'vue';
import { GamePiece } from '../models/Player';

const emit = defineEmits<{ 
  (e: 'add-player', playerName: string) :void,
}> ();

const playerInput = ref('');
const btnText = ref('Save');
const playerPiece = ref(GamePiece.X)
const placeholder = ref('Fill in name...')

const handleSubmit = () => {
  if (playerInput.value.length > 0) {
    emit('add-player', playerInput.value);
  playerInput.value = '';
  placeholder.value = 'Player added!'
  btnText.value = 'Start game';
  playerPiece.value = GamePiece.O
  }
  else {
    placeholder.value = 'Please fill in a name';
  }
}

</script>

<template>
  <form 
    @submit.prevent="handleSubmit" 
    class="flex flex-col justify-center items-center w-full"
  >
    <div>
      <label
      for="player-name"
      class="text-lg font-bold"
      >
        Player
        <span :playerPiece="playerPiece">
          {{ ' ' + playerPiece + ':' }}
        </span>
      </label>
      
      <input
        type="text"
        name="player-name"
        v-model="playerInput"
        :placeholder="placeholder"
        class="text-black rounded-md mx-4 h-10 px-2 my-4 shadow-md shadow-emerald-950"
      >
    </div>
      
    <button class="btn" :btnText="btnText">{{ btnText }}</button>
    
  </form>
</template>

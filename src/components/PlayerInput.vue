<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center w-full">
    <label for="player-name" class="text-lg">Spelare<span :playerPiece="playerPiece">{{ ' ' + playerPiece + ':' }}</span></label>
    <div class="flex flex-col">
      <input type="text" name="player-name" v-model="playerInput" class="text-black rounded-md mx-4 h-10 px-2 my-4">
      <button class="btn" :btnText="btnText">{{ btnText }}</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { GamePiece } from '../models/Player';

interface IPlayerInputProps {
  playerCount: number
}

const emit = defineEmits<{ 
  (e: 'add-player', playerName: string) :void,
}> ();

const props = defineProps<IPlayerInputProps>();

const playerInput = ref('');
const btnText = ref('Spara');
const playerPiece = ref(GamePiece.X)

watch(() => props.playerCount, (newPlayerCount) => {
  if(newPlayerCount == 1) {
    btnText.value = 'Starta spel';
    playerPiece.value = GamePiece.O;
  }
});

const handleSubmit = () => {
  emit('add-player', playerInput.value);
  playerInput.value = '';

  if(props.playerCount == 1) {
    btnText.value = 'Starta spel';
  }

}

</script>

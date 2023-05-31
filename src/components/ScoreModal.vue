<script setup lang="ts">
import { Game } from '../models/Game';
import PlayerView from './PlayerView.vue';


defineEmits<{ 
  (e: 'close-modal') :void 
}> ();

defineProps({
  modalActive: Boolean,
  currentGame: Game
})

</script>

<template>
<div
    v-show="modalActive"
    class="absolute w-full bg-emerald-700 h-screen top-0 left-0 flex justify-center px-8"
    >
    <div 
      v-if="modalActive"
      class="p-4 self-start mt-32 max-w-screen-md"
      >
        <PlayerView v-for="player in currentGame?.players" :player="player"></PlayerView>
      <button
        @click="$emit('close-modal')"
        class="btn my-2"
      >
        Close
      </button>
    </div>
  </div>
</template>

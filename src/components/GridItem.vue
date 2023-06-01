<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { BoardItem } from '../models/BoardItem';

interface IGridItemProps {
  boardItem: BoardItem;
}

const emit = defineEmits<{ 
  (e: 'place-piece', id: string) :void,
}> ();

const props = defineProps<IGridItemProps>();

let placedPiece = ref(props.boardItem.placedPiece);

watchEffect(() => {
  placedPiece.value = props.boardItem.placedPiece;
});

const handleClick = () => {
  emit('place-piece', props.boardItem.id)
}

</script>

<template>
  <div class="h-24 w-full border-2 bg-white text-black flex justify-center items-center
  md:h-36 hover:cursor-pointer"
  @click="handleClick"
  >
  <Transition name="bounce">
    <div class="text-6xl md:text-7xl" v-if="placedPiece">
      {{ placedPiece }}
    </div>
  </Transition>
  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>
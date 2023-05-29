<script setup lang="ts">
import { BoardItem } from '../models/BoardItem';

interface IGridItemProps {
  boardItem: BoardItem;
}

const emit = defineEmits<{ 
  (e: 'place-piece', id: string) :void,
}> ();

const props = defineProps<IGridItemProps>();

const handleClick = () => {
  emit('place-piece', props.boardItem.id)
}

</script>

<template>
  <div class="h-24 w-full border-2 bg-white text-black flex justify-center items-center
  md:h-36 hover:cursor-pointer"
  @click="handleClick"
  >
    <div class="text-6xl md:text-7xl">
      {{ props.boardItem.placedPiece }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { clearGameFromStorage } from '../functions/localStorage';


  const reset = () => {
    clearGameFromStorage();
    location.reload();
  }

</script>

<template>
  <button @click="reset" class="btn mt-2">Reset game</button>
</template>

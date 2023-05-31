<script setup lang="ts">

  const reset = () => {
    //clearGameFromStorage();
    location.reload();
  }

</script>

<template>
  <button @click="reset" class="btn mt-2">Reset game</button>
</template>

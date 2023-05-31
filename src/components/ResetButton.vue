<script setup lang="ts">

  const reset = () => {
    //clearGameFromStorage();
    location.reload();
  }
  
</script>

<template>
  <div>
    <button @click="reset" class="btn mt-2">Reset</button>
  </div>
</template>

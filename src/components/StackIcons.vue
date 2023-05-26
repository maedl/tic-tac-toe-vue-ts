<template>
  <div :class="containerClasses">
    <a href="https://vitejs.dev" target="_blank">
      <img src="../assets/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<script setup lang="ts">

const containerClasses = 'flex justify-center';

</script>

<style lang="scss" scoped></style>
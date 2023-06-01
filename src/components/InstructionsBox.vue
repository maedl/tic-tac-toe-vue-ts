<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center justify-center justify-start p-4 md:p-8 rounded-md">
    <div class="space-y-5 md:max-w-xl md:mx-auto p-4 md:p-8 bg-white rounded-md shadow-lg shadow-emerald-950">
      <h1 class="text-3xl font-extrabold text-center text-gray-900">Tic Tac Toe</h1>
      <p class="text-gray-600">
        Welcome to the game of Tic Tac Toe! Here's how to play:
      </p>
      <ol class="list-decimal text-gray-700 pl-5">
        <li>Enter the names of the two players. The first player will be assigned the game piece "X" and the second player will be assigned "O".</li>
        <li>A random player starts the game by clicking on one of the squares to place an their game piece. The game lets you know who starts.</li>
        <li>Players alternate turns. The goal is to get three of your own marks (X or O) in a row - horizontally, vertically, or diagonally.</li>
        <li>The first player to get three marks in a row wins the game!</li>
        <li>If all squares are filled and no player has three in a row, the game is a draw.</li>
      </ol>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
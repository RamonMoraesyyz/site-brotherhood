<template>
  <div class="relative w-full h-screen overflow-hidden">

    <!-- Vídeo de Fundo -->
    <div class="absolute w-full h-full bg-yellow-500 opacity-50">
      <video autoplay muted loop class="object-cover w-full h-full">
        <source src="/beervideo.mp4" type="video/mp4">
      </video>
    </div>

    <!-- Logo -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
    </div>

  </div>
</template>

<script setup>


</script>

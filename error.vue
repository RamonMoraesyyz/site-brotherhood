<template>
    <div class="flex items-center justify-center h-screen bg-black">
      <div class="text-center card bg-opacity-80 p-8 rounded-lg">
  
        <!-- Logo Elements -->
        <div class="relative z-0 text-center">
          <img src="./public/elements.png" alt="Logo" class="w-80 mx-auto" />
        </div>
  
        <!-- Conteúdo do erro -->
        <div class="relative z-10 text-center mt-10">
          <p v-if="error" class="text-7xl font-bold text-white">{{ error.statusCode }}</p>
          <p class="mt-7 text-2xl text-white">
            Ops! Parece que alguém já bebeu essa página. <br>
            Talvez seja hora de explorar nosso cardápio novamente!
          </p>
        </div>
  
        <p v-if="error" class="mt-7 text-white">{{ error.message }}</p>
        <button @click="handleClearError" class="mt-7 bg-white text-black py-2 px-4 rounded font-medium">
          Retornar à página inicial
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps(['error']);

  const handleClearError = () => clearError ({ redirect: '/' })
  
  </script>
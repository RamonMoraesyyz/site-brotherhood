<template>
    <div class="min-h-screen bg-orange-50 text-black">
      
      <main>
        <div class="grid grid-cols-2 gap-4">
            <div class="mb-8">
            <h1 class="text-5xl font-bold px-4 py-8">Contato</h1>

            <h2 class="text-xl px-4 py-2">Rua Francisco Medeiros, N°243, Centro<br>Bela Vista de Goiás/GO - CEP: 75240-000</h2>

            <h3 class="mx-5 my-7 p-4 h-80 rounded-3xl border-4 border-orange-300 text-xl text-justify relative overflow-hidden">
            <img src="../public/maps.jpg" alt="maps" class="absolute inset-0 w-full h-full object-cover rounded-3xl">
            </h3>
        </div>

        <div class="flex flex-col justify-end text-sm font-bold px-4 py-8">

            <div class="w-full mb-4">
                <UFormGroup>
                <UInput placeholder="Nome" />
                </UFormGroup>
            </div>

            <div class="w-full mb-4">
                <UFormGroup>
                <UInput placeholder="E-mail" />
                </UFormGroup>
            </div>

            <UTextarea color="white" variant="outline" placeholder="Mensagem" rows="13"/>

            <button class="my-2 py-2 rounded-lg w-full border-2 border-gray-800 bg-black text-xl text-white">
            Enviar
            </button>
        </div>
    </div>
    </main>
  
    </div>
  </template>
  
  <script setup>
  
  </script>
<template>
    <header class="bg-black text-white px-4 flex justify-end">
      <div class="flex flex-row gap-2">
        <NuxtLink to="/">
          <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Início</UButton>
        </NuxtLink>
        <NuxtLink to="/sobrenos">
          <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Sobre nós</UButton>
        </NuxtLink>
        <NuxtLink to="/contato">
          <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Contato</UButton>
        </NuxtLink>
        <UDropdown :items="dropdownItems" :popper="{ placement: 'bottom-start' }">
          <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Produtos</UButton>
        </UDropdown>
      </div>
    </header>
  </template>
  
  <script setup>
  const dropdownItems = [
    { label: 'Produto 1', to: '/produto1' },
    { label: 'Produto 2', to: '/produto2' },
    { label: 'Produto 3', to: '/produto3' },
    
  ];
  </script>
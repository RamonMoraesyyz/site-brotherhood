<script setup>
  // Aqui fica a lógica para obter e guardar os itens do menu
  const { data: products } = await useAsyncData(() => queryContent('produtos').find())
  const itensDoMenu = products.value.map((produto, index) => {
  return [{ label: produto.name, to: produto._path }];

});

</script>

<template>
    <header class="bg-gray-900 text-white px-4 flex justify-between">
      <!-- <div class="flex flex-row gap-2"> -->
        <div class="ml-3">
          <NuxtLink to="/">
          <img src="/favicon.ico" alt="Favicon" class="w-8 h-8" />
          </NuxtLink>
        </div>
        <div>
        <NuxtLink to="/">
          <UButton color="black" :ui="{ rounded: 'rounded-none' }">Início</UButton>
        </NuxtLink>
        <NuxtLink to="/sobrenos">
          <UButton color="black" :ui="{ rounded: 'rounded-none' }">Sobre nós</UButton>
        </NuxtLink>
        <NuxtLink to="/contato">
          <UButton color="black" :ui="{ rounded: 'rounded-none' }">Contato</UButton>
        </NuxtLink>
        <UDropdown :items="itensDoMenu" :popper="{ placement: 'bottom-start' }">
          <UButton color="black" :ui="{ rounded: 'rounded-none' }">Produtos</UButton>
        </UDropdown>
        </div>
    </header>
  </template>
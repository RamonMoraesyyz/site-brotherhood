<script setup>
const items = [
  [{
    label: 'Cerveja 1',
  }],[{
    label: 'Cerveja 2',
  }],[{
    label: 'Cerveja 3',
  }],[{
    label: 'Cerveja 4',
  }],
]
</script>
<template>
  <header class="bg-black text-white px-4 flex justify-end">
    <div class="flex flex-row gap-2">
      <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Início</UButton>
      <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Sobre nós</UButton>
      <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Contato</UButton>
        <UButton color="black" variant="solid" :ui="{ rounded: 'rounded-none' }">Produtos</UButton>
    </UDropdown>
    </div>
  </header>
</template>
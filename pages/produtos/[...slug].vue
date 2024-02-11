<template>
  <div class="flex-grow grid md:grid-cols-2 text-gray-800">
    
    <div class="flex justify-center items-center">
      <img :src="product.image" />
      
    </div>

    <div class="flex flex-col p-4 justify-around">
      <div class="mx-1 my-2 p-8 rounded-3xl border-4 border-gray-800 text-xl text-justify">
        <h2 class="font-bold text-2xl mb-4">{{product.name}}</h2>
        <p>
          <ContentRenderer :value="product" />
          {{product.harmonization}}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div class="p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl">{{product.abv}}</div>
        <div class="p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl">{{product.ibu}}</div>
        <div class="p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl">{{product.ebc}}</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "nuxt/app";

const route = useRoute()
const productName = route.params.slug

const { data: product } = await useAsyncData('produtos', () => queryContent(`/produtos/${productName}`).findOne())
</script>
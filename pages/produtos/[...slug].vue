<script setup>
import { useRoute } from "nuxt/app";

const route = useRoute()
const productName = route.params.slug

const { data: product } = await useAsyncData(() => queryContent(`/produtos/${productName}`).findOne())
  
// Se não achar nenhum produto, retorna 404

if (product.value === null){
  throw createError({
        statusCode: 404,
         fatal: true,
      });
}
</script>

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
        </p>
        <br/>
        <p>
          <b>Harmonização:</b> {{product.harmonization}}
        </p>        
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
        <div v-if="product.abv" class="p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl">ABV: {{product.abv}}</div>
        <div v-if="product.ibu" class="p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl">IBU: {{product.ibu}}</div>
        <div v-if="product.ebc" class="p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl">EBC: {{product.ebc}}</div>
      </div>
    </div>
  </div>
</template>
<template>
    <div class="min-h-screen bg-orange-50 text-black flex flex-col">
      
      <BrotherNavbar />
      
      <div class="flex-grow flex">
      
        <div class="md:w-1/2 bg-orange-50">
       
            <img src="../../public/jabuticaba.png" alt="Product Image" class="w-1/3 mx-auto mt-12">
            </div>

            <div class="md:w-2/3 flex flex-col p-4">
        
            <div class="mb-6">
                <div class="flex flex-col justify-center h-auto mx-1 my-2 p-8 rounded-3xl border-4 border-gray-800 text-xl text-justify mt-10">
                    <h2 class="font-bold text-2xl mb-4">Vinho de Jabuticaba</h2>
                    
                    <p>
                        O vinho de jabuticaba é uma bebida única, destacando-se pela coloração vibrante, sabor agridoce equilibrado com notas frutadas intensas da jabuticaba. Com aroma marcante, teor alcoólico elevado e versatilidade, 
                        é apreciado tanto por si só quanto em harmonização com queijos finos e pratos que complementam suas características frutadas. 
                        Uma opção exótica para apreciadores de vinhos distintos.
                    </p>
          
          
                </div>

            </div>

            <div class="flex flex-col md:flex-row md:justify-center space-y-4 md:space-x-4 md:space-y-0">
            <div class="md:w-2/3 bg-orange-50 p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl text-center">ABV: 15%</div>
            <div class="md:w-2/3 bg-orange-50 p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl text-center">IBU: 6</div>
            <div class="md:w-2/3 bg-orange-50 p-8 border-4 border-gray-800 font-bold text-xl rounded-3xl text-center">EBC: 47</div>
        </div>
      </div>
        </div>
    
      
      
        <BrotherFooter />
    </div>
  </template>
    
  <script setup>
  const items = [
    [{ label: 'Cerveja 1' }],
    [{ label: 'Cerveja 2' }],
    [{ label: 'Cerveja 3' }],
    [{ label: 'Cerveja 4' }],
  ];
  </script>
<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CardNews from "@/components/CardNews.vue";

const config = {
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
const breakpoints = {
  1: {
    itemsToShow: 2.4,
  },
  700: {
    itemsToShow: 3,
  },
  1000: {
    itemsToShow: 3.5,
  },
  1500: {
    itemsToShow: 5.3,
  },
}
</script>

<template>
  <main class="py-14 container">
    <!--  news list  -->
    <div  class="mt-10">
      <Carousel dir="rtl" :breakpoints="breakpoints" :wrapAround="false" :transition="500">
        <Slide v-for="slide in 10" :key="slide">
          <button type="button" class="w-full mx-1 bg-secondary-100 hover:text-primary-950 text-secondary-950 duration-150 overflow-hidden px-3 py-0.5 rounded">{{slide}}</button>
        </Slide>
      </Carousel>
    </div>
    <div class="flex gap-4 mt-10 justify-center flex-wrap w-full">
      <div v-for="i in 10" :key="i">
        <CardNews />
      </div>
    </div>
  </main>
</template>

<style scoped>
.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 1s;
}
</style>
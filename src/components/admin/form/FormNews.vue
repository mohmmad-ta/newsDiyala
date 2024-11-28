<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
import {ref} from "vue";
import axios from "axios";
const store = useAdminStore()


const product = async () =>{
  if (store.form_status === "post"){
    // await store.postCreateProduct()
    store.openForm = 0
  }else if(store.form_status === "put"){
    await store.putUpdateProduct(store.alert.id)
    store.openForm = 0
  }
}
const colorCounter = ref(1)

const formData = ref({
  name: 'a1',
  description : "ssss",
  price : 12,
  category_id: "2d168ef5-2384-4e35-86cb-533bd7babdf5",
  quantity: 12,
  status: 1,
  colors: ['84150f0e-f1f2-4019-8981-ac11c63f72a2'],
  images: '',
  sizes: ['59066249-3650-4b9d-990c-03e6575c077a'],
})
const handleFileUpload = (event)=> {
  formData.value.images = event.target.files[0]; // Capture the image file
  console.log(formData.value.images)
}
const dataPost = new FormData();
dataPost.append('name', formData.value.name);
dataPost.append('description', formData.value.description);
dataPost.append('price', formData.value.price);
dataPost.append('category_id', formData.value.category_id);
dataPost.append('quantity', formData.value.quantity);
dataPost.append('status', formData.value.status);
dataPost.append('colors[]', formData.value.colors);
dataPost.append('images', formData.value.images);
dataPost.append('sizes[]', formData.value.sizes);
const postCreateProduct = async ()=>{
    const res = await axios.post(`api/admin/products`, dataPost, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  console.log(res.data)
}
</script>

<template>
  <div class="w-[30rem] overflow-hidden justify-center">
    <h2 class="text-secondary-950 w-full text-center">Product</h2>
    <hr class="w-full">
    <form class="text-right">

      <!--   input user name   -->
<!--      <label class="text-secondary-950">name</label>-->
<!--      <div class="flex gap-2 mt-0.5 text-sm">-->
<!--        <input v-model="store.formProduct.name" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md" placeholder="الاسم الاول">-->
<!--      </div>-->
<!--      &lt;!&ndash;   input user name   &ndash;&gt;-->
<!--      <label class="text-secondary-950">email</label>-->
<!--      <div class="flex gap-2 mt-0.5 text-sm">-->
<!--        <textarea v-model="store.formProduct.description" type="text" class="scrollbar-hide outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md" placeholder="الاسم الاول"></textarea>-->
<!--      </div>-->

<!--      &lt;!&ndash;   input location   &ndash;&gt;-->
<!--      <label class="text-secondary-950">الموقع</label>-->
<!--      <div class="flex gap-2 mt-0.5 text-sm">-->
<!--        <input v-model="store.formProduct.price" type="text" class="outline-none w-1/2 text-right border-secondary-950 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md" placeholder="البلد">-->
<!--        <input v-model="store.formProduct.category" type="text" class="outline-none w-1/2 text-right border-secondary-950 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md" placeholder="المحافضة">-->
<!--      </div>-->
<!--      &lt;!&ndash;   input location   &ndash;&gt;-->
<!--      <label class="text-secondary-950">الموقع</label>-->
<!--      <div class="flex gap-2 mt-0.5 text-sm">-->
<!--        <input v-model="store.formProduct.quantity" type="text" class="outline-none w-1/2 text-right border-secondary-950 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md" placeholder="البلد">-->
<!--        <input v-model="store.formProduct.description" type="text" class="outline-none w-1/2 text-right border-secondary-950 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md" placeholder="المحافضة">-->
<!--      </div>-->

      <div class="mt-3">
        <h2 class="mb-1">image</h2>
        <input type="file" @change="handleFileUpload">
      </div>

      <div class="flex justify-center pt-8 pb-4 items-center gap-4">
        <button @click="store.openForm = 0" type="button" class="w-3/4 bg-secondary-500 py-1.5 font-bold text-white rounded">close</button>
        <button @click="postCreateProduct()" type="button" class="w-3/4 bg-main-50 py-1.5 font-bold text-white rounded">add to card</button>
      </div>
    </form>
  </div>
</template>
<script setup>

import Alert from "@/components/admin/form/Alert.vue";
import { useAdminStore } from '@/stores/admin.js'
const store = useAdminStore();

const alert = async (id, index)=>{
  store.alert.description = "Do you really want to delete the product ?"
  store.alert.title = "Delete The Product ?"
  store.alert.id = id
  store.alert.open = true
  store.alert.number = index
}
const alertFunction = async ()=>{
  await store.Delete(`posts/${store.alert.id}`)
  store.allPosts.splice(store.alert.number, 1);
  store.alert.open = false
}
const updateProduct = async (index)=>{
  store.form_status = "put"
  store.openForm = store.dashStep
  store.formPost = store.allPosts[index]
}
</script>

<template>
  <div class=" h-full w-full bg-white p-2.5 rounded">
    <table class="table-fixed w-full">
      <thead class="border-b-2 border-secondary-100 text-secondary-950 text-sm font-bold">
      <tr>
        <th class="p-2">الاعدادات</th>
        <th class="p-2">created_at</th>
        <th class="p-2">product name</th>
        <th class="p-2">title</th>
        <th class="p-2">user</th>
        <th class="p-2">no.</th>
      </tr>
      </thead>
      <tbody class="text-center text-primary-950">
      <tr :class="index % 2 !== 0 ? 'bg-secondary-100' : 'bg-none'" v-for="(product, index) in store.allPosts" :key="index">
        <td>
          <div class="flex items-center gap-3 justify-center">
            <i @click="alert(product.id, index)"
               class="fa-regular fa-trash-can hover:text-red-500 duration-150 text-sm cursor-pointer"></i>
            <i @click="updateProduct(index)"
               class="fa-solid fa-pencil hover:text-amber-500 duration-150 text-sm cursor-pointer"></i>
          </div>
        </td>
        <td>{{ product.created_at }}</td>
        <td>{{ product.product_name.length > 20 ? product.product_name.slice(0,20) + " ... " : product.product_name }}</td>
        <td class="py-3">{{ product.title }}</td>
        <td>{{ product.user_name }}</td>
        <td>{{ index + 1 }}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <Alert @alertFunction="alertFunction"/>
</template>
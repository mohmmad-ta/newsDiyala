<script setup>

</script>

<template>
  <main class="container">
    <div class="min-h-screen pb-10 pt-16 w-full flex items-center justify-center">
      <div class="w-96 p-5">
        <!--    logo    -->
        <div class="items-center flex gap-4 mb-4 justify-center w-full">
          <h2 class="font-bold text-primary-950">{{ $t('signup_logo') }}</h2>
        </div>
        <!--    input     -->
        <form class="text-right grid gap-1.5">

          <!--   input user name   -->
          <div>
            <label class="text-secondary-950">{{ $t('signup_name') }}</label>
            <div class="flex gap-2 mt-0.5 text-sm">
              <input type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
            </div>
          </div>
          <!--   input user name   -->
          <div>
            <label class="text-secondary-950">{{ $t('signup_email') }}</label>
            <div class="flex gap-2 mt-0.5 text-sm">
              <input type="email" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
            </div>
          </div>
          <!--   input user name   -->
          <div>
            <label class="text-secondary-950">{{ $t('signup_mobile') }}</label>
            <div class="flex gap-2 mt-0.5 text-sm">
              <input type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
            </div>
          </div>
          <!--   input user name   -->
          <div>
            <label class="text-secondary-950">{{ $t('signup_password') }}</label>
            <div class="flex gap-2 mt-0.5 text-sm">
              <textarea type="password" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md"></textarea>
            </div>
          </div>

          <!--   input location   -->
          <div>
            <label class="text-secondary-950">{{ $t('signup_location') }}</label>
            <div class="flex gap-2 mt-0.5 text-sm">
              <input type="text" class="outline-none w-1/2 text-right border-secondary-950 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
              <input type="text" class="outline-none w-1/2 text-right border-secondary-950 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
            </div>
          </div>

          <div class="flex py-4 justify-end items-center gap-1">
            <p>{{ $t('signup_radio') }}</p>
            <input type="radio" class="bg-main-50 py-1 font-bold text-white rounded">
          </div>

          <div class="flex justify-center py-4 items-center gap-4">
            <button type="button" class="w-3/4 bg-main-50 py-2 font-bold text-white rounded">{{ $t('signup_button') }}</button>
          </div>
        </form>
      </div>
    </div>

  </main>
</template>

<template>
    <div class="flex items-center justify-between bg-blue-500 h-24  px-8">
              <img class="w-28 cursor-pointer" src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730735936/logoTalentMap_vsxcz2.png" @click="() => router.push('/')">

        <div @click="$router.push('/statistics')">
            statistics
        </div>
    </div>
</template>

<script setup>
import router from '@/router'

</script>
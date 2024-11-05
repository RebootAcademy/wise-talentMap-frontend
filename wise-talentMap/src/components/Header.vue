<template>
    <div class="bg-white border-b h-24 flex items-center justify-between font-bebas text-3xl text-black py-2.5 px-8">
        <img class="w-28 cursor-pointer"
            src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730735936/logoTalentMap_vsxcz2.png">
        <div class="flex gap-2">
            <CustomButton :clickFn="() => console.log('Wise')"
                class="h-11 text-2xl border rounded-md flex items-center px-4 py-3 border-black">
                WISE CANARIAS
            </CustomButton>
        </div>
    </div>
</template>
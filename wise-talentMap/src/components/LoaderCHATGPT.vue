<template>
  <div class="loader-container ">
    <!-- <div class="compass-loader">
      <div class="compass-needle"></div>
      <div class="compass-center"></div>
    </div> -->
    <div class="compass"></div>
    <p class="text-3xl font-bebas mt-8 ">Cargando el mapa...</p>
  </div>
</template>

<script setup></script>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  @apply bg-secondary-white
}


.compass-loader {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #881bf5;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: rotate 2s linear infinite;
}

.compass-center {
  width: 16px;
  height: 16px;
  background-color: #881bf5;
  border-radius: 50%;
  position: absolute;
}

.compass-needle {
  position: absolute;
  width: 4px;
  height: 50%;
  @apply bg-primary-violet;
  border-radius: 2px;
  top: 10%;
  animation: needle 1.5s ease-in-out infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes needle {
  0%, 100% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(15deg);
  }
}



.compass {
    height: 164px;
    width: 164px;
    position: relative;
    @apply bg-lightPink;
    border-radius: 50%;
    transform: rotate(45deg);
    animation: rotate 2s linear infinite;
}

.compass:before {
    content: '';
    width: 30px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 50%;
    @apply bg-primary-violet;
    transform: skew(5deg, 60deg) translate(-50%, -5%);
}

.compass::after{
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    @apply bg-secondary-white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

@keyframes rotate {
    0% {
        transform: rotate(45deg);
    }
    30%, 50%, 70% {
        transform: rotate(230deg)
    }
    40%, 60%, 80%{
        transform: rotate(240deg)
    }
    100% {
        transform: rotate(245deg);
    }
}

</style>


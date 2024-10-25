<template>
  <div class="slider">
    <div class="slider-track">
      <div
        v-for="collaborator in collaborators"
        :key="collaborator.id"
        class="slide"
      >
        <img :src="collaborator.image" alt="collaborator.name" />
        <p>{{ collaborator.name }}</p>
      </div>
      
    </div>
  </div>
</template>

<script setup>
const collaborators = [
  {id: 1, name: 'John Doe', image: 'https://via.placeholder.com/150'},
  {id: 2, name: 'Jane Doe', image: 'https://via.placeholder.com/150'},
  {id: 3, name: 'John Doe', image: 'https://via.placeholder.com/150'},
  {id: 4, name: 'Jane Doe', image: 'https://via.placeholder.com/150'},
  {id: 5, name: 'John Doe', image: 'https://via.placeholder.com/150'},
  {id: 6, name: 'Jane Doe', image: 'https://via.placeholder.com/150'},
  {id: 7, name: 'John Doe', image: 'https://via.placeholder.com/150'},
  {id: 8, name: 'Jane Doe', image: 'https://via.placeholder.com/150'},
  {id: 9, name: 'John Doe', image: 'https://via.placeholder.com/150'},
  {id: 10, name: 'Jane Doe', image: 'https://via.placeholder.com/150'},
]
</script>

<style scoped lang="scss">
@mixin white-gradient {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

$animationSpeed: 40s;

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 5));
  }
}

.slider {
  background: pink;
  display: flex;
  align-items: center;
  height: 200px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before,
  &::after {
    @include white-gradient;
    content: '';
    height: 200px;
    position: absolute;
    width: 130px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
}

.slider-track {
  animation: scroll $animationSpeed linear infinite;
  display: flex;
  width: calc(250px * 20); 
}

.slide {
  height: 100px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.slide img {
  max-height: 70%; 
  width: auto; 
}
</style>

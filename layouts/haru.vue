<template>
  <div class="main">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
@media (min-width: 601px) {
  .main {
    background: url("/img/back-haru.jpg");
    background-size: cover;
    background-attachment: fixed;
  }
}
@media (max-width: 600px) {
  .main:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background: url("/img/back-haru.jpg") center no-repeat;
    background-size: cover;
  }
}
</style>

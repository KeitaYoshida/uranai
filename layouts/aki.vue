<template>
  <div class="main">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
.main {
  background: url("/img/back-aki.jpg");
  background-size: cover;
  background-attachment: fixed;
}
</style>

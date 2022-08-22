<template>
  <div class="main">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
.main {
  background: url("/img/back-natsu.jpg");
  background-size: cover;
  background-attachment: fixed;
}
</style>

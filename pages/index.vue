<template>
  <div>
    <Header :config="config" />
    <TheHero />
    <Footer />
  </div>
</template>

<script>
export default {
  data: (vm) => ({
    config: {
      siteName: "サイト名",
    },
  }),
};
</script>

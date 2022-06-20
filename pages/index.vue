<template>
  <div>
    {{ config }}
    <!-- <Header :config="config" /> -->
    <TheHero />
    <Footer />
  </div>
</template>

<script>
export default {
  data: () => ({
    config: {
      siteName: "サイト名",
    },
  }),
};
</script>

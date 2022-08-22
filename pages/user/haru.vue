<script setup>
const color = useTextColor();
useHead({
  title: "Top Page",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "Personal Data." }],
});
</script>

<template>
  <NuxtLayout name="haru">
    <div
      class="container mx-auto flex flex-col px-5 py-5 justify-center items-center in-main"
    >
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded com-top-img"
        alt="hero"
        src="/img/top-haru.gif"
      />

      <div class="w-4/5 md:w-1/2 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-xl text-xl mb-4 font-bold" :class="color">
          春タイプ　「あなたの仕事のモチベーション基準は環境重視型です」
        </h1>
        <div class="py-8 leading-relaxed">
          <div class="py-4">
            <strong>どういう時に成長しやすいか？</strong>
          </div>
          <div class="py-4">
            春タイプの方はその環境が自分に合っているかが一番効率よく成長するために重要なことです。
          </div>
          <div class="py-4">
            なので、成長したくても関わる人たちとの人間関係が良くなかったり、自分が人として好きな人がその環境にいないと成長スピードは格段に下がります。
          </div>
          <div class="py-4">
            今いる場所が自分にとってワクワクする場所なのか、憧れる人がいるのか今一度考えてみてください。
          </div>
          <div class="py-4">
            <strong>良い転職をするときの基準は？</strong>
          </div>
          <div class="py-4">
            春タイプの人の転職で一番重要視すべきなのは職場の人たちの雰囲気や社風が自分に合うのかです。
          </div>
          <div class="py-4">
            会社の評価制度や待遇なども大切ではありますが、春タイプは他の条件がどんなに良くでもいざ入社して
            社内の人との関係が悪くなり、居心地が悪くなるとモチベーションも下がり、仕事にやる気を見出せません。
          </div>
          <div class="py-4">
            なので、いきなり就職をするのではなく社内の人から話を聞くなど会社の雰囲気が自分に合っているのかを確認して選択してください。
          </div>
        </div>
        <all-user />
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.com-top-img {
  width: 5rem !important;
  height: 5rem !important;
}
.in-main {
  background: rgba(255, 255, 255, 0.6);
}
</style>

<script setup>
const color = useTextColor();
</script>

<template>
  <NuxtLayout name="uru">
    <div
      class="container mx-auto flex flex-col px-5 py-5 justify-center items-center"
    >
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="/img/top-mage-huyu.png"
      />

      <div class="w-4/5 md:w-1/2 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-xl text-xl mb-4 font-bold" :class="color">
          冬タイプ　「あなたの仕事のモチベーション基準は学習重視型です」
        </h1>
        <div class="py-8 leading-relaxed">
          <div class="py-4">
            <strong>どういう時に成長しやすいか？</strong>
          </div>
          <div class="py-4">
            冬タイプの方は学びを大切にしているので、日々経験知識に繋がるかが一番効率よく成長するために重要なことです。
          </div>
          <div class="py-4">
            なので、成長したくても自分の学びになっていることが感じられず、日々少しでも自分のプラスに繋がっている場所でないと成長スピードは格段に下がります。
          </div>
          <div class="py-4">
            今いる場所が自分にとって本当に学びや新しい知識を得られる場所なのか今一度考えてみてください。
          </div>
          <div class="py-4">
            <strong>良い転職をするときの基準は？</strong>
          </div>
          <div class="py-4">
            冬タイプの人の転職で一番重要視すべきなのは日々学びになる職場、職種なのかです。
          </div>
          <div class="py-4">
            会社の活気や待遇なども大切ではありますが、冬タイプは他の条件がどんなに良くでもいざ入社して
            毎日に学びや新しい知識や知恵がないとモチベーションも下がり、仕事にやる気を見出せません。
          </div>
          <div class="py-4">
            なので、いきなり就職をするのではなくその職場は自分が得たい知識や経験、学びがあるのかを確認して選択してください。
          </div>
        </div>
        <all-user />
      </div>
    </div>
  </NuxtLayout>
</template>

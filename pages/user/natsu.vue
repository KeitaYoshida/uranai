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
        src="/img/top-mage-natsu.png"
      />

      <div class="w-4/5 md:w-1/2 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-xl text-xl mb-4 font-bold" :class="color">
          夏タイプ　「あなたの仕事のモチベーション基準は活躍重視型です」
        </h1>
        <div class="py-8 leading-relaxed">
          <div class="py-4">
            <strong>どういう時に成長しやすいか？</strong>
          </div>
          <div class="py-4">
            夏タイプの方は自分がそこで活躍できるのかが一番効率よく成長するために重要なことです。
          </div>
          <div class="py-4">
            なので、成長したくても自分が活躍できそう役割が無かったり、些細なことでも自分のやりがいと思えることがないと成長スピードは格段に下がります。
          </div>
          <div class="py-4">
            今いる場所が自分にとって今後活躍できる場所なのか、やりがいを持てる仕事なのか今一度考えてみてください。
          </div>
          <div class="py-4">
            <strong>良い転職をするときの基準は？</strong>
          </div>
          <div class="py-4">
            夏タイプの人の転職で一番重要視すべきなのは自分の能力を活かし活躍できる職種内容や社風なのかです。
          </div>
          <div class="py-4">
            会社の学習制度や待遇なども大切ではありますが、夏タイプは他の条件がどんなに良くでもいざ入社して
            その先に自分が活躍している、やりがいを持っている未来が見えないとモチベーションも下がり、仕事にやる気を見出せません。
          </div>
          <div class="py-4">
            なので、いきなり就職をするのではなくその職場は自分の力を活かせるのか、やりがいを持てる仕事なのかを確認して選択してください。
          </div>
        </div>
        <all-user />
      </div>
    </div>
  </NuxtLayout>
</template>

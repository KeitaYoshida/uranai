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
        src="/img/natsu.png"
      />

      <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-xl text-xl mb-4 font-bold" :class="color">
          夏タイプ　「あなたの仕事のモチベーション基準は活躍重視型です」
        </h1>
        <div class="py-8 leading-relaxed">
          <strong>どういう時に成長しやすいか？</strong>
          <br />
          <br />
          夏タイプの方は自分がそこで活躍できるのかが一番効率よく成長するために重要なことです。
          <br />
          <br />
          なので、成長したくても自分が活躍できそう役割が無かったり、些細なことでも自分のやりがいと思えることがないと成長スピードは格段に下がります。
          <br />
          <br />
          今いる場所が自分にとって今後活躍できる場所なのか、やりがいを持てる仕事なのか今一度考えてみてください。
          <br />
          <br />
          <strong>良い転職をするときの基準は？</strong>
          <br />
          <br />
          夏タイプの人の転職で一番重要視すべきなのは自分の能力を活かして活躍できるかの職種内容や社風なのかです。
          <br />
          <br />
          会社の学習制度や待遇なども大切ではありますが、夏タイプは他の条件がどんなに良くでもいざ入社して
          <br />
          その先に自分が活躍している、やりがいを持っている未来が見えないとモチベーションも下がり、仕事にやる気を見出せません。
          <br />
          <br />
          なので、いきなり就職をするのではなくその職場は自分の力を活かせるのか、やりがいを持てる仕事なのかを確認して選択してください。
        </div>
        <all-user />
      </div>
    </div>
  </NuxtLayout>
</template>

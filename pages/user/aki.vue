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
        src="/img/top-mage-aki.png"
      />

      <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-xl text-xl mb-4 font-bold" :class="color">
          秋タイプ　「あなたの仕事のモチベーション基準は成果重視型です」
        </h1>
        <div class="py-8 leading-relaxed">
          <strong>どういう時に成長しやすいか？</strong>
          <br /><br />
          秋タイプの方は結果や成果がすぐに見える化されていることが一番効率よく成長するために重要なことです。
          <br /><br />
          なので、成長したくても成果が出るまで時間がかかったり結果が見えなかったりすると成長スピードは格段に下がります。
          <br /><br />
          今いる場所が自分にとって今後含めすぐに結果（お金や待遇）として出やすい場なのか今一度考えてみてください。
          <br /><br />
          <strong>良い転職をするときの基準は？</strong>
          <br /><br />
          秋タイプの人の転職で一番重要視すべきなのは成果や結果が早く出やすい職場体制、制度なのかです。
          <br /><br />
          会社の社風や待遇なども大切ではありますが、秋タイプは他の条件がどんなに良くでもいざ入社して
          自分の努力が正確に評価されなかったり、収入などの結果に反映されないとモチベーションも下がり、仕事にやる気を見出せません。
          <br /><br />
          なので、いきなり就職をするのではなくその職場に自分をちゃんと評価してくれる制度があるのか、それは収入にも直結するのかを確認して選択してください。
        </div>
        <all-user />
      </div>
    </div>
  </NuxtLayout>
</template>

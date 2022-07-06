<template>
  <div>
    <hr class="mb-4" />

    <div class="py-4">
      今回の仕事のモチベーション基準診断は４タイプからさらに１２タイプに分けることができます。
    </div>
    <div class="py-4">
      それを知ることで自分がシンプルな春タイプなのか、それとも一部夏タイプや、冬タイプでもあるのかなど細かく分析することができます。
    </div>
    <div class="py-4">
      そのさらに詳しい診断を活用して自己成長やキャリアアップに成功しているキャリアプランナーに一度自分の将来について相談してみませんか？
    </div>
    <div class="py-4">
      <strong>さらなる無料の直接診断はこんな人におすすめ！！</strong>
    </div>
    <div class="py-4">
      <ul>
        <li>☑　今の環境で自分の成長を感じられていない</li>
        <li>☑　今後の収入面で不安や焦りがある</li>
        <li>☑　将来やりたいことがあるのになかなか踏み出せない</li>
        <li>☑　目標や夢が明確に持てていない</li>
        <li>☑　会社や組織で結果がなかなか出ていない</li>
        <li>☑　一緒に成長し合える仲間がほしい</li>
        <li>☑　本気で自分の人生を見直したい</li>
      </ul>
    </div>
    <div class="py-4">上記に一つでも当てはまる方は下記をチェック！</div>
    <div class="py-4">
      <strong>あなたの成長を私たちは本気で考えます！</strong>
    </div>

    <div class="relative w-4/5 md:w-1/2 text-left mb-3 mx-auto">
      <button
        class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full text-center justify-center disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        type="submit"
        @click="openLink"
      >
        無料相談　⏩
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openLink: () => {
      const url = "https://lstep.app/form/36179/Dpo28O/586772";
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
li {
  line-height: 2;
}
</style>

<script setup>
import dayjs from "dayjs";
import { useRouter } from "vue-router";

const router = useRouter();
const mainText = useMainText();
const color = useTextColor();
const asks = useAsks();
const startDate = useStart();
const shiki = useShiki();
const data = reactive({
  date: "2000-01-01",
  checks: [undefined, undefined, undefined, undefined, undefined],
});
const mergeDay = computed(() => {
  const st = dayjs(startDate.value);
  const tar = dayjs(data.date);
  // console.log(st.format("YYYY-MM-DD"));
  // console.log(tar.format("YYYY-MM-DD"));
  const merge = tar.diff(st, "day");
  return merge % 60;
});
const getShiki = computed(() => {
  return shiki.value[mergeDay.value];
});
const allSelect = computed(() => {
  let flg = true;
  data.checks.forEach((row) => {
    if (!row) flg = false;
  });
  return flg;
});
function submit(event) {
  const form = document.getElementById("googlForm");
  const formData = new FormData(form);
  const action = form.getAttribute("action");
  const options = {
    method: "POST",
    body: formData,
  };
  fetch(action, options);
  router.push("/user/" + getShiki.value.text);
  // const formData = new FormData(form);
  // const action = form.getAttribute("action");
  // const options = {
  //   method: "POST",
  //   body: formData,
  // };
}
</script>

<template>
  <section class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-col px-5 py-5 justify-center items-center"
    >
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="/img/top-mage.png"
      />

      <div class="w-4/5 md:w-1/2 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-xl text-xl mb-4 font-bold" :class="color">
          {{ mainText }}
        </h1>
        <div class="py-8">
          <div class="py-4">
            <strong>１分でわかる無料のオリジナル自己分析診断</strong>
          </div>
          <div class="py-4">
            生年月日と５つの質問であなたの人生や仕事におけるモチベーション基準がわかります
          </div>
          <div class="py-4">
            自分がより仕事で成長し続けるためには何を大切にすれば良いのかが明確にわかり、より良い人生を選択するための道しるべにもなります
          </div>
          <div class="py-4">
            <strong>仕事に対するモチベーションの種類は大きく分けて４つ</strong>
          </div>
          <div class="py-4">
            季節の春タイプ、夏タイプ、秋タイプ、冬タイプです。あなたはどの季節タイプなのか今すぐチェックしてみよう！
          </div>
          <div class="py-4">自分の知らない新しい価値観に気づけるかも</div>
        </div>
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe0lkm7iZPV6jHkL1veLOIDb_kRETBuQ7CVEVnGhHk12rsUZw/formResponse"
          class="w-full text-center mx-auto"
          id="googlForm"
          @submit.prevent="submit"
        >
          <div class="flex w-full justify-center items-end">
            <div class="relative w-4/5 md:w-1/2 text-left mb-8">
              <label for="hero-field" class="leading-8 text-sm text-gray-600"
                >生年月日</label
              >
              <input
                type="date"
                id="hero-field"
                name="entry.537808769"
                v-model="data.date"
                class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div
            v-for="(ask, index) in asks"
            :key="index"
            class="text-left mb-3 mx-auto"
          >
            <p class="text-left">{{ ask.text }}</p>
            <div class="flex text-sm justify-end mb-3">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  :name="ask.name"
                  :id="'inlineRadio1' + index"
                  value="はい"
                  v-model="data.checks[index]"
                />
                <label
                  class="form-check-label inline-block text-gray-500"
                  :for="'inlineRadio1' + index"
                  >はい</label
                >
              </div>
              <div class="form-check form-check-inline ml-5">
                <input
                  class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  :name="ask.name"
                  :id="'inlineRadio2' + index"
                  value="いいえ"
                  v-model="data.checks[index]"
                />
                <label
                  class="form-check-label inline-block text-gray-500"
                  :for="'inlineRadio2' + index"
                  >いいえ</label
                >
              </div>
            </div>
          </div>
          <div class="relative w-4/5 md:w-1/2 text-left mb-3 mx-auto">
            <button
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full text-center justify-center disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              :disabled="!allSelect"
              type="submit"
            >
              決定
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

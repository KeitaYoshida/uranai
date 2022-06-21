<script setup>
import dayjs from "dayjs";
import { useRouter } from "vue-router";

const router = useRouter();
const mainText = useMainText();
const discriptionText = useDiscription();
const discriptionTextLg = useDiscriptionLg();
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
function submit() {
  router.push("/user/" + getShiki.value.text);
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
        src="/img/top-image.png"
      />

      <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-xl text-xl mb-4 font-bold" :class="color">
          {{ mainText }}
        </h1>
        <div class="py-8 leading-relaxed md:hidden">
          <pre>{{ discriptionText }}</pre>
        </div>
        <div class="py-8 leading-relaxed hidden md:block">
          <pre>{{ discriptionTextLg }}</pre>
        </div>
        <div class="flex w-full justify-center items-end">
          <div class="relative w-4/5 md:w-1/2 text-left mb-8">
            <label for="hero-field" class="leading-8 text-sm text-gray-600"
              >生年月日</label
            >
            <input
              type="date"
              id="hero-field"
              name="hero-field"
              v-model="data.date"
              class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div
          v-for="(ask, index) in asks"
          :key="index"
          class="relative w-4/5 md:w-1/2 text-left mb-3"
        >
          <p class="text-left">{{ ask }}</p>
          <div class="flex text-sm justify-end mb-3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                :name="'inlineRadioOptions' + index"
                :id="'inlineRadio1' + index"
                value="true"
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
                :name="'inlineRadioOptions' + index"
                :id="'inlineRadio2' + index"
                value="false"
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
        <div class="relative w-4/5 md:w-1/2 text-left mb-3">
          <button
            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full text-center justify-center disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
            :disabled="!allSelect"
            @click="submit()"
          >
            決定
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

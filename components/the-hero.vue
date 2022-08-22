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
  year: 1987,
  month: 1,
  day: 1,
  checks: [undefined, undefined, undefined, undefined, undefined],
});
const monthes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const days = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];
const years = [
  "1950",
  "1951",
  "1952",
  "1953",
  "1954",
  "1955",
  "1956",
  "1957",
  "1958",
  "1959",
  "1960",
  "1961",
  "1962",
  "1963",
  "1964",
  "1965",
  "1966",
  "1967",
  "1968",
  "1969",
  "1970",
  "1971",
  "1972",
  "1973",
  "1974",
  "1975",
  "1976",
  "1977",
  "1978",
  "1979",
  "1980",
  "1981",
  "1982",
  "1983",
  "1984",
  "1985",
  "1986",
  "1987",
  "1988",
  "1989",
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
];
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
function upDate() {
  const z = (num) => ("00" + num).slice(-2);
  data.date = `${data.year}-${z(data.month)}-${z(data.day)}`;
}
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
}
</script>

<template>
  <section class="text-gray-600 body-font" id="main-text">
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
                hidden
                class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                year
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-transparent border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  v-model="data.year"
                  @change="upDate()"
                >
                  <option v-for="(item, index) in years" :key="index">
                    {{ item }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                month
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-transparent border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  v-model="data.month"
                  @change="upDate()"
                >
                  <option v-for="(item, index) in monthes" :key="index">
                    {{ item }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                day
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-transparent border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  v-model="data.day"
                  @change="upDate()"
                >
                  <option v-for="(item, index) in days" :key="index">
                    {{ item }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
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
              自分を知る
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
#main-text {
  background: url("/img/main-back-2.png");
  background-size: 400px 400px;
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
  /* background-attachment: fixed; */
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>

export const useName = () => {
  return useState("name", () => "personal data");
};

export const useLinks = () => {
  return useState("links", () => []);
};

export const useStart = () => {
  return useState("start", () => "1928-03-25");
};

export const useShiki = () => {
  return useState("shiki", () => [
    { label: "冬", text: "huyu" },
    { label: "冬", text: "huyu" },
    { label: "春", text: "haru" },
    { label: "春", text: "haru" },
    { label: "春", text: "haru" },
    { label: "夏", text: "natsu" },
    { label: "夏", text: "natsu" },
    { label: "夏", text: "natsu" },
    { label: "秋", text: "aki" },
    { label: "秋", text: "aki" },
    { label: "秋", text: "aki" },
    { label: "冬", text: "huyu" },
    { label: "冬", text: "huyu" },
    { label: "冬", text: "huyu" },
    { label: "春", text: "haru" },
    { label: "春", text: "haru" },
    { label: "春", text: "haru" },
    { label: "夏", text: "natsu" },
    { label: "夏", text: "natsu" },
    { label: "夏", text: "natsu" },
    { label: "秋", text: "aki" },
    { label: "秋", text: "aki" },
    { label: "秋", text: "aki" },
    { label: "冬", text: "huyu" },
    { label: "冬", text: "huyu" },
    { label: "冬", text: "huyu" },
    { label: "春", text: "haru" },
    { label: "春", text: "haru" },
    { label: "春", text: "haru" },
    { label: "夏", text: "natsu" },
    { label: "夏", text: "natsu" },
    { label: "夏", text: "natsu" },
    { label: "秋", text: "aki" },
    { label: "秋", text: "aki" },
    { label: "秋", text: "aki" },
    { label: "冬", text: "huyu" },
    { label: "冬", text: "huyu" },
    { label: "冬", text: "huyu" },
    { label: "春", text: "haru" },
    { label: "春", text: "haru" },
    { label: "春", text: "haru" },
    { label: "夏", text: "natsu" },
    { label: "夏", text: "natsu" },
    { label: "夏", text: "natsu" },
    { label: "秋", text: "aki" },
    { label: "秋", text: "aki" },
    { label: "秋", text: "aki" },
    { label: "冬", text: "huyu" },
    { label: "冬", text: "huyu" },
    { label: "冬", text: "huyu" },
    { label: "春", text: "haru" },
    { label: "春", text: "haru" },
    { label: "春", text: "haru" },
    { label: "夏", text: "natsu" },
    { label: "夏", text: "natsu" },
    { label: "夏", text: "natsu" },
    { label: "秋", text: "aki" },
    { label: "秋", text: "aki" },
    { label: "秋", text: "aki" },
    { label: "冬", text: "huyu" },
  ]);
};

export const useAsks = () => {
  return useState("asks", () => [
    {
      text: "① 将来を考えるとワクワクよりも不安になりやすい",
      name: "entry.91939732",
    },
    { text: "② 自分と他の人を無意識に比べてしまう", name: "entry.882945371" },
    {
      text: "③ すぐに結果が出ないとモヤモヤしてしまう",
      name: "entry.1184454970",
    },
    { text: "④ 自分が知識不足だなと思う時がよくある", name: "entry.617630492" },
    {
      text: "⑤ 自分には無限の可能性があると実は信じている",
      name: "entry.1937365034",
    },
  ]);
};

export const useIconColorBg = () => {
  const color = useIconColor();
  return useState("bgcolor", () => "bg-" + color.value);
};

export const useIconColor = () => {
  return useState("color", () => "indigo-500");
};

export const useTextColor = () => {
  return useState("textcolor", () => "text-grey-800");
};

export const useMainText = () => {
  return useState(
    "mainText",
    () => "将来キャリアアップや自己成長をしたいあなたへ"
  );
};

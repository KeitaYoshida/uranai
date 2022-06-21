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
    "① 将来を考えるとワクワクよりも不安になりやすい",
    "② 自分と他の人を無意識に比べてしまう",
    "③ すぐに結果が出ないとモヤモヤしてしまう",
    "④ 自分が知識不足だなと思う時がよくある",
    "⑤ 自分には無限の可能性があると実は信じている",
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

export const useDiscription = () => {
  return useState(
    "discriptionText",
    () => `１分でわかる無料のオリジナル自己分析診断\n\n
生年月日と５つの質問であなたの人生や
仕事におけるモチベーション基準がわかります\n
自分がより仕事で成長し続けるためには
何を大切にすれば良いのかが明確にわかり
より良い人生を選択するための
道しるべにもなります\n
仕事に対するモチベーションの種類は
大きく分けて４つ
季節の春タイプ、夏タイプ、秋タイプ、冬タイプです\n
あなたはどの季節タイプなのか\n今すぐチェックしてみよう\n
自分の知らない新しい価値観に気づけるかも`
  );
};

export const useDiscriptionLg = () => {
  return useState(
    "discriptionTextLg",
    () => `１分でわかる無料のオリジナル自己分析診断\n\n
生年月日と５つの質問であなたの人生や仕事におけるモチベーション基準がわかります\n
自分がより仕事で成長し続けるためには何を大切にすれば良いのかが
明確にわかりより良い人生を選択するための道しるべにもなります\n
仕事に対するモチベーションの種類は大きく分けて４つ
季節の春タイプ、夏タイプ、秋タイプ、冬タイプです\n
あなたはどの季節タイプなのか今すぐチェックしてみよう\n
自分の知らない新しい価値観に気づけるかも`
  );
};

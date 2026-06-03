const places = {
  sichuan: {
    kicker: "蜀地（今四川一帶）",
    title: "少年時期的起點",
    body: "李白少年時在蜀地生活。這一帶山多水長，壯闊的自然環境，成為他日後遠遊和寫詩的重要背景。",
    thinking: "想一想：地圖上的山川，會怎樣影響一個詩人的想像？"
  },
  changan: {
    kicker: "長安（唐都）",
    title: "唐代都城的夢想",
    body: "長安是唐代都城，也是當時文化和政治中心。李白曾到長安，希望一展抱負，也結識了不少文人朋友。",
    thinking: "想一想：如果你第一次到大城市，會看見甚麼？會有甚麼心情？"
  },
  lushan: {
    kicker: "廬山",
    title: "瀑布化成想像",
    body: "在《望廬山瀑布》中，李白把瀑布寫得像從天上落下來，表現了景物的壯麗。",
    thinking: "語文焦點：找出詩中最有想像力的一句。"
  },
  baidi: {
    kicker: "白帝城（長江三峽一帶）",
    title: "江水帶來輕快心情",
    body: "白帝城在長江三峽一帶。《早發白帝城》寫乘船順流而下的快速和愉快，讀起來節奏明快。",
    thinking: "朗讀挑戰：用輕快的語氣讀出船行很快的感覺。"
  }
};

const poems = {
  night: {
    kicker: "思鄉",
    title: "靜夜思",
    lines: "床前明月光，疑是地上霜。<br>舉頭望明月，低頭思故鄉。",
    notes: [
      ["畫面", "夜裏看見月光，好像地上鋪了一層霜。"],
      ["感情", "詩人由月亮想到家鄉，表達思念之情。"],
      ["語文焦點", "留意「舉頭」和「低頭」的動作變化。"]
    ],
    stamp: "moon",
    button: "收集月亮章"
  },
  waterfall: {
    kicker: "山水",
    title: "望廬山瀑布",
    lines: "日照香爐生紫煙，遙看瀑布掛前川。<br>飛流直下三千尺，疑是銀河落九天。",
    notes: [
      ["畫面", "陽光、山峰、瀑布和雲煙組成壯麗景色。"],
      ["感情", "詩人讚嘆自然景物的宏偉。"],
      ["語文焦點", "「三千尺」用了誇張，讓瀑布更有氣勢。"]
    ],
    stamp: "mountain",
    button: "收集山水章"
  },
  friend: {
    kicker: "友情",
    title: "贈汪倫",
    lines: "李白乘舟將欲行，忽聞岸上踏歌聲。<br>桃花潭水深千尺，不及汪倫送我情。",
    notes: [
      ["畫面", "李白準備乘船離開，朋友在岸上唱歌送別。"],
      ["感情", "詩人感受到朋友真摯深厚的情誼。"],
      ["語文焦點", "用潭水的深，比朋友情誼的深。"]
    ],
    stamp: "friend",
    button: "收集友情章"
  },
  baidi: {
    kicker: "遠行",
    title: "早發白帝城",
    lines: "朝辭白帝彩雲間，千里江陵一日還。<br>兩岸猿聲啼不住，輕舟已過萬重山。",
    notes: [
      ["畫面", "清晨離開白帝城，小船順江而下。"],
      ["感情", "詩句節奏明快，寫出輕鬆暢快的心情。"],
      ["語文焦點", "「輕舟」和「萬重山」形成速度和距離的對比。"]
    ],
    stamp: "imagine",
    button: "收集想像章"
  }
};

const placeCard = document.querySelector(".place-card");
const placeTriggers = document.querySelectorAll(".place-trigger");
const poemCard = document.querySelector(".poem-card");
const poemNotes = document.querySelector(".poem-notes");
const tabButtons = document.querySelectorAll(".tab-button");
const stampButtons = document.querySelectorAll(".stamp-button");
const builderSelects = document.querySelectorAll(".poem-builder select");
const studentLine = document.querySelector("#student-line");

function renderPlace(placeKey) {
  const place = places[placeKey];
  placeCard.innerHTML = `
    <p class="card-kicker">${place.kicker}</p>
    <h3>${place.title}</h3>
    <p>${place.body}</p>
    <p class="thinking">${place.thinking}</p>
  `;
}

function selectPlace(placeKey) {
  placeTriggers.forEach((item) => {
    item.classList.toggle("active", item.dataset.place === placeKey);
  });
  renderPlace(placeKey);
}

function renderPoem(poemKey) {
  const poem = poems[poemKey];
  poemCard.innerHTML = `
    <div>
      <p class="card-kicker">${poem.kicker}</p>
      <h3>${poem.title}</h3>
    </div>
    <p class="poem-lines">${poem.lines}</p>
  `;
  const noteItems = poem.notes
    .map(([term, detail]) => `<div><dt>${term}</dt><dd>${detail}</dd></div>`)
    .join("");
  poemNotes.innerHTML = `
    <h3>讀懂詩句</h3>
    <dl>${noteItems}</dl>
    <button class="stamp-button" type="button" data-stamp="${poem.stamp}">${poem.button}</button>
  `;
  bindStampButtons();
}

function collectStamp(stampName) {
  const slot = document.querySelector(`[data-stamp-slot="${stampName}"]`);
  if (slot) {
    slot.classList.remove("empty");
  }
  document.querySelectorAll(`[data-stamp="${stampName}"]`).forEach((button) => {
    button.classList.add("collected");
    button.textContent = "已收集";
  });
}

function bindStampButtons() {
  document.querySelectorAll(".stamp-button").forEach((button) => {
    button.addEventListener("click", () => collectStamp(button.dataset.stamp));
  });
}

function updateStudentLine() {
  const scene = document.querySelector("#scene-word").value;
  const image = document.querySelector("#image-word").value;
  const feeling = document.querySelector("#feeling-word").value;
  studentLine.textContent = `${scene}像${image}，使我想到${feeling}。`;
}

placeTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    selectPlace(trigger.dataset.place);
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    renderPoem(button.dataset.poem);
  });
});

builderSelects.forEach((select) => {
  select.addEventListener("change", updateStudentLine);
});

bindStampButtons();

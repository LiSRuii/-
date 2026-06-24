# 小六記敘文增潤寫作電子教材 — 實作計畫

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 建立一份單頁 HTML 互動式記敘文寫作教材，供一對一補習使用，包含 6 個教學單元 + 寫作錦囊。

**Architecture:** 單一 `index.html` 檔案，內嵌所有 CSS 與 JavaScript。採用單頁長卷式佈局，6 個單元垂直排列，每個單元內含三個頁籤（知識點/範文賞析/實戰練習）。零外部框架依賴。

**Tech Stack:** HTML5, CSS3 (custom properties), vanilla JavaScript ES6, Google Fonts (Noto Serif TC + Noto Sans TC)

---

## 檔案結構

```
寫作增潤課程/
├── index.html              ← 唯一核心檔案
└── images/                 ← 圖片資料夾
    ├── unit-1.png ~ unit-6.png   ← 單元主題插圖（先用佔位圖）
    └── icon-*.png                 ← 頁籤圖標（先用佔位圖）
```

---

## Phase 1：HTML 骨架 + CSS 樣式 + JS 互動框架

> **產出：可在瀏覽器中打開的空白模板，包含完整導航、6 個單元殼層、頁籤切換功能。**

### Task 1.1：建立基礎 HTML 文件結構

**Files:**
- Create: `index.html`

- [ ] **Step 1: 寫入 HTML5 文件基礎結構**

在 `/Users/lishuairui/寫作增潤課程/index.html` 建立檔案，寫入以下內容：

```html
<!DOCTYPE html>
<html lang="zh-HK">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>記敘文增潤寫作教材</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@600;700&display=swap" rel="stylesheet">

    <style>
        /* CSS 將在後續步驟中填入 */
    </style>
</head>
<body>

    <!-- 內容將在後續步驟中填入 -->

    <script>
        // JavaScript 將在後續步驟中填入
    </script>
</body>
</html>
```

- [ ] **Step 2: 用瀏覽器打開確認**

Run: `open /Users/lishuairui/寫作增潤課程/index.html`
Expected: 瀏覽器打開，顯示空白頁面，標題列顯示「記敘文增潤寫作教材」。

---

### Task 1.2：寫入 CSS Custom Properties 與全局樣式

**Files:**
- Modify: `index.html` — 在 `<style>` 標籤內寫入 CSS

- [ ] **Step 1: 在 `<style>` 標籤內寫入 CSS 變數與重置樣式**

```css
/* ===== CSS Custom Properties ===== */
:root {
    /* 主色調 */
    --color-primary: #1a2744;        /* 墨藍/藏青 */
    --color-primary-light: #2c3e6b;
    --color-accent: #c8963e;         /* 暖金 */
    --color-accent-light: #f5e6cc;   /* 淡金底色 */
    --color-accent-border: #d4a853;  /* 金色邊框 */

    /* 中性色 */
    --color-bg: #faf8f5;
    --color-white: #ffffff;
    --color-text: #2c2c2c;
    --color-text-light: #5a5a5a;
    --color-border: #e0dcd5;
    --color-border-light: #f0ede6;

    /* 功能色 */
    --color-key-point-bg: #fef9ed;
    --color-key-point-border: #d4a853;
    --color-highlight: #fff3c4;
    --color-answer-bg: #f0f7f0;
    --color-answer-border: #8cb88c;

    /* 字體 */
    --font-heading: 'Noto Serif TC', '標楷體', '新細明體', serif;
    --font-body: 'Noto Sans TC', '微軟正黑體', '蘋方', sans-serif;

    /* 間距 */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2.5rem;
    --spacing-xl: 4rem;

    /* 圓角 */
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;

    /* 陰影 */
    --shadow-card: 0 2px 12px rgba(0,0,0,0.06);
    --shadow-nav: 0 2px 8px rgba(0,0,0,0.08);
}

/* ===== 全局重置 ===== */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-body);
    color: var(--color-text);
    background-color: var(--color-bg);
    line-height: 1.8;
    -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
    font-family: var(--font-heading);
    color: var(--color-primary);
    line-height: 1.4;
}

a {
    color: var(--color-primary);
    text-decoration: none;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

- [ ] **Step 2: 瀏覽器重整確認無 CSS 語法錯誤**

Open browser DevTools (F12) → Console tab.
Expected: 無 CSS 相關錯誤。

---

### Task 1.3：寫入導航列 (Navbar)

**Files:**
- Modify: `index.html` — 在 `<body>` 內寫入導航列 HTML；在 `<style>` 內寫入導航列 CSS

- [ ] **Step 1: 在 `<body>` 最上方寫入導航列 HTML**

```html
<!-- ===== 導航列 ===== -->
<nav class="navbar" id="navbar">
    <div class="navbar-inner">
        <span class="navbar-brand">📝 記敘文增潤寫作教材</span>
        <button class="nav-toc-btn" id="tocBtn" aria-label="目錄">
            <span class="toc-icon">☰</span>
            <span>目錄</span>
        </button>
    </div>
    <!-- 目錄下拉 -->
    <div class="toc-dropdown" id="tocDropdown">
        <a href="#unit1">單元一：記敘文的骨架</a>
        <a href="#unit2">單元二：鳳頭 — 抓人的開頭</a>
        <a href="#unit3">單元三：豬肚 — 把事情寫具體</a>
        <a href="#unit4">單元四：豹尾 — 結尾的藝術</a>
        <a href="#unit5">單元五：語言的打磨</a>
        <a href="#unit6">單元六：從好到精</a>
        <a href="#toolkit">寫作錦囊</a>
    </div>
</nav>
```

- [ ] **Step 2: 在 `<style>` 內寫入導航列 CSS（接續在全局樣式之後）**

```css
/* ===== 導航列 ===== */
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: var(--color-primary);
    color: var(--color-white);
    box-shadow: var(--shadow-nav);
}

.navbar-inner {
    max-width: 960px;
    margin: 0 auto;
    padding: var(--spacing-sm) var(--spacing-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
}

.nav-toc-btn {
    background: rgba(255,255,255,0.15);
    color: var(--color-white);
    border: 1px solid rgba(255,255,255,0.25);
    padding: 0.4rem 1rem;
    border-radius: var(--radius-sm);
    cursor: pointer;
    font-family: var(--font-body);
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: background 0.2s;
}

.nav-toc-btn:hover {
    background: rgba(255,255,255,0.25);
}

.toc-icon {
    font-size: 1.1rem;
}

/* 目錄下拉 */
.toc-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-card);
    min-width: 280px;
    padding: var(--spacing-xs) 0;
    z-index: 1001;
}

.toc-dropdown.open {
    display: block;
}

.toc-dropdown a {
    display: block;
    padding: 0.6rem 1.2rem;
    color: var(--color-text);
    font-size: 0.95rem;
    transition: background 0.15s;
}

.toc-dropdown a:hover {
    background: var(--color-accent-light);
    color: var(--color-primary);
}
```

- [ ] **Step 3: 瀏覽器重整確認導航列顯示**

Expected: 頁面頂部出現深藍色導航列，左側顯示「📝 記敘文增潤寫作教材」，右側顯示「☰ 目錄」按鈕。

---

### Task 1.4：寫入頁面主要內容區與單元殼層

**Files:**
- Modify: `index.html` — 在導航列之後寫入主要內容 HTML；在 `<style>` 內寫入相關 CSS

- [ ] **Step 1: 寫入主要內容區 HTML（6 個空單元 + 寫作錦囊殼層）**

```html
<!-- ===== 主要內容區 ===== -->
<main class="main-content">

    <!-- 頁面標題區 -->
    <header class="page-header">
        <h1>記敘文增潤寫作教材</h1>
        <p class="page-subtitle">小學六年級 · 拔尖進階 · 一對一補習適用</p>
    </header>

    <!-- 單元一 -->
    <section class="unit-card" id="unit1">
        <div class="unit-header">
            <img src="images/unit-1.png" alt="" class="unit-illustration" loading="lazy">
            <div class="unit-title-group">
                <h2>單元一：記敘文的骨架</h2>
                <p class="unit-subtitle">六要素與敘事結構</p>
            </div>
            <label class="progress-check">
                <input type="checkbox" class="unit-checkbox" data-unit="1">
                <span class="check-label">完成</span>
            </label>
        </div>
        <div class="tabs">
            <button class="tab-btn active" data-tab="knowledge" data-unit="1">知識點</button>
            <button class="tab-btn" data-tab="reading" data-unit="1">範文賞析</button>
            <button class="tab-btn" data-tab="practice" data-unit="1">實戰練習</button>
        </div>
        <div class="tab-content">
            <div class="tab-panel active" data-panel="knowledge" data-unit="1">
                <p class="placeholder-text">知識點內容將在 Phase 2 填充。</p>
            </div>
            <div class="tab-panel" data-panel="reading" data-unit="1">
                <p class="placeholder-text">範文賞析內容將在 Phase 2 填充。</p>
            </div>
            <div class="tab-panel" data-panel="practice" data-unit="1">
                <p class="placeholder-text">實戰練習內容將在 Phase 2 填充。</p>
            </div>
        </div>
    </section>

    <!-- 單元二（殼層結構同上，替換 id/標題/插圖） -->
    <section class="unit-card" id="unit2">
        <div class="unit-header">
            <img src="images/unit-2.png" alt="" class="unit-illustration" loading="lazy">
            <div class="unit-title-group">
                <h2>單元二：鳳頭 — 寫一個抓人的開頭</h2>
                <p class="unit-subtitle">四種開頭策略</p>
            </div>
            <label class="progress-check">
                <input type="checkbox" class="unit-checkbox" data-unit="2">
                <span class="check-label">完成</span>
            </label>
        </div>
        <!-- tabs + tab-content 結構同單元一，data-unit 改為 "2" -->
    </section>

    <!-- 單元三（殼層結構同上，替換 id/標題/插圖） -->
    <section class="unit-card" id="unit3">
        <!-- 結構同上，data-unit="3" -->
    </section>

    <!-- 單元四（殼層結構同上） -->
    <section class="unit-card" id="unit4">
        <!-- 結構同上，data-unit="4" -->
    </section>

    <!-- 單元五（殼層結構同上） -->
    <section class="unit-card" id="unit5">
        <!-- 結構同上，data-unit="5" -->
    </section>

    <!-- 單元六（殼層結構同上） -->
    <section class="unit-card" id="unit6">
        <!-- 結構同上，data-unit="6" -->
    </section>

    <!-- 寫作錦囊 -->
    <section class="toolkit-section" id="toolkit">
        <h2>寫作錦囊</h2>
        <p class="placeholder-text">寫作錦囊內容將在 Phase 4 填充。</p>
    </section>

</main>

<!-- 返回頂部按鈕 -->
<button class="back-to-top" id="backToTop" aria-label="返回頂部">↑</button>

<!-- 頁尾 -->
<footer class="page-footer">
    <p>© 2026 記敘文增潤寫作教材 · 僅供教學使用</p>
</footer>
```

- [ ] **Step 2: 在 `<style>` 內寫入主要內容區 CSS**

```css
/* ===== 主要內容區 ===== */
.main-content {
    max-width: 960px;
    margin: 0 auto;
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-xl);
}

/* 頁面標題區 */
.page-header {
    text-align: center;
    padding: var(--spacing-xl) 0 var(--spacing-lg);
}

.page-header h1 {
    font-size: 2.2rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-xs);
}

.page-subtitle {
    font-size: 1.05rem;
    color: var(--color-text-light);
}

/* ===== 單元卡片 ===== */
.unit-card {
    background: var(--color-white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-card);
    margin-bottom: var(--spacing-lg);
    overflow: hidden;
    border: 1px solid var(--color-border-light);
}

.unit-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    background: linear-gradient(135deg, #faf8f5 0%, #f0ede6 100%);
    border-bottom: 1px solid var(--color-border);
}

.unit-illustration {
    width: 80px;
    height: 80px;
    border-radius: var(--radius-md);
    object-fit: cover;
    flex-shrink: 0;
    background: var(--color-border-light);
}

.unit-title-group h2 {
    font-size: 1.35rem;
    color: var(--color-primary);
}

.unit-subtitle {
    font-size: 0.9rem;
    color: var(--color-text-light);
    margin-top: 0.2rem;
}

.progress-check {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
    font-size: 0.85rem;
    color: var(--color-text-light);
    user-select: none;
}

.unit-checkbox {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: var(--color-accent);
}

/* ===== 頁籤系統 ===== */
.tabs {
    display: flex;
    border-bottom: 2px solid var(--color-border);
}

.tab-btn {
    flex: 1;
    padding: 0.85rem 1rem;
    border: none;
    background: transparent;
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-text-light);
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
}

.tab-btn:hover {
    color: var(--color-primary);
    background: rgba(26,39,68,0.03);
}

.tab-btn.active {
    color: var(--color-primary);
    font-weight: 700;
}

.tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 20%;
    right: 20%;
    height: 3px;
    background: var(--color-accent);
    border-radius: 2px;
}

/* 頁籤圖標 */
.tab-btn .tab-icon {
    width: 22px;
    height: 22px;
    object-fit: contain;
}

.tab-content {
    padding: var(--spacing-lg);
}

.tab-panel {
    display: none;
}

.tab-panel.active {
    display: block;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ===== 內容元件（基礎樣式，Phase 2-3 會擴充） ===== */
.placeholder-text {
    color: var(--color-text-light);
    font-style: italic;
    text-align: center;
    padding: var(--spacing-lg);
}

.knowledge-card {
    background: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.key-point {
    background: var(--color-key-point-bg);
    border-left: 4px solid var(--color-key-point-border);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-md);
    position: relative;
}

.key-point::before {
    content: '⭐ 重點';
    position: absolute;
    top: -10px;
    left: var(--spacing-sm);
    background: var(--color-accent);
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 10px;
    font-family: var(--font-body);
}

.passage-analysis {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.passage-text {
    background: #fdfcfa;
    padding: var(--spacing-md);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border-light);
    font-size: 1.05rem;
    line-height: 2;
}

.passage-notes {
    background: var(--color-white);
    padding: var(--spacing-md);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
    font-size: 0.9rem;
    color: var(--color-text-light);
}

.exercise-card {
    background: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.exercise-card h4 {
    font-size: 1.05rem;
    margin-bottom: var(--spacing-sm);
    color: var(--color-primary);
}

.exercise-card textarea {
    width: 100%;
    min-height: 120px;
    padding: var(--spacing-sm);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-size: 0.95rem;
    line-height: 1.8;
    resize: vertical;
    margin-bottom: var(--spacing-sm);
}

.answer-block {
    display: none;
    background: var(--color-answer-bg);
    border: 1px solid var(--color-answer-border);
    border-radius: var(--radius-sm);
    padding: var(--spacing-md);
    margin-top: var(--spacing-sm);
}

.answer-block.visible {
    display: block;
    animation: fadeIn 0.3s ease;
}

.btn-reveal {
    background: var(--color-primary);
    color: white;
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: var(--radius-sm);
    cursor: pointer;
    font-family: var(--font-body);
    font-size: 0.9rem;
    transition: background 0.2s;
}

.btn-reveal:hover {
    background: var(--color-primary-light);
}

.btn-reveal.revealed {
    background: var(--color-text-light);
}

/* 手風琴 */
.accordion-toggle {
    width: 100%;
    text-align: left;
    background: var(--color-white);
    border: 1px solid var(--color-border);
    padding: 0.8rem 1rem;
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s;
}

.accordion-toggle:hover {
    background: var(--color-bg);
}

.accordion-toggle::after {
    content: '▸';
    transition: transform 0.3s;
    font-size: 0.8rem;
    color: var(--color-text-light);
}

.accordion-toggle.open::after {
    transform: rotate(90deg);
}

.accordion-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease;
    border: 1px solid transparent;
    border-top: none;
    border-radius: 0 0 var(--radius-sm) var(--radius-sm);
}

.accordion-body.open {
    max-height: 2000px;
    border-color: var(--color-border);
    padding: var(--spacing-md);
}

/* 引導提問卡 */
.prompt-bubble {
    background: #f5f0e8;
    border-radius: var(--radius-md);
    padding: var(--spacing-sm) var(--spacing-md);
    margin-bottom: var(--spacing-md);
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-sm);
    font-size: 0.95rem;
    color: var(--color-text);
}

.prompt-bubble .prompt-icon {
    flex-shrink: 0;
    font-size: 1.2rem;
}

/* 對比切換按鈕 */
.compare-toggle {
    display: flex;
    gap: 0.5rem;
    margin-bottom: var(--spacing-sm);
}

.compare-btn {
    padding: 0.4rem 1rem;
    border: 1px solid var(--color-border);
    background: var(--color-white);
    border-radius: var(--radius-sm);
    cursor: pointer;
    font-family: var(--font-body);
    font-size: 0.9rem;
    transition: all 0.2s;
}

.compare-btn.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
}

.compare-version {
    display: none;
}

.compare-version.active {
    display: block;
}

/* ===== 寫作錦囊 ===== */
.toolkit-section {
    background: var(--color-white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-card);
    padding: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    border: 1px solid var(--color-border-light);
}

.toolkit-section h2 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
}

/* ===== 返回頂部 ===== */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--color-primary);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 999;
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: var(--color-primary-light);
    transform: translateY(-2px);
}

/* ===== 頁尾 ===== */
.page-footer {
    text-align: center;
    padding: var(--spacing-md);
    color: var(--color-text-light);
    font-size: 0.85rem;
    border-top: 1px solid var(--color-border);
    margin-top: var(--spacing-lg);
}

/* ===== 響應式 ===== */
@media (max-width: 768px) {
    .navbar-brand {
        font-size: 1rem;
    }

    .page-header h1 {
        font-size: 1.6rem;
    }

    .unit-header {
        flex-wrap: wrap;
        padding: var(--spacing-sm);
    }

    .unit-illustration {
        width: 60px;
        height: 60px;
    }

    .unit-title-group h2 {
        font-size: 1.15rem;
    }

    .tabs {
        overflow-x: auto;
    }

    .tab-btn {
        font-size: 0.85rem;
        padding: 0.7rem 0.6rem;
        white-space: nowrap;
    }

    .tab-content {
        padding: var(--spacing-sm);
    }

    .passage-analysis {
        grid-template-columns: 1fr;
    }

    .back-to-top {
        bottom: 20px;
        right: 20px;
    }
}
```

- [ ] **Step 3: 瀏覽器重整確認佈局**

Expected: 顯示頁面標題、6 個單元殼層卡片、寫作錦囊區、頁尾。每個單元卡片有標題、插圖位置、三個頁籤按鈕。

---

### Task 1.5：寫入 JavaScript 互動模組

**Files:**
- Modify: `index.html` — 在 `<script>` 標籤內寫入四個 JS 模組

- [ ] **Step 1: 在 `<script>` 標籤內寫入四個互動模組**

```javascript
document.addEventListener('DOMContentLoaded', () => {

    // ===== 模組一：TabSwitcher — 頁籤切換 =====
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const unit = btn.dataset.unit;
            const tab = btn.dataset.tab;

            // 移除該單元內所有按鈕 active
            const siblingBtns = document.querySelectorAll(`.tab-btn[data-unit="${unit}"]`);
            siblingBtns.forEach(b => b.classList.remove('active'));

            // 移除該單元內所有面板 active
            const siblingPanels = document.querySelectorAll(`.tab-panel[data-unit="${unit}"]`);
            siblingPanels.forEach(p => p.classList.remove('active'));

            // 啟用當前按鈕
            btn.classList.add('active');

            // 顯示對應面板
            const targetPanel = document.querySelector(`.tab-panel[data-panel="${tab}"][data-unit="${unit}"]`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // ===== 模組二：Accordion — 手風琴展開/收起 =====
    document.querySelectorAll('.accordion-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('open');
            const body = toggle.nextElementSibling;
            if (body && body.classList.contains('accordion-body')) {
                body.classList.toggle('open');
            }
        });
    });

    // ===== 模組三：AnswerReveal — 答案揭示 =====
    document.querySelectorAll('.btn-reveal').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const answerBlock = document.getElementById(targetId);
            if (answerBlock) {
                const isVisible = answerBlock.classList.contains('visible');
                if (isVisible) {
                    answerBlock.classList.remove('visible');
                    btn.classList.remove('revealed');
                    btn.textContent = '對答案';
                } else {
                    answerBlock.classList.add('visible');
                    btn.classList.add('revealed');
                    btn.textContent = '隱藏答案';
                }
            }
        });
    });

    // ===== 模組四：ProgressStore — 進度儲存 =====
    const STORAGE_KEY = 'narrative-writing-progress';

    // 載入已儲存進度
    function loadProgress() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            document.querySelectorAll('.unit-checkbox').forEach(cb => {
                const unit = cb.dataset.unit;
                if (saved[unit]) {
                    cb.checked = true;
                }
            });
        } catch (e) {
            // localStorage 不可用或資料損壞，略過
        }
    }

    // 儲存進度
    function saveProgress(unit, checked) {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            saved[unit] = checked;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
        } catch (e) {
            // localStorage 不可用，略過
        }
    }

    document.querySelectorAll('.unit-checkbox').forEach(cb => {
        cb.addEventListener('change', () => {
            saveProgress(cb.dataset.unit, cb.checked);
        });
    });

    loadProgress();

    // ===== 目錄下拉切換 =====
    const tocBtn = document.getElementById('tocBtn');
    const tocDropdown = document.getElementById('tocDropdown');

    if (tocBtn && tocDropdown) {
        tocBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tocDropdown.classList.toggle('open');
        });

        // 點擊目錄連結後關閉下拉
        tocDropdown.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                tocDropdown.classList.remove('open');
            });
        });

        // 點擊頁面其他地方關閉目錄
        document.addEventListener('click', () => {
            tocDropdown.classList.remove('open');
        });
    }

    // ===== 返回頂部按鈕 =====
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== 對比切換 =====
    document.querySelectorAll('.compare-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const group = btn.closest('.compare-toggle');
            const targetId = btn.dataset.compareTarget;

            // 移除同組所有 active
            group.querySelectorAll('.compare-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 顯示對應版本
            const container = group.nextElementSibling;
            if (container) {
                container.querySelectorAll('.compare-version').forEach(v => v.classList.remove('active'));
                const target = container.querySelector(`#${targetId}`);
                if (target) {
                    target.classList.add('active');
                }
            }
        });
    });

});
```

- [ ] **Step 2: 瀏覽器重整並測試互動**

測試項目：
1. 切換頁籤按鈕 → 切換顯示內容區塊（目前顯示 placeholder 文字）
2. 點擊目錄按鈕 → 下拉選單展開/收起
3. 點擊單元 checkbox → 重整頁面後進度保留
4. 向下滾動 → 返回頂部按鈕出現；點擊 → 回到頂部

---

### Task 1.6：Phase 1 檢查點

- [ ] **Step 1: 在瀏覽器中打開並完整檢查**

Run: `open /Users/lishuairui/寫作增潤課程/index.html`

檢查清單：
- [ ] 導航列正常顯示（深藍底色、品牌名、目錄按鈕）
- [ ] 6 個單元卡片垂直排列，各有標題和三個頁籤
- [ ] 頁籤切換正常（點擊按鈕 → 內容區切換）
- [ ] 目錄下拉正常（點擊 → 展開；點擊連結 → 關閉）
- [ ] 進度 checkbox 可勾選，重整後保留
- [ ] 返回頂部按鈕在滾動後出現
- [ ] 響應式：縮小視窗至 iPad 寬度（768px），佈局為單欄
- [ ] DevTools Console 無 JS 錯誤

---

## Phase 2：單元一至三內容填充

> **產出：教材前半部完整內容（基礎 + 描寫核心），包含所有知識點、範文、練習題的文字內容。**
> **⚠️ 此階段完成後需交付用戶檢查，確認後才進入 Phase 3。**

### Task 2.1：填充單元一完整內容

**Files:**
- Modify: `index.html` — 替換單元一的 placeholder，寫入知識點/範文/練習

- [ ] **Step 1: 寫入單元一「知識點」頁籤內容**

找到單元一的 `<div class="tab-panel active" data-panel="knowledge" data-unit="1">`，替換 placeholder：

```html
<div class="tab-panel active" data-panel="knowledge" data-unit="1">

    <!-- 引導提問 -->
    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「你還記得上次寫的記敘文，老師給了什麼評語嗎？你覺得一篇好的記敘文，最重要的是什麼？」</span>
    </div>

    <!-- 知識點一：六要素 -->
    <div class="knowledge-card">
        <h3>一、記敘文的六要素</h3>
        <p>每一篇記敘文，都必須包含以下六個要素，缺一不可：</p>
        <table class="element-table">
            <tr><th>要素</th><th>說明</th><th>例子（《運動會的一天》）</th></tr>
            <tr><td><strong>時間</strong></td><td>何時發生？</td><td>上星期五、一個晴朗的早晨</td></tr>
            <tr><td><strong>地點</strong></td><td>在哪裡發生？</td><td>學校操場</td></tr>
            <tr><td><strong>人物</strong></td><td>有哪些人？</td><td>我、同學大明、班主任陳老師</td></tr>
            <tr><td><strong>起因</strong></td><td>為什麼發生？</td><td>一年一度的學校運動會舉行在即</td></tr>
            <tr><td><strong>經過</strong></td><td>如何發生？（最詳細）</td><td>比賽過程、跌倒、堅持跑完全程</td></tr>
            <tr><td><strong>結果</strong></td><td>最終怎樣？</td><td>雖然沒有得獎，但贏得全場掌聲</td></tr>
        </table>
    </div>

    <!-- 知識點二：敘事順序 -->
    <div class="knowledge-card">
        <h3>二、三種敘事順序</h3>

        <div class="accordion">
            <button class="accordion-toggle open">1. 順敘（按時間先後）— 最穩妥，考試安全牌</button>
            <div class="accordion-body open">
                <p>按事件發生的先後次序來寫。特點是條理清晰，讀者容易跟上。</p>
                <p><strong>例子：</strong>早上起床 → 穿上運動服 → 到達操場 → 比賽開始 → 衝線 → 頒獎</p>
                <p><em>適用場合：</em>考試作文、學校生活記敘、大部分日常寫作。</p>
            </div>
        </div>

        <div class="accordion" style="margin-top: 0.5rem;">
            <button class="accordion-toggle">2. 倒敘（先說結局）— 製造懸念，吸引讀者</button>
            <div class="accordion-body">
                <p>先把故事的結局或最精彩的部分放在開頭，再回頭敘述事件經過。</p>
                <p><strong>例子：</strong>「當我接過獎盃的那一刻，腦海中浮現起三個月來的艱苦訓練⋯⋯」→ 回頭寫訓練過程</p>
                <p><em>適用場合：</em>比賽記敘、難忘的經歷、想強調結果的文章。</p>
            </div>
        </div>

        <div class="accordion" style="margin-top: 0.5rem;">
            <button class="accordion-toggle">3. 插敘（中途補充）— 豐富層次，提供背景</button>
            <div class="accordion-body">
                <p>在順敘的過程中，暫時插入一段相關的回憶或背景說明，再回到主線繼續敘述。</p>
                <p><strong>例子：</strong>寫比賽中途 → 插入「我想起去年在同一場地落敗的經歷」→ 回到比賽</p>
                <p><em>適用場合：</em>需要解釋人物動機、補充背景資訊時。</p>
            </div>
        </div>
    </div>

    <!-- 知識點三：選擇策略 -->
    <div class="knowledge-card">
        <h3>三、如何選擇敘事順序？</h3>
        <table class="simple-table">
            <tr><th>場景</th><th>建議順序</th><th>原因</th></tr>
            <tr><td>考試／測驗</td><td>順敘</td><td>最安全，不易出錯，評卷員容易理解</td></tr>
            <tr><td>比賽／精彩事件</td><td>倒敘</td><td>先展示高潮，製造懸念，吸引讀者</td></tr>
            <tr><td>人物回憶</td><td>插敘</td><td>穿插往事，讓人物形象更立體</td></tr>
            <tr><td>創作故事</td><td>自由選擇</td><td>根據你想達到的效果來決定</td></tr>
        </table>
    </div>

</div>
```

- [ ] **Step 2: 寫入單元一「範文賞析」頁籤內容**

找到單元一的 `<div class="tab-panel" data-panel="reading" data-unit="1">`，替換 placeholder：

```html
<div class="tab-panel" data-panel="reading" data-unit="1">

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「我們一起來讀這篇短文。你一邊讀，一邊在心裡找出六個要素在哪裡。」</span>
    </div>

    <h3>範文：《運動會的一天》</h3>

    <div class="passage-analysis">
        <div class="passage-text" id="passage-u1">
            <p><span class="highlight-elem" data-elem="time">上星期五的清晨</span>，陽光還帶著一絲涼意。<span class="highlight-elem" data-elem="place">學校操場</span>上早已熱鬧非凡，彩旗在風中飄揚，一年一度的運動會即將開始。</p>

            <p><span class="highlight-elem" data-elem="people">我和同學大明</span>站在起跑線前，等待四乘一百米接力賽的開始。<span class="highlight-elem" data-elem="cause">這是我們小學階段最後一次運動會</span>，每個人都想為班級爭光。</p>

            <p>「呯！」發令槍響了。第一棒的大明如箭一般衝了出去，順利地把棒交到我手上。<span class="highlight-elem" data-elem="process">我拼盡全力向前奔跑，耳邊只有風聲和同學的吶喊。就在轉彎的時候，我腳下一滑，整個人摔倒在跑道上。膝蓋傳來一陣刺痛，我幾乎想要放棄。（此處開始為事件高潮）但當我抬起頭，看到跑道旁同學們焦急的眼神，聽到他們大聲喊著我的名字，一股力量從心底湧起。我咬緊牙關，爬起來繼續向前跑。</span></p>

            <p>我最終把棒交到第三棒同學手中。<span class="highlight-elem" data-elem="result">我們班沒有拿到名次，但當我跑回班級隊伍時，迎接我的是雷鳴般的掌聲。班主任陳老師拍拍我的肩說：「你沒有放棄，這就是最好的成績。」</span></p>
        </div>
        <div class="passage-notes" id="notes-u1">
            <h4>📝 結構拆解</h4>
            <p><strong>開頭</strong>：交代時間、地點、背景（運動會）</p>
            <p><strong>發展</strong>：接力賽開始，順利交棒</p>
            <p><strong>高潮</strong>：跌倒後的掙扎與爬起</p>
            <p><strong>結尾</strong>：雖然落敗，但獲得比名次更重要的東西</p>
            <hr style="margin: 1rem 0; border-color: var(--color-border);">
            <h4>🔍 六要素標註說明</h4>
            <p>點擊左側範文中有顏色的句子，會自動標出對應的要素。</p>
            <ul style="margin-top: 0.5rem; padding-left: 1.2rem;">
                <li><span style="background:#ffe0e0;padding:1px 6px;border-radius:3px;">紅色</span> = 時間</li>
                <li><span style="background:#e0f0ff;padding:1px 6px;border-radius:3px;">藍色</span> = 地點</li>
                <li><span style="background:#e0ffe0;padding:1px 6px;border-radius:3px;">綠色</span> = 人物</li>
                <li><span style="background:#fff3cd;padding:1px 6px;border-radius:3px;">黃色</span> = 起因</li>
                <li><span style="background:#ffe8d0;padding:1px 6px;border-radius:3px;">橙色</span> = 經過</li>
                <li><span style="background:#f0e0ff;padding:1px 6px;border-radius:3px;">紫色</span> = 結果</li>
            </ul>
        </div>
    </div>

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「如果這篇文章用倒敘來寫，你會把哪一段放在最開頭？」</span>
    </div>
</div>
```

- [ ] **Step 3: 寫入單元一「範文賞析」CSS 樣式（加在 `<style>` 內）**

```css
/* 六要素顏色標註 */
.highlight-elem[data-elem="time"] { background: #ffe0e0; padding: 1px 4px; border-radius: 3px; cursor: pointer; border-bottom: 2px dashed #e0a0a0; }
.highlight-elem[data-elem="place"] { background: #e0f0ff; padding: 1px 4px; border-radius: 3px; cursor: pointer; border-bottom: 2px dashed #a0c0e0; }
.highlight-elem[data-elem="people"] { background: #e0ffe0; padding: 1px 4px; border-radius: 3px; cursor: pointer; border-bottom: 2px dashed #a0d0a0; }
.highlight-elem[data-elem="cause"] { background: #fff3cd; padding: 1px 4px; border-radius: 3px; cursor: pointer; border-bottom: 2px dashed #e0d080; }
.highlight-elem[data-elem="process"] { background: #ffe8d0; padding: 1px 4px; border-radius: 3px; cursor: pointer; border-bottom: 2px dashed #e0b080; }
.highlight-elem[data-elem="result"] { background: #f0e0ff; padding: 1px 4px; border-radius: 3px; cursor: pointer; border-bottom: 2px dashed #c0a0e0; }

/* 表格 */
.element-table, .simple-table {
    width: 100%;
    border-collapse: collapse;
    margin: var(--spacing-sm) 0;
    font-size: 0.9rem;
}

.element-table th, .simple-table th {
    background: var(--color-primary);
    color: white;
    padding: 0.6rem 0.8rem;
    text-align: left;
    font-weight: 500;
}

.element-table td, .simple-table td {
    padding: 0.6rem 0.8rem;
    border-bottom: 1px solid var(--color-border-light);
}

.element-table tr:hover, .simple-table tr:hover {
    background: var(--color-bg);
}
```

- [ ] **Step 4: 寫入單元一「實戰練習」頁籤內容**

找到單元一的 `<div class="tab-panel" data-panel="practice" data-unit="1">`，替換 placeholder：

```html
<div class="tab-panel" data-panel="practice" data-unit="1">

    <!-- 練習一：填空 -->
    <div class="exercise-card">
        <h4>練習一：找出六要素（填空）</h4>
        <p>閱讀以下新聞報導，在空格中填寫對應的六要素：</p>
        <blockquote class="exercise-passage">
            <p>昨日（星期六）下午三時，一名小六學生陳小明在放學回家途中，途經公園時聽到微弱的貓叫聲。他循聲尋找，發現一隻小貓被困在排水渠中。小明沒有猶豫，立即打電話給消防處求助。消防員到場後，用了三十分鐘將小貓安全救出。貓主李太對小明感激不盡，送上感謝卡致意。</p>
        </blockquote>
        <table class="simple-table">
            <tr><th>要素</th><th>你的答案</th></tr>
            <tr><td>時間</td><td><input type="text" class="fill-input" placeholder="請填寫⋯⋯"></td></tr>
            <tr><td>地點</td><td><input type="text" class="fill-input" placeholder="請填寫⋯⋯"></td></tr>
            <tr><td>人物</td><td><input type="text" class="fill-input" placeholder="請填寫⋯⋯"></td></tr>
            <tr><td>起因</td><td><input type="text" class="fill-input" placeholder="請填寫⋯⋯"></td></tr>
            <tr><td>經過</td><td><input type="text" class="fill-input" placeholder="請填寫⋯⋯"></td></tr>
            <tr><td>結果</td><td><input type="text" class="fill-input" placeholder="請填寫⋯⋯"></td></tr>
        </table>
        <button class="btn-reveal" data-target="answer-u1-e1">對答案</button>
        <div class="answer-block" id="answer-u1-e1">
            <p><strong>參考答案：</strong></p>
            <p>時間 — 昨日（星期六）下午三時 | 地點 — 公園 | 人物 — 陳小明、消防員、貓主李太 | 起因 — 聽到貓叫聲，發現小貓被困排水渠 | 經過 — 致電消防處求助，消防員用三十分鐘救出小貓 | 結果 — 小貓安全獲救，貓主致謝</p>
        </div>
    </div>

    <!-- 練習二：排序 -->
    <div class="exercise-card">
        <h4>練習二：重組順序（排序）</h4>
        <p>以下句子次序被打亂了，請把它們按正確順序排列：</p>
        <ol class="sort-list">
            <li>A. 最後，我們一起收拾東西，依依不捨地離開沙灘。</li>
            <li>B. 上星期日，我和家人到淺水灣游泳。</li>
            <li>C. 期間，我們還堆了一座很大的沙城堡。</li>
            <li>D. 到達後，我們先換上泳衣，然後衝進清涼的海水。</li>
        </ol>
        <p><strong>正確順序：</strong> <input type="text" class="fill-input" style="width: 120px;" placeholder="例：B→D→C→A"></p>
        <button class="btn-reveal" data-target="answer-u1-e2">對答案</button>
        <div class="answer-block" id="answer-u1-e2">
            <p><strong>參考答案：B → D → C → A</strong></p>
            <p>解說：按時間順序 — 先交代日期和目的地(B)，然後到達後的動作(D)，接著寫活動過程(C)，最後是結束離開(A)。</p>
        </div>
    </div>

    <!-- 練習三：改寫 -->
    <div class="exercise-card">
        <h4>練習三：順敘改倒敘（改寫挑戰）</h4>
        <p>以下是一段順敘的短文，請你把它改寫成<strong>倒敘</strong>版本：</p>
        <blockquote class="exercise-passage">
            <p>今天早上，媽媽帶我去參加鋼琴比賽。我緊張地走進比賽場地，手心全是汗。輪到我上台時，我的腦中一片空白。但當我坐下，手指觸碰到琴鍵的那一刻，所有緊張都消失了。我順利完成演奏，最後還拿到了亞軍。</p>
        </blockquote>
        <textarea placeholder="從「拿到亞軍的那一刻」開始寫你的倒敘版本⋯⋯"></textarea>
        <button class="btn-reveal" data-target="answer-u1-e3">參考改寫</button>
        <div class="answer-block" id="answer-u1-e3">
            <p><strong>參考改寫（倒敘版）：</strong></p>
            <p>「恭喜你獲得亞軍！」當評審宣佈結果的那一刻，我簡直不敢相信自己的耳朵。我站在台上，捧著獎盃，腦海中卻浮現起今天早上的一幕幕——</p>
            <p>今天早上，媽媽帶我來參加鋼琴比賽。走進比賽場地時，我的手心全是汗，心跳快得像要從胸口跳出來⋯⋯（之後接回順敘內容）</p>
        </div>
    </div>

</div>
```

- [ ] **Step 5: 加入練習相關的 CSS 樣式**

```css
/* 填空輸入框 */
.fill-input {
    padding: 0.4rem 0.6rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-size: 0.9rem;
    width: 100%;
    max-width: 300px;
}

.fill-input:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 2px rgba(200,150,62,0.15);
}

/* 練習引用段落 */
.exercise-passage {
    background: #fdfcfa;
    border-left: 3px solid var(--color-border);
    padding: var(--spacing-sm) var(--spacing-md);
    margin: var(--spacing-sm) 0;
    font-size: 1rem;
    line-height: 2;
}

/* 排序列表 */
.sort-list {
    padding-left: 1.5rem;
    margin: var(--spacing-sm) 0;
}

.sort-list li {
    margin-bottom: 0.4rem;
    line-height: 1.8;
}
```

---

### Task 2.2：填充單元二完整內容

**Files:**
- Modify: `index.html` — 替換單元二的 placeholder，寫入知識點/範文/練習

- [ ] **Step 1: 寫入單元二「知識點」頁籤內容**

找到單元二的 `<div class="tab-panel active" data-panel="knowledge" data-unit="2">`（需手動補上 HTML 殼層後），寫入：

```html
<div class="tab-panel active" data-panel="knowledge" data-unit="2">

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「你有沒有試過看一本書，第一段就讓你很想繼續看下去？你還記得那第一段是怎樣的嗎？」</span>
    </div>

    <div class="knowledge-card">
        <h3>一、為什麼開頭那麼重要？</h3>
        <p>開頭是讀者對你這篇文章的<strong>第一印象</strong>。一個好開頭能做到三件事：</p>
        <ul style="padding-left: 1.5rem; margin-top: 0.5rem;">
            <li>🎯 <strong>吸引注意</strong> — 讓讀者想繼續看下去</li>
            <li>🎯 <strong>定下基調</strong> — 讓讀者知道這是一篇什麼風格的文章</li>
            <li>🎯 <strong>暗示方向</strong> — 給讀者一個繼續閱讀的理由</li>
        </ul>
    </div>

    <div class="knowledge-card">
        <h3>二、四種開頭策略</h3>

        <div class="accordion">
            <button class="accordion-toggle open">1. 開門見山式 — 直接入題，不繞圈子</button>
            <div class="accordion-body open">
                <p><strong>寫法：</strong>第一句就直接交代文章的主題或事件。</p>
                <blockquote class="example-quote">「那天，我做了一件至今難忘的事。」</blockquote>
                <p><strong>優點：</strong>清晰直接，讀者馬上知道你要寫什麼。</p>
                <p><strong>適用：</strong>考試作文、學校生活記敘。是最穩妥的寫法。</p>
            </div>
        </div>

        <div class="accordion" style="margin-top: 0.5rem;">
            <button class="accordion-toggle">2. 懸念式 — 拋出問題或懸疑，吊人胃口</button>
            <div class="accordion-body">
                <p><strong>寫法：</strong>用問題、神秘陳述或驚人事件開頭，讓讀者好奇。</p>
                <blockquote class="example-quote">「如果你只有一天的生命，你會做什麼？這個問題，我在小六那年找到了答案。」</blockquote>
                <p><strong>優點：</strong>極具吸引力，讀者會急著想知道答案。</p>
                <p><strong>適用：</strong>比賽記敘、驚險經歷、深刻的體悟。</p>
            </div>
        </div>

        <div class="accordion" style="margin-top: 0.5rem;">
            <button class="accordion-toggle">3. 場景式 — 描寫環境，營造氣氛</button>
            <div class="accordion-body">
                <p><strong>寫法：</strong>從一個具體的場景描寫開始，把讀者帶入情境。</p>
                <blockquote class="example-quote">「陽光穿過窗簾的縫隙，在地板上畫出一道金色的線。微風吹進來，帶來茉莉花的香氣。那個下午，一切都很平靜——直到電話鈴聲響起。」</blockquote>
                <p><strong>優點：</strong>有畫面感，讀者彷彿身臨其境。</p>
                <p><strong>適用：</strong>抒情記敘、回憶往事、描寫性強的文章。</p>
            </div>
        </div>

        <div class="accordion" style="margin-top: 0.5rem;">
            <button class="accordion-toggle">4. 對話式 — 用人物的話開場，有臨場感</button>
            <div class="accordion-body">
                <p><strong>寫法：</strong>以一句對話開始，讓人物立刻「出場」。</p>
                <blockquote class="example-quote">「『你真的要去嗎？』媽媽的聲音在背後響起。我轉過身，看到她的眼神中有擔憂，也有不捨。」</blockquote>
                <p><strong>優點：</strong>生動有力，能立即展現人物關係和衝突。</p>
                <p><strong>適用：</strong>人際故事、家庭記敘、衝突事件。</p>
            </div>
        </div>
    </div>

</div>
```

- [ ] **Step 2: 加入引用樣式**

```css
/* 範例引用 */
.example-quote {
    background: #faf8f5;
    border-left: 3px solid var(--color-accent);
    padding: var(--spacing-sm) var(--spacing-md);
    margin: var(--spacing-xs) 0;
    font-size: 1rem;
    font-style: italic;
    line-height: 1.8;
}
```

- [ ] **Step 3: 寫入單元二「範文賞析」頁籤內容**

```html
<div class="tab-panel" data-panel="reading" data-unit="2">

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「同一個故事，用不同的開頭會有完全不同的感覺。我們來看看同一篇文章的四種開頭。」</span>
    </div>

    <h3>主題：《第一次上台演講》— 四種開頭對比</h3>

    <div class="compare-toggle">
        <button class="compare-btn active" data-compare-target="ver-u2-a">開門見山式</button>
        <button class="compare-btn" data-compare-target="ver-u2-b">懸念式</button>
        <button class="compare-btn" data-compare-target="ver-u2-c">場景式</button>
        <button class="compare-btn" data-compare-target="ver-u2-d">對話式</button>
    </div>

    <div class="compare-container">
        <div class="compare-version active" id="ver-u2-a">
            <blockquote class="example-quote">
                <p>上個月，我第一次在全校師生面前演講。那三分鐘的經歷，至今仍然深深烙印在我的記憶中。</p>
            </blockquote>
            <p class="compare-note">📝 <strong>分析：</strong>直接交代事件和感受，乾淨俐落。適合考試寫作。</p>
        </div>
        <div class="compare-version" id="ver-u2-b">
            <blockquote class="example-quote">
                <p>你有沒有試過，雙腿不受控制地發抖，卻還要裝作若無其事地站在台上？那種感覺，我在小六第一次演講時，真真切切地經歷了一次。</p>
            </blockquote>
            <p class="compare-note">📝 <strong>分析：</strong>用問題製造懸念，畫面感強。讀者會好奇接下來發生了什麼。</p>
        </div>
        <div class="compare-version" id="ver-u2-c">
            <blockquote class="example-quote">
                <p>禮堂的燈光刺眼得讓人睜不開眼。台下七百多雙眼睛，像七百多顆星星一樣注視著台上的我。我的手緊緊握著講稿，紙張的邊緣已經被我捏得起了皺。</p>
            </blockquote>
            <p class="compare-note">📝 <strong>分析：</strong>用場景和細節營造緊張氣氛，讀者能「看到」和「感受到」環境。非常有畫面感。</p>
        </div>
        <div class="compare-version" id="ver-u2-d">
            <blockquote class="example-quote">
                <p>「接下來，有請六年級的李小明同學上台演講。」主持人的聲音在禮堂中迴盪。我的心跳瞬間加速，手心開始冒汗。我能做到嗎？</p>
            </blockquote>
            <p class="compare-note">📝 <strong>分析：</strong>以對話開場，立即把讀者帶入情境。有臨場感，展現了人物的緊張心情。</p>
        </div>
    </div>

    <!-- A/B對比 -->
    <h3 style="margin-top: var(--spacing-lg);">A/B 對比：好開頭 vs 平庸開頭</h3>
    <p style="margin-bottom: var(--spacing-sm);">同一事件《一次考試》，兩種開頭寫法：</p>

    <div class="passage-analysis">
        <div class="passage-text" style="border-left: 3px solid #e0a0a0;">
            <h4 style="color:#a04040;">❌ 平庸版</h4>
            <p>上星期三，我們班有一次數學測驗。我溫習了很久，希望可以拿到好成績。</p>
        </div>
        <div class="passage-text" style="border-left: 3px solid #80c080;">
            <h4 style="color:#408040;">✅ 精彩版</h4>
            <p>滴答、滴答。牆上的時鐘每走一秒，我的手心就多冒一滴汗。桌上攤開的數學課本已經被我翻了無數遍，但那些公式像頑固的敵人，始終不肯乖乖進入我的腦袋。距離數學測驗，還有最後十分鐘。</p>
        </div>
    </div>

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「你覺得精彩版用了什麼技巧，讓它比平庸版好看這麼多？」</span>
    </div>

</div>
```

- [ ] **Step 4: 加入對比組件 CSS**

```css
/* 對比容器 */
.compare-container {
    margin-bottom: var(--spacing-md);
}

.compare-note {
    font-size: 0.9rem;
    color: var(--color-text-light);
    margin-top: 0.5rem;
}
```

- [ ] **Step 5: 寫入單元二「實戰練習」頁籤內容**

```html
<div class="tab-panel" data-panel="practice" data-unit="2">

    <!-- 練習一：配對 -->
    <div class="exercise-card">
        <h4>練習一：開頭類型配對</h4>
        <p>請判斷以下每個開頭屬於哪種類型：</p>
        <table class="simple-table">
            <tr><th>開頭句子</th><th>屬於哪種類型？</th></tr>
            <tr>
                <td>1. 「你害怕失敗嗎？這個問題，我在暑假的最後一天終於找到了答案。」</td>
                <td>
                    <select class="fill-input">
                        <option value="">請選擇⋯⋯</option>
                        <option>開門見山式</option>
                        <option>懸念式</option>
                        <option>場景式</option>
                        <option>對話式</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>2. 「去年暑假，我和家人一起去台北旅行。那是我第一次坐飛機。」</td>
                <td>
                    <select class="fill-input">
                        <option value="">請選擇⋯⋯</option>
                        <option>開門見山式</option>
                        <option>懸念式</option>
                        <option>場景式</option>
                        <option>對話式</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>3. 「『快起床！要遲到了！』爸爸的聲音像警鐘一樣劃破了早晨的寧靜。」</td>
                <td>
                    <select class="fill-input">
                        <option value="">請選擇⋯⋯</option>
                        <option>開門見山式</option>
                        <option>懸念式</option>
                        <option>場景式</option>
                        <option>對話式</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>4. 「雨後的街道散發著泥土的清香，霓虹燈的光映在積水中，像一幅流動的油畫。」</td>
                <td>
                    <select class="fill-input">
                        <option value="">請選擇⋯⋯</option>
                        <option>開門見山式</option>
                        <option>懸念式</option>
                        <option>場景式</option>
                        <option>對話式</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>5. 「上星期六，我做了一件很傻的事，但這件事卻讓我學到了一個重要的道理。」</td>
                <td>
                    <select class="fill-input">
                        <option value="">請選擇⋯⋯</option>
                        <option>開門見山式</option>
                        <option>懸念式</option>
                        <option>場景式</option>
                        <option>對話式</option>
                    </select>
                </td>
            </tr>
        </table>
        <button class="btn-reveal" data-target="answer-u2-e1">對答案</button>
        <div class="answer-block" id="answer-u2-e1">
            <p><strong>參考答案：</strong></p>
            <p>1. 懸念式（用問題吊人胃口）| 2. 開門見山式（直接交代事件）| 3. 對話式（以對話開頭）| 4. 場景式（描寫環境氣氛）| 5. 開門見山式（直接交代事件 + 預告體悟）</p>
        </div>
    </div>

    <!-- 練習二：改寫 -->
    <div class="exercise-card">
        <h4>練習二：改寫平凡開頭</h4>
        <p>以下兩個開頭都太平淡了，請選擇其中一個，用<strong>懸念式</strong>或<strong>場景式</strong>改寫：</p>
        <blockquote class="exercise-passage">
            <p><strong>A.</strong> 今天是我的生日，我很開心，因為媽媽買了一個很大的蛋糕給我。</p>
        </blockquote>
        <blockquote class="exercise-passage">
            <p><strong>B.</strong> 有一天放學的時候，下起了大雨，我沒有帶雨傘，只好在學校門口等雨停。</p>
        </blockquote>
        <textarea placeholder="選擇 A 或 B，寫出你的改寫版本⋯⋯"></textarea>
        <button class="btn-reveal" data-target="answer-u2-e2">參考改寫</button>
        <div class="answer-block" id="answer-u2-e2">
            <p><strong>參考改寫 A（懸念式）：</strong></p>
            <p>「生日蛋糕上的蠟燭一根根地燃燒著，溫暖的燭光映在每個人的臉上。但今年的生日，我卻在燭光背後看到了一樣我從未發現的東西⋯⋯」</p>
            <p><strong>參考改寫 B（場景式）：</strong></p>
            <p>「大雨如瀑布般傾瀉而下，操場上的籃球架在雨幕中模糊成一個灰色的影子。我站在校門口的屋簷下，看著雨水在腳邊濺起一朵朵水花⋯⋯」</p>
        </div>
    </div>

    <!-- 練習三：創作 -->
    <div class="exercise-card">
        <h4>練習三：為指定題目試寫兩種開頭</h4>
        <p>題目：《難忘的一天》</p>
        <p>請你用<strong>兩種不同</strong>的開頭策略，各寫一個開頭段落。（每段 50-80 字）</p>
        <p><strong>開頭一（開門見山式）：</strong></p>
        <textarea placeholder="直接寫出你要記敘的事件和基本感受⋯⋯"></textarea>
        <p style="margin-top: var(--spacing-sm);"><strong>開頭二（場景式 或 懸念式）：</strong></p>
        <textarea placeholder="試試用另一種策略，讓開頭更有吸引力⋯⋯"></textarea>
    </div>

</div>
```

---

### Task 2.3：填充單元三完整內容（⭐ 重點單元）

**Files:**
- Modify: `index.html` — 替換單元三的 placeholder，寫入知識點/範文/練習

- [ ] **Step 1: 寫入單元三「知識點」頁籤內容（含 ⭐ 核心重點一、二）**

```html
<div class="tab-panel active" data-panel="knowledge" data-unit="3">

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「如果你要告訴朋友一件很有趣的事，你會怎麼說？只說『今天發生了一件有趣的事』，還是會詳細地描述過程？」</span>
    </div>

    <!-- ⭐ 核心重點一：心理描寫三層次 -->
    <div class="key-point">
        <h3>心理描寫三層次</h3>
        <p style="text-align:center; font-size: 1.2rem; font-weight: 700; margin: 1rem 0; color: var(--color-primary);">
            表層感受 → 內心獨白 → 情感變化
        </p>
        <table class="simple-table">
            <tr><th>層次</th><th>說明</th><th>例子（主題：上台緊張）</th></tr>
            <tr>
                <td><strong>第一層：表層感受</strong></td>
                <td>直接說出情緒，但只有一句，不夠深入</td>
                <td>「我很緊張。」</td>
            </tr>
            <tr>
                <td><strong>第二層：內心獨白</strong></td>
                <td>寫出腦中在想什麼，用引號或自問自答</td>
                <td>「『萬一忘詞怎麼辦？』這個念頭在腦中盤旋。『他們會笑我嗎？』」</td>
            </tr>
            <tr>
                <td><strong>第三層：情感變化</strong></td>
                <td>寫出情緒的轉折，從 A 狀態變成 B 狀態</td>
                <td>「從緊張到放鬆、從害怕到勇敢。當我看到老師鼓勵的眼神時，我忽然覺得⋯⋯」</td>
            </tr>
        </table>
        <p><strong>💡 寫作心法：</strong>不只寫「我很緊張」，而要寫出緊張時腦中的聲音，以及緊張如何逐漸變化。這樣讀者才能「走進」你的心裡。</p>
    </div>

    <!-- ⭐ 核心重點二：五感描寫法 -->
    <div class="key-point">
        <h3>五感描寫法</h3>
        <p style="text-align:center; font-size: 1.1rem; font-weight: 700; margin: 1rem 0; color: var(--color-primary);">
            視覺 · 聽覺 · 嗅覺 · 味覺 · 觸覺
        </p>
        <p>不只寫「看到」的，調動全部感官來豐富畫面：</p>
        <div class="sense-grid">
            <div class="sense-item"><span>👁️ 視覺</span>顏色、形狀、大小、光影</div>
            <div class="sense-item"><span>👂 聽覺</span>聲音的大小、高低、節奏</div>
            <div class="sense-item"><span>👃 嗅覺</span>香味、臭味、清新的、刺鼻的</div>
            <div class="sense-item"><span>👅 味覺</span>酸甜苦辣鹹、食物的口感</div>
            <div class="sense-item"><span>✋ 觸覺</span>溫度、軟硬、粗糙／光滑</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 範例 — 寫「雨」：</strong></p>
        <blockquote class="example-quote">
            看見雨絲斜斜地落下，打在窗戶上畫出彎彎曲曲的水痕（👁️視）；聽見屋簷的雨滴答作響，像一首沒有節拍的樂曲（👂聽）；空氣中聞到泥土被雨水打濕後那股清新的氣味（👃嗅）；伸出手，冰涼的雨點落在掌心（✋觸）。
        </blockquote>
    </div>

    <!-- 動作分解術 -->
    <div class="knowledge-card">
        <h3>動作分解術</h3>
        <p>把一個簡單的動作拆成連續的小步驟，像慢鏡頭一樣呈現：</p>
        <div class="passage-analysis">
            <div class="passage-text" style="border-left: 3px solid #e0a0a0;">
                <h4 style="color:#a04040;">❌ 一句帶過</h4>
                <p>「他哭了。」（3 個字）</p>
            </div>
            <div class="passage-text" style="border-left: 3px solid #80c080;">
                <h4 style="color:#408040;">✅ 動作分解（80 字）</h4>
                <p>他的眼眶先是一紅，嘴唇微微顫抖。然後，第一滴眼淚從眼角滑落，順著臉頰流下來。他低下頭，肩膀開始輕輕抽動，接著越抖越厲害，終於忍不住發出了壓抑的哭聲。</p>
            </div>
        </div>
    </div>

    <!-- 對話穿插技巧 -->
    <div class="knowledge-card">
        <h3>對話穿插技巧</h3>
        <p><strong>直接引語 vs 間接引語：</strong></p>
        <table class="simple-table">
            <tr><th></th><th>寫法</th><th>效果</th></tr>
            <tr><td>間接</td><td>媽媽說她很擔心我。</td><td>平淡，欠臨場感</td></tr>
            <tr><td>直接</td><td>「你知道我有多擔心你嗎？」媽媽的聲音在顫抖。</td><td>生動，讀者能「聽到」語氣</td></tr>
        </table>
        <p style="margin-top: 1rem;"><strong>💡 關鍵原則：</strong>對話要推動情節，不只為對話而對話。每句對話都應該透露信息、展現性格、或製造衝突。</p>
    </div>

</div>
```

- [ ] **Step 2: 寫入單元三「範文賞析」頁籤內容**

```html
<div class="tab-panel" data-panel="reading" data-unit="3">

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「我們來讀兩篇文章，同樣的事件，一篇像白開水，一篇像濃湯。你來找找濃湯版多了什麼？」</span>
    </div>

    <h3>對比展示：「乾癟版」vs「豐滿版」</h3>
    <p style="margin-bottom: var(--spacing-sm);">同一個事件：<strong>在巴士上讓座給老婆婆</strong></p>

    <div class="compare-toggle">
        <button class="compare-btn active" data-compare-target="ver-u3-dry">乾癟版（~100字）</button>
        <button class="compare-btn" data-compare-target="ver-u3-rich">豐滿版（~350字）</button>
    </div>

    <div class="compare-container">
        <div class="compare-version active" id="ver-u3-dry">
            <blockquote class="exercise-passage">
                <p>今天放學後，我坐巴士回家。車上很多人，很擠。後來有一位老婆婆上了車，她看起來很累的樣子。我想到老師教我們要讓座給有需要的人，於是我站起來把座位讓給老婆婆。她對我笑了笑，我覺得很開心。</p>
            </blockquote>
            <p class="compare-note" style="color:#a04040;">❌ 空洞、缺乏細節、只有「做了什麼」沒有「怎樣做的」和「感受如何」</p>
        </div>
        <div class="compare-version" id="ver-u3-rich">
            <blockquote class="exercise-passage">
                <p>巴士在顛簸的馬路上搖晃著前進，車廂裡擠滿了放學的學生和下班的上班族，空氣中混雜著汗水和雨後的潮濕氣味（👃嗅）。我緊緊抓著扶手，書包壓得肩膀隱隱作痛（✋觸）。</p>
                <p>這時，車門打開，一位滿頭白髮的婆婆拄著拐杖，顫巍巍地踏上車。她的背微微佝僂，每走一步都顯得很吃力（👁️視）。車上沒有人動。</p>
                <p>「我要不要讓座呢？」我心裡猶豫著。「今天上了一整天課，腿也很累啊⋯⋯但婆婆看起來比我更需要這個座位⋯⋯」（💭內心獨白）</p>
                <p>終於，我站了起來：「婆婆，您坐這裡吧！」</p>
                <p>婆婆轉過頭來，滿臉的皺紋擠成了一個慈祥的笑容：「謝謝你啊，小朋友。」她坐下的時候，長長地舒了一口氣。（👂聽）</p>
                <p>那一刻，腿上的疲累忽然消失了。取而代之的，是一股溫暖、踏實的感覺在心底升起。（❤️情感變化：從猶豫 → 溫暖踏實）</p>
            </blockquote>
            <p class="compare-note" style="color:#408040;">✅ 五感豐富、有內心獨白、有情感轉折、對話生動</p>
        </div>
    </div>

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「豐滿版用了哪些技巧？你能找出多少個『五感描寫』的例子？心理描寫用了哪幾個層次？」</span>
    </div>

</div>
```

- [ ] **Step 3: 寫入單元三「實戰練習」頁籤內容**

```html
<div class="tab-panel" data-panel="practice" data-unit="3">

    <!-- 練習一：動作分解擴寫 -->
    <div class="exercise-card">
        <h4>練習一：動作分解 — 擴寫練習</h4>
        <p>把下面這句簡單的敘述，用<strong>動作分解術</strong>擴寫為 100 字以上：</p>
        <blockquote class="exercise-passage">
            <p>「他很生氣地走了。」（8 個字）</p>
        </blockquote>
        <p>💡 提示：想想一個人生氣時，身體會有什麼動作？臉部表情？手的動作？步伐的速度？</p>
        <textarea placeholder="從他的面部表情開始寫，然後是手的動作、身體姿態、步伐⋯⋯慢慢拆解這個『生氣地走了』的過程。"></textarea>
        <button class="btn-reveal" data-target="answer-u3-e1">參考擴寫</button>
        <div class="answer-block" id="answer-u3-e1">
            <p><strong>參考擴寫：</strong></p>
            <p>他的臉色刷地一下變了，眉頭緊緊地皺在一起。他沒有說話，只是狠狠地瞪了我一眼——那眼神冷得像冬天的冰水。他的手緊緊握成拳頭，指節都發白了。然後，他猛地轉過身去，腳步又重又急，每一步都像要把地板踩碎一樣。門「砰」的一聲巨響，他的身影消失在走廊的盡頭。</p>
        </div>
    </div>

    <!-- 練習二：五感填空 -->
    <div class="exercise-card">
        <h4>練習二：五感填空 — 給場景補入感官描寫</h4>
        <p>以下是一段場景的「骨架」，請你為它補入<strong>至少三種感官</strong>的描寫：</p>
        <blockquote class="exercise-passage">
            <p>場景：學校的小食部，小息的時候。</p>
            <p>骨架：小息鐘聲響了，同學們跑到小食部排隊。小食部很熱鬧，大家都在買自己喜歡的食物。我也在排隊，等著買我的零食。</p>
        </blockquote>
        <p>👁️ 視覺（看到什麼）：<input type="text" class="fill-input" style="width:100%;max-width:100%;margin-bottom:0.5rem;" placeholder="例如：隊伍像一條長龍⋯⋯"></p>
        <p>👂 聽覺（聽到什麼）：<input type="text" class="fill-input" style="width:100%;max-width:100%;margin-bottom:0.5rem;" placeholder="例如：同學的喧嘩聲、硬幣的叮噹聲⋯⋯"></p>
        <p>👃 嗅覺（聞到什麼）：<input type="text" class="fill-input" style="width:100%;max-width:100%;margin-bottom:0.5rem;" placeholder="例如：炸雞翼的香味、即食麵的味精味⋯⋯"></p>
        <p>✋ 觸覺（摸到什麼）：<input type="text" class="fill-input" style="width:100%;max-width:100%;margin-bottom:0.5rem;" placeholder="例如：同學擠來擠去⋯⋯"></p>
        <button class="btn-reveal" data-target="answer-u3-e2">參考填充</button>
        <div class="answer-block" id="answer-u3-e2">
            <p><strong>參考填充：</strong></p>
            <p>👁️ 視覺：隊伍像一條彎彎曲曲的長龍，從窗口一直延伸到走廊。同學們踮起腳尖，伸長脖子往前張望。</p>
            <p>👂 聽覺：整個小食部像一個沸騰的市集——此起彼落的叫喊聲、硬幣掉進錢箱的叮噹聲、撕開包裝袋的沙沙聲，混成一片。</p>
            <p>👃 嗅覺：空氣中飄著咖哩魚蛋的辛辣味、熱騰騰燒賣的香氣，還有蘋果批的甜絲絲的氣味，讓人忍不住吞了吞口水。</p>
            <p>✋ 觸覺：後面的同學不停地推擠，我的書包被擠得貼在背上，汗水把校服黏在皮膚上。</p>
        </div>
    </div>

    <!-- 練習三：對話改造 -->
    <div class="exercise-card">
        <h4>練習三：對話改造 — 間接引語變直接對話</h4>
        <p>以下段落所有對話都是用<strong>間接引語</strong>寫的，非常沉悶。請你把全部對話改為<strong>直接引語</strong>，讓文章變得生動：</p>
        <blockquote class="exercise-passage">
            <p>張老師走進課室，對我們說她有一個重要的消息要宣布。她說我們班在校際比賽中拿了冠軍。同學們聽完後都非常興奮，有人說不敢相信，有人說一定要好好慶祝。張老師說她也為我們感到驕傲。</p>
        </blockquote>
        <textarea placeholder="把每一句間接引語都加上引號和描寫，變成生動的對話場景⋯⋯"></textarea>
        <button class="btn-reveal" data-target="answer-u3-e3">參考改造</button>
        <div class="answer-block" id="answer-u3-e3">
            <p><strong>參考改造：</strong></p>
            <p>「各位同學，我有一個重要的消息要宣布。」張老師走進課室，臉上掛著神秘的笑容。</p>
            <p>全班頓時安靜下來。</p>
            <p>「我們班——在校際比賽中——拿了冠軍！」她的聲音愈來愈高，最後兩個字幾乎是喊出來的。</p>
            <p>「什麼？真的嗎？！」坐在前排的小明整個人跳了起來。</p>
            <p>「當然是真的！」張老師笑著說，「我也為你們感到驕傲！你們的努力沒有白費。」</p>
        </div>
    </div>

</div>
```

- [ ] **Step 4: 加入五感網格 CSS**

```css
/* 五感網格 */
.sense-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.5rem;
    margin: var(--spacing-sm) 0;
}

.sense-item {
    background: var(--color-bg);
    padding: 0.6rem 0.8rem;
    border-radius: var(--radius-sm);
    font-size: 0.9rem;
}

.sense-item span {
    font-weight: 700;
    margin-right: 0.3rem;
}
```

---

### Task 2.4：Phase 2 檢查點

- [ ] **Step 1: 在瀏覽器中打開並檢查單元一至三**

Run: `open /Users/lishuairui/寫作增潤課程/index.html`

檢查清單：
- [ ] 單元一：六要素知識點完整、範文賞析有顏色標註、三個練習題可用
- [ ] 單元二：四種開頭策略展開/收起正常、範文對比切換正常、練習題可用
- [ ] 單元三：⭐ 兩個核心重點有金色邊框和「重點」標籤、五感網格顯示正常、乾癟/豐滿對比切換正常、練習題可用
- [ ] 所有「對答案」按鈕可點擊揭示/隱藏答案
- [ ] 所有手風琴可展開/收起
- [ ] DevTools Console 無 JS 錯誤

---

## Phase 3：單元四至六內容填充

> **產出：教材後半部完整內容（結尾 + 修辭 + 立意提升），含 ⭐ 核心重點三至六。**
> **⚠️ 此階段完成後需交付用戶檢查，確認後才進入 Phase 4。**

### Task 3.1：填充單元四完整內容

**Files:**
- Modify: `index.html` — 替換單元四的 placeholder，寫入知識點/範文/練習

- [ ] **Step 1: 寫入單元四「知識點」頁籤內容**

找到單元四的 `<div class="tab-panel active" data-panel="knowledge" data-unit="4">`，寫入：

```html
<div class="tab-panel active" data-panel="knowledge" data-unit="4">

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「你覺得一篇好的記敘文，結尾應該帶給讀者什麼感覺？你有沒有看過讓你印象深刻的故事結局？」</span>
    </div>

    <div class="knowledge-card">
        <h3>一、結尾為什麼重要？</h3>
        <p>結尾是讀者對你的文章留下的<strong>最後印象</strong>。一個好結尾能讓讀者：</p>
        <ul style="padding-left: 1.5rem; margin-top: 0.5rem;">
            <li>🏁 <strong>感到完整</strong> — 故事有頭有尾，不會戛然而止</li>
            <li>💭 <strong>有所回味</strong> — 看完後還會繼續思考</li>
            <li>❤️ <strong>受到觸動</strong> — 被故事的核心意義打動</li>
        </ul>
    </div>

    <div class="knowledge-card">
        <h3>二、四種結尾策略</h3>

        <div class="accordion">
            <button class="accordion-toggle open">1. 呼應開頭式 — 回到起點，形成閉環</button>
            <div class="accordion-body open">
                <p><strong>寫法：</strong>結尾回到開頭的畫面、場景或問題，給讀者「圓滿」的感覺。</p>
                <p><strong>例子：</strong>開頭寫「陽光穿過窗簾的縫隙⋯⋯」→ 結尾寫「窗簾的縫隙中，那一道金色的光線漸漸暗了下去，但我的心裡，卻有一道光永遠亮著。」</p>
                <p><strong>適用：</strong>以場景或畫面開頭的文章、抒情記敘。</p>
            </div>
        </div>

        <div class="accordion" style="margin-top: 0.5rem;">
            <button class="accordion-toggle">2. 感悟昇華式 — 從事件提煉出人生道理</button>
            <div class="accordion-body">
                <p><strong>寫法：</strong>從具體的事件中，歸納出一個更深刻的人生體悟。</p>
                <p><strong>例子：</strong>「那天之後，我終於明白——真正的勇敢，不是在於不跌倒，而是在於跌倒之後，還能爬起來繼續向前走。」</p>
                <p><strong>適用：</strong>成長故事、難忘經歷、有啟發性的事件。</p>
            </div>
        </div>

        <div class="accordion" style="margin-top: 0.5rem;">
            <button class="accordion-toggle">3. 留白想像式 — 不說盡，讓讀者自己回味</button>
            <div class="accordion-body">
                <p><strong>寫法：</strong>用一個畫面、一個動作或一個省略號收尾，讓讀者自己去想像。</p>
                <p><strong>例子：</strong>「她站在門口，張了張嘴，卻什麼也沒說。最後，她只是輕輕地，把門關上了。」</p>
                <p><strong>適用：</strong>抒情文章、情感細膩的故事。</p>
            </div>
        </div>

        <div class="accordion" style="margin-top: 0.5rem;">
            <button class="accordion-toggle">4. 意外反轉式 — 結尾來一個驚喜轉折</button>
            <div class="accordion-body">
                <p><strong>寫法：</strong>結尾出現一個讀者意想不到的轉折，讓人驚訝之後又覺得合情合理。</p>
                <p><strong>例子：</strong>「當我打開那個信封，裡面只有一張紙條，上面寫著：『其實，一直幫助你的人，不是別人，就是你自己。』」</p>
                <p><strong>適用：</strong>故事性強的文章、有懸念的記敘。</p>
            </div>
        </div>
    </div>

    <div class="knowledge-card">
        <h3>三、結尾四大忌</h3>
        <table class="simple-table">
            <tr><th>禁忌</th><th>例子（不要這樣寫！）</th></tr>
            <tr><td>❌ 草草收場</td><td>「就這樣，這一天結束了。」</td></tr>
            <tr><td>❌ 無限延伸</td><td>「今天很開心，我期待下一次，還有下下一次⋯⋯」</td></tr>
            <tr><td>❌ 硬加道理</td><td>「這件事告訴我們做人要誠實，誠實是一種美德，我們都應該做誠實的人。」</td></tr>
            <tr><td>❌ 偏離主題</td><td>寫運動會，結尾突然變成「所以我決定以後要好好讀書」。</td></tr>
        </table>
    </div>

</div>
```

- [ ] **Step 2: 寫入單元四「範文賞析」頁籤內容**

```html
<div class="tab-panel" data-panel="reading" data-unit="4">

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「我們來讀幾篇文章的結尾，看看哪個讓你有感覺，哪個讓你覺得『就這樣而已？』」</span>
    </div>

    <h3>精選結尾點評</h3>

    <div class="exercise-card">
        <h4>結尾 A：《第一次參加歌唱比賽》</h4>
        <blockquote class="example-quote">
            <p>台下響起熱烈的掌聲。我站在聚光燈下，看著觀眾席上爸爸媽媽驕傲的笑容，忽然覺得——輸贏已經不重要了。重要的是，我終於做到了。</p>
        </blockquote>
        <p class="compare-note">✅ 感悟昇華式。從比賽結果轉移到自我成長，有深度。</p>
    </div>

    <div class="exercise-card">
        <h4>結尾 B：《搬家》</h4>
        <blockquote class="example-quote">
            <p>搬家的貨車駛遠了。我沒有回頭，只是握緊了口袋裡那張和好朋友的合照。</p>
        </blockquote>
        <p class="compare-note">✅ 留白想像式。用一個具體的動作收尾，情感含蓄但有力。</p>
    </div>

    <div class="exercise-card">
        <h4>結尾 C：《一次失敗的考試》</h4>
        <blockquote class="example-quote">
            <p>這次考試的分數很低，我感到非常失望。我決定以後要更加用功，爭取下次考到更好的成績。只要努力，一定能成功！</p>
        </blockquote>
        <p class="compare-note">❌ 硬加道理。空洞的勵志口號，沒有具體的感悟。</p>
    </div>

    <div class="exercise-card">
        <h4>結尾 D：《快樂的一天》</h4>
        <blockquote class="example-quote">
            <p>太陽下山了，我們也該回家了。今天真是快樂的一天啊！</p>
        </blockquote>
        <p class="compare-note">❌ 草草收場。太平淡，讀者沒有任何回味。</p>
    </div>

    <!-- 同一文章配四種結尾 -->
    <h3 style="margin-top: var(--spacing-lg);">同一篇文章，四種不同結尾</h3>
    <p style="margin-bottom: var(--spacing-sm);">主題：《我和好朋友吵架了》（文章主體省略，只展示不同結尾）</p>

    <div class="compare-toggle">
        <button class="compare-btn active" data-compare-target="ver-u4-a">呼應式</button>
        <button class="compare-btn" data-compare-target="ver-u4-b">昇華式</button>
        <button class="compare-btn" data-compare-target="ver-u4-c">留白式</button>
        <button class="compare-btn" data-compare-target="ver-u4-d">反轉式</button>
    </div>

    <div class="compare-container">
        <div class="compare-version active" id="ver-u4-a">
            <blockquote class="example-quote">
                <p>我看著書桌上那張合照——那是我們去年一起去露營時拍的。照片中的我們笑得那麼燦爛。我拿起手機，猶豫了很久，最後還是按下了那串熟悉的號碼⋯⋯</p>
            </blockquote>
            <p class="compare-note">📝 呼應開頭式：回到合照的畫面（假設開頭也提到這張照片），形成閉環。</p>
        </div>
        <div class="compare-version" id="ver-u4-b">
            <blockquote class="example-quote">
                <p>那次吵架之後，我才真正明白——友誼不是在風平浪靜時的笑容，而是在風浪過後，依然願意握住彼此的手。一句「對不起」，不是軟弱，而是一種勇氣。</p>
            </blockquote>
            <p class="compare-note">📝 感悟昇華式：從具體事件提煉出對友誼的理解。</p>
        </div>
        <div class="compare-version" id="ver-u4-c">
            <blockquote class="example-quote">
                <p>放學的鈴聲響了。她從我身邊走過，腳步放慢了一點——就那麼一秒鐘——然後繼續向前走。我看著她的背影消失在走廊盡頭。書包裡，那包她最愛吃的軟糖，還沒有送出去。</p>
            </blockquote>
            <p class="compare-note">📝 留白想像式：用細節和動作收尾，讀者自己去感受那份未說出口的情感。</p>
        </div>
        <div class="compare-version" id="ver-u4-d">
            <blockquote class="example-quote">
                <p>第二天回到學校，我發現抽屜裡多了一張便利貼。上面是她歪歪斜斜的字跡：「對不起，其實⋯⋯是我先做錯了。」——原來，她比我更早鼓起勇氣。</p>
            </blockquote>
            <p class="compare-note">📝 意外反轉式：讀者以為主角要主動道歉，結果對方先道歉了。</p>
        </div>
    </div>

</div>
```

- [ ] **Step 3: 寫入單元四「實戰練習」頁籤內容**

```html
<div class="tab-panel" data-panel="practice" data-unit="4">

    <!-- 練習一：診斷 -->
    <div class="exercise-card">
        <h4>練習一：結尾診斷（判斷好壞）</h4>
        <p>以下 4 個結尾，請判斷它是「好結尾」還是「有問題的結尾」，並說出理由：</p>
        <table class="simple-table">
            <tr><th>結尾</th><th>判斷</th><th>理由</th></tr>
            <tr>
                <td>1.「就這樣，小學六年級的畢業典禮結束了。我們都要去不同的中學了。再見了，我的母校。」</td>
                <td><select class="fill-input"><option>請選擇</option><option>好結尾</option><option>有問題</option></select></td>
                <td><input type="text" class="fill-input" placeholder="為什麼？"></td>
            </tr>
            <tr>
                <td>2.「我握著那張成績單，上面的分數比我預期的低了很多。但奇怪的是，我竟然沒有想像中難過——因為我知道，我已經盡了全力。」</td>
                <td><select class="fill-input"><option>請選擇</option><option>好結尾</option><option>有問題</option></select></td>
                <td><input type="text" class="fill-input" placeholder="為什麼？"></td>
            </tr>
            <tr>
                <td>3.「今天的事情讓我學到了很多。我要感謝老師的教導、同學的幫助、父母的照顧⋯⋯」</td>
                <td><select class="fill-input"><option>請選擇</option><option>好結尾</option><option>有問題</option></select></td>
                <td><input type="text" class="fill-input" placeholder="為什麼？"></td>
            </tr>
            <tr>
                <td>4.「我把那封信放進抽屜的最深處，沒有寄出去。窗外，鳳凰木的花正開得通紅。」</td>
                <td><select class="fill-input"><option>請選擇</option><option>好結尾</option><option>有問題</option></select></td>
                <td><input type="text" class="fill-input" placeholder="為什麼？"></td>
            </tr>
        </table>
        <button class="btn-reveal" data-target="answer-u4-e1">對答案</button>
        <div class="answer-block" id="answer-u4-e1">
            <p><strong>參考答案：</strong></p>
            <p>1. 有問題（草草收場，像流水帳的結尾）| 2. 好結尾（感悟昇華式，從分數轉移到對自我的肯定）| 3. 有問題（感謝名單式結尾，空洞無真情實感）| 4. 好結尾（留白想像式，用具體畫面收尾，有韻味）</p>
        </div>
    </div>

    <!-- 練習二：配對 -->
    <div class="exercise-card">
        <h4>練習二：為文章配對最佳結尾</h4>
        <p>以下是文章的主體摘要，請為它選擇最適合的結尾：</p>
        <blockquote class="exercise-passage">
            <p><strong>文章主體：</strong>我和好朋友因為借書的事情鬧翻了，整整一個星期沒有說話。這段時間裡，我看到她和別的同學一起玩，心裡很難受。我們的座位只隔了兩行，卻像隔了一道看不見的牆。</p>
        </blockquote>
        <p>你認為以下哪個結尾最好？</p>
        <div style="margin-bottom: 0.5rem;">
            <label style="display:block; margin-bottom:0.3rem;"><input type="radio" name="end-choice" value="A"> A. 「最後，我們和好了。這次吵架讓我明白到友誼很珍貴。」</label>
            <label style="display:block; margin-bottom:0.3rem;"><input type="radio" name="end-choice" value="B"> B. 「那個星期五的下午，她終於走過來，把一本新書放在我桌上。『這本很好看，』她低著頭說，『看完⋯⋯要告訴我你覺得怎樣。』我愣了一下，然後笑了——這是我們這一個星期以來，說的第一句話。」</label>
        </div>
        <button class="btn-reveal" data-target="answer-u4-e2">分析</button>
        <div class="answer-block" id="answer-u4-e2">
            <p><strong>分析：</strong>B 明顯更好。A 是典型的「草草收場 + 硬加道理」，沒有畫面感。B 用具體的對話和動作來表達和好，讀者能「看到」那一刻的畫面，而且留白式地沒有直接說「我們和好了」，讓讀者自己去感受。</p>
        </div>
    </div>

    <!-- 練習三：創作 -->
    <div class="exercise-card">
        <h4>練習三：為文章寫結尾</h4>
        <p>以下是文章的主體（已經有開頭和經過），請你為它寫一個結尾。試試用<strong>感悟昇華式</strong> 或 <strong>留白想像式</strong>：</p>
        <blockquote class="exercise-passage">
            <p><strong>開頭：</strong>那是我第一次參加義工活動——到社區的老人院探訪長者。出發前，我以為這只是一次普通的課外活動。</p>
            <p><strong>經過：</strong>在老人院，我遇到了一位陳婆婆。她已經八十多歲了，行動不便，但記憶力出奇地好。她拉著我的手，給我講了很多她年輕時的故事——戰亂、逃難、來到香港從零開始⋯⋯說著說著，她忽然停了下來，眼眶紅了。</p>
        </blockquote>
        <textarea placeholder="從陳婆婆停下來的那一刻開始，寫出你的結尾⋯⋯"></textarea>
        <button class="btn-reveal" data-target="answer-u4-e3">參考結尾</button>
        <div class="answer-block" id="answer-u4-e3">
            <p><strong>參考結尾（感悟昇華式）：</strong></p>
            <p>「原來我以為今天是我來『幫助』他們的。但當我握著陳婆婆那雙滿布皺紋的手時，我才發現——是她們，用一生的故事，幫助了我這個不曾經歷風雨的少年，看到了一個更廣闊的世界。」</p>
        </div>
    </div>

</div>
```

---

### Task 3.2：填充單元五完整內容（⭐ 重點單元）

**Files:**
- Modify: `index.html` — 替換單元五的 placeholder，寫入知識點/範文/練習

- [ ] **Step 1: 寫入單元五「知識點」頁籤內容（含 ⭐ 核心重點三、四）**

```html
<div class="tab-panel active" data-panel="knowledge" data-unit="5">

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「你有沒有試過讀一篇文章，覺得某個句子特別美、特別有力？你還記得那個句子用了什麼技巧嗎？」</span>
    </div>

    <!-- ⭐ 核心重點三：四大常用修辭 -->
    <div class="key-point">
        <h3>四大常用修辭</h3>
        <table class="simple-table">
            <tr><th>修辭</th><th>說明</th><th>例子</th></tr>
            <tr>
                <td><strong>比喻（明喻）</strong></td>
                <td>用「像、好像、彷彿、如同」連接兩件事物</td>
                <td>「月亮<strong>像</strong>一個銀色的盤子，掛在夜空中。」</td>
            </tr>
            <tr>
                <td><strong>比喻（暗喻）</strong></td>
                <td>直接說 A「是」B，不用「像」</td>
                <td>「月亮<strong>是</strong>夜空中一個銀色的盤子。」</td>
            </tr>
            <tr>
                <td><strong>擬人</strong></td>
                <td>把事物當作人來寫，賦予人的動作/情感</td>
                <td>「風<strong>輕輕地撫摸</strong>著我的臉，像母親溫柔的手。」</td>
            </tr>
            <tr>
                <td><strong>排比</strong></td>
                <td>用三個或以上結構相似的句子並列</td>
                <td>「那個暑假，<strong>我學會了</strong>獨立，<strong>我學會了</strong>堅持，<strong>我學會了</strong>珍惜。」</td>
            </tr>
            <tr>
                <td><strong>誇張</strong></td>
                <td>刻意放大事物的特徵以突出效果</td>
                <td>「他的笑聲大得<strong>整棟樓都聽得到</strong>。」</td>
            </tr>
        </table>
    </div>

    <!-- ⭐ 核心重點四：進階技巧 -->
    <div class="key-point">
        <h3>進階技巧：通感與對比襯托</h3>

        <div style="margin-bottom: 1rem;">
            <h4>通感（感官互通）</h4>
            <p>把一種感官的感受，用另一種感官來描述。打破感官的界限，創造新奇的表達。</p>
            <blockquote class="example-quote">「她的聲音<strong>像蜜糖一樣甜</strong>。」（聽覺 → 味覺）</blockquote>
            <blockquote class="example-quote">「那幅畫的紅色<strong>溫暖得像火焰</strong>。」（視覺 → 觸覺）</blockquote>
            <blockquote class="example-quote">「風中傳來<strong>苦澀的琴聲</strong>。」（聽覺 → 味覺）</blockquote>
        </div>

        <div>
            <h4>對比襯托</h4>
            <p>用相反的事物來強化主體的特徵。</p>
            <blockquote class="example-quote">「全班都在笑，只有他一個人，安靜地坐在角落。」（用熱鬧襯托孤獨）</blockquote>
            <blockquote class="example-quote">「在整片黑暗的天空中，那顆星顯得格外明亮。」（用黑暗襯托光明）</blockquote>
        </div>
    </div>

    <!-- 句式節奏 -->
    <div class="knowledge-card">
        <h3>句式節奏：長句與短句的配合</h3>
        <div class="passage-analysis">
            <div class="passage-text">
                <h4>長句：營造氣氛</h4>
                <p>「夕陽把天空染成了一片橙紅色的海洋，雲朵像棉花糖一樣飄浮在其中，微風輕輕吹過，帶來了一天中最後一絲溫暖。」</p>
                <p style="margin-top:0.5rem;"><em>→ 適合抒情、描寫場景、營造平靜的氣氛</em></p>
            </div>
            <div class="passage-text">
                <h4>短句：製造張力</h4>
                <p>「他停下了腳步。轉過身來。看著我。沒有說話。」</p>
                <p style="margin-top:0.5rem;"><em>→ 適合緊張時刻、動作描寫、製造懸念</em></p>
            </div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 最佳實踐：長短交錯。</strong>用長句鋪墊，用短句收束，製造節奏感。</p>
        <blockquote class="example-quote">「我在長長的走廊上奔跑，心跳快得像要從胸口衝出來，每一步都踩在時間的刀刃上。終於，我推開了門。他不在。」</blockquote>
    </div>

    <!-- 常見語病 -->
    <div class="knowledge-card">
        <h3>常見語病診斷</h3>
        <table class="simple-table">
            <tr><th>語病</th><th>例子</th><th>修改建議</th></tr>
            <tr><td>重複用詞</td><td>「今天的天氣很好，我的心情也很好，大家也很好。」</td><td>換詞：「今天天氣晴朗，我的心情格外暢快，同學們也都笑容滿面。」</td></tr>
            <tr><td>陳詞濫調</td><td>「光陰似箭，日月如梭」</td><td>用自己的話寫：「小學六年的時光，轉眼就過去了。」</td></tr>
            <tr><td>「然後病」</td><td>「然後我起床，然後我刷牙，然後我吃早餐，然後我出門。」</td><td>刪掉多餘的「然後」，用不同連接詞或直接省略。</td></tr>
        </table>
    </div>

</div>
```

- [ ] **Step 2: 寫入單元五「範文賞析」頁籤內容**

```html
<div class="tab-panel" data-panel="reading" data-unit="5">

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「我們來讀讀兩位大作家的文字。看看他們用了什麼技巧，讓文字變得這麼有力量。」</span>
    </div>

    <h3>名家片段賞析一：朱自清《背影》（節選）</h3>
    <div class="passage-analysis">
        <div class="passage-text">
            <p>「我看見他戴著黑布小帽，穿著黑布大馬褂，深青布棉袍，蹣跚地走到鐵道邊，慢慢探身下去，尚不大難。可是他穿過鐵道，要爬上那邊月台，就不容易了。他用兩手攀著上面，兩腳再向上縮；他肥胖的身子向左微傾，顯出努力的樣子。」</p>
        </div>
        <div class="passage-notes">
            <h4>🔍 賞析筆記</h4>
            <p><strong>動作分解：</strong>「探身下去 → 攀著上面 → 兩腳上縮 → 身子微傾」— 朱自清把父親爬月台這個動作分解成連續步驟，像電影慢鏡頭，讓讀者仿佛親眼看到。</p>
            <p><strong>用詞精準：</strong>「蹣跚」、「探身」、「攀」、「縮」、「傾」— 每個動詞都經過精心挑選。</p>
            <p><strong>樸素的力量：</strong>沒有華麗的修辭，但因為細節夠具體，情感反而更加動人。</p>
        </div>
    </div>

    <h3 style="margin-top: var(--spacing-lg);">名家片段賞析二：魯迅《風箏》（節選）</h3>
    <div class="passage-analysis">
        <div class="passage-text">
            <p>「故鄉的風箏時節，是春二月，倘聽到沙沙的風輪聲，仰頭便能看見一個淡墨色的蟹風箏或嫩藍色的蜈蚣風箏。⋯⋯但我是向來不愛放風箏的，不但不愛，並且嫌惡它，因為我以為這是沒出息孩子所做的玩藝。」</p>
        </div>
        <div class="passage-notes">
            <h4>🔍 賞析筆記</h4>
            <p><strong>色彩描寫：</strong>「淡墨色」、「嫩藍色」— 用具體顏色描寫風箏，視覺感強。</p>
            <p><strong>聽覺描寫：</strong>「沙沙的風輪聲」— 不只寫看到的，還寫聽到的。</p>
            <p><strong>情感層次：</strong>從「不愛」到「嫌惡」，情感遞進。</p>
        </div>
    </div>

    <!-- 學生腔 vs 文學語言 -->
    <h3 style="margin-top: var(--spacing-lg);">對比：學生腔 vs 文學語言</h3>
    <table class="simple-table">
        <tr><th>意思</th><th>❌ 學生腔</th><th>✅ 文學語言</th></tr>
        <tr><td>寫天黑</td><td>「天黑了。」</td><td>「暮色像一層薄薄的黑紗，無聲無息地蓋住了整個城市。」</td></tr>
        <tr><td>寫開心</td><td>「我很開心，非常開心。」</td><td>「我的心像一隻剛出籠的小鳥，輕飄飄地快要飛起來了。」</td></tr>
        <tr><td>寫累</td><td>「我很累，很想睡覺。」</td><td>「眼皮像被千斤重的石頭壓著，每抬一步都像在泥沼中前行。」</td></tr>
    </table>

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「文學語言和學生腔最大的分別是什麼？你能用一句話總結嗎？」</span>
    </div>

</div>
```

- [ ] **Step 3: 寫入單元五「實戰練習」頁籤內容**

```html
<div class="tab-panel" data-panel="practice" data-unit="5">

    <!-- 練習一：修辭辨識 -->
    <div class="exercise-card">
        <h4>練習一：修辭手法辨識</h4>
        <p>閱讀以下句子，辨識它們用了什麼修辭手法：</p>
        <table class="simple-table">
            <tr><th>句子</th><th>修辭手法</th></tr>
            <tr><td>1. 「時間像流水一樣，一去不回頭。」</td><td><select class="fill-input"><option>請選擇</option><option>明喻</option><option>暗喻</option><option>擬人</option><option>排比</option><option>誇張</option></select></td></tr>
            <tr><td>2. 「書本是打開智慧之門的鑰匙。」</td><td><select class="fill-input"><option>請選擇</option><option>明喻</option><option>暗喻</option><option>擬人</option><option>排比</option><option>誇張</option></select></td></tr>
            <tr><td>3. 「太陽打了個呵欠，懶洋洋地從山後爬上來。」</td><td><select class="fill-input"><option>請選擇</option><option>明喻</option><option>暗喻</option><option>擬人</option><option>排比</option><option>誇張</option></select></td></tr>
            <tr><td>4. 「他的呼嚕聲大得連隔壁鄰居都跑來投訴。」</td><td><select class="fill-input"><option>請選擇</option><option>明喻</option><option>暗喻</option><option>擬人</option><option>排比</option><option>誇張</option></select></td></tr>
        </table>
        <button class="btn-reveal" data-target="answer-u5-e1">對答案</button>
        <div class="answer-block" id="answer-u5-e1">
            <p><strong>答案：</strong>1. 明喻（有「像」）| 2. 暗喻（直接說「是」）| 3. 擬人（太陽「打呵欠」、「爬上來」）| 4. 誇張（呼嚕聲不可能傳到隔壁）</p>
        </div>
    </div>

    <!-- 練習二：仿寫 -->
    <div class="exercise-card">
        <h4>練習二：名家仿寫</h4>
        <p>以下是朱自清《背影》中的經典句式結構，請模仿這個結構，換一個主題來寫：</p>
        <blockquote class="example-quote">
            <p>「他用兩手攀著上面，兩腳再向上縮；他肥胖的身子向左微傾，顯出努力的樣子。」</p>
            <p style="color: var(--color-text-light);">→ 結構：具體動作（攀、縮）+ 身體狀態描寫（肥胖）+ 整體印象（努力的樣子）</p>
        </blockquote>
        <p><strong>仿寫主題（二選一）：</strong></p>
        <ol>
            <li>一位老人在公園裡慢慢地跑步</li>
            <li>一個小孩努力地伸手去拿高處的糖果罐</li>
        </ol>
        <textarea placeholder="選擇一個主題，用朱自清的句式結構來仿寫⋯⋯"></textarea>
        <button class="btn-reveal" data-target="answer-u5-e2">參考仿寫</button>
        <div class="answer-block" id="answer-u5-e2">
            <p><strong>參考仿寫（主題 2）：</strong></p>
            <p>「他踮起腳尖，一隻手扶著櫃子的邊緣，另一隻手努力向上伸；他小小的身子向右微微傾斜，額頭上滲出了細細的汗珠，顯出拼命想達到的樣子。」</p>
        </div>
    </div>

    <!-- 練習三：潤色 -->
    <div class="exercise-card">
        <h4>練習三：語句潤色 — 「學生腔」改造</h4>
        <p>以下 5 句都是「學生腔」。請你選擇其中 2 句來潤色，用上今天學到的修辭技巧：</p>
        <ol class="sort-list">
            <li>「今天天氣很熱，我流了很多汗。」</li>
            <li>「老師很生氣，我們都很害怕。」</li>
            <li>「這個蛋糕很好吃，我很喜歡。」</li>
            <li>「公園裡的花很美，有很多顏色。」</li>
            <li>「比賽開始了，我很緊張。」</li>
        </ol>
        <p><strong>第 __ 句潤色：</strong></p>
        <textarea placeholder="用比喻、擬人、誇張、五感描寫等技巧來潤色⋯⋯"></textarea>
        <p style="margin-top: var(--spacing-sm);"><strong>第 __ 句潤色：</strong></p>
        <textarea placeholder="再選一句來改造⋯⋯"></textarea>
        <button class="btn-reveal" data-target="answer-u5-e3">參考潤色</button>
        <div class="answer-block" id="answer-u5-e3">
            <p><strong>參考潤色：</strong></p>
            <p><strong>第 1 句（改寫）：</strong>「太陽像一個大火爐，把大地烤得滾燙。空氣中沒有一絲風，汗水像小溪一樣從額頭流下來，校服貼在背上，又濕又黏。」（比喻 + 觸覺）</p>
            <p><strong>第 5 句（改寫）：</strong>「哨聲響起的那一刻，我的心跳像擂鼓一樣砰砰作響。手心滲出了冷汗，雙腿像灌了鉛一樣沉重。『冷靜！你可以的！』我在心裡不停地對自己說。」（比喻 + 內心獨白）</p>
        </div>
    </div>

</div>
```

---

### Task 3.3：填充單元六完整內容（⭐ 重點單元）

**Files:**
- Modify: `index.html` — 替換單元六的 placeholder，寫入知識點/範文/練習

- [ ] **Step 1: 寫入單元六「知識點」頁籤內容（含 ⭐ 核心重點五、六）**

```html
<div class="tab-panel active" data-panel="knowledge" data-unit="6">

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「你覺得兩篇同樣題目的文章，為什麼一篇讓人印象深刻，另一篇卻看完就忘了？差別在哪裡？」</span>
    </div>

    <!-- ⭐ 核心重點五：選材的視角 -->
    <div class="key-point">
        <h3>選材的視角 — 角度決定高度</h3>
        <p style="text-align:center; font-size: 1rem; font-weight: 700; margin: 1rem 0; color: var(--color-primary);">
            同一個題目，為什麼有人寫得特別？— 選材角度決定高度
        </p>
        <p><strong>例：題目《一件小事》</strong></p>
        <div class="passage-analysis">
            <div class="passage-text" style="border-left: 3px solid #e0a0a0;">
                <h4 style="color:#a04040;">❌ 普通選材（千篇一律）</h4>
                <p>在街上撿到錢包，交還給失主。失主很感激，說我是好孩子。</p>
                <p style="margin-top:0.5rem;font-size:0.85rem;color:#a04040;">→ 問題：太常見、太公式化、沒有個人色彩</p>
            </div>
            <div class="passage-text" style="border-left: 3px solid #80c080;">
                <h4 style="color:#408040;">✅ 獨特選材（真實動人）</h4>
                <p>考試時，旁邊的同學偷偷問我答案。我拒絕了。那天下課後，我們在廁所碰到，氣氛尷尬極了。我忽然明白——做一個「好人」的代價，有時候是孤獨。</p>
                <p style="margin-top:0.5rem;font-size:0.85rem;color:#408040;">→ 優點：真實、有衝突、有深度、寫出了人性的複雜</p>
            </div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 選材心法：</strong>不要選「最安全」的事件，而要選「最有感觸」的事件。好的選材通常具備：有矛盾、有轉折、有個人特色。</p>
    </div>

    <!-- ⭐ 核心重點六：主題提煉三步法 -->
    <div class="key-point">
        <h3>主題提煉三步法</h3>
        <p style="text-align:center; font-size: 1.2rem; font-weight: 700; margin: 1rem 0; color: var(--color-primary);">
            事件 → 衝突/轉折 → 感悟/成長
        </p>
        <table class="simple-table">
            <tr><th>步驟</th><th>要做什麼</th><th>例子</th></tr>
            <tr>
                <td><strong>第一步：事件</strong></td>
                <td>寫清楚「發生了什麼」</td>
                <td>我和好朋友吵架了</td>
            </tr>
            <tr>
                <td><strong>第二步：衝突/轉折</strong></td>
                <td>寫出矛盾點或轉變的關鍵時刻</td>
                <td>我發現自己也有錯，但要開口道歉太難了</td>
            </tr>
            <tr>
                <td><strong>第三步：感悟/成長</strong></td>
                <td>這件事如何改變了你？你學到了什麼？</td>
                <td>原來自尊心是友誼的敵人；一句對不起比憋在心裡輕鬆得多</td>
            </tr>
        </table>
        <p style="margin-top: 1rem;"><strong>💡 記敘文的靈魂：</strong>不只是寫「發生了什麼」，更要寫「這件事如何改變了我」。沒有感悟的記敘文，只是流水帳；有感悟的記敘文，才是好文章。</p>
    </div>

    <!-- 知識點總結 -->
    <div class="knowledge-card">
        <h3>全教材回顧：一篇好記敘文的六層檢查</h3>
        <table class="simple-table">
            <tr><th>層面</th><th>檢查重點</th><th>來自哪個單元</th></tr>
            <tr><td>📐 結構</td><td>六要素完整？敘事順序恰當？</td><td>單元一</td></tr>
            <tr><td>🎬 開頭</td><td>開頭夠吸引人嗎？</td><td>單元二</td></tr>
            <tr><td>🖊️ 描寫</td><td>有五感描寫？有心理層次？有動作分解？</td><td>單元三</td></tr>
            <tr><td>🏁 結尾</td><td>結尾有力？不草率？</td><td>單元四</td></tr>
            <tr><td>✨ 語言</td><td>有修辭手法？句式有變化？</td><td>單元五</td></tr>
            <tr><td>💡 立意</td><td>選材獨特？有感悟/成長？</td><td>單元六</td></tr>
        </table>
    </div>

</div>
```

- [ ] **Step 2: 寫入單元六「範文賞析」頁籤內容**

```html
<div class="tab-panel" data-panel="reading" data-unit="6">

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「我們來看兩篇同題文章。題目一樣，但一篇看完就忘了，另一篇會讓你想很多。差別到底在哪裡？」</span>
    </div>

    <h3>同題異作對比：《一件小事》</h3>

    <div class="compare-toggle">
        <button class="compare-btn active" data-compare-target="ver-u6-common">普通版</button>
        <button class="compare-btn" data-compare-target="ver-u6-great">優秀版</button>
    </div>

    <div class="compare-container">
        <div class="compare-version active" id="ver-u6-common">
            <blockquote class="exercise-passage">
                <p>今天在上學途中，我看到地上有一個銀包。我把它撿起來，看到裡面有一些錢和一張身份證。我想失主一定很著急，所以我把銀包交給了附近的警察。警員叔叔稱讚我是一個好孩子。我很開心，因為我做了一件好事。</p>
            </blockquote>
            <p class="compare-note" style="color:#a04040;">❌ 問題分析：<br>• 選材平庸，千篇一律的「拾金不昧」故事<br>• 沒有衝突，沒有轉折<br>• 結尾是空洞的道德口號<br>• 讀者看完沒有任何感覺</p>
        </div>
        <div class="compare-version" id="ver-u6-great">
            <blockquote class="exercise-passage">
                <p>「借我抄一下吧，就這一次。」小藍把字條推到我的桌上。數學測驗還剩十分鐘，最後那道應用題像一座大山一樣擋在眼前。</p>
                <p>我的手心在冒汗。小藍是我從小學一年級就認識的好朋友，我們的書桌只隔了三十厘米——但這三十厘米，此刻像一道懸崖。</p>
                <p>「不行。」我把字條推回去。我看到她的表情變了——先是驚訝，然後是受傷，最後是冷冷的。她再也沒有看我一眼。</p>
                <p>那天放學，我一個人走在回家的路上。我一直問自己——我做對了嗎？如果再做一次，我會改變選擇嗎？</p>
                <p>那一天我沒有撿到銀包，也沒有幫老婆婆過馬路。但我做了一件更難的「小事」——在好朋友面前，堅持了自己相信是對的選擇。而這件事讓我第一次明白，有時候，做對的事情的代價，就是孤獨——但這份孤獨，是值得的。</p>
            </blockquote>
            <p class="compare-note" style="color:#408040;">✅ 成功要素：<br>• 選材獨特：不寫俗套的「好事」，寫道德兩難<br>• 有衝突：友誼 vs 原則<br>• 有轉折：好朋友的表情變化<br>• 有感悟：做對的事可能有代價，但值得<br>• 主題三步法完整：事件 → 衝突 → 成長</p>
        </div>
    </div>

    <div class="prompt-bubble">
        <span class="prompt-icon">💬</span>
        <span>「優秀版用了我們學過的哪些技巧？你可以從結構、描寫、開頭結尾、修辭、立意這六個層面來分析嗎？」</span>
    </div>

</div>
```

- [ ] **Step 3: 寫入單元六「實戰練習」頁籤內容**

```html
<div class="tab-panel" data-panel="practice" data-unit="6">

    <!-- 練習一：腦力激盪 -->
    <div class="exercise-card">
        <h4>練習一：腦力激盪 — 選材角度練習</h4>
        <p>題目：<strong>《那一刻，我長大了》</strong></p>
        <p>思考以下問題，幫助你找到獨特的選材角度：</p>
        <ol style="padding-left: 1.5rem; line-height: 2.2;">
            <li>你有沒有經歷過一件讓你突然「不再是小孩子」的事？</li>
            <li>那件事中，有什麼矛盾或困難？</li>
            <li>你做出了什麼選擇？這個選擇帶來了什麼後果？</li>
            <li>後來你對這件事有什麼新的理解？</li>
        </ol>
        <p style="margin-top: var(--spacing-sm);"><strong>至少寫出 2 個不同的選材方向：</strong></p>
        <p>方向一：<input type="text" class="fill-input" style="width:100%;max-width:100%;" placeholder="例：第一次為家人煮飯，體會到媽媽的辛苦⋯⋯"></p>
        <p>方向二：<input type="text" class="fill-input" style="width:100%;max-width:100%;" placeholder="例：向朋友道歉的那一刻，學會了放下自尊⋯⋯"></p>
        <p>方向三（加分）：<input type="text" class="fill-input" style="width:100%;max-width:100%;" placeholder="試試想一個更獨特的角度⋯⋯"></p>
    </div>

    <!-- 練習二：命題寫作 -->
    <div class="exercise-card">
        <h4>練習二：完整命題寫作（3 選 1）</h4>
        <p>選擇以下一個題目，運用我們學過的所有技巧，寫一篇完整的記敘文：</p>
        <div style="margin-bottom: var(--spacing-sm);">
            <p><strong>題目 A：《那一刻，我長大了》</strong></p>
            <p style="font-size:0.9rem;color:var(--color-text-light);">寫作提示：聚焦一個轉變的瞬間。你從一個狀態變成另一個狀態的關鍵時刻。</p>
        </div>
        <div style="margin-bottom: var(--spacing-sm);">
            <p><strong>題目 B：《一份特別的禮物》</strong></p>
            <p style="font-size:0.9rem;color:var(--color-text-light);">寫作提示：禮物不一定是實物。一份原諒、一個擁抱、一句話，都可以是禮物。</p>
        </div>
        <div style="margin-bottom: var(--spacing-sm);">
            <p><strong>題目 C：《如果時光可以倒流》</strong></p>
            <p style="font-size:0.9rem;color:var(--color-text-light);">寫作提示：選一個你想改變的時刻。不只是後悔，更要寫出你從中學到了什麼。</p>
        </div>
        <textarea placeholder="選擇一個題目，開始你的完整寫作⋯⋯" style="min-height: 200px;"></textarea>
    </div>

    <!-- 練習三：自評檢核表 -->
    <div class="exercise-card">
        <h4>練習三：自我檢查 — 寫作自評檢核表</h4>
        <p>完成寫作後，請對照以下清單逐一檢查你的文章：</p>

        <table class="simple-table">
            <tr><th>檢查項目</th><th>✅ / ❌</th><th>如果 ❌，需要改什麼？</th></tr>
            <tr><td>1. 六要素是否完整？（時、地、人、因、經、果）</td><td><select class="fill-input"><option>-</option><option>✅</option><option>❌</option></select></td><td><input type="text" class="fill-input" placeholder="缺失了什麼？"></td></tr>
            <tr><td>2. 開頭是否吸引人？（用了哪種開頭策略？）</td><td><select class="fill-input"><option>-</option><option>✅</option><option>❌</option></select></td><td><input type="text" class="fill-input" placeholder="可以改用什麼策略？"></td></tr>
            <tr><td>3. 是否有具體描寫？（五感／動作分解／心理層次）</td><td><select class="fill-input"><option>-</option><option>✅</option><option>❌</option></select></td><td><input type="text" class="fill-input" placeholder="哪個部分可以加描寫？"></td></tr>
            <tr><td>4. 結尾是否有力度？（用了哪種結尾策略？）</td><td><select class="fill-input"><option>-</option><option>✅</option><option>❌</option></select></td><td><input type="text" class="fill-input" placeholder="結尾有犯四大忌嗎？"></td></tr>
            <tr><td>5. 語言是否生動？（有修辭手法？句式有變化？）</td><td><select class="fill-input"><option>-</option><option>✅</option><option>❌</option></select></td><td><input type="text" class="fill-input" placeholder="哪句可以加修辭？"></td></tr>
            <tr><td>6. 立意是否清晰？（有事件 → 衝突 → 感悟？）</td><td><select class="fill-input"><option>-</option><option>✅</option><option>❌</option></select></td><td><input type="text" class="fill-input" placeholder="你學到了什麼？有寫出來嗎？"></td></tr>
        </table>
    </div>

</div>
```

---

### Task 3.4：Phase 3 檢查點

- [ ] **Step 1: 在瀏覽器中打開並檢查單元四至六**

檢查清單：
- [ ] 單元四：結尾策略完整、範文對比可用
- [ ] 單元五：⭐ 兩個核心重點有金色邊框樣式、修辭辨識練習可用
- [ ] 單元六：⭐ 兩個核心重點有金色邊框樣式、自評檢核表可用
- [ ] 所有互動功能正常（頁籤、手風琴、答案揭示）

---

## Phase 4：寫作錦囊 + 圖片素材

> **產出：完整教材 v1.0，含寫作錦囊和佔位圖片。**
> **⚠️ 此階段完成後需交付用戶檢查，確認後才進入 Phase 5。**

### Task 4.1：填充寫作錦囊內容

**Files:**
- Modify: `index.html` — 替換 `#toolkit` 內的 placeholder

- [ ] **Step 1: 寫入寫作錦囊三區塊**

找到 `<section class="toolkit-section" id="toolkit">`，替換 placeholder：

```html
<section class="toolkit-section" id="toolkit">
    <h2>📝 寫作錦囊</h2>

    <!-- 急救包 -->
    <div class="knowledge-card">
        <h3>⚡ 考試急救包（考前 10 分鐘速讀）</h3>
        <div class="sense-grid">
            <div class="sense-item"><strong>📐 結構</strong><br>六要素一個都不能少<br>順敘最安全</div>
            <div class="sense-item"><strong>🎬 開頭</strong><br>避免「有一天⋯⋯」<br>試試場景式或懸念式</div>
            <div class="sense-item"><strong>🖊️ 描寫</strong><br>最少用兩種感官<br>寫出內心聲音</div>
            <div class="sense-item"><strong>🏁 結尾</strong><br>不要草草收場<br>要有感悟或畫面</div>
            <div class="sense-item"><strong>✨ 語言</strong><br>至少一個比喻<br>長短句交替</div>
            <div class="sense-item"><strong>💡 立意</strong><br>不只寫事件<br>寫這件事如何改變你</div>
        </div>
    </div>

    <!-- 好詞好句庫 -->
    <div class="knowledge-card" style="margin-top: var(--spacing-md);">
        <h3>📖 好詞好句庫</h3>

        <div class="compare-toggle">
            <button class="compare-btn active" data-compare-target="vocab-people">寫人</button>
            <button class="compare-btn" data-compare-target="vocab-scene">寫景</button>
            <button class="compare-btn" data-compare-target="vocab-event">寫事</button>
            <button class="compare-btn" data-compare-target="vocab-feel">寫情</button>
        </div>

        <div class="compare-container" style="margin-top: var(--spacing-sm);">
            <div class="compare-version active" id="vocab-people">
                <h4>寫人 — 外表、動作、神態</h4>
                <table class="simple-table">
                    <tr><th>類別</th><th>詞語</th></tr>
                    <tr><td>眼睛</td><td>炯炯有神、目光如炬、眼眶濕潤、眼神黯淡</td></tr>
                    <tr><td>笑容</td><td>笑逐顏開、嫣然一笑、苦笑、勉強擠出笑容</td></tr>
                    <tr><td>動作</td><td>健步如飛、躡手躡腳、顫巍巍、大步流星</td></tr>
                    <tr><td>神態</td><td>容光煥發、垂頭喪氣、若有所思、目瞪口呆</td></tr>
                </table>
            </div>
            <div class="compare-version" id="vocab-scene">
                <h4>寫景 — 天氣、環境、氣氛</h4>
                <table class="simple-table">
                    <tr><th>類別</th><th>詞語</th></tr>
                    <tr><td>晴天</td><td>萬里無雲、艷陽高照、碧空如洗、風和日麗</td></tr>
                    <tr><td>雨天</td><td>傾盆大雨、毛毛細雨、煙雨濛濛、大雨滂沱</td></tr>
                    <tr><td>氣氛</td><td>鴉雀無聲、人聲鼎沸、寂靜無聲、熱火朝天</td></tr>
                    <tr><td>光影</td><td>燦爛奪目、燈火輝煌、漆黑一片、昏暗朦朧</td></tr>
                </table>
            </div>
            <div class="compare-version" id="vocab-event">
                <h4>寫事 — 過程、轉折、高潮</h4>
                <table class="simple-table">
                    <tr><th>類別</th><th>詞語</th></tr>
                    <tr><td>開始</td><td>拉開序幕、萬事俱備、蓄勢待發</td></tr>
                    <tr><td>過程中</td><td>如火如荼、一波三折、峰迴路轉</td></tr>
                    <tr><td>高潮</td><td>驚心動魄、扣人心弦、千鈞一髮</td></tr>
                    <tr><td>結束</td><td>圓滿落幕、曲終人散、意猶未盡</td></tr>
                </table>
            </div>
            <div class="compare-version" id="vocab-feel">
                <h4>寫情 — 喜怒哀樂</h4>
                <table class="simple-table">
                    <tr><th>類別</th><th>詞語</th></tr>
                    <tr><td>快樂</td><td>心花怒放、喜上眉梢、欣喜若狂、樂不可支</td></tr>
                    <tr><td>悲傷</td><td>心如刀割、泣不成聲、肝腸寸斷、黯然神傷</td></tr>
                    <tr><td>緊張</td><td>忐忑不安、心驚膽戰、坐立不安、七上八下</td></tr>
                    <tr><td>感動</td><td>熱淚盈眶、百感交集、觸景生情、心頭一暖</td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 自評檢核表 -->
    <div class="knowledge-card" style="margin-top: var(--spacing-md);">
        <h3>✅ 記敘文自評檢核表（通用版）</h3>
        <p style="margin-bottom: var(--spacing-sm);">寫完每一篇記敘文後，拿出這張清單自我檢查：</p>
        <table class="simple-table">
            <tr><th>#</th><th>檢查項目</th><th>✅</th></tr>
            <tr><td>1</td><td>六要素完整？（時間、地點、人物、起因、經過、結果）</td><td>☐</td></tr>
            <tr><td>2</td><td>開頭吸引人？（用了開門見山/懸念/場景/對話？）</td><td>☐</td></tr>
            <tr><td>3</td><td>有具體描寫？（五感：視/聽/嗅/味/觸？）</td><td>☐</td></tr>
            <tr><td>4</td><td>有心理描寫？（不只表層感受，有內心獨白和情感變化？）</td><td>☐</td></tr>
            <tr><td>5</td><td>對話生動？（用了直接引語？不是全部間接？）</td><td>☐</td></tr>
            <tr><td>6</td><td>結尾有力？（呼應/昇華/留白/反轉？沒犯四大忌？）</td><td>☐</td></tr>
            <tr><td>7</td><td>語言生動？（有用比喻/擬人/排比/誇張？句式有變化？）</td><td>☐</td></tr>
            <tr><td>8</td><td>立意清晰？（事件 → 衝突/轉折 → 感悟/成長？）</td><td>☐</td></tr>
        </table>
    </div>
</section>
```

---

### Task 4.2：準備圖片佔位資源

**Files:**
- Create: `images/` 資料夾下的所有圖片佔位檔

- [ ] **Step 1: 建立圖片資料夾**

Run: `mkdir -p /Users/lishuairui/寫作增潤課程/images`

- [ ] **Step 2: 生成佔位 SVG 圖片或純色 PNG**

對於每個需要的圖片（unit-1.png ~ unit-6.png, icon-knowledge.png, icon-reading.png, icon-practice.png, icon-star.png），使用 HTML canvas 或純色佔位。

由於瀏覽器無法直接生成 PNG，暫時採用以下方案：
- 每個 `<img>` 的 `src` 指向 `images/` 下的檔案
- 同時設定 CSS `background-color` 作為圖片載入失敗時的備援
- 先用簡易 SVG 檔案替代，後續可替換為正式卡通插圖

- [ ] **Step 3: 為每個單元生成簡易 SVG 佔位圖**

```svg
<!-- images/unit-1.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <rect fill="#e8f0fe" width="200" height="200" rx="12"/>
  <text fill="#1a2744" font-family="sans-serif" font-size="20" text-anchor="middle" x="100" y="110">記敘文骨架</text>
</svg>
```

（unit-2.svg 至 unit-6.svg 結構相同，只改底色和文字）

- [ ] **Step 4: 更新 HTML 中的圖片路徑，指向 `.svg` 暫用檔**

---

### Task 4.3：Phase 4 檢查點

- [ ] 寫作錦囊三區塊內容完整
- [ ] 圖片佔位可正常顯示

---

## Phase 5：測試與最終調整

> **產出：最終版本，桌面/iPad 均可正常使用，內容無誤。**

### Task 5.1：響應式測試

- [ ] **Step 1: 桌面端測試（≥768px）**
    - 導航列固定頂部
    - 範文雙欄佈局正常
    - 所有互動功能正常

- [ ] **Step 2: iPad/平板測試（<768px）**
    - 調整瀏覽器寬度至 768px 以下
    - 確認單欄佈局
    - 頁籤按鈕不會超出畫面
    - 圖片不會溢出

### Task 5.2：內容校對

- [ ] 六個單元所有文字校對（錯字、漏字、標點）
- [ ] 所有參考答案準確性檢查
- [ ] 六個 ⭐ 核心重點樣式一致

### Task 5.3：最終檢查點

- [ ] 完整走一遍 6 個單元的教學流程
- [ ] 所有練習題測試
- [ ] 進度儲存功能驗證（重整頁面後 checkbox 保持）
- [ ] 離線使用測試（斷網後打開，字體回退正常）

---

## 附錄：待辦事項（Phase 5 後處理）

- [ ] 將 SVG 佔位圖替換為正式卡通插圖（搜尋風格：簡潔線條、暖色調）
- [ ] 如需要，請中文科老師覆檢內容準確性
- [ ] 確認範文使用合規（經典作品 vs 原創範文）

---

> 📅 計畫完成。下一步：執行 Phase 1。

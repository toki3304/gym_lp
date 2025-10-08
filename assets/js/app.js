// スムーススクロール（同一ページ内のみ）
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href");
  if (id.length > 1 && document.querySelector(id)) {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// フォーム送信中のボタンフィードバック
const form = document.querySelector('form[name="trial"]');
if (form) {
  form.addEventListener("submit", () => {
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.textContent = "送信中...";
  });
}

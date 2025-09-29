// main.js
document.addEventListener("DOMContentLoaded", () => {
  /** زر الرجوع للأعلى **/
  const toTopBtn = document.createElement("button");
  toTopBtn.textContent = "⬆️";
  Object.assign(toTopBtn.style, {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    padding: "10px",
    borderRadius: "50%",
    fontSize: "18px",
    backgroundColor: "#4b3b69",
    color: "#fff",
    border: "none",
    display: "none",
    cursor: "pointer",
    zIndex: "1000",
    transition: "opacity 0.3s ease"
  });
  document.body.appendChild(toTopBtn);

  window.addEventListener("scroll", () => {
    toTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /** فتح المودال **/
  window.openModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "flex";
  };

  /** إغلاق المودال **/
  window.closeModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
  };

  /** إغلاق عند الضغط خارج المودال **/
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });

  /** الأسئلة الشائعة **/
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.classList.contains("show");

      // إغلاق الكل
      document.querySelectorAll(".faq-question").forEach((btn) => btn.classList.remove("active"));
      document.querySelectorAll(".faq-answer").forEach((ans) => ans.classList.remove("show"));

      // فتح السؤال الحالي إذا ما كان مفتوح
      if (!isOpen) {
        question.classList.add("active");
        answer.classList.add("show");
      }
    });
  });
});
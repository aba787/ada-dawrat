// Enhanced main.js with professional features
document.addEventListener("DOMContentLoaded", () => {
  /** زر الرجوع للأعلى مع تحسينات **/
  const toTopBtn = document.createElement("button");
  toTopBtn.innerHTML = "⬆️";
  toTopBtn.className = "back-to-top";
  toTopBtn.setAttribute("aria-label", "العودة للأعلى");
  document.body.appendChild(toTopBtn);

  // إظهار/إخفاء زر الرجوع للأعلى
  const toggleBackToTop = () => {
    const scrolled = window.scrollY;
    if (scrolled > 500) {
      toTopBtn.style.display = "block";
      toTopBtn.style.opacity = "1";
    } else {
      toTopBtn.style.opacity = "0";
      setTimeout(() => {
        if (window.scrollY <= 500) {
          toTopBtn.style.display = "none";
        }
      }, 300);
    }
  };

  window.addEventListener("scroll", toggleBackToTop);
  
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  });

  /** تحسين التنقل في الموقع **/
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /** تحسين النافذة المنبثقة (Modal) **/
  window.openModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
      
      // إضافة تأثير الظهور
      setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
      }, 10);
    }
  };

  window.closeModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.querySelector('.modal-content').style.transform = 'scale(0.8)';
      modal.querySelector('.modal-content').style.opacity = '0';
      
      setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }, 300);
    }
  };

  // إضافة styles للـ modal transitions
  const modalStyle = document.createElement('style');
  modalStyle.textContent = `
    .modal-content {
      transform: scale(0.8);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  `;
  document.head.appendChild(modalStyle);

  /** إغلاق النافذة المنبثقة عند الضغط خارجها أو بـ Escape **/
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      const modalId = e.target.id;
      closeModal(modalId);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const openModal = document.querySelector('.modal[style*="flex"]');
      if (openModal) {
        closeModal(openModal.id);
      }
    }
  });

  /** تحسين الأسئلة الشائعة **/
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.classList.contains("show");

      // إغلاق جميع الأسئلة
      document.querySelectorAll(".faq-question").forEach((btn) => {
        btn.classList.remove("active");
      });
      document.querySelectorAll(".faq-answer").forEach((ans) => {
        ans.classList.remove("show");
      });

      // فتح السؤال الحالي إذا لم يكن مفتوحاً
      if (!isOpen) {
        question.classList.add("active");
        answer.classList.add("show");
      }
    });
  });

  /** تحسين تجربة التحميل **/
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // مراقبة العناصر للرسوم المتحركة
  document.querySelectorAll('.course-card, .feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  /** تحسين النافذة المنبثقة للدورات **/
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  /** إضافة مؤشر التحميل للروابط الخارجية **/
  document.querySelectorAll('a[href^="https://t.me"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const originalText = this.textContent;
      this.textContent = 'جاري التحويل...';
      this.style.opacity = '0.7';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.opacity = '1';
      }, 2000);
    });
  });

  /** تحسين شريط التنقل عند التمرير **/
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // التمرير للأسفل
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // التمرير للأعلى
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });

  // إضافة transition لشريط التنقل
  navbar.style.transition = 'transform 0.3s ease';

  console.log('🚀 موقع آدا جاهز للعمل!');
});
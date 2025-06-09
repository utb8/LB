// رسالة ترحيب
document.addEventListener("DOMContentLoaded", function() {
  console.log("👋 مرحباً بك في وسطاء ليبيا - BL");
  
  // إشعار ترحيبي بسيط (يمكنك استبداله بتنبيه جميل لاحقًا)
  alert("مرحبًا بك في موقع وسطاء ليبيا! 🚀");
});

// تأكيد قبل إرسال الطلب
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function(e) {
    const confirmSend = confirm("هل أنت متأكد أنك تريد إرسال طلب الوساطة؟");
    if (!confirmSend) {
      e.preventDefault(); // إلغاء الإرسال
    }
  });
}
// حاسبة العمولة
function calculateFee() {
    let amount = document.getElementById("dealAmount").value;
    let fee = amount * 0.05;
    document.getElementById("fee").innerText = fee.toFixed(2) + " د.ل";
}

// تبديل اللغة (عربي / إنجليزي)
function switchLanguage(lang) {
    let ar = document.getElementById("lang-ar");
    let en = document.getElementById("lang-en");
    if (lang === 'ar') {
        ar.style.display = "block";
        en.style.display = "none";
    } else {
        ar.style.display = "none";
        en.style.display = "block";
    }
}

// إظهار الواجهة الرئيسية بعد الضغط على زر الدخول
function enterSite() {
    document.getElementById("entry-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}

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
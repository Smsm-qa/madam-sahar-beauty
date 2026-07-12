// تشغيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    checkWorkingHours(); // فحص أوقات العمل
    
    // 1. معالجة نموذج الحجز
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const service = document.getElementById('service').value;
            const phone = document.getElementById('phone').value;
            
            if (name.trim() === "" || phone.trim() === "") {
                alert("يرجى ملء الاسم ورقم الهاتف لإتمام الحجز!");
                return;
            }
            
            const message = `مرحباً، اسمي ${name}، أرغب في حجز موعد لخدمة: ${service}. رقم هاتفي: ${phone}`;
            window.open(`https://wa.me/249916825552?text=${encodeURIComponent(message)}`, '_blank');
        });
    }

    // 2. الأسئلة الشائعة (FAQ)
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            // إغلاق الإجابات الأخرى لجعل سؤال واحد مفتوح فقط
            document.querySelectorAll('.faq-answer').forEach(ans => {
                if (ans !== answer) ans.style.display = 'none';
            });
            // تبديل حالة الإجابة الحالية
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        });
    });

    // 3. المودال (نافذة الطوارئ) - تم دمج الوظيفة من الكود
    window.openEmergencyModal = () => {
        const modal = document.getElementById('emergencyModal');
        if (modal) modal.style.display = 'block';
    };
    window.closeEmergencyModal = () => {
        const modal = document.getElementById('emergencyModal');
        if (modal) modal.style.display = 'none';
    };

    // 4. تغيير العرض
    window.changeOffer = () => {
        const box = document.getElementById('offerBox');
        if (box) {
            box.style.backgroundColor = "#b76e79";
            box.style.color = "white";
            box.innerHTML = "<h3>شكراً لاهتمامك!</h3><p>تواصل معنا عبر الواتساب للحصول على كود الخصم.</p>";
        }
    };

    // 5. زر العودة للأعلى
    const backToTopBtn = document.getElementById("backToTop");
    window.onscroll = () => {
        if (backToTopBtn) {
            backToTopBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
        }
    };
});

// --- الوظائف الخارجية (Global Functions) ---

// نظام القائمة (Menu Toggle)
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// فحص أوقات العمل
function checkWorkingHours() {
    const alertDiv = document.getElementById('statusAlert');
    if (!alertDiv) return;
    
    const hour = new Date().getHours();
    if (hour >= 9 && hour < 19) {
        alertDiv.innerHTML = "✅ المركز مفتوح الآن، نتشرف بزيارتكم!";
        alertDiv.style.color = "green";
    } else {
        alertDiv.innerHTML = "⚠️ عذراً، المركز مغلق حالياً!";
        alertDiv.style.color = "#d63031";
    }
}

// إرسال واتساب
function sendToWhatsApp() {
    const service = document.getElementById('serviceSelect').value;
    const url = `https://wa.me/249916825552?text=أهلاً مدام سحر، أريد حجز موعد لخدمة: ${service}`;
    window.open(url, '_blank');
}

// التقييم
function rate(stars) {
    let starsElements = document.querySelectorAll('#rating-stars span');
    starsElements.forEach((star, index) => {
        star.style.color = index < stars ? '#FFD700' : '#ccc';
    });
    alert("شكراً لتقييمك لنا بـ " + stars + " نجوم!");
}

// تعقيم البيانات وتحديث السعر
function sanitizeInput(str) {
    let temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

function updatePrice() {
    let rawService = document.getElementById('serviceInput').value;
    let rawPrice = document.getElementById('priceInput').value;
    let cleanService = sanitizeInput(rawService);
    let cleanPrice = sanitizeInput(rawPrice);
    console.log("تم تعقيم البيانات: ", cleanService, cleanPrice);
}

// زر العودة للخلف
const backButton = document.getElementById('backButton');
if (backButton) {
    backButton.addEventListener('click', function() {
        window.history.back();
    });
}

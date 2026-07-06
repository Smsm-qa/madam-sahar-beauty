document.addEventListener('DOMContentLoaded', () => {
    
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
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        });
    });

    // 3. المودال (نافذة الطوارئ)
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

function rate(stars) {
    let starsElements = document.querySelectorAll('#rating-stars span');
    starsElements.forEach((star, index) => {
        star.style.color = index < stars ? '#FFD700' : '#ccc';
    });
    alert("شكراً لتقييمك لنا بـ " + stars + " نجوم!");
}// دالة لتعقيم المدخلات ومنع تنفيذ الأكواد البرمجية
function sanitizeInput(str) {
    let temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// دالة التحديث المعدلة
function updatePrice() {
    let rawService = document.getElementById('serviceInput').value;
    let rawPrice = document.getElementById('priceInput').value;

    // تعقيم البيانات قبل معالجتها
    let cleanService = sanitizeInput(rawService);
    let cleanPrice = sanitizeInput(rawPrice);

    // الآن استخدم cleanService و cleanPrice في الكود الخاص بك
    console.log("تم تعقيم البيانات: ", cleanService, cleanPrice);
    
    // تابع عملية الإرسال لقاعدة البيانات هنا...
}function checkStatus() {
    const now = new Date();
    const hours = now.getHours();
    const statusAlert = document.getElementById('statusAlert');

    // افترض أن المركز مفتوح من الساعة 9 صباحاً وحتى 9 مساءً (21:00)
    if (hours >= 9 && hours < 21) {
        statusAlert.innerText = "أهلاً بكم، المركز مفتوح حالياً!";
        statusAlert.style.backgroundColor = "green"; // اختياري: تغيير اللون للأخضر
    } else {
        statusAlert.innerText = "عذراً، المركز مغلق حالياً، ننتظركم في الموعد القادم.";
        statusAlert.style.backgroundColor = "red"; // اختياري: تغيير اللون للأحمر
    }
}

// تشغيل الوظيفة عند تحميل الصفحةfunction checkStatus() {
checkStatus();


function checkStatus() {
    const statusAlert = document.getElementById('statusAlert');
    if (!statusAlert) return; // يمنع الخطأ إذا لم تجد العنصر
    
    const now = new Date();
    const hours = now.getHours();
    // ... باقي الكود الخاص بك
}// تشغيل وظائف الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    checkWorkingHours();
});

// فحص أوقات العمل
function checkWorkingHours() {
    const hour = new Date().getHours();
    const alertDiv = document.getElementById('statusAlert');
    if (hour >= 9 && hour < 19) {
        alertDiv.innerHTML = "✅ المركز مفتوح الآن، نتشرف بزيارتكم!";
        alertDiv.style.color = "green";
    } else {
        alertDiv.innerHTML = "⚠️ عذراً، المركز مغلق حالياً!";
        alertDiv.style.color = "#d63031";
    }
}

// نافذة الطوارئ
function openEmergencyModal() { document.getElementById('emergencyModal').style.display = 'block'; }
function closeEmergencyModal() { document.getElementById('emergencyModal').style.display = 'none'; }

// إرسال واتساب
function sendToWhatsApp() {
    const service = document.getElementById('serviceSelect').value;
    const url = `https://wa.me/249916825552?text=أهلاً مدام سحر، أريد حجز موعد لخدمة: ${service}`;
    window.open(url, '_blank');
}function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}// تفعيل نظام الأسئلة الشائعة (FAQ Accordion)
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        
        // إغلاق الإجابات الأخرى (اختياري، لجعل سؤال واحد مفتوح فقط)
        document.querySelectorAll('.faq-answer').forEach(ans => {
            if (ans !== answer) ans.style.display = 'none';
        });

        // تبديل حالة الإجابة الحالية
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});
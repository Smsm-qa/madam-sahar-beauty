document.addEventListener('DOMContentLoaded', () => {
    // 1. فحص أوقات العمل
    checkWorkingHours(); 
    
    // 2. معالجة نموذج الحجز
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

    // 3. نظام الأسئلة الشائعة (FAQ)
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            document.querySelectorAll('.faq-answer').forEach(ans => {
                if (ans !== answer) ans.style.display = 'none';
            });
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        });
    });

    // 4. زر العودة للأعلى
    const backToTopBtn = document.getElementById("backToTop");
    window.onscroll = () => {
        if (backToTopBtn) {
            backToTopBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
        }
    };

    // 5. زر العودة للخلف
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', () => { window.history.back(); });
    }
});

// --- الوظائف العامة ---

// نظام القائمة (Menu)
 function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.querySelector('.menu-toggle'); // أضفنا هذا السطر
    
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
    
    if (menuToggle) {
        menuToggle.classList.toggle('active'); // هذا السطر سيجعل الزر يتحول لـ X
    }
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

// المودال (نافذة الطوارئ)
function openEmergencyModal() { 
    const modal = document.getElementById('emergencyModal');
    if (modal) modal.style.display = 'block'; 
}
function closeEmergencyModal() { 
    const modal = document.getElementById('emergencyModal');
    if (modal) modal.style.display = 'none'; 
}

// إرسال واتساب
function sendToWhatsApp() {
    const serviceSelect = document.getElementById('serviceSelect');
    const service = serviceSelect ? serviceSelect.value : "خدمة عامة";
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

// تعقيم البيانات
function sanitizeInput(str) {
    let temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// تحديث السعر
function updatePrice() {
    let rawService = document.getElementById('serviceInput') ? document.getElementById('serviceInput').value : "";
    let rawPrice = document.getElementById('priceInput') ? document.getElementById('priceInput').value : "";
    console.log("تم تعقيم البيانات: ", sanitizeInput(rawService), sanitizeInput(rawPrice));
}

// تغيير العرض
function changeOffer() {
    const box = document.getElementById('offerBox');
    if (box) {
        box.style.backgroundColor = "#b76e79";
        box.style.color = "white";
        box.innerHTML = "<h3>شكراً لاهتمامك!</h3><p>تواصل معنا عبر الواتساب للحصول على كود الخصم.</p>";
    }
}

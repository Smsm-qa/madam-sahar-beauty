<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>لوحة التحكم | مدام سحر</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; padding: 20px; }
        .dashboard { max-width: 800px; margin: auto; }
        .card { background: white; padding: 20px; margin-bottom: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        h2 { color: #b76e79; border-bottom: 2px solid #eee; padding-bottom: 10px; }
        input, textarea { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box; }
        button { background-color: #b76e79; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; transition: 0.3s; }
        button:hover { background-color: #9c5a64; }
        .status-box { display: flex; align-items: center; justify-content: space-between; }
    </style>
</head>
<body>

    <div id="adminContent" class="dashboard" style="display: none;">
        <h1>⚙️ لوحة تحكم الإدارة</h1>
        
        <div class="card status-box">
            <div>
                <h2>حالة المركز</h2>
                <p>الحالة الحالية: <strong id="statusText">مفتوح</strong></p>
            </div>
            <button onclick="toggleStatus()">تبديل الحالة</button>
        </div>

        <div class="card">
            <h2>تحديث الأسعار (الصبغة)</h2>
            <input type="number" id="dyePrice" placeholder="أدخل سعر الصبغة الجديد">
            <button onclick="savePrice()">حفظ السعر الجديد</button>
        </div>

        <div class="card">
            <h2>ملاحظات العمل</h2>
            <textarea id="dailyNotes" rows="4" placeholder="اكتبي ملاحظاتك هنا..."></textarea>
            <button onclick="saveNotes()">حفظ الملاحظات</button>
        </div>

        <button style="background: #555;" onclick="window.location.href='index.html'">العودة للموقع الرئيسي</button>
    </div>

    <script>
        // نظام حماية الصفحة
        const pass = "0900403835";
        const input = prompt("يرجى إدخال كلمة سر الإدارة:");
        if (input === pass) {
            document.getElementById("adminContent").style.display = "block";
            // تحميل البيانات المحفوظة عند فتح الصفحة
            document.getElementById("dailyNotes").value = localStorage.getItem("salonNotes") || "";
            document.getElementById("dyePrice").value = localStorage.getItem("dyePrice") || "";
            document.getElementById("statusText").innerText = localStorage.getItem("salonStatus") || "مفتوح";
        } else {
            alert("كلمة سر خاطئة!");
            window.location.href = "index.html";
        }

        // الوظائف البرمجية
        function toggleStatus() {
            let status = document.getElementById("statusText");
            status.innerText = (status.innerText === "مفتوح") ? "مغلق" : "مفتوح";
            localStorage.setItem("salonStatus", status.innerText);
        }

        function saveNotes() {
            localStorage.setItem("salonNotes", document.getElementById("dailyNotes").value);
            alert("تم حفظ الملاحظات!");
        }

        function savePrice() {
            localStorage.setItem("dyePrice", document.getElementById("dyePrice").value);
            alert("تم حفظ السعر!");
        }
    </script>
<div class="admin-container" style="padding: 20px; font-family: sans-serif;">
    <h2>لوحة تحكم مركز "مدام سحر"</h2>

    <!-- قسم الإحصائيات -->
    <div style="display: flex; gap: 15px; margin-bottom: 30px;">
        <div style="background: #fdf6f8; padding: 20px; border-radius: 15px; flex: 1; border: 1px solid #d6a1b1;">
            <h3>حجوزات اليوم</h3>
            <p style="font-size: 24px; font-weight: bold;">12</p>
        </div>
        <div style="background: #fdf6f8; padding: 20px; border-radius: 15px; flex: 1; border: 1px solid #d6a1b1;">
            <h3>طلبات معلقة</h3>
            <p style="font-size: 24px; font-weight: bold;">3</p>
        </div>
    </div>

    <!-- جدول الحجوزات -->
    <table style="width: 100%; border-collapse: collapse; background: white;">
        <thead>
            <tr style="background: #eee;">
                <th style="padding: 10px; text-align: right;">العميلة</th>
                <th style="padding: 10px; text-align: right;">الخدمة</th>
                <th style="padding: 10px; text-align: right;">الحالة</th>
            </tr>
        </thead>
        <tbody>
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px;">سارة أحمد</td>
                <td style="padding: 10px;">مكياج عروس</td>
                <td style="padding: 10px; color: green;">مؤكد</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px;">ندى علي</td>
                <td style="padding: 10px;">مايكروبليدنج</td>
                <td style="padding: 10px; color: orange;">بانتظار التأكيد</td>
            </tr>
        </tbody>
    </table>
</div>
<div style="margin-top: 30px; padding: 20px; background: #fff; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
    <h3>معرض أعمالي السريعة</h3>
    <div style="display: flex; gap: 10px; overflow-x: auto;">
        <img src="images/henna-1.jpg" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px;">
        <img src="images/micro-1.jpg" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px;">
        <div style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; background: #fdf6f8; border: 2px dashed #d6a1b1; border-radius: 10px; color: #d6a1b1;">+ إضافة</div>
    </div>
</div>
<!-- حاوية لوحة التحكم -->
<div style="font-family: sans-serif; padding: 20px; background: #fafafa; min-height: 100vh;">
    <h1 style="color: #d6a1b1;">لوحة تحكم المركز</h1>

    <!-- 1. بطاقات الإحصائيات -->
    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
        <div style="flex: 1; background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 5px #eee;">
            <h3>حجوزات اليوم</h3><p style="font-size: 20px; font-weight: bold;">12</p>
        </div>
        <div style="flex: 1; background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 5px #eee;">
            <h3>طلبات معلقة</h3><p style="font-size: 20px; font-weight: bold;">3</p>
        </div>
    </div>

    <!-- 2. جدول الحجوزات التفاعلي -->
    <table style="width: 100%; background: white; border-radius: 10px; padding: 10px; margin-bottom: 20px;">
        <tr><th>العميلة</th><th>الخدمة</th><th>الإجراء</th></tr>
        <tr><td>سارة</td><td>مكياج</td><td><button onclick="this.parentElement.innerHTML='✅'">تأكيد</button></td></tr>
    </table>

    <!-- 3. معرض الصور -->
    <h3>آخر الأعمال</h3>
    <div style="display: flex; gap: 10px; overflow-x: auto;">
        <div style="width: 100px; height: 100px; background: #ddd; border-radius: 10px;">صورة 1</div>
        <div style="width: 100px; height: 100px; background: #ddd; border-radius: 10px;">صورة 2</div>
    </div>
</div>

<head>
    <meta charset="UTF-8">
    <title>لوحة تحليلات مركز مدام سحر</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; }
        .dashboard-container { display: flex; gap: 20px; flex-wrap: wrap; }
        .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); width: 300px; }
        .chart-box { background: white; padding: 20px; border-radius: 10px; width: 400px; }
    </style>
</head>
<body>

    <h1>لوحة تحليلات المركز</h1>

    <div class="dashboard-container">
        <div class="card">
            <h3>إجمالي الحجوزات</h3>
            <p style="font-size: 24px; font-weight: bold;">125</p>
        </div>
        <div class="card">
            <h3>الطلبات المعلقة</h3>
            <p style="font-size: 24px; font-weight: bold;">8</p>
        </div>

        <div class="chart-box">
            <canvas id="myChart"></canvas>
        </div>
    </div>

    <script>
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['مكياج', 'أظافر', 'شعر', 'بشرة'],
                datasets: [{
                    label: 'توزيع الخدمات',
                    data: [40, 25, 20, 15],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                }]
            }
        });
    </script><div class="admin-control">
    <input type="text" id="serviceName" placeholder="اسم الخدمة (مثلاً: تنظيف بشرة)">
    <input type="number" id="newPrice" placeholder="السعر الجديد">
    <button onclick="updatePrice()">تحديث السعر</button>
</div>

<script>
    function updatePrice() {
        let service = document.getElementById('serviceName').value;
        let price = document.getElementById('newPrice').value;
        // هنا ستقوم بربط الكود بقاعدة بياناتك (مثل Firebase) ليتم الحفظ
        alert("تم تحديث " + service + " إلى سعر " + price);
    }
</script>
<?php
session_start();
if (!isset($_SESSION['is_admin'])) {
    header("Location: login.php");
    exit();
}
?>
<?php
session_start();
if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true) {
    header("Location: login.php"); // يعيد توجيه أي شخص لصفحة الدخول
    exit();
}
// هنا يأتي محتوى صفحة الأدمن الخاص بك
?>

</body>
</html>
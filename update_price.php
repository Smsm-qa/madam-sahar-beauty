<?php
// إعدادات قاعدة البيانات (قم بتغييرها حسب إعداداتك)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sahar_db"; // اسم قاعدة بياناتك

try {
    // الاتصال بقاعدة البيانات
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // استقبال البيانات من صفحة الإدارة
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $service_name = htmlspecialchars($_POST['service']);
        $new_price = filter_var($_POST['price'], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);

        // تحديث السعر باستخدام Prepared Statements للحماية من الاختراق
        $stmt = $conn->prepare("UPDATE services SET price = :price WHERE service_name = :name");
        $stmt->bindParam(':price', $new_price);
        $stmt->bindParam(':name', $service_name);
        
        if ($stmt->execute()) {
            echo "تم تحديث السعر بنجاح.";
        } else {
            echo "حدث خطأ أثناء التحديث.";
        }
    }
} catch(PDOException $e) {
    echo "خطأ في الاتصال: " . $e->getMessage();
}
?><?php
// إعدادات الاتصال بقاعدة البيانات
$host = 'localhost';
$db   = 'sahar_db'; // تأكد من مطابقة هذا الاسم لاسم قاعدة بياناتك
$user = 'root';     // اسم مستخدم السيرفر المحلي غالباً يكون root
$pass = '';         // غالباً لا توجد كلمة مرور في السيرفر المحلي
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

try {
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // تنقية المدخلات لمنع هجمات XSS
        $service = htmlspecialchars($_POST['service']);
        $price = $_POST['price'];

        // استخدام Prepared Statements لمنع SQL Injection (الأمان هنا)
        $sql = "UPDATE services SET price = :price WHERE service_name = :service";
        $stmt = $pdo->prepare($sql);
        
        // تنفيذ التحديث
        $stmt->execute(['price' => $price, 'service' => $service]);
        
        echo "تم تحديث السعر بنجاح!";
    }
} catch (\PDOException $e) {
    // إخفاء تفاصيل الخطأ الحقيقية عن المستخدم لأغراض أمنية
    echo "حدث خطأ في النظام، يرجى المحاولة لاحقاً.";
}
?>
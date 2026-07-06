<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // اسم المستخدم وكلمة السر الحقيقية (في المستقبل استخدم تشفير hash)
    if ($username === "sami" && $password === "0900403835") {
        $_SESSION['is_admin'] = true;
        header("Location: admin.html");
    } else {
        echo "اسم مستخدم أو كلمة مرور خاطئة!";
    }
}
?>
<form method="post">
    <input type="text" name="username" placeholder="اسم المستخدم" required>
    <input type="password" name="password" placeholder="اكتب كلمة المرور" required>
    <button type="submit">دخول</button>
</form>
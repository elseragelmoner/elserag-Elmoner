// استدعاء العنصر الذي يحتوي على العداد
var visitorsElement = document.getElementById("visitors");

// جلب العدد الحالي من مخزن المتصفح
var visitorsCount = localStorage.getItem("visitorsCount");

// تحديث العداد إذا كان هناك قيمة محفوظة
if (visitorsCount) {
  visitorsElement.textContent = visitorsCount;
}

// زيادة العداد بمقدار 1 وحفظ القيمة في مخزن المتصفح
visitorsCount = parseInt(visitorsCount || 0) + 1;
localStorage.setItem("visitorsCount", visitorsCount);
visitorsElement.textContent = visitorsCount;

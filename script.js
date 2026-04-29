const nav = document.getElementById("navLinks");

// فتح / إغلاق القائمة
function toggleMenu(){
  if(nav.style.right === "0px"){
    nav.style.right = "-250px";
  } else {
    nav.style.right = "0px";
  }
}

// إغلاق عند الضغط خارجها
document.addEventListener("click", function(event){
  const isClickInside = nav.contains(event.target);
  const isMenuIcon = event.target.closest(".menu-icon");

  if(!isClickInside && !isMenuIcon){
    nav.style.right = "-250px";
  }
});

// منع إغلاق القائمة عند الضغط داخلها
nav.addEventListener("click", function(e){
  e.stopPropagation();
});

// السهم يفتح/يغلق القائمة الفرعية فقط
const toggles = document.querySelectorAll('.dropdown-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) { // فقط للجوال
      e.stopPropagation();  // يمنع وصول الضغط لبقية القائمة
      const submenu = this.nextElementSibling; // القائمة الفرعية
      submenu.classList.toggle('active');      // تفعيل/إلغاء
    }
  });
});

// السنة الديناميكية
document.getElementById("year").textContent = new Date().getFullYear();
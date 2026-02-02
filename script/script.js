const navbarNavRespon = document.querySelector('.navbar-respon');
const tblMenu = document.getElementById('menu');
const closeMenu = document.getElementById('btn-close');
const content = document.getElementById('content');

// // memunculkan navbar saat click tombol menu

tblMenu.addEventListener("click", () => {
  navbarNavRespon.classList.add("active");
  navbarNavRespon.classList.remove("hide");
  // content di belakang mengecil saat navbar muncul
  content.classList.add("main");
  // navbar active no scroll 
  document.body.classList.add('no-scroll');
});
// menghilangkn navbar respon dengan tombol X
closeMenu.addEventListener("click", () => {
  navbarNavRespon.classList.remove("active");
  navbarNavRespon.classList.add("hide");
  // content di belakang mengecil saat navbar muncul
  content.classList.remove("main");
// saat navbar hilang layar bisa di scroll semula
document.body.classList.remove('no-scroll');
});

// dropdown ditur
const iconRight = document.getElementById('icon-right');
const mainDown = document.getElementById('dropdown-menu');

iconRight.addEventListener("click", () => {
  mainDown.classList.toggle("drop");

  if (mainDown.classList.contains("drop")) {
    iconRight.classList.remove("fa-chevron-right");
    iconRight.classList.add("fa-chevron-down");
  } else {
    iconRight.classList.remove("fa-chevron-down");
    iconRight.classList.add("fa-chevron-right");
  }
});

// memunculkan category desktop 
const iconCategoryDesk = document.getElementById("icn-categoryDesk");
const categoryDesk = document.querySelector(".category-desk");
const btnCloseCategoryDesk = document.getElementById("btn-closeCategoryDesk")

iconCategoryDesk.addEventListener("click", () => {
  categoryDesk.classList.add("cdesk");
  categoryDesk.classList.remove("cdeskhide");
  document.body.classList.add('no-scroll');
});
btnCloseCategoryDesk.addEventListener("click", () => {
  categoryDesk.classList.remove("cdesk");
  categoryDesk.classList.add("cdeskhide");
  document.body.classList.remove('no-scroll');
});

// efek hover category desktop
const buble = document.getElementById("buble");

iconCategoryDesk.addEventListener("mouseover", () => {
  buble.classList.add("enter");
});
iconCategoryDesk.addEventListener("mouseout", () => {
  buble.classList.remove("enter");
});


// memunculkan category mobile
const iconCategory = document.getElementById("icn-categoryMbl");
const btnCloseCategory = document.getElementById("btn-closeCategory");
const categoryMbl = document.querySelector(".category-respon");

iconCategory.addEventListener("click", () => {
  categoryMbl.classList.add("cMbl");
  categoryMbl.classList.remove("cHide");
  document.body.classList.add('no-scroll');
  content.classList.add("main");
});
// menghilangkan kategori dengan btn close ctegory
btnCloseCategory.addEventListener("click", () => {
  categoryMbl.classList.remove("cMbl");
  categoryMbl.classList.add("cHide");
  document.body.classList.remove('no-scroll');
  content.classList.remove("main");
});




    // btn search error
  // const btnSearch = document.getElementById('btn-search');
  // btnSearch.addEventListener("click", () => {
  //   window.location.href = '../404/404.html';
  // });





  // navbar mengecil saat di scroll
  const navbar = document.getElementById('navbar');

  window.addEventListener("scroll", function () {
    // efek scroll hanya di atas 768px
    if (window.innerWidth > 768) {
      if (window.scrollY > 50) {
        navbar.classList.add("shrink");
      } else {
        navbar.classList.remove("shrink");
      }
      // di bawah 768 px kembali semperti semula
    } else {
      navbar.classList.remove("shrink");
    }
  });

  // navbar hide mobile 450px
  let lastScroll = 0

  window.addEventListener("scroll", () => {
    if (window.innerWidth > 768) return;

    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.classList.add("navHide");
    } if (lastScroll - currentScroll > 8) {
      navbar.classList.remove("navHide");
    }

    lastScroll = currentScroll
  });


// efek hover biru pada navigation a mengikuti scroll navbar
  const navigation = document.querySelectorAll('.navbar-nav a');

  navigation.forEach(link => {
      window.addEventListener("scroll", function () {
    if (window.innerWidth > 768) {
      if (window.scrollY > 50) {
        link.style.paddingTop = "7px";
        link.style.paddingBottom = "7px";
      }else {
        link.style.paddingTop = "14px";
        link.style.paddingBottom = "14px";
      }
    }
  });
  });
  

  // logo mengecil saat di scroll
  const logoMini = document.querySelector('.nav-logo');

    window.addEventListener("scroll", function () {
      // logo mengecil saat di scroll hanya di atas 768px
      if (window.innerWidth > 768) {
        if (window.scrollY > 50) {
          logoMini.classList.add("shrink");
        } else {
          logoMini.classList.remove("shrink");
        }
        // di bawah 768 px kembali semperti semula
      } else {
        logoMini.classList.remove("shrink");
      }
  });

    // copy url otomatis
  const copyBtn = document.getElementById("copy-url");
  const originalContent = copyBtn.innerHTML;

  copyBtn.addEventListener('click', ()=> {
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Disalin!';

      // warna text berubah saat di bawah 450px
      if (window.innerWidth < 450) {
        copyBtn.style.color = "white";
        copyBtn.style.fontWeight = "600";
      } else {
        copyBtn.style.color = "#000";
        copyBtn.style.fontWeight = "600";
      };

      setTimeout(() => {
        copyBtn.innerHTML = originalContent
      }, 2000);
    });
  });


  // button download posting timer
  const btnDwnd = document.getElementById('btn-download');
  const text = document.getElementById('textdownload');
  const secondEl = document.getElementById('seconds');


  btnDwnd.addEventListener('click', () => {
    let time = 5;

    btnDwnd.style.display = "none";
    text.style.display = "block";
    text.style.textAlign = "center";
    text.style.fontWeight = "700";
    text.style.fontSize = "18px";
    secondEl.textContent = time;

    const timer = setInterval(() => {
      time--;
      secondEl.textContent = time;

      if(time <= 0) {
        clearInterval(timer);

        const file = btnDwnd.dataset.file;
        const a = document.createElement('a');
        a.href = file;
        a.download = "";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        text.innerHTML = "Download Dimulai";
      }
    }, 1000);
  });





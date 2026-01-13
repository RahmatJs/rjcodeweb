const navbarNav = document.querySelector('.navbar-nav');
const tblMenu = document.getElementById('menu');
const closeMenu = document.getElementById('btn-close');


// memunculkan navbar saat click tombol menu
  tblMenu.addEventListener("click", () => {
    navbarNav.classList.add("active");
    // saat tampilan navbar aktiv layar belakang tidak bisa di scroll
    document.body.classList.add('no-scroll');
  });
// menghilangkan navbar dengan tombol X
  closeMenu.addEventListener("click", () => {
    navbarNav.classList.remove("active");
    // saat navbar hilang layar bisa di scroll semula
    document.body.classList.remove('no-scroll');
  });




    // btn search error
  const btnSearch = document.getElementById('btn-search');
  const errorSearch = document.querySelector('.error-search')

  btnSearch.addEventListener("click", () => {
    errorSearch.classList.add("active");

    document.addEventListener('click',function(e) {
      if(!btnSearch.contains(e.target) && !errorSearch.contains(e.target)) {
        errorSearch.classList.remove("active");
      }
    });
  });





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


// efek hover biru pada navigation a mengikuti scroll navbar
  const navigation = document.querySelectorAll('.navbar-nav a');

  navigation.forEach(link => {
      window.addEventListener("scroll", function () {
    if (window.innerWidth > 768) {
      if (window.scrollY > 50) {
        link.style.paddingTop = "0";
        link.style.paddingBottom = "0";
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


  // alert ("Website Masih Dalam Pengembangan");
    setTimeout(() => {
    document.getElementById("alertDev").style.display = "none";
  }, 3000);



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





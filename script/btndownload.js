                                    // JAVA SCRIPT KHUSUS BTN DOWNLOAD DAN COPY URL ARTIKEL DAN BLOG
                                     


 // button download posting timer
  const btnDwnd = document.getElementById('btn-download');
  const text = document.getElementById('textdownload');
  const secondEl = document.getElementById('seconds');


  if (btnDwnd) {
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
  }

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
  
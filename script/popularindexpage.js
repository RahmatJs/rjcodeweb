// PREV NEXT SIDEBAR POPULAR
  const rightPopular = document.getElementById("right-popular");
  const leftPopular = document.getElementById("left-popular");
  const popularBox1 = document.querySelector(".popular-box1");
  const popularBox2 = document.querySelector(".popular-box2");

  rightPopular.addEventListener("click", () => {
    popularBox1.classList.add("popOpac1");
    popularBox2.classList.add("popOpac2");
  });
  leftPopular.addEventListener("click", () => {
    popularBox1.classList.remove("popOpac1");
    popularBox2.classList.remove("popOpac2");
  });
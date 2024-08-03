const left = document.querySelector("#left"),  right = document.querySelector("#right"), carousel = document.querySelector(".carousel");

var offset = 0, imgs = [];

if(carousel) {
(function() {
  let c = 0, fragment = document.createDocumentFragment();
  for (let i = 0; i < 18; i++) {
    let img = document.createElement('img');
    img.src = "./images/img" + c + ".jpg";
    img.alt = "CCC Liberation Parish";
    fragment.appendChild(img);
    c++;
  }
  carousel.appendChild(fragment);
  imgs = carousel.querySelectorAll("*");
})();


left.addEventListener("click", () => {
  if (offset == 0) {
    offset = -((290 * imgs.length) - 290);
  } else {
    offset += 290;
  }

  imgs.forEach((img) => {
    img.style.transform = "translateX(" + offset + "px)";
  })
})

right.addEventListener("click", () => {
  if (offset == -((290 * imgs.length) - 290)) {
    offset = 0;
  } else {
    offset -= 290;
  }

  imgs.forEach((img) => {
    img.style.transform = "translateX(" + offset + "px)";
  })
})
}
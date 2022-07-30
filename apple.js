let imageVar = document.getElementById('film-image');
let imageArray = ['image/people1.jpg', 'image/people2.jpg', 'image/people3.jpg'];

let imageIndex = 0;

function slideShow() {
    imageVar.setAttribute('src', imageArray[imageIndex]);
    imageIndex++;

    if(imageIndex >= imageArray.length) {
        imageIndex = 0
    }
}

setInterval(slideShow, 2000);

const mobileBtn = document.getElementById('shopping-bag')
      nav = document.getElementById('hidden-navbar')
      mobileBtnExit = document.getElementById('shopping-bag-exit');

      mobileBtn.addEventListener('click', () => {
          nav.classList.add('menu-btn');
      })

      mobileBtnExit.addEventListener('click', () => {
        nav.classList.remove('menu-btn');
    })
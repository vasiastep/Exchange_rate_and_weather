const mainblock = document.getElementById('main-block-id');
const leftBlock = document.getElementById('left-side-block-id');
const slideImg = document.getElementById('left-arrow-img');

export function showAndHideLeftBar() {
    mainblock.classList.toggle('main-after-click');
    leftBlock.classList.toggle('leftBar-after-click');
    slideImg.classList.toggle('slide-img-after-click');
}

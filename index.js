
const firstPhotoBlock = document.querySelector('.main__first-photo');
const secondPhotoBlock = document.querySelector('.main__second-photo');
const firstPhotoContent = firstPhotoBlock.innerHTML;
const secondPhotoContent = secondPhotoBlock.innerHTML;

window.addEventListener('resize', function () {
    if (window.innerWidth < 362) {
        firstPhotoBlock.innerHTML = secondPhotoContent;
        secondPhotoBlock.innerHTML = firstPhotoContent;
    } else if (window.innerWidth > 362) {
        firstPhotoBlock.innerHTML = firstPhotoContent;
        secondPhotoBlock.innerHTML = secondPhotoContent;
    }
});
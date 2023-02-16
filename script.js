const heading = document.getElementById('heading');
const video = document.getElementById("video-wrapper")
const makersTitle = document.getElementById("makers-title")
const makersImages = document.getElementById("makers-images")
makersTitle.classList.add('hidden'); 
makersImages.classList.add('hidden'); 
let isAddictedShown = true;
let isGuiltyShown = false;
let isQuitShown = false;
let isVideoShown = false;
let ov = document.getElementsByClassName('ovCont')[0];
ov.classList.add('hidden');

document.addEventListener('click', () => {
    if (isAddictedShown) {
        heading.classList.add('hidden');
        heading.innerText = 'Guilty?';
        heading.classList.remove('hidden');
        isAddictedShown = false;
        isGuiltyShown = true;
        // comsole.log(ov);
    }
    else if (isGuiltyShown) {
        heading.classList.add('hidden');
        heading.innerText = 'Quit.';
        heading.classList.remove('hidden');
        isGuiltyShown = false;
        isQuitShown = true;
    }
    else if (isQuitShown) {
        console.log('VIDEO');
        video.classList.toggle("show");
        heading.classList.add('hidden');    
        isQuitShown = false;
        isVideoShown = true;
    }
    else if (isVideoShown) {
        console.log('MAKERS');
        video.classList.toggle("show");
        makersTitle.classList.remove('hidden'); 
        makersImages.classList.remove('hidden'); 
        ov.classList.remove('hidden'); 
        isVideoShown = false;
        isMakersShown = true;
    }
    else {
        makersTitle.classList.add('hidden'); 
        makersImages.classList.add('hidden'); 
        ov.classList.add('hidden');
        heading.classList.add('hidden'); 
        heading.innerText = 'Addicted?';
        heading.classList.remove('hidden');
        isMakersShown = false;
        isAddictedShown = true;
    }
});


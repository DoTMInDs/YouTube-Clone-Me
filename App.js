const leftNavBar = document.querySelector('.left-navBar-container');
const dehazeOne = document.querySelector('.dehaze-one');
const dehazeTwo = document.querySelector('.dehaze-two');
const youTubeMenu = document.querySelector('.youtube-logo');
const youTubeMenu2 = document.querySelector('.left-nav-logo-yotube');

dehazeOne.addEventListener('click', () => {
    leftNavBar.classList.toggle('leftNavigation')
});

dehazeTwo.addEventListener('click', () => {
    leftNavBar.classList.toggle('leftNavigation')
});

youTubeMenu.addEventListener('click', () => {
    leftNavBar.classList.toggle('leftNavigation')
});

youTubeMenu2.addEventListener('click', () => {
    leftNavBar.classList.toggle('leftNavigation')
});



const topNavList = document.querySelector(".top-nav-list"),
    allTopNav = document.querySelectorAll(".top-nav"),
    arrowIcons = document.querySelectorAll(".rightBox i");
    

let isDragging = false;

const handleRightBox = () => {
    let scrollVal = Math.round(topNavList.scrollLeft);
    let maxScrollableWidth = topNavList.scrollWidth - topNavList.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";

}

arrowIcons.forEach(rightBox => {
    rightBox.addEventListener("click", () => {
        topNavList.scrollLeft += rightBox.id === "left" ? -350 : 350;
        setTimeout(() => handleRightBox(), 50);
    });
})

// allTabs.forEach(tab => {
//     tab.addEventListener("click", () => {
//         topNavList.querySelector(".active-blue").classList.remove("active-blue");
//         tab.classList.add(".active-blue");
//     });
// })

const dragging = (e) => {
    if (!isDragging) return;
    topNavList.classList.add("dragging");
    topNavList.scrollLeft -= e.movementX;
    handleRightBox();
}

const dragStop = () => {
    isDragging = false;
    topNavList.classList.remove("dragging");
}

topNavList.addEventListener("mousedown", () => isDragging = true)
topNavList.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);



const moreRightSide = document.querySelector(".more-right-side"); 
const notification = document.querySelector(".notifications"); 

notification.addEventListener("click", () => {
    moreRightSide.classList.toggle("more-right-side-retrieve");
})


function goShorts() {
    window.location = 'shorts.html'
}
function goLibrary() {
    window.location = 'library.html'
}
function goSubscription() {
    window.location = 'subscription.html'
}
function goHome() {
    window.location = 'index.html'
}


const switchDark = document.querySelector('.switch-dark');
const switchDarkContainer = document.querySelector('.relative-dot-dark');

switchDarkContainer.addEventListener('click', () => {
    switchDark.classList.toggle('dark-switch');
})


// const colorTheme = document.querySelector('.relative-dot-dark');
// const dark = document.querySelector('.dark');
// const light = document.querySelector('.light');

var darkMode = document.getElementById('darkMode');
var lightMode = document.getElementById('lightMode');

darkMode.onclick = function () {
    document.body.classList.toggle("brightness");
    if (document.body.classList.contains("brightness")) {
        darkMode.style.color = 'white';
    }
    else {
        darkMode.style.color = '#a78209';
    }    
}

// lightMode.onclick = function () {
//     document.body.classList.toggle("blackMode");
//     if (document.body.classList.contains("blackMode")) {
//         lightMode.style.color = 'white';
//     }
//     else {
//         lightMode.style.color = '#a78209';
//     }
// }

// --------------------------------add-circle-bg-container-------

const addCircle = document.querySelector('.add-circle-bg-container');
const closeSign = document.querySelector('.closeSign');
const add = document.querySelector('.add');

add.addEventListener('click', () => {
    addCircle.classList.toggle('addSignUp')
})

closeSign.addEventListener('click', () => {
    addCircle.classList.remove('addSignUp')
})




// MOBILE MENU

let mobileMenu = document.querySelector('.nav-gamburger-menu');
let mainMenu = document.querySelector(".navigation");


mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})

// CLOSE MOBILE MENU

let closeM = document.querySelector('.close')


function closeModal() {
    mainMenu.classList.remove("active-menu")

}

closeM.addEventListener("click", closeModal)


// LIKE

let likeBtn = document.querySelectorAll(".like_one")

    likeBtn.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            item.classList.toggle("liked")
        })
    })
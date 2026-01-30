const buttons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".content");

let currActiveTab = tabs[0];

buttons.forEach(function (button, index){
    button.addEventListener("click", function(){
        currActiveTab.classList.remove("active");
        tabs[index].classList.add("active");
        currActiveTab = tabs[index];
    })
});

const modals = document.querySelectorAll(".modal-button");
const overlays = document.querySelectorAll(".overlay");

let isModalOpen = false;

modals.forEach(function (modal){
    modal.addEventListener("click", function(){
        if(isModalOpen){
            overlays[0].classList.remove("active");
            isModalOpen = false;
        } else {
            overlays[0].classList.add("active");
            isModalOpen = true;
        }
    })
});
const buttons = document.querySelectorAll(".faq-btn");
const items = document.querySelectorAll(".faq-content");
let currActiveElement, currActiveBtn;

buttons.forEach(function(button, index){
    button.addEventListener("click", function(){
        
        // If clicking the same button again, toggle it closed
        if(currActiveBtn === this){
            currActiveElement.classList.remove("active");
            currActiveBtn.innerHTML = "+";
            currActiveBtn = null;
            currActiveElement = null;
            return;
        }
        
        // Close previously active element
        if(currActiveElement){
            currActiveElement.classList.remove("active");
            currActiveBtn.innerHTML = "+";
        }
        
        // Open newly clicked element
        this.innerHTML = "-";
        items[index].classList.add("active");
        currActiveElement = items[index];
        currActiveBtn = this;
    });
});

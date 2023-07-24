var hamb = document.querySelector(".hamb");
var navlist = document.querySelector(".select");
hamb.addEventListener("click",function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})
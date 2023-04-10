let upBtn = document.querySelector(".up");
let stars = document.querySelectorAll(".footer-of-card-quiz .icons i");

window.onscroll = () =>{
    // console.log(this.scrollY);
    if(this.scrollY >= 600) {
        upBtn.classList.add("show")
    }else {
        upBtn.classList.remove("show")
    }
}

upBtn.onclick = () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

// #ffe623

stars.forEach((item, index) =>{
    item.addEventListener("click", ()=>{
        stars.forEach((star,index2)=>{
            index >= index2 ? star.style.color = "#ffe623": star.style.color="#fff"
        })
    })
})



//nav bar
// let navMove = document.querySelector("#check");
// let closeNav = document.getElementById("close")
// let navShow = document.querySelector(".main-of-head ul.outer-ul");
// navMove.onclick = () =>{
//     navShow.style.left = 0
// }
// closeNav.onclick=()=>{
//     navShow.style.left = "-100%"
// }
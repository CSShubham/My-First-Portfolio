let navHamburger=document.querySelector('.nav-hamburger');
let navLinks=document.querySelector('.nav-links');

navHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('show');
})
let projectsbtn=document.querySelector('#projects-btn');
let skillsbtn=document.querySelector('#skills-btn');

projectsbtn.addEventListener('click',(e)=>{
    document.querySelector(".project-display-changer").style.display="block";
    document.querySelector(".skills-display-changer").style.display="none";
    console.log("projects button clicked");
    // document.querySelector(".project-display-changer").scrollIntoView({
    //     behavior: 'smooth'
    // });
});
skillsbtn.addEventListener('click',(e)=>{
    document.querySelector(".project-display-changer").style.display="none";
    document.querySelector(".skills-display-changer").style.display="block";
    console.log("skills button clicked");
    // document.querySelector(".skills-display-changer").scrollIntoView({
    //     behavior: 'smooth'
    // });
});
function setActive(clickeddiv){
    const pscbtns=document.querySelectorAll(".p-s-c-btn-div");
    console.dir(pscbtns);
    pscbtns.forEach(btn => btn.classList.remove("active"));
    clickeddiv.classList.add("active");
}
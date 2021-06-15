const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const btn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

btn.addEventListener("click", () => {
    //linksContainer.classList.toggle("show-links");
    //height is created in case of wanting to add an extra link in html

    const containerHeight = linksContainer.getBoundingClientRect().height;

    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;    
    }
    else{
        linksContainer.style.height = 0;
    };
   
});


const navbar = document.getElementById("nav");
const topLink =document.querySelector(".top-link")
window.addEventListener('scroll', () => {
       const scrollHeight =  window.pageYOffset;
       

       const navHeight = navbar.getBoundingClientRect().height;
        
       if(scrollHeight > navHeight){
           navbar.classList.add("fixed-nav");
       }else{
           navbar.classList.remove("fixed-nav");
       }

       if(scrollHeight > 500){
           topLink.classList.add("show-link")
       }else[
            topLink.classList.remove("show-link")
       ]
});
const scrollHeight = document.querySelectorAll('.scroll-link');


//to navigate  directly from the links directly to the section in the webpage
scrollHeight.forEach((link) => {

    link.addEventListener('click', (e) => {
        //prevent default settings
        e.preventDefault();
        //navigate to a specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");



        //to get the position using the offsetTop function to get the coordinate of an element
        let position = element.offsetTop - navHeight;


        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }


        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;

    });

})
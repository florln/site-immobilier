document.addEventListener("DOMContentLoaded",()=>{
    // Quand on commence par scroller
    document.addEventListener("scroll", ()=>{
        const header = document.querySelector(".sticky-header");
        header.classList.toggle("sticky", window.scrollY >70)

        const sections = document.querySelectorAll("section");

        const screenPosition = window.innerHeight /1.5;
        sections.forEach((section)=>{
            const sectionPosition = section.getBoundingClientRect().top;
            if(sectionPosition < screenPosition){
                section.classList.add("fade-in")
            }else{
                section.classList.remove("fade-in")
            }
        })


        const navlinks = document.querySelectorAll("nav ul li a");
        let current = "";
        sections.forEach((section)=>{
            const sectionTop = section.offsetTop;
            if(window.scrollY >= sectionTop - (sectionTop/10)){
                current = section.id;
            }
        });

        navlinks.forEach(link => {
            link.classList.remove("active")
            if(link.href.includes(current)){
                link.classList.add('active')
            }
        })


    })


    const slides = document.querySelectorAll(".testimonial");
    const prev = document.querySelector(".prev-slide")
    const next = document.querySelector(".next-slide");

    let currentIndex = 0;
    function showSlide(index){
        slides.forEach((slide, i)=>{
            slide.classList.remove("active");
            if(i === index){
                slide.classList.add("active");
            }
        })
    }

    next.addEventListener("click", ()=>{
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex)
    })
    prev.addEventListener("click", ()=>{
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex)
    })

    showSlide(0)

    const humburger = document.getElementById("humburger");
    humburger.addEventListener("click", (e)=>{
        const nav = document.querySelector("nav ul");
        nav.classList.toggle('open')
    })

})
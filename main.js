const text = new SplitType('#hh', {types: 'chars'});
const parra = new SplitType('#pp', {types: 'chars, words'});

text.chars.forEach((char,index) => {
    
    let charst = gsap.timeline();
    
    
    charst.from(char, {
        y: gsap.utils.random(-150,150),
        x: gsap.utils.random(-250,250),
        rotate: gsap.utils.random(-180,180),
        scale: gsap.utils.random(-1,2),
        opacity: 0,
        duration: 1.5 ,
        ease: "back.out",
        delay : index * 0.01
    })
    charst.from(char, {
        color: `rgb(${gsap.utils.random(0,255)}, ${gsap.utils.random(0,255)}, ${gsap.utils.random(0,255)})`,
        duration: 0.1,
    }, "-=.2")

    char.addEventListener("mouseenter", charsHover);

    function charsHover(){
        gsap.timeline()
        .to(char, {
            y: gsap.utils.random(-5,15),
            x: gsap.utils.random(-5,15),
            rotate: gsap.utils.random(0,120),
            scale: 2,
            ease: "back.out",
            onComplete: () => {
                char.removeEventListener("mouseenter", charsHover)
            }
        })
        .to(char, {
            y:0,
            x:0,
            scale: 1,
            delay: 0.2,
            rotate: 1,
            ease: "back.out",
            onComplete: () => {
                char.addEventListener("mouseenter", charsHover)
            }
        })
    }
})

parra.chars.forEach((char,index) => {
    gsap.from(char, {
        y: gsap.utils.random(-150,150),
        rotate: gsap.utils.random(-180,180),
        scale: gsap.utils.random(-1,2),
        opacity: 0,
        duration: 1.5 ,
        ease: "back.out",
        delay : index * 0.01
    })

    char.addEventListener("mouseenter", wordHover);

    function wordHover(){
        gsap.timeline()
        .to(char, {
            scale: 1.5,
            ease: "back.out",
            color: `rgb(0, 0, ${gsap.utils.random(150,255)})`,
            onComplete: () => {
                char.removeEventListener("mouseenter", charsHover)
            }
        })
        .to(char, {
            scale: 1,
            delay: 0.2,
            color: "",
            ease: "back.out",
            onComplete: () => {
                char.addEventListener("mouseenter", charsHover)
            }
        })
    }
})
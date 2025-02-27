document.addEventListener("DOMContentLoaded", function() {
    const lightEffect = document.querySelector('.light-effect');
    const companyLogo = document.querySelector('.company-logo1');
    const textContainer = document.querySelector('.text-container1');

    // 创建一个GSAP时间轴
    const tl = gsap.timeline();



    //同时让Logo淡入
    tl.to(companyLogo, { 
        duration: 0.5, 
        opacity: 1, 
        ease: "power2.out"
    }, 'start') // 使用相同的标签以确保与光点动画同步开始

    // Step 4: 在Logo淡入完成后立即让文本容器淡入
    tl.to(textContainer, { 
        duration: 0.5, 
        opacity: 1, 
        y: 0, 
        ease: "power2.out" 
    }, '<0.5'); // 在Logo淡入完成之后0.5秒开始
});



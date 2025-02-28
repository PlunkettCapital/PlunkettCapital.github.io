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

// 文本容器淡入动画
tl.to('.text-container1', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: function() {
        // 动态添加标题阴影效果
        gsap.to('.company-title1', {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // 结束状态：有阴影
            duration: 0.5,
            ease: "power2.out"
        });
    }
}, '<0.5'); // 在 Logo 淡入完成之后 0.5 秒开始

});


document.addEventListener('DOMContentLoaded', function () {
    const homeButtonContainer = document.querySelector('.home-button-container');

    // 确保按钮初始状态为透明
    homeButtonContainer.style.opacity = 0;

    // 延迟 100 毫秒后添加 'show' 类以触发淡入效果
    setTimeout(() => {
        console.log('Adding show class to home button');
        homeButtonContainer.classList.add('show');
    }, 100);
});

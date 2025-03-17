document.addEventListener("DOMContentLoaded", function() {
    const path = document.querySelector('#circlePath'); // 使用正确的路径ID
    const lightEffect = document.querySelector('.light-effect');
    const companyLogo = document.querySelector('.company-logo');
    const textContainer = document.querySelector('.text-container');

    // 创建一个GSAP时间轴
    const tl = gsap.timeline();



    //同时让Logo淡入
    tl.to(companyLogo, { 
        duration: 0.5, 
        opacity: 1, 
        ease: "power2.out"
    }, 'start') // 使用相同的标签以确保与光点动画同步开始


// 文本容器淡入动画
tl.to('.text-container', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: function() {
        // 动态添加标题阴影效果
        gsap.to('.company-title', {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // 结束状态：有阴影
            duration: 0.5,
            ease: "power2.out"
        });

        // 动态添加描述阴影效果
        gsap.to('.company-description', {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // 结束状态：有阴影
            duration: 0.5,
            ease: "power2.out"
        });
  
    }
}, '<0.5'); // 在 Logo 淡入完成之后 0.5 秒开始

});


document.addEventListener('DOMContentLoaded', function () {
    const navButtons = document.getElementById('navButtons');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    // 确保按钮初始状态为透明
    navButtons.style.opacity = 0;

    // 延迟 100 毫秒后添加 'show' 类以触发淡入效果
    setTimeout(() => {
        console.log('Adding show class');
        navButtons.classList.add('show');
    }, 100);

    // 为每个按钮添加平滑滚动功能
    document.querySelectorAll('.navigation-buttons button').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // 防止默认行为

            // 获取目标 ID
            const targetId = this.getAttribute('data-target');

            if (targetId) {
                // 获取目标元素
                const targetElement = document.getElementById(targetId);

                // 平滑滚动到目标元素
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }

                // 在移动设备上点击按钮后隐藏导航菜单
                if (window.innerWidth <= 768) {
                    navButtons.classList.remove('show');
                }
            }
        });
    });

    // 点击汉堡菜单时显示/隐藏导航按钮
    hamburgerMenu.addEventListener('click', function () {
        navButtons.classList.toggle('show');
    });

    // 点击页面其他区域时隐藏导航菜单
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navigation-buttons') && !event.target.closest('.hamburger-menu')) {
            navButtons.classList.remove('show');
        }
    });

    // 滚动页面时隐藏导航菜单
    window.addEventListener('scroll', function () {
        if (window.innerWidth <= 768) {
            navButtons.classList.remove('show');
        }
    });
});

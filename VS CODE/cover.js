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

    // Step 4: 在Logo淡入完成后立即让文本容器淡入
    tl.to(textContainer, { 
        duration: 0.5, 
        opacity: 1, 
        y: 0, 
        ease: "power2.out" 
    }, '<0.5'); // 在Logo淡入完成之后0.5秒开始
});


// 当文档加载完成后执行此函数
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // 获取导航按钮容器
    const navButtons = document.getElementById('navButtons');

    // 确保按钮初始状态为透明
    navButtons.style.opacity = 0;

    // 延迟 100 毫秒后添加 'show' 类以触发淡入效果
    setTimeout(() => {
        console.log('Adding show class');
        navButtons.classList.add('show');
    }, 100);

    // 为每个按钮添加平滑滚动功能
    document.querySelectorAll('.navigation-buttons button').forEach(button => {
        button.addEventListener('click', function(event) {
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
            }
        });
    });
});


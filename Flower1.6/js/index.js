window.onload = (event) => {
        const main_t1 = document.getElementById('main_t1'),
              main_t2 = document.getElementById('main_t2'),
              main_t3 = document.getElementById('main_t3'),
              main_t4 = document.getElementById('main_t4'),
              main_t5 = document.getElementById('main_t5'),
              main_t6 = document.getElementById('main_t6'),
              main_t7 = document.getElementById('main_t7'),
              main_t8 = document.getElementById('main_t8'),
              main_t9 = document.getElementById('main_t9');
              main_t10 = document.getElementById('main_t10');
              main_t11= document.getElementById('main_t11');
              main_l= document.getElementById('main_l');
              main_r= document.getElementById('main_r');
        const animationClass = 'move';
        // 创建监听
        const intersectionObserver = new IntersectionObserver((entries) => {
            for (entry of entries) {
                if (entry.intersectionRatio > 0) {
                    addAnimationClass(entry.target, animationClass);
                } else {
                    console.log(animationClass);
                    removeAnimationClass(entry.target, animationClass);
                }
            }
        });
        // 添加动画class的操作
        function addAnimationClass(elem, animationClass) {
            elem.className.includes(animationClass) ? 1 : elem.className = elem.className + ' ' + animationClass;
        }
        // 移除动画class的操作
        // function removeAnimationClass(elem, animationClass) {
        //     elem.className.includes(animationClass) ? elem.className = elem.className.replace(animationClass, '') : 1;
        //     console.log(elem.className);
        // }
        // 开启监听
        intersectionObserver.observe(main_t1);
        intersectionObserver.observe(main_t2);
        intersectionObserver.observe(main_t3);
        intersectionObserver.observe(main_t4);
        intersectionObserver.observe(main_t5);
        intersectionObserver.observe(main_t6);
        intersectionObserver.observe(main_t7);
        intersectionObserver.observe(main_t8);
        intersectionObserver.observe(main_t9);
        intersectionObserver.observe(main_t10);
        intersectionObserver.observe(main_t11);
        intersectionObserver.observe(main_l);
        intersectionObserver.observe(main_r);

    },setInterval(function(){
            var dateTime = new Date();
            var hours = dateTime.getHours();
            var minutes = dateTime.getMinutes();
            var seconds = dateTime.getSeconds();
            time.innerHTML=`<span class="h1">${hours}</span>  时  <span class="h1">${minutes}</span>  分钟  <span class="h1">${seconds}</span>  秒  `;
            time2.innerHTML=`<span class="h1">${hours}</span>  时  <span class="h1">${minutes}</span>  分钟  <span class="h1">${seconds}</span>  秒  `;
        }
,1000)



//1、获取元素
        // 转换为真正的数组
        // Array.prototype.concat.call(imgs);
        let imgs = [...$("img",true)];
        let prev = $(".prev");
        let next = $(".next");
        let container = $(".container");
        let idots = [...$(".idot",true)];
        let _curIndex = 0;//记录当前显示图片的下标，局部变量用下划线，常量用大写字母
        let _lastIndex = 0;//记录当前图片的前一张
        let _timer = null;//定时器

        //获取元素
        function $(sel,isAll){
            if(isAll){
                return document.querySelectorAll(sel);
            }
            return document.querySelector(sel);
        }

        //2、点击下一页
        next.onclick = function(){
            _curIndex = _curIndex == 5 ? 0 : ++_curIndex;
            tab();
        }

        //3、点击上一页
        prev.onclick = function(){
            _curIndex = _curIndex == 0 ? 5 : --_curIndex;
            tab();
        }

        //4、点击小圆点切换图片
        idots.forEach(function(el,idx){
            el.onclick = function(){
                _curIndex = idx;
                tab()
            }
        })

        //5、自动播放
        play();

        //6、用户体验
        container.onmouseenter = stop;
        container.onmouseleave = play;

        //=>封装函数
        //切换
        function tab(){
            //切换图片
            imgs[_lastIndex].classList.remove("show");
            imgs[_curIndex].classList.add("show");
            //切换小圆点
            idots[_lastIndex].classList.remove("sel");
            idots[_curIndex].classList.add("sel");

            _lastIndex = _curIndex;
        }

        //启动定时器
        function play(){
            _timer = setInterval(function(){
                next.onclick();
            },2000);
        }

        //关闭定时器
        function stop(){
            clearInterval(_timer);
        }
var 지금사진 = 1
        //아이디가 버튼인 아이를 늘릭하면 nav에 noneBox라는 클래스를 추가해서
        // css에 미리 설정해둔 noneBox의 스타일을 적용함
        $('#btn').on('click', function(){
            $('nav').addClass('noneBox');
        })
        // 아이디가 클로즈인 아이를 클릭하면 noneBox를 제거
        $('#close').on('click', function(){
            $('nav').removeClass('noneBox');
        })
        
        $('.nextBtn').on('click', function(){
            $('.window').css('transform', 'translateY(-700px)');
        })
        
        $('.nextBtn2').on('click', function(){
            $('.window').css('transform', 'translateY(-1400px)');
        })

        $('.prevBtn').on('click', function(){
            $('.window').css('transform', 'translateY(0)');
        })

        $('.prevBtn2').on('click', function(){
            $('.window').css('transform', 'translateY(-700px)');
        })
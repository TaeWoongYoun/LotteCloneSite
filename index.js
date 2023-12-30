var 지금사진 = 1

        $('#btn').on('click', function(){
            $('nav').addClass('noneBox');
        })

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
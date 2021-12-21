$(document).ready(() => {
    (() => {
        $('div.our-services-list').on('click', 'div:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.our-services').find('div.our-services-content').hide().removeClass('active')
                .eq($(this).index()).addClass('active').fadeIn(400);
        });
    })()

    let counter = 0
    $('#but1').on('click',function(){
        counter++;
        if(counter === 1){
            $('#but1').css('visibility','hidden')
            $('.loader').css('display','block')
            $('.loader').append( `
  					<div class="animation-wrapper">
  			<div class = "centered">
  					<div class = "animate-block"></div>
  				</div>
  			</div>

  	` )
            setTimeout(function(){
                $('.gallery-container').css('maxHeight','1200px')
                $('#but1').css('visibility','visible')
                $('.loader').css('display','none')
            },2000)

        }
        else{
            $('#but1').css('visibility','hidden')
            $('.loader').css('display','block')
            $('.loader').append( `
  					<div class="animation-wrapper">
  			<div class = "centered">
  					<div class = "animate-block"></div>
  				</div>
  			</div>

  	` )
            setTimeout(function(){
                $('.gallery-container').css('maxHeight','1800px')
                $('#but1').css('display','none')
                $('.loader').css('display','none')
            },2000)
        }
    })

    function filter(){
        function filterTarget(target){
            let fActive = 'all';
            if(counter === 0 && fActive!==target){
                $('.sort').hide().filter(':not(.'+target+')');
                $('.sort:lt(12)').filter('.'+target).fadeIn();
                fActive=target;
            }
            else if(counter === 1 && fActive!==target){
                $('.sort').hide().filter(':not(.'+target+')');
                $('.sort:lt(24)').filter('.'+target).fadeIn();
                fActive=target;
            }
            else{
                if(fActive!==target){
                    $('#but1').css('display','none')
                    $('.sort').hide().filter(':not(.'+target+')');
                    $('.sort:lt(36)').filter('.'+target).fadeIn();
                    fActive=target;
                }
            }
        }

        $('.amazing-list div').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });

        $('.f-graphic').click(function(){
            filterTarget('graphic');
            $('#but1').css('display','none')
            $('.gallery-container').css('overflow','hidden')
        });
        $('.f-web').click(function(){
            filterTarget('web');
            $('#but1').css('display','none')
        });
        $('.f-landing').click(function(){
            filterTarget('landing');
            $('#but1').css('display','none')
        });
        $('.f-wordpress').click(function(){
            filterTarget('wordpress');
            $('#but1').css('display','none')
        });
        $('.f-all').click(function(){
            if(counter !== 2){
                $('#but1').css('display','block')
            }
            filterTarget('all');
            $('.sort').fadeIn(400);
            fActive='all';
        });
    }
    filter()


    $('.gallery-item').mouseover(function(){
        let text = this.classList[2];
        $(this).append(`<div class="img-hover">
  						<div class="elipse-1">
  							<img src="./img/icons/Combined%20shape%207431.png" alt="">
  						</div>
  						<div class="elipse-2">
                        <img src="./img/icons/Layer%2023.png" alt="">
                         </div>
  						<div class="text-container">
  							<div class="text-1">${text}</div>
  							<div class="text-2">${text}</div>
  						</div>
  					</div>`)

    });

    $('.gallery-item').mouseleave(function(){
        $(this).find('.img-hover').remove();
    });




    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 2,
        arrows: false,
        fade: true,
        asNavFor: `.carousel-container`
    });
    $('.carousel-container').slick({
        infinite: true,
        centerMode: true,
        slidesToScroll: 1,
        focusOnSelect:true,
        asNavFor: `.slider-for`,
        prevArrow: `<button class="prev-but"> < </button>`,
        nextArrow:`<button class="next-but"> > </button>`,
        variableWidth: true,
        draggable:false,
        cssEase: 'linear',
        speed: 550
    });



    $('.link-to-top').click(function(){
        $('body').animate({ scrollTop: 0 }, 2000)
    })

})

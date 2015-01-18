$(document).ready(function(){
  $('.category_nav a').click(function(){
    $this = $(this);
    $('.panel').hide();
    $('.category_nav a.active').removeClass('active');
    $this.addClass('active').blur();
      var panel = $this.attr('href');
    $(panel).fadeIn(250);
      return false;
  });
  $('.category_nav li:first a').click();
        
  $(function(){
    var t = 1;
    var picCount = 2;
    var slideW = 940;
    var TT = setInterval(pp, 2000);

    function pp(){
      $(".pic").animate({left: t* slideW * -1 },300);

      if (t < picCount){
         t++;
      }else{
         t=0;
      }
    }
  });
  $(function(){
    $('.btn_signin').click(function(){
      $('.signin').slideToggle();
    })
  });
  $(function(){
    $('.signin').validate({
      rules: {
        email: {
          required: true,
          email: true
      },
        password: {
          required: true,
          rangelength:[8,16]
        }
      },
      messages: {
        email: {
          required: "Please supply an e-mail address.",
          email: "This is not a valid email address."
        },
        password: {
          required: 'Please type a password',
          rangelength: 'Password must be between 8 and 16 characters long.'
        }
      }
    });
  });
});

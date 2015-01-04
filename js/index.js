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
});

$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});

$(function() {
  /* 按下GoTop按鈕時的事件 */
  $('#gotop').click(function(){
      $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
      return false;
  });
  
  /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
  $(window).scroll(function() {
      if ( $(this).scrollTop() > 400){
          $('#gotop').fadeIn();
      } else {
          $('#gotop').fadeOut();
      }
  });
});

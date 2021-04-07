// JavaScript Document
$(function () {
  $(window).scroll(function () {
    var value = $(this).scrollTop(); //スクロールの値を取得
    var windowWidth = $(window).width(); //ウィンドウ幅を取得
    var windowSm = 768; //起点となる幅を設置
    if (windowWidth <= windowSm) {
      $('.bg-img').css('background-position', '70% ' + value / 5 + 'px');
    } else {
      if (value >= 1) {
        $('h1').css('width', '50%');
        $('h1').css('position', 'fixed');
        $('.news').css('margin-top', '0');
      }
    }
  });
});
$(window).on('load', function () {
  var locUrl = location.href;
  var setHash = locUrl.split('#');
  //現在のページURLに#が含まれる場合はスクロール移動
  if (setHash[1]) {
    hashMove("#" + setHash[1]);
  }
  //#pagetop
  $('#pagetop a').on('click', function () {
    var href = $(this).attr("href");
    var clkUrl = href.split('#');
    hashMove("#" + clkUrl[1]);
    return false;
  });
  //#から始まるリンクはスクロール
  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr("href");
    var clkUrl = href.split('#');
    hashMove("#" + clkUrl[1]);
  });
  //#を含むリンクは、リンク先と現在のページのURLを比較して判断
  $('a[href*="#"]').on('click', function () {
    var href = $(this).attr("href");
    var pageURL = location.pathname;
    reg = new RegExp(pageURL);
    //ページ名が同じならスクロール移動
    if (href.match(reg)) {
      var clkUrl = href.split('#');
      hashMove("#" + clkUrl[1]);
    }
  });

  function hashMove(trg) {
    var position = $(trg).offset().top;
    if ($('body').hasClass('admin-bar')) {
      position = position - 10;
    } else {
      position = position - 10;
    }
    if ($('body').width() <= 980) {
      position = position - 10; //見出しの文字が切れるのを防ぐ
    } else {
      position = position - 10; //見出しの文字が切れるのを防ぐ
    }
    $('body,html').animate({
      scrollTop: position
    }, '800', 'swing');
  }
});

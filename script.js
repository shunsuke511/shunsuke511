//swiper
const swiper = new Swiper(".swiper",{

  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
      // 521px以上の場合
    521: {
      slidesPerView: 'auto',
      spaceBetween: 40,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "clickable",
  },
});

//ドロワーメニュー開閉
$(function () {
  $('.drawer__icon').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.drawer__contents').toggleClass('open');
    $('.drawer__background').toggleClass('open');
  });

  return false;
});

//ナビゲーションリンクをクリックしたらドロワーメニュー閉じる
$(function () {
  $('.drawer__contents-item a').on('click', function (e) {
    e.preventDefault();
    $('.drawer__icon').removeClass('open');
    $('.drawer__contents').removeClass('open');
    $('.drawer__background').removeClass('open');
  });

  return false;
});


//ページトップボタン
$(function () {
  //100pxスクロールで表示
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $('.totop').fadeIn();
    } else {
      $('.totop').fadeOut();
    }
  });
  //トップへのスクロールはページ内リンクへのスクロールで実施
});


//ページ内リンクへのスムーススクロール
$(function () {
  $('a[href^="#"]').on('click', function () {

    let speed = 300;
    let header = $('header').innerHeight();
    let id = $(this).attr('href');
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;

    $('body,html').animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
});

//ヘッダーナビゲーション内リンクでクリックした時に下線を引く
$(function () {
  $('.header__nav li a').on('click', function () {
    $('.header__nav li a').removeClass('is-active');
    $(this).addClass('is-active');
    return false;
  });
});

//FAQアコーディオン
$(function () {
  $('.accordion__head').on('click', function () {
    $(this).next().slideToggle();
    $(this).children('.accordion__icon').toggleClass('answer-open')
    return false;
  });
});

//問い合わせフォームの入力確認
$('input:required').on('change',function(){
  //必須項目が空かどうかフラグ
  let flag = true;
  //必須項目をひとつずつチェック
  $('input:required').each(function(e){
    //もし必須項目が空なら
    if ($('input:required').eq(e).val() === "") {
      flag = false;
    }
  });
  //全て埋まっていたら
  if(
    flag === true &&
    //チェックボックスにチェックが入っているかチェック
    $('.form__checkbox').prop('checked') === true
  ){
    //送信ボタンを復活
    $('.contact__submit-button').prop("disabled", false);
  } else {
    //送信ボタンを閉じる
    $('.contact__submit-button').prop("disabled", true);
  }
});

//wow.js
new WOW().init();

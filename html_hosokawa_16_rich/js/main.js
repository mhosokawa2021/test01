// jsを記述する際はここに記載していく

// slick
$(function(){
    $('.slider').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 5000, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 5, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3, //画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  });

// scrolla
$(document).ready(function(){
  $('.animate').scrolla();
});

// float
$(document).ready(function() {
  $('#fuwafuwa').jqFloat({
       width:100,
       height:100,
       speed:1000
  });
});
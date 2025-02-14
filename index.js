$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
  }

  function open() {
    envelope.addClass("open").removeClass("close");
    var audio = document.getElementById("valentine-audio");
    audio.play(); // Memutar musik saat amplop dibuka
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    var audio = document.getElementById("valentine-audio");
    audio.pause(); // Menghentikan musik saat amplop ditutup
    audio.currentTime = 0; // Reset waktu ke awal
  }
});

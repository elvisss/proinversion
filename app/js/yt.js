$(function() {

  $('.modal').on('hide.bs.modal', function () {
    var data_video = $(this).data('video');
    yt_players[data_video].pauseVideo();
  });

});

var yt_int, yt_players = {},

initYT = function() {
  $(".ytplayer").each(function() {
    yt_players[this.id] = new YT.Player(this.id);
  });
};

$.getScript("https://www.youtube.com/player_api", function() {
  yt_int = setInterval(function(){
    if(typeof YT === "object"){
      initYT();
      clearInterval(yt_int);
    }
  },500);
});
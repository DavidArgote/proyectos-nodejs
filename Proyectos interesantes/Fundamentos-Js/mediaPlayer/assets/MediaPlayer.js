function MediaPlayer(config) {
  this.media = config.el;
  this.plugins =  config.plugins || [];
  this.isPlay = false;
  this._initPlugins();
}

MediaPlayer.prototype._initPlugins =  function() {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
}

MediaPlayer.prototype.play = function () {
  this.isPlay = true;
  this.media.play();
}

MediaPlayer.prototype.stop = function () {
  this.isPlay = false;
  this.media.pause();
}

MediaPlayer.prototype.toggleMute = function () {
  this.media.muted = !this.media.muted;
}


export default MediaPlayer;
class AutoPause {

    constructor() {
        this.threshold =  0.25
        this.handleInterception =  this.handleInterception.bind(this)
        this.handleVisibilityChange =  this.handleVisibilityChange.bind(this)
    }

    run(player) {
        this.player = player;
        const observer =  new IntersectionObserver(this.handleInterception, {
            threshold: this.threshold
        })
        observer.observe(this.player.media)
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    handleInterception(entries) {
        const entry = entries[0];
        const isVisible = entry.interceptionRatio >= this.threshold;
        if (isVisible) {
            this.player.play()
        } else {
            this.player.stop()
        }
    }

    handleVisibilityChange() {
        const isVisible =  document.visibilityState == 'visible';
        if (isVisible) {
            this.player.play()
        } else {
            this.player.stop()
        }
    }

}

export default AutoPause;
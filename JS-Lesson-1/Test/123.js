const LiveText = function ( txtElement, words, timer = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.timer = timer;
    this.wordIndex = 0;
    this.txt = '';
    this.isDeleting = false;
    this.type();
}

LiveText.prototype.type = function () {
    let speed = 500,
        currentIndex = this.wordIndex % this.words.length,
        currentWord = this.words[currentIndex];

    if (this.isDeleting) {
        speed = speed /2;
    } else {
        speed = 500;
    }

    setTimeout( () => this.type(), speed)
}

document.addEventListener('DomContentLoaded', init());

function init() {
    let txtElement  = document.querySelector('.text'),
        words = txtElement.getAttribute('data-words'),
        timer = txtElement.getAttribute('data-wait');

    new LiveText( txtElement, words, timer );
}

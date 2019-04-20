const { ElementFromFile, templatePath } = require('../utils');

function run() {
    const forwardButton = ElementFromFile(templatePath(__dirname, 'forward.html'));
    const backButton = ElementFromFile(templatePath(__dirname, 'back.html'));
    const menu = document.querySelector("ytmusic-pivot-bar-renderer");

    if (menu) {
        menu.prepend(forwardButton);
        menu.prepend(backButton);
    }
}

module.exports = run;
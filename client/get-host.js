'use strict';

module.exports = () => {
    const l = window.grittyLocation ? window.grittyLocation : location;
    const href = l.origin || l.protocol + '//' + l.host;
    
    return href;
}


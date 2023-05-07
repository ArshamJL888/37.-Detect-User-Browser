window.addEventListener('load', () => {

    let userBrowser = window.navigator.userAgent;
    let userMainBrowser = userBrowser.match(/edg/i) ? 'edge' : userBrowser.match(/firefox/i) ? 'firefox' :
        userBrowser.match(/opera/i) ? 'opera' : userBrowser.match(/chrome/i) ? 'chrome' : userBrowser.match(/safari/i) ? 'safari' : '';
    if (userMainBrowser) {
        console.log(userMainBrowser);
        document.querySelector(`.${userMainBrowser}`).style.opacity = '1';

    }
})
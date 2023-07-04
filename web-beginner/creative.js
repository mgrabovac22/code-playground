document.addEventListener('mousemove', function(k) {
    let body = document.querySelector('main');
    let circle = document.getElementById('leftFooter');
    let left = k.offsetX;
    circle.style.left = left + 'px';
    });
    document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('main');
    let circle = document.getElementById('topFooter');
    let top = e.offsetY;
    circle.style.top = top + 'px';
    });   
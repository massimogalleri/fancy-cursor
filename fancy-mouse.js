{
    const cursor = document.getElementById('cursor');
    const dot = document.querySelector('.cursor-dot');
    const circle = document.querySelector('.cursor-circle');
    const link = document.querySelectorAll('[data-hover]');
    let lockedPos = true;
    let isStuck = false;
    let cursorPosX = 0;
    let cursorPosY = 0;

    let setCursorPosition = function (e) {
        if (isStuck && lockedPos) {
            cursorPosX = stuckX;
            cursorPosY = stuckY;
        } else {
            cursorPosX = e.clientX;
            cursorPosY = e.clientY;
        }
        dot.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
        circle.style.transform = 'translate(' + cursorPosX + 'px,' + cursorPosY + 'px)';
    };

    document.addEventListener('mousemove', e => setCursorPosition(e));

    link.forEach(function (item) {
        item.addEventListener('mousedown', function (e) {
            cursor.classList.add('cursor-down');
        });
        item.addEventListener('mouseup', function (e) {
            cursor.classList.remove('cursor-down');
        });
        item.addEventListener('mouseenter', function (e) {
            cursor.classList.add('cursor-enter');
            const navItem = e.currentTarget;
            const navItemBox = navItem.getBoundingClientRect();
            stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
            stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
            isStuck = true;
        });
        item.addEventListener('mouseleave', function (e) {
            cursor.classList.remove('cursor-enter');
            isStuck = false;
        });
    });
}

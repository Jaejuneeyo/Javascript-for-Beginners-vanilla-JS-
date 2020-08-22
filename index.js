wrapper = document.querySelector('.wrapper');

function _callback() {
    const color = '#'+ parseInt(Math.round(Math.random()*0xFFFFFF)).toString(16);
    wrapper.sytle.backgroundColor= color;
}
wrapper.addEventListener('click', _callback)
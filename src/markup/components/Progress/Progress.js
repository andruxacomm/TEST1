
export default function () {
    var elem = document.getElementById('my-bar'),
        persent = document.getElementById('label');
    var wPersent;
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width>=100) {
            clearInterval(id);
        } else {
            width++;
            wPersent = width + '%';
            elem.style.width = wPersent;
            persent.innerHTML =wPersent;
        }
    }
}

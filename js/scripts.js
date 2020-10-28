const $d = document;

const openNav = () => {
    $nav = $d.getElementById('navUl');

    if ($nav.classList == 'close') {
        $d.body.style.overflow = 'hidden';
        $nav.classList.remove('close');
        $nav.classList.add('open');
    } else if ($nav.classList == 'open') {
        $d.body.style.overflow = null;
        $nav.classList.remove('open');
        $nav.classList.add('close');
    }
};

const fadedMain = () => {
    $main = $d.getElementById('main');

    setTimeout(() => {
        $main.classList.remove('hi');
        $main.classList.add('vi');
    }, 500);
};

function screenTest() {
    const MediaQueryListMb = window.matchMedia('screen and (max-width: 600px)');
    const MediaQueryListPc = window.matchMedia('screen and (min-width: 601px)');
    $main = $d.getElementById('main');
    $photo0 = $d.getElementById('photo0');
    $photo1 = $d.getElementById('photo1');
    $photo2 = $d.getElementById('photo2');
    $photo3 = $d.getElementById('photo3');

    if (MediaQueryListPc.matches) {
        $main.style.backgroundImage = "url('img/pc/1.jpg')";
        $photo0.style.backgroundImage = "url('img/pc/2.jpg')";
        $photo1.style.backgroundImage = "url('img/pc/3.jpg')";
        $photo2.style.backgroundImage = "url('img/pc/4.jpg')";
        $photo3.style.backgroundImage = "url('img/pc/5.jpg')";
    } else if (MediaQueryListMb.matches) {
        $main.style.backgroundImage = "url('img/mb/1.jpg')";
        $photo0.style.backgroundImage = "url('img/mb/2.jpg')";
        $photo1.style.backgroundImage = "url('img/mb/3.jpg')";
        $photo2.style.backgroundImage = "url('img/mb/4.jpg')";
        $photo3.style.backgroundImage = "url('img/mb/5.jpg')";
    }
}

$d.addEventListener('click', (e) => {
    const $navBtn = $d.getElementById('navBtn');

    if (e.target === $navBtn) {
        openNav();
    }
});

$d.addEventListener('DOMContentLoaded', (e) => {
    screenTest();
});

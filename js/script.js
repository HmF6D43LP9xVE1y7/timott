function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}
preloadImages([
    "assets/asset_000.jpg",
    "assets/asset_001.jpg",
    "assets/asset_002.jpg",
    "assets/asset_003.jpg",
    "assets/asset_004.jpg",
    "assets/asset_005.jpg",
    "assets/asset_006.jpg",
    "assets/asset_007.jpg",
    "assets/asset_008.jpg",
    "assets/asset_009.jpg",
    "assets/asset_010.jpg",
    "assets/asset_011.jpg",
    "assets/asset_012.jpg",
    "assets/asset_013.jpg",
    "assets/asset_014.jpg",
    "assets/asset_015.jpg",
    "assets/asset_016.jpg",
    "assets/asset_017.jpg",
    "assets/asset_018.jpg",
    "assets/asset_019.jpg",
    "assets/asset_020.jpg",
    "assets/asset_021.jpg",
    "assets/asset_022.jpg",
    "assets/asset_023.jpg",
    "assets/asset_024.jpg",
    "assets/asset_025.jpg",
    "assets/asset_026.jpg",
    "assets/asset_027.jpg",
]);
$('map').imageMapResize();
$(function() {
    $('area').mouseenter(function() {
        let coords = this.coords.split(',').map(a => a.trim())
        $('.captionLocator').css({opacity: '100%', top: coords[1] + 'px', left: coords[0] + 'px', width: coords[2] - coords[0], height: coords[3] - coords[1]})
    });
    $('area').mouseleave(function() {
        $('.captionLocator').css({opacity: '0%'})
    });
});
function captionShow() {
    document.getElementById('caption').style.display = 'table-cell';
}
function captionHide() {
    document.getElementById('caption').style.display = 'none';
}
function lightboxOpen() {
    var vEvent = {
        keyCode : 38
    };
    fn_keydown(vEvent);
    document.getElementsByTagName('*')[0].style.overflow = 'hidden';
    document.getElementById('desktop').style.pointerEvents = 'none';
    document.getElementById('main').style.opacity = '0';
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox').style.pointerEvents = 'all';
}
function lightboxClose() {
    document.getElementsByTagName('*')[0].style.overflow = 'visible';
    document.getElementById('desktop').style.pointerEvents = 'all';
    document.getElementById('main').style.opacity = '100';
    document.getElementById('lightbox').style.display = 'none';
    document.getElementById('lightbox').style.pointerEvents = 'none';
    document.getElementById('lightboxSrc').src='';
}
var images = [
    "assets/asset_000.jpg",
    "assets/asset_001.jpg",
    "assets/asset_002.jpg",
    "assets/asset_003.jpg",
    "assets/asset_004.jpg",
    "assets/asset_005.jpg",
    "assets/asset_006.jpg",
    "assets/asset_007.jpg",
    "assets/asset_008.jpg",
    "assets/asset_009.jpg",
    "assets/asset_010.jpg",
    "assets/asset_011.jpg",
    "assets/asset_012.jpg",
    "assets/asset_013.jpg",
    "assets/asset_014.jpg",
    "assets/asset_015.jpg",
    "assets/asset_016.jpg",
    "assets/asset_017.jpg",
    "assets/asset_018.jpg",
    "assets/asset_019.jpg",
    "assets/asset_020.jpg",
    "assets/asset_021.jpg",
    "assets/asset_022.jpg",
    "assets/asset_023.jpg",
    "assets/asset_024.jpg",
    "assets/asset_025.jpg",
    "assets/asset_026.jpg",
    "assets/asset_027.jpg",
];
var iIndex;
var iLen = images.length;
window.onkeydown = fn_keydown;
function fn_keydown(event) {
    var lightboxSrc = document.getElementById("lightboxSrc");
    if (event.keyCode === 39) {
        iIndex = (iIndex + 1) >= iLen ? 0 : iIndex + 1;
    } else if (event.keyCode === 37) {
        iIndex = (iIndex - 1) < 0 ? iLen-1 : iIndex - 1;
    }
    lightboxSrc.setAttribute("src", images[iIndex]);
}
function lightboxForward() {
    var lightboxSrc = document.getElementById("lightboxSrc");
    iIndex = (iIndex + 1) >= iLen ? 0 : iIndex + 1;
    lightboxSrc.setAttribute("src", images[iIndex]);
}
function lightboxBackward() {
    var lightboxSrc = document.getElementById("lightboxSrc");
    iIndex = (iIndex - 1) < 0 ? iLen-1 : iIndex - 1;
    lightboxSrc.setAttribute("src", images[iIndex]);
}
function mail() {
    let encodedMail = window.atob("dGltLm90dEBnbXguY2g");
    document.location.href = "mailto:" + encodedMail;
}
function tel() {
    let encodedTel = window.atob("KzQxNzg5MjM5MjEz");
    document.location.href = "tel:" + encodedTel;
}
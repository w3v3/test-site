var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/download.jpeg') {
        myImage.setAttribute ('src','images/download02.jpeg');
    } else {
        myImage.setAttribute ('src','images/download.jpeg');
    }
}

window.addEventListener('scroll', function () {
    var a = 10;
    console.log(a);
    document.getElementsByTagName('header')[0].style.backgroundColor = "#fff";
    document.getElementsByTagName('header')[0].style.boxShadow = "0px 13px 35px -12px rgba(35,35,35,0.15)";
    document.getElementsByTagName('nav')[0].style.padding = "30px 75px";
    document.getElementsByTagName('img')[0].style.transform = "rotate(90deg)";
    document.getElementsByTagName('img')[0].style.transition = ".3s all";
    document.getElementsByTagName('img')[0].style.marginTop = "10px";


})

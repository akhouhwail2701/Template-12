document.getElementById("btn-menu").onclick = function () {
    document.getElementById("menu").style.visibility = "visible";
}
document.getElementById("befor").onclick = function () {
    document.getElementById("content1").style.cssText = `transform: translateX(-115%);`;
    document.getElementById("content2").style.cssText = `transform: translateX(0%);`;
}
document.getElementById("after").onclick = function () {
    document.getElementById("content1").style.cssText = `transform: translateX(0%);`;
    document.getElementById("content2").style.cssText = `transform: translateX(115%);`;
}
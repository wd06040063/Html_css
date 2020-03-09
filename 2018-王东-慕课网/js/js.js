function tcdl()
{
    document.getElementById("modal").style.display = "none"
}

function tcdl1()
{
    document.getElementById("modal1").style.display = "none"
}

function tcdl2()
{
    document.getElementById("zc").style.display = "none"
}

function refrush_verifyCode(obj)
{
    obj.setAttribute("src", obj.getAttribute("src").toString().split("?")[0]+ "?time=" + new Date().getTime());
}


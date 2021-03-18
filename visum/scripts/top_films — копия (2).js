function openPrice1() {
    document.getElementById("platform_1").style.display = "flex";
}

function closePrice1() {
    document.getElementById("platform_1").style.display = "none";
}

function openPrice2() {
    document.getElementById("platform_2").style.display = "flex";
}

function closePrice2() {
    document.getElementById("platform_2").style.display = "none";
}

function openPrice3() {
    document.getElementById("platform_3").style.display = "flex";
}

function closePrice3() {
    document.getElementById("platform_3").style.display = "none";
}

function openPrice4() {
    document.getElementById("platform_4").style.display = "flex";
}

function closePrice4() {
    document.getElementById("platform_4").style.display = "none";
}

function openPrice5() {
    document.getElementById("platform_5").style.display = "flex";
}

function closePrice5() {
    document.getElementById("platform_5").style.display = "none";
}

function openPrice6() {
    document.getElementById("platform_6").style.display = "flex";
}

function closePrice6() {
    document.getElementById("platform_6").style.display = "none";
}

function openPrice7() {
    document.getElementById("platform_7").style.display = "flex";
}

function closePrice7() {
    document.getElementById("platform_7").style.display = "none";
}

function openPrice8() {
    document.getElementById("platform_8").style.display = "flex";
}

function closePrice8() {
    document.getElementById("platform_8").style.display = "none";
}

function openPrice9() {
    document.getElementById("platform_9").style.display = "flex";
}

function closePrice9() {
    document.getElementById("platform_9").style.display = "none";
}

function openPrice10() {
    document.getElementById("platform_10").style.display = "flex";
}

function closePrice10() {
    document.getElementById("platform_10").style.display = "none";
}

function openPrice11() {
    document.getElementById("platform_11").style.display = "flex";
}

function closePrice11() {
    document.getElementById("platform_11").style.display = "none";
}

function openPrice12() {
    document.getElementById("platform_12").style.display = "flex";
}

function closePrice12() {
    document.getElementById("platform_12").style.display = "none";
}

function openPrice13() {
    document.getElementById("platform_13").style.display = "flex";
}

function closePrice13() {
    document.getElementById("platform_13").style.display = "none";
}

function openPrice14() {
    document.getElementById("platform_14").style.display = "flex";
}

function closePrice14() {
    document.getElementById("platform_14").style.display = "none";
}

function openPrice15() {
    document.getElementById("platform_15").style.display = "flex";
}

function closePrice15() {
    document.getElementById("platform_15").style.display = "none";
}

function openPrice16() {
    document.getElementById("platform_16").style.display = "flex";
}

function closePrice16() {
    document.getElementById("platform_16").style.display = "none";
}

function openNav() {
    document.getElementById("wndSort").style.display = "block";
    document.getElementsByTagName('body')[0].style.overflow = "hidden"
}

function hideSidebar() {
    document.getElementById("wndSort").style.display = "none";
    document.getElementsByTagName('body')[0].removeAttribute("style");
}

document.querySelector('#incr').onclick = highSort;

function highSort() {
    let mainBlock = document.querySelector("#mainBlock");
    for (let i = 0; i < mainBlock.children.length; i++) {
        for (let j = i; j < mainBlock.children.length; j++) {
            if (+mainBlock.children[i].getAttribute('data-film-count') > +mainBlock.children[j].getAttribute('data-film-count')) {
                let replacedNode = mainBlock.replaceChild(mainBlock.children[j], mainBlock.children[i]);
                insertAfter(replacedNode, mainBlock.children[i]);
            }
            console.log(mainBlock.children[i]);
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

document.querySelector('#decr').onclick = lowSort;

function lowSort() {
    let mainBlock = document.querySelector("#mainBlock");
    for (let i = 0; i < mainBlock.children.length; i++) {
        for (let j = i; j < mainBlock.children.length; j++) {
            if (+mainBlock.children[i].getAttribute('data-film-count') < +mainBlock.children[j].getAttribute('data-film-count')) {
                let replacedNode = mainBlock.replaceChild(mainBlock.children[j], mainBlock.children[i]);
                insertAfter(replacedNode, mainBlock.children[i]);
            }
        }
    }
}



let platforms = new Array();
let mainBlock = document.querySelector("#mainBlock");
for (let i = 0; i < mainBlock.children.length; i++) {
    platforms.push(mainBlock.children[i]);
    console.log(platforms[i]);
}

function getMinPrice(str) {
    let tmpPlat = new Array();
    for (let i = 0; i < platforms.length; i++) {
        let displayStyle = platforms[i].style.display;
        console.log("Вызыванная функция для полу года/ инфа о display style");
        console.log(displayStyle);
        if (displayStyle == "inline-block") {
            tmpPlat.push(platforms[i]);
            console.log("cout tmpPlat");
            console.log(tmpPlat);
        }
    }
    let min = tmpPlat[0];
    for (let i = 0; i < tmpPlat.length; i++) {
        console.log("проверка, как работает передача строки в функцию");
        console.log(min.getAttribute(str));
        if (+tmpPlat[i].getAttribute(str) < +min.getAttribute(str)) {
            min = tmpPlat[i];
            console.log("cout min");
            console.log(min);
        }
    }
    return +min.getAttribute(str);
}

function SortPlatformsByMon() {
    let valBegin = document.getElementById("getBeginPriceForMonth").value;
    console.log("begin");
    console.log(valBegin);
    let valEnd = document.getElementById("getEndPriceForMonth").value;
    if (!valEnd || 0 === valEnd.length) {
        valEnd = 100;
    }
    console.log("end");
    console.log(valEnd);
    for (let i = 0; i < platforms.length; i++) {
        if (+platforms[i].getAttribute('data-mon-price') < +valBegin || +platforms[i].getAttribute('data-mon-price') > +valEnd) {
            console.log(platforms[i])
            platforms[i].style.display = "none";
        } else {
            platforms[i].style.display = "inline-block";
        }
    }
    let threeMonInput = document.getElementById('getBeginPriceForThreeMonth');
    let halfYearInput = document.getElementById('getBeginPriceForHalfYear');
    let yearInput = document.getElementById('getBeginPriceForYear');
    threeMonInput.setAttribute('value', getMinPrice('data-three-mon-price'));
    halfYearInput.setAttribute('value', getMinPrice('data-halfyear-price'));
    yearInput.setAttribute('value', getMinPrice('data-year-price'));
}

function SortPlatformsByMonT2() {
    let valBegin = document.getElementById("getBeginPriceForMonthType2").value;
    console.log("begin");
    console.log(valBegin);
    let valEnd = document.getElementById("getEndPriceForMonthType2").value;
    if (!valEnd || 0 === valEnd.length) {
        valEnd = 100;
    }
    console.log("end");
    console.log(valEnd);
    for (let i = 0; i < platforms.length; i++) {
        if (+platforms[i].getAttribute('data-mon-price') < +valBegin || +platforms[i].getAttribute('data-mon-price') > +valEnd) {
            platforms[i].style.display = "none";
        } else {
            platforms[i].style.display = "inline-block";
        }
    }
}

function SortPlatformsByThreeMon() {
    let valBegin = document.getElementById("getBeginPriceForThreeMonth").value;
    console.log("begin");
    console.log(valBegin);
    let valEnd = document.getElementById("getEndPriceForThreeMonth").value;
    if (!valEnd || 0 === valEnd.length) {
        valEnd = 300;
    }
    console.log("end");
    console.log(valEnd);
    for (let i = 0; i < platforms.length; i++) {
        if (+platforms[i].getAttribute('data-three-mon-price') < +valBegin || +platforms[i].getAttribute('data-three-mon-price') > +valEnd) {
            platforms[i].style.display = "none";
        } else {
            platforms[i].style.display = "inline-block";
        }
    }
}

function SortPlatformsByThreeMonT2() {
    let valBegin = document.getElementById("getBeginPriceForThreeMonthType2").value;
    console.log("begin");
    console.log(valBegin);
    let valEnd = document.getElementById("getEndPriceForThreeMonthType2").value;
    if (!valEnd || 0 === valEnd.length) {
        valEnd = 300;
    }
    console.log("end");
    console.log(valEnd);
    for (let i = 0; i < platforms.length; i++) {
        if (+platforms[i].getAttribute('data-three-mon-price') < +valBegin || +platforms[i].getAttribute('data-three-mon-price') > +valEnd) {
            platforms[i].style.display = "none";
        } else {
            platforms[i].style.display = "inline-block";
        }
    }
}


function SortPlatformsByHalfYear() {
    let valBegin = document.getElementById("getBeginPriceForHalfYear").value;
    console.log("begin");
    console.log(valBegin);
    let valEnd = document.getElementById("getEndPriceForHalfYear").value;
    if (!valEnd || 0 === valEnd.length) {
        valEnd = 400;
    }
    console.log("end");
    console.log(valEnd);
    for (let i = 0; i < platforms.length; i++) {
        if (+platforms[i].getAttribute('data-halfyear-price') < +valBegin || +platforms[i].getAttribute('data-halfyear-price') > +valEnd) {
            platforms[i].style.display = "none";
        } else {
            platforms[i].style.display = "inline-block";
        }
    }
}

function SortPlatformsByHalfYearT2() {
    let valBegin = document.getElementById("getBeginPriceForHalfYearType2").value;
    console.log("begin");
    console.log(valBegin);
    let valEnd = document.getElementById("getEndPriceForHalfYearType2").value;
    if (!valEnd || 0 === valEnd.length) {
        valEnd = 400;
    }
    console.log("end");
    console.log(valEnd);
    for (let i = 0; i < platforms.length; i++) {
        if (+platforms[i].getAttribute('data-halfyear-price') < +valBegin || +platforms[i].getAttribute('data-halfyear-price') > +valEnd) {
            platforms[i].style.display = "none";
        } else {
            platforms[i].style.display = "inline-block";
        }
    }
}

function SortPlatformsByYear() {
    let valBegin = document.getElementById("getBeginPriceForYear").value;
    console.log("begin");
    console.log(valBegin);
    let valEnd = document.getElementById("getEndPriceForYear").value;
    if (!valEnd || 0 === valEnd.length) {
        valEnd = 600;
    }
    console.log("end");
    console.log(valEnd);
    for (let i = 0; i < platforms.length; i++) {
        if (+platforms[i].getAttribute('data-year-price') < +valBegin || +platforms[i].getAttribute('data-year-price') > +valEnd) {
            platforms[i].style.display = "none";
            console.log(platforms[i].getAttribute('data-year-price'))
        } else {
            platforms[i].style.display = "inline-block";
        }
    }
}

function SortPlatformsByYearT2() {
    let valBegin = document.getElementById("getBeginPriceForYearType2").value;
    console.log("begin");
    console.log(valBegin);
    let valEnd = document.getElementById("getEndPriceForYearType2").value;
    if (!valEnd || 0 === valEnd.length) {
        valEnd = 600;
    }
    console.log("end");
    console.log(valEnd);
    for (let i = 0; i < platforms.length; i++) {
        if (+platforms[i].getAttribute('data-year-price') < +valBegin || +platforms[i].getAttribute('data-year-price') > +valEnd) {
            platforms[i].style.display = "none";
            console.log(platforms[i].getAttribute('data-year-price'))
        } else {
            platforms[i].style.display = "inline-block";
        }
    }
}

function SortPlatformsByFreeDay() {
    let valBegin = document.getElementById("getCountOfFreeDays").value;
    console.log("begin");
    for (let i = 0; i < platforms.length; i++) {
        if (+platforms[i].getAttribute('data-free-day') < +valBegin) {
            platforms[i].style.display = "none";
        } else {
            platforms[i].style.display = "inline-block";
        }
    }
}

function SortPlatformsByFreeDayT2() {
    let valBegin = document.getElementById("getCountOfFreeDaysType2").value;
    console.log("begin");
    for (let i = 0; i < platforms.length; i++) {
        if (+platforms[i].getAttribute('data-free-day') < +valBegin) {
            platforms[i].style.display = "none";
        } else {
            platforms[i].style.display = "inline-block";
        }
    }
}

function SearcByName() {
    document.getElementById("lupaImg").style.display = "none";
}

wndNav.onmouseover = handler;

function handler(event) {

}
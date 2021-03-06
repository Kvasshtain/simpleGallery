﻿function pageRoutine() {

    var countString = document.getElementById("timeCounter"),
        modalWindow = document.getElementById("modalWindow"),
        coverDiv = document.getElementById('cover-div'),
        run = document.getElementById('run'),
        back = document.getElementById('back'),
        next = document.getElementById('next'),
        pause = document.getElementById('pause'),
        numRegexp = /(\d+)(\.html)/,
        urlPart = document.location.href.split(numRegexp),
        currentPageNum = + urlPart[1],
        nextPageNum = currentPageNum + 1,
        previousPageNum = currentPageNum - 1,
        nextPage = urlPart[0] + nextPageNum + urlPart[2],
        firsPage = urlPart[0] + 1 + urlPart[2],
        previousPage = urlPart[0] + previousPageNum + urlPart[2],
        numOfPage = 4,
        timeRun = true,
        counter = 5,
        ok = 'ok',
        cancel = 'cancel';

    if (document.location.href.indexOf('index') + 1) {
        document.location.replace("page1.html");
        return;
    }

    run.disabled = "disabled";

    if (currentPageNum === 1){
        back.disabled = "disabled";
    }

    if (currentPageNum === 4){
        next.disabled = "disabled";
    }

    countString.innerHTML = counter;

    setTimeout(func, 1000);

    function func() {
        counter--;
        countString.innerHTML = counter;

        if ((counter > 0) & (timeRun)){
            setTimeout(func, 1000);
        }

        if (counter !== 0)
            return;

        if (currentPageNum !== numOfPage)
            document.location.replace(nextPage);

        coverDiv.style.zIndex = 9000;
        modalWindow.style.opacity = 1;
    }

    if (modalWindow){
        modalWindow.onclick = function(event) {
            var button = event.srcElement.classList[0],
                coverDiv = document.getElementById('cover-div');

            if(button === ok) {
                document.location.replace(firsPage);
                modalWindow.style.opacity = 0;
                coverDiv.style.zIndex = -9000;
            }
        }
    }

    back.onclick = function() {
        document.location.replace(previousPage);
    };

    next.onclick = function() {
        document.location.replace(nextPage);
    };

    pause.onclick = function() {
        pause.disabled = "disabled";
        run.disabled = "";
        timeRun = false;
        counter++;
    };

    run.onclick = function() {
        run.disabled = "disabled";
        pause.disabled = "";
        timeRun = true;
        setTimeout(func, 1000);
    };
    
    return;
};

window.onload = function () {
    pageRoutine();
};
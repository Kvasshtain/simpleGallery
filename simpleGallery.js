function pageRoutine() {

    var countString = document.getElementsByClassName("timeCounter")[0],
        modalWindow = document.getElementsByClassName("modalWindow")[0],
        coverDiv = document.getElementsByClassName('cover-div')[0],
        run = document.getElementsByClassName('run')[0],
        back = document.getElementsByClassName('back')[0],
        next = document.getElementsByClassName('next')[0],
        pause = document.getElementsByClassName('pause')[0],
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
                coverDiv = document.getElementsByClassName('cover-div')[0];

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
/*
    Princess Pi's Magical Standard Code!
*/

// globals
var pollInterval = null;

function getID(ID) {
    return document.getElementById(ID);
}

function toggleShow(ID, htmlUpdateID=false, htmlUpdateShowing=false, htmlUpdateHidden=false) {
    let elemClasses = getID(ID).classList;

    if(htmlUpdateID !== false && htmlUpdateShowing !== false && htmlUpdateHidden !== false) {
        const updating = true;
        updateElem = getID(htmlUpdateID).innerHTML;
    } else {
        const updating = false;
    }

    if(elemClasses.contains('hidden')) {
        elemClasses.remove('hidden');

        if(updating) {
            updateElem = htmlUpdateShowing;
        }
    } else {
        elemClasses.add('hidden');

        if(updating) {
            updateElem = htmlUpdateHidden;
        }
    }
}

function copyToClipboard(ID) {
    let copyText = getID(ID);
    copyText.select();
    document.execCommand("copy");
}

function xhrSuccess(xhrRet) {
    let xhrResponseText = xhrRet.target.responseText;
    getID('link').innerHTML = '<a href="'+xhrResponseText+'">Scan Report Here ('+xhrResponseText+')</a>';
    getID('link').style.display = "inline";
}

function xhr404(xhrRet) {
    // console.log(xhrRet);
}

function xhrOther(xhrRet) {
    // console.log(xhrRet.target);
}

function xhrLoadend(xhrRet) {
    let xhrStatus = xhrRet.currentTarget.status;

    switch(xhrStatus) {
        case 404:
            xhr404(xhrRet);
            break;
        case 200:
            xhrSuccess(xhrRet);
            break;
        default:
            xhrOther(xhrRet);
    }
}

function doXhr(xhrFilePath, xhrLoadEndFun=xhrLoadEnd, xhrMethod='GET', xhrPostData=null) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("loadend", xhrLoadEndFun);
    xhr.open(xhrMethod, xhrFilePath);

    if(xhrMethod == 'POST') {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(xhrPostData);
    } else {
        xhr.send();
    }
}

function changeFavIcon(icoFile) {
    let icoLink = document.querySelector("link[rel~='icon']");
    
    if(icoLink) {
        document.head.removeChild(icoLink);
    }

    icoLink = document.createElement('link');
    icoLink.rel = 'icon';
    document.head.appendChild(icoLink);

    icoLink.href = icoFile;
} 

function xhrRunNmapScan(xhrRet) {
    // let xhrResponseText = xhrRet.target.responseText;
    xhrJson = JSON.parse(xhrRet.target.responseText);

    if(pollInterval !== null && typeof pollInterval !== 'undefined') {
        clearInterval(pollInterval);
    }

    getID('link').innerHTML = '<a href="'+xhrJson.webName+'">Scan Report ('+xhrJson.webName+')</a>';
    getID('link').style.display = "inline";

    getID('progressbox').innerHTML = '';
    getID('progress').style.display = 'none';

    pollFile(xhrJson.runningLog);
}

function xhrPollFile(xhrRet) {
    let xhrResponseText = xhrRet.target.responseText;
    getID('progress').style.display = "block";
    getID('progressbox').innerHTML = xhrResponseText;
}

function pollFile(runningLog) {
    pollInterval = setInterval(function() {
        doXhr(runningLog, xhrPollFile);
    }, 1000);
}

function runNmapScan() {
    let nmapcmd = getID('nmapcmd').value;
    let nonce = getID('nonce').value;
    let postData = 'nmapcmd='+encodeURIComponent(nmapcmd)+'&nonce='+nonce;

    doXhr('run_scan.php', xhrRunNmapScan, 'POST', postData);
}


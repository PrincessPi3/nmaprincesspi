/*
    Princess Pi's Magical Standard Code!
*/

function getID(ID) {
    return document.getElementById(ID);
}

function copyToClipboard(ID) {
    let copyText = getID(ID);
    copyText.select();
    document.execCommand("copy");
}

function xhrSuccess(xhrRet) {
    let xhrResponseText = xhrRet.target.responseText;
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

function doXhr(xhrFilePath, xhrMethod='GET', xhrPostData=null) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("loadend", xhrLoadend);
    xhr.open(xhrMethod, xhrFilePath);
    xhr.send();
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
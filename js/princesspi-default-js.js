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
    getID('out').innerHTML = '<a href="'+xhrResponseText+'">Scan Report Here ('+xhrResponseText+')</a>';
    getID('out').style.display = "inline";
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

function runNmapScan() {
    let nmapcmd = getID('nmapcmd').value;
    console.log(nmapcmd);
    let postData = 'nmapcmd='+encodeURIComponent(nmapcmd);
    doXhr('run_scan.php', 'POST', postData);
}
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

function projectRead() {
    document.getElementById("projectBtn").onclick = function () {
        document.getElementById("project").classlist.add('active');
        document.getElementById("stage").classlist.add('active');
    };
}

function stageRead() {
    document.getElementById("stageBtn").onclick = function () {
        document.getElementById("stage").classList.add('active');
        document.getElementById("project").classList.remove('active')
    };
}

window.onload =  function () {
    projectRead();
    stageRead();
};

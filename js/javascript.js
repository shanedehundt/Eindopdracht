/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var projectButton = document.getElementById('projectBtn');
var stageButton = document.getElementById('stageBtn');

projectButton.addEventListener('click', function(){
    document.getElementById("project").classList.add('active');
    document.getElementById("stage").classList.remove('active');
});

stageButton.addEventListener('click', function(){
    document.getElementById("stage").classList.add('active');
    document.getElementById("project").classList.remove('active');
});

/*function projectRead() {
    document.getElementById("projectBtn").onclick = function () {
        document.getElementById("project").classlist.add('inactive');
        document.getElementById("stage").classlist.remove('inactive');
    };
}

function stageRead() {
    document.getElementById("stageBtn").onclick = function () {
        document.getElementById("stage").classList.add('inactive');
        document.getElementById("project").classList.remove('inactive');
    };
}

window.onload =  function () {
    projectRead();
    stageRead();
};*/

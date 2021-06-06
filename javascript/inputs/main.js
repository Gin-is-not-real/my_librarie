/////////////////////////////////////////////
//TEST
let _body = document.querySelector('body');

let _articleToggles = document.createElement('article');
let title = document.createElement('h3');
title.textContent = 'TOGGLES';
_articleToggles.appendChild(title);
_body.appendChild(_articleToggles);

function createSummarySection(resume, testElt) {
    let _section = document.createElement('section');
    let _p = document.createElement('p');
    _p.textContent = resume;
    let _result = document.createElement('p');
    testElt.resultView = _result;

    _section.appendChild(_p); 
    _section.appendChild(testElt);
    _section.appendChild(_result);

    return _section;
}

/*
    add/remove class name by using classList.remove()
*/
let tog1 = document.createElement('button');
tog1.textContent = 'classList toggle';
attachClassListEventForElement(tog1, 'on');

let _sectionToggle = createSummarySection('Using toggles.js -> toggleClass(\'on\')', tog1);
_body.appendChild(_sectionToggle);
tog1.addEventListener('click', function() {
    this.resultView.textContent = 'classNames: ' + this.className;
})
tog1.resultView.textContent = 'classNames: ' + tog1.className;
/*
    switch between two className
*/
let tog2 = document.createElement('button');
tog2.textContent = 'classList toggle test';
attachClassListEventForElement(tog2, 'on', 'off');

let _sectionToggleSwitch = createSummarySection('Using toggles.js -> toggleClass("on", "off")', tog2);
tog2.addEventListener('click', function() {
    this.resultView.textContent = 'classNames: ' + this.className;
})
tog2.resultView.textContent = 'classNames: ' + tog2.className;



_body.appendChild(_sectionToggleSwitch);



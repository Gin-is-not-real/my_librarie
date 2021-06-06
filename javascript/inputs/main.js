/////////////////////////////////////////////
//
let _articleToggles = createArticle('TOGGLES');
_javascript.appendChild(_articleToggles);

/*
    add/remove class name by using classList.remove()
*/
let tog1 = document.createElement('button');
tog1.textContent = 'classList toggle';
attachClassListEventForElement(tog1, 'on');

let _sectionToggle = createSummarySection('Using toggles.js -> toggleClass(\'on\')', tog1);
_articleToggles.appendChild(_sectionToggle);
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
_articleToggles.appendChild(_sectionToggleSwitch);


function createArticle(title) {
    let _article = document.createElement('article');
    let _title = document.createElement('h3');
    _title.textContent = title;
    _article.appendChild(_title);

    return _article;
}

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





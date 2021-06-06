let _body = document.querySelector('body');


///////////////////////////////////////////
let _git = createTechnoPart('GIT', 'Git commands')
_body.appendChild(_git);

let _javascript = createTechnoPart('JAVASCRIPT', 'some js scripts');
_body.appendChild(_javascript);


function createTechnoPart(title, text) {
    let _part = document.createElement('div');
    let _title = document.createElement('h2');
    _title.textContent = title;
    _part.appendChild(_title);

    let _p = document.createElement('h3');
    _p.textContent = text;
    _part.appendChild(_p);

    return _part;
}

function createArticle(title) {
    let _article = document.createElement('article');
    let _title = document.createElement('h3');
    _title.textContent = title;
    _article.appendChild(_title);

    return _article;
}

function createSection(title, text) {
    let _section = document.createElement('section');
    let _title = document.createElement('h4');
    _title.textContent = title;
    let _p = document.createElement('p');
    _p.textContent = text;

    _section.appendChild(_title);
    _section.appendChild(_p);

    return _section;
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
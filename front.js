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
/*
    toggleClass(domElement, class_to_toggle, optionnal[class_to_toggle])
    switch between class1/'' or class1/class2
*/
function toggleClass(domElement, class1, class2) {
    domElement.classList.toggle(class1);
    if(class2 != undefined) {
        domElement.classList.toggle(class2);
    }
}

function addCLassListToggleEventForClass(selector, class1, class2) {
    let toggles = document.querySelectorAll('.' + selector);
    toggles.forEach(tog => {
        attachClassListEventForElement(tog, class1, class2);
    })
}

function attachClassListEventForElement(elt, class1, class2) {
    elt.classList.toggle(class1);
    elt.addEventListener('click', function() {
        toggleClass(elt, class1, class2);
    })
}

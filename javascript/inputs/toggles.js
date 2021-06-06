/*
    add this function on a addEventListener function
    - if you leave the last param void, the element className will added or remove.
    - else, the element className will switch between class1 and class2. 
*/
function toggleClass(domElement, className) {
    domElement.classList.toggle(className);
}
/*
    You can add the function by using this function and pass an elt on this first param, and class1, opt[class2] like for the function
*/
function attachClassListEventForElement(elt, class1, class2) {
    elt.classList.toggle(class1);
    elt.addEventListener('click', function() {
        toggleClass(elt, class1, class2);
    })
}
/*
    You can also add the event for all elements there includes the first param (targetedClass) on there className
*/
function addCLassListToggleEventForClass(targetedClass, class1, class2) {
    let toggles = document.querySelectorAll('.' + targetedClass);
    toggles.forEach(tog => {
        attachClassListEventForElement(tog, class1, class2);
    })
}



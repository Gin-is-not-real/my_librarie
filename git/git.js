let _domParent = _git;

let commands = [];

//rewrite this function for use them on front.js.
//will use thus pattern -> init an array, end add lines on them, next, generate the dom with foreach on array
function addCommand(effect, command) {
    commands.push({effect: effect, command: command});
}
addCommand('Creer une nouvelle branche', '$git branch nom_new_branche');
addCommand('Basculer sur une branche', '$git chekout nom_branche');
addCommand('Creer une branch et basculer dessus en une étape', '$git checkout -b new_branche');
addCommand('Naviguer dans les commandes précédentes', 'fleche top/fleche bottom');

commands.forEach(entry => {
    let section = createSection(entry.effect, entry.command);
    _domParent.appendChild(section);
})


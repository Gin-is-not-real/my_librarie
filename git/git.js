let _domParent = _git;

let commands = [];
function addCommand(effect, command) {
    commands.push({effect: effect, command: command});
}
addCommand('creer une nouvelle branche', '$git branch  nom_new_branche');
addCommand('basculer sur une branche', '$git chekout  nom_branche');
addCommand('creer une branch et basculer dessus en une étape', '$git checkout -b new_branche');

commands.forEach(entry => {
    console.log(entry)
    let section = document.createElement('section');
    let title = document.createElement('h4');
    title.textContent = entry.effect;
    let p = document.createElement('p');
    p.textContent = entry.command;

    section.appendChild(title);
    section.appendChild(p);

    _domParent.appendChild(section);
})


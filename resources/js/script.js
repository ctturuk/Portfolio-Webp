let about = document.getElementById('about');
let projects = document.getElementById('projects');
let skills = document.getElementById('skills');

let abt = document.getElementById('abt');
let prj = document.getElementById('prj');
let ski = document.getElementById('ski');

abt.onclick = function(e) {
    about.classList.remove('hidden');
    projects.classList.add('hidden');
    skills.classList.add('hidden');
};

prj.onclick = function(e) {
    about.classList.add('hidden');
    projects.classList.remove('hidden');
    skills.classList.add('hidden');
};

ski.onclick = function(e) {
    about.classList.add('hidden');
    projects.classList.add('hidden');
    skills.classList.remove('hidden');
};

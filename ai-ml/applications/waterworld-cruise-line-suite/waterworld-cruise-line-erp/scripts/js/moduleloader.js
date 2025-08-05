const menu = document.getElementById('moduleMenu');
const moduleContent = document.getElementById('moduleContent');


fetch('modules.json')
  .then(res => res.json())
  .then(modules => {
    modules.forEach(mod => {
      const li = document.createElement('li');
      li.textContent = mod.name;

      if (mod.active) {
        li.addEventListener('click', () => loadModule(mod));
      } else {
        li.classList.add('disabled');
        li.title = "Coming Soon";
      }
      menu.appendChild(li);
    });
  });

function loadModule(mod) {
  moduleContent.innerHTML = `<p>Loading ${mod.name}...</p>`;

  // Load HTML first
  fetch(mod.html)
    .then(res => res.text())
    .then(html => {
      moduleContent.innerHTML = html;

      // Then load associated JS
      // import(`./${mod.js}`)
      import(`/${mod.js}`)
        .then(module => {
          if (module.init) module.init(moduleContent);
        })
        .catch(err => console.error(`Error loading JS for ${mod.name}:`, err));
    })
    .catch(err => {
      moduleContent.innerHTML = `<p>Error loading ${mod.name}</p>`;
      console.error(err);
    });
}
/*
// Load module manifest
fetch('modules.prev.json')
  .then(res => res.json())
  .then(modules => {
    modules.forEach(mod => {
      const li = document.createElement('li');
      li.textContent = mod.name;
      
      if (mod.active) {
        li.addEventListener('click', () => loadModule(mod));
      } else {
        li.classList.add('disabled');
        li.title = "Coming Soon";
      }
      menu.appendChild(li);
    });
  });

function loadModule(mod) {
  moduleContent.innerHTML = `<p>Loading ${mod.name}...</p>`;
  import(`./${mod.path}`)
    .then(module => {
      module.load(moduleContent);
    })
    .catch(err => {
      moduleContent.innerHTML = `<p>Error loading ${mod.name}</p>`;
      console.error(err);
    });
}*/
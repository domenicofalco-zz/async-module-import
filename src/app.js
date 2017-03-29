root.querySelector('a').addEventListener('click', (e) => {

  e.preventDefault();

  import('./not-imported-yet.js').then(module => {
    module.appendToBody();
  }).catch(err => {
    console.log(err);
  });

})

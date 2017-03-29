let i = 1;

document.querySelector('a').addEventListener('click', (e) => {

  e.preventDefault();

  import('./not-imported-yet.js').then(module => {

    module.appendToBody(i);
    i++;

  }).catch(err => {
    console.log(err);
  });

})

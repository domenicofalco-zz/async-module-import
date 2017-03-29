function appendToBody(i) {
  const root = document.getElementById('root');
  root.insertAdjacentHTML('beforeend', `<h1>new content ${i}</h1>`);
}

export { appendToBody };

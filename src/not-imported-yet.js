import $ from 'jquery'

function appendToBody() {
  const root = $('#root')
  root.append('<h1>new content</h1>');
}

export { appendToBody };

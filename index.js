function getFirstSelector(str) {
  return document.querySelector(str)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let doc = document.querySelector('#grand-node ')
  while (doc.querySelector('div')) {
    doc = doc.querySelector('div')
  }
  return doc
}

function increaseRankBy(n) {
  let doc = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < doc.length; i++) {
    doc[i].innerHTML = parseInt(doc[i].innerHTML) + n
  }
}

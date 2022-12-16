filterSelection('all')
function filterSelection(c) {
  var x, i
  x = document.getElementsByClassName('filterCard')
  if (c == 'all') c = ''
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'show')
    if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show')
  }
}

function addClass(element, name) {
  var i, arr1, arr2
  arr1 = element.className.split(' ')
  arr2 = name.split(' ')
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i]
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2
  arr1 = element.className.split(' ')
  arr2 = name.split(' ')
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(' ')
}

var btnContainer = document.getElementById('list-container')
var btns = btnContainer.getElementsByClassName('list-item')
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('act')
    current[0].className = current[0].className.replace('act', '')
    this.className += 'act'
  })
}

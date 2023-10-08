let count = 0;
let myCount = document.getElementById('count-el');
let entriesEl = document.getElementById('entries-el');

function increment() {
  count = count + 1;
  myCount.innerText = count;
}
function save() {
  let checkList = count + ' - ';
  entriesEl.textContent += checkList;
  count = 0;
  myCount.innerText = count;
}


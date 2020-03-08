function evensHandler() {
  debugger;
  // this is my dom solution --- 1
  /* const ulE = document.getElementById("ordered_List");
   ulE.innerHTML = "";
   var i;
   for (i = 0; i < strings.evens.length; i++) {
   const li_1 = document.createElement('li');
   li_1.innerText = textIn;
   ulE.appendChild(li_1);*/

  strings.displayed = "evens";
  const currentDisplayed = strings.displayed;
  const currentArray = strings[currentDisplayed];
  const currentListComponent = renderList(currentArray, currentDisplayed);
  const listContainer = document.getElementById('selected');

  listContainer.appendChild(currentListComponent);

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'evens',
    strings: JSON.parse(JSON.stringify(strings))
  })
}

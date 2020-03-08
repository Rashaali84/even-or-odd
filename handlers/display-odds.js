function oddsHandler() {
  debugger;
  // solution 2
  /*const ulE = document.getElementById("ordered_List");
  ulE.innerHTML = "";
  var i;
  for (i = 0; i < strings.odds.length; i++) {
    const li_1 = document.createElement('li');
    li_1.innerText = textIn;
    ulE.appendChild(li_1);
  }*/
  strings.displayed = "odds";
  const currentDisplayed = strings.displayed;
  const currentArray = strings[currentDisplayed];
  const currentListComponent = renderList(currentArray, currentDisplayed);
  const listContainer = document.getElementById('selected');

  listContainer.appendChild(currentListComponent);

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'odds',
    strings: JSON.parse(JSON.stringify(strings))
  })
}

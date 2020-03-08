function saveHandler() {
  debugger;
  // write me!
  let inputValue = document.getElementById("input").value;
  const num = Number(parseInt(inputValue));
  var numbers = /^[0-9]+$/;
  if (!inputValue.match(numbers)) {
    //it is not a number
    strings.NaNy.push(inputValue);
  }
  else if (num % 2 == 0) //even 
  {
    strings.evens.push(inputValue);
  }
  else { strings.odds.push(inputValue); }

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save',
    inputValue,
    strings: JSON.parse(JSON.stringify(strings))
  })
}

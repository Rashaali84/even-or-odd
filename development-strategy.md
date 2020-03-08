# Even of Odd: development strategy

Building this site one step at a time

## 0. Setup

- `index.html` and folder structure with empty files

## 1. Data & Log

- `data/strings.js` & `log.js`

## 2. Init (not finished!)

- The code in `init.js` that renders the current list for users is complete.
  - But the `renderList` DOM Component function is not! you will need to write this
- `index.html` is complete, just waiting for the code behind it

## 3. User Story: `reset` (completed for you)

- A user can reset stat & see a cleared User Interface
- I wrote the code in `listeners/reset.js` & `handlers/reset.js`
- The handler function resets the `strings` object to it's initial values (the values in the source code), and re-renders the same UI as `init.js`. in `listeners/reset.js` the handler is connected to the UI with a `click` event.

## 4. User Story: 'save'

> - A user can enter an input and click to save it .
> - I wrote the code in `listeners/save.js` & `handlers/save.js`
> - The handler function edit the `strings` object with user input according to its type odd/even/nan, the handler is connected to the UI with a `click` event.

## 5. User Story: 'display-evens'

> - A user can click on even button to display the even values that have been entered before .
> - I wrote the code in `listeners/display-evens.js` & `handlers/display-evens.js`,,`views/render-list.js`
> - The handler function check the `strings` object with user input "evens" as current display and render the list for the UI, the handler is connected to the UI with a `click` event.

## 6. User Story: "display-odds"

> - A user can click on odd button to display the odd values that have been entered before .
> - I wrote the code in `listeners/display-odds.js` & `handlers/display-odds.js`,`views/render-list.js`
> - The handler function check the `strings` object with user input "odds" as current display and render the list for the UI , the handler is connected to the UI with a `click` event.

## 7. User Story: "display-NaNy"

> - A user can click on odd button to display the NAN values that have been entered before .
> - I wrote the code in `listeners/display-nany.js` & `handlers/display-nany.js`,`views/render-list.js`
> - The handler function check the `strings` object with user input "NaNy" as current display value and render the list for the UI, the handler is connected to the UI with a `click` event.

# Contributing

As an open-source project we welcome every developer to contribute and imporve our project.

Make sure that you have read the [Code of Conduct](https://github.com/liquid-geometry/liquidgeometry/blob/main/CODE_OF_CONDUCT.md) before contributing

## How to Contribute

1. Fork the `main` branch
2. Clone the Repository
3. Make the changes
4. Make a PR on the `main` branch
5. Wait for aprooval (you may be asked to make changes on your code!)

## Rules

-   All the CSS(colors, displays, positions, paddings, margins etc.) must be Bootstrap 5 classes
-   Write all custom CSS with comments in the `Site.css` file
-   Use TypeScript all the time (hit `tsc -w` to compile the code).
-   Use Ajax requests(from jQuery) fro all API calls
-   Place TypeScript files in the `src` folder. All the JavaScript files will automagically be compiled in the `dist` folder
-   Use ES6 syntax all the time
-   Use Ajax for all API requests(see example below)
-   Use the excact same navigation bar for all the pages(see example below)
-   Use Bootstrap Icons for all the icons
-   Ask us first if you want to use any external library
-   Write clean and formatted code
-   Use opening and closing comment tags to organize the code(see `NAVBAR START`/`NAVBAR END` example)
-   Files get minified and comments removed on both TypeScript, CSS and HTML in the production build. Don't be afraid to leave empty lines or comments in the code(as long as it is not the entire bee movie script)
-   Make sure everything still works by running it locally before opening a PR (to run locally just hit `npm start`)

## Commit Messages

Please use proper commit messages as shown below:

-   **Directly to production:** `prod: added kangaroo hop calc`
-   **Refactoring:** `refactor: translated armadillo lenght calc to es6`
-   **Fix:** `fix: fixed goat milk temperature calc`
-   **Beta testing:** `beta: squared the circle`
-   **Alpha testing:** `alpha: added Riemann hypothesis solver`
-   **Other testing:** `test: equation factoring`
-   **Documentation:** `docs: added docs for killing the ender dragon with a bed`
-   **Other:** `other: pet my cat for 3 hours`

If your commit messages do not follow the guidelines, you will be asked to ammend them.

## Examples

### Calculation with TypeScript

```TS
(<HTMLButtonElement> document.querySelector('#button')).addEventListener('click', (event) => {
    event.preventDefault();
    const num: number = parseFloat((< HTMLInputElement > document.querySelector('#number')).value)!;
    if (isNaN(num)) {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        (< HTMLInputElement > document.querySelector('#number')).value = "";
    } else if (num < 0) {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-warning">The radicand must be a postive number</p>`;
        (< HTMLInputElement > document.querySelector('#number')).value = "";
    } else {
        (<HTMLParagraphElement>document.querySelector('#output')).innerHTML = `<p class="text-success">&#8730;${num} = ${Math.sqrt(num)} (&#8764; ${Math.sqrt(num).toFixed(3)})</p>`;
        (< HTMLInputElement > document.querySelector('#number')).value = "";
    }
});

```

### Ajax `GET` request(jQuery)

```JS

$.ajax({
    type: "GET",
    url: "https://api.github.com/repos/mathflare/mathflare/releases/latest",
    dataType: "json",
    success: function (response) {
        console.log('the latest release is ' + response.tag_name)
    }
});

```

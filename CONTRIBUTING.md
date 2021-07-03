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

- All the CSS(colors, displays, positions, paddings, margins etc.) must be Bootstrap 5 classes
- Write all custom CSS with comments in the `Site.css` file
- Use TypeScript all the time (hit `tsc -w` to compile the code).
- Use Ajax requests(from jQuery) fro all API calls
- Place TypeScript files in the `src` folder. All the JavaScript files will automagically be compiled in the `dist` folder
- Use Ajax for all API requests(see example below)
- Use the excact same navigation bar for all the pages(see example below)
- Use Bootstrap Icons for all the icons
- Ask us first if you want to use any external library
- Write clean and formatted code
- Use opening and closing comment tags to organize the code(see `NAVBAR START`/`NAVBAR END` example)
- Files get minified and comments removed on both TypeScript, CSS and HTML in the production build. Don't be afraid to leave empty lines or comments in the code(as long as it is not the entire bee movie script)
- Make sure everything still works by running it locally before opening a PR (to run locally just hit `npm start`)

## Commit Messages

Please use proper commit messages as shown below:
- **Directly to production:** `prod: added kangaroo hop calc`
- **Refactoring:** `refactor: fixed armadillo lenght calc`
- **Beta testing:** `beta: squared the circle`
- **Alpha testing:** `alpha: added Riemann hypothesis solver`
- **Other testing:** `test: equation factoring`
- **Documentation:** `docs: added docs for killing the ender dragon with a bed`
- **Other:** `other: pet my cat for 3 hours`

If your commit messages do not follow the guidelines, you will be asked to ammend them.

## Examples

### Navigation Bar

```HTML

<!-- NAVBAR START -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="https://www.mathflare.tk">MathFlare</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html"><i class="bi bi-house"></i> Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a href="" class="nav-link" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contact
                        <i class="bi bi-caret-down-fill"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a href="contact.html" class="dropdown-item"><i class="bi bi-telephone-fill"></i> Contact Form</a>
                        <a href="https://github.com/mathflare" target="_blank" class="dropdown-item"><i class="bi bi-github"></i> GitHub</a>
                        <a href="/cdn-cgi/l/email-protection#1b77726a6e727f367c7e74767e6f69625b7f707a6f68727468356f70" target="_blank" class="dropdown-item"><i class="bi bi-envelope-fill"></i> Email</a>
                        <a href="https://www.instagram.com/mathflare/" class="dropdown-item"><i class="bi bi-instagram"></i> Instagram</a>
                        <a href="https://api.mathflare.tk" target="_blank" class="dropdown-item"><i class="bi bi-hdd-stack-fill"></i> REST API</a>
                        <a href="https://developers.mathflare.tk" target="_blank" class="dropdown-item"><i class="bi bi-code-slash"></i> For Developers</a>
                        <a href="https://github.com/mathflare/mathflare" target="_blank" class="dropdown-item"><i class="bi bi-terminal-fill"></i> Clone the Repo</a>
                        <a href="https://github.com/mathflare/mathflare/issues" target="_blank" class="dropdown-item"><i class="bi bi-bug-fill"></i> Report a Bug</a>
                        <a href="https://github.com/mathflare/mathflare/issues" target="_blank" class="dropdown-item"><i class="bi bi-lightbulb-fill"></i> Suggest an Edit</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="" class="nav-link" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Geometry
                        <i class="bi bi-caret-down-fill"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <h5 class="dropdown-header">Basic Geometry</h5>
                        <a href="perimeter.html" class="dropdown-item"><i class="bi bi-bounding-box"></i> Perimeter Calculator</a>
                        <a href="area.html" class="dropdown-item"><i class="bi bi-grid-3x3"></i> Area Calculator</a>
                        <a href="diagpolyg.html" class="dropdown-item"><i class="bi bi-slash-square"></i> Diagonal Calculator</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="" class="nav-link" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Trigognometry
                        <i class="bi bi-caret-down-fill"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <h5 class="dropdown-header">Pythagorean Theorem</h5>
                        <a href="phypotenuse.html" class="dropdown-item"><i class="bi bi-symmetry-vertical"></i> Hypotenuse Calculator</a>
                        <a href="prightside.html" class="dropdown-item"><i class="bi bi-symmetry-vertical"></i> Leg Calculator</a>
                        <div class="dropdown-divider"></div>
                        <a href="equaltri.html" class="dropdown-item"><i class="bi bi-symmetry-vertical"></i> Equal Triangles</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="" class="nav-link" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Unit Converter
                        <i class="bi bi-caret-down-fill"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a href="clenght.html" class="dropdown-item"><i class="bi bi-rulers"></i> Lenght</a>
                        <a href="cdata.html" class="dropdown-item"><i class="bi bi-server"></i> Data</a>
                        <a href="cvolume.html" class="dropdown-item"><i class="bi bi-box"></i> Volume</a>
                        <a href="ctime.html" class="dropdown-item"><i class="bi bi-clock-fill"></i> Time</a>
                        <a href="ctemp.html" class="dropdown-item"><i class="bi bi-thermometer"></i> Temperature</a>
                        <a href="cspeed.html" class="dropdown-item"><i class="bi bi-speedometer"></i> Speed</a>
                        <a href="cweight.html" class="dropdown-item"><i class="bi bi-minecart-loaded"></i> Weight</a>
                        <a href="cenergy.html" class="dropdown-item"><i class="bi bi-lightning-fill"></i> Energy</a>
                        <a href="cpower.html" class="dropdown-item"><i class="bi bi-battery-half"></i> Power</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="" class="nav-link" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                        <i class="bi bi-caret-down-fill"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a href="" class="dropdown-item"><div class="g-signin2" data-onsuccess="onSignIn"></div></a>
                        <a href="" class="dropdown-item"><i class="bi bi-person-circle"></i> <span id="display">Not Signed In</span></a>
                        <a href="" class="dropdown-item" onclick="signOut();" id="signout"><i class="bi bi-door-closed"></i> Sign out</a>
                        <div class="dropdown-divider"></div>
                        <a href="stats.html" class="dropdown-item"><i class="bi bi-graph-up"></i> Stats</a>
                        <div class="dropdown-divider"></div>
                        <h5 class="dropdown-header">Legal</h5>
                        <a href="tos.html" class="dropdown-item"><i class="bi bi-card-checklist"></i> Terms of Use</a>
                        <a href="license.html" class="dropdown-item"><i class="bi bi-credit-card-2-front"></i> Software License</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="" class="nav-link" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Algebra
                        <i class="bi bi-caret-down-fill"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <h5 class="dropdown-header">Basic Algebra</h5>
                        <a href="logar.html" class="dropdown-item"><i class="bi bi-percent"></i> Logarithms</a>
                        <a href="sqrt.html" class="dropdown-item"><i class="bi bi-calculator"></i> Square Root Calculator</a>
                        <a href="cbrt.html" class="dropdown-item"><i class="bi bi-calculator"></i> Cube Root Calculator</a>
                        <a href="pow.html" class="dropdown-item"><i class="bi bi-power"></i> Exponents(powers)</a>
                        <a href="avg.html" class="dropdown-item"><i class="bi bi-pie-chart"></i> Average Calculator</a>
                        <a href="percent.html" class="dropdown-item"><i class="bi bi-percent"></i> Percentage Calculator</a>
                        <div class="dropdown-divider"></div>
                        <h5 class="dropdown-header">Equations</h5>
                        <a href="equations.html" class="dropdown-item"><i class="bi bi-percent"></i> 1st Degree</a>
                        <a href="equations-second.html" class="dropdown-item"><i class="bi bi-percent"></i> 2nd Degree</a>
                        <div class="dropdown-divider"></div>
                        <h5 class="dropdown-header">Systems of Equations</h5>
                        <a href="linear-systems.html" class="dropdown-item"><i class="bi bi-border-width"></i> Linear Systems</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="formulas.html"><i class="bi bi-book"></i> Formulas</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    <!-- NAVBAR END -->

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

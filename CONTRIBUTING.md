# Contributing

As an open-source project we welcome every developer to contribute and imporve our project.

## How to Contribute

1. Fork the `to-test` branch
2. Clone the Repository
3. Make the changes
4. Make a PR on the `to-test` branch
5. Wait for aprooval (you may be asked to make changes on your code)

## Rules

- All the CSS(colors, displays, positions etc.) must use Bootstrap classes
- Use jQuery all the time for DOM operations
- Use the excact same navigation bar for all the pages(see example below)
- Write clean and formatted code
- Use opening and closing comment tags to organize the code(see `NAVBAR START`/`NAVBAR END` example)
- Do not leave empty lines or a ton of comments in the code(Include all extra info on the PR message)

## Examples

### Navigation Bar

```HTML

<!-- NAVBAR START -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Liquid Geometry</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html"><i class="bi bi-house"></i> Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a href="" class="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contact
                        <i class="bi bi-caret-down-fill"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a href="https://github.com/liquid-geometry" target="_blank" class="dropdown-item"><i class="bi bi-github"></i> GitHub</a>
                        <a href="mailto:liquid-geometry@dkatsios.tk" target="_blank" class="dropdown-item"><i class="bi bi-envelope-fill"></i> Email</a>
                        <a href="https://discord.com/invite/VwvQNYzU5M" target="_blank" class="dropdown-item"><i class="bi bi-discord"></i> Discord</a>
                        <a href="https://twitter.com/damik_raw" target="_blank" class="dropdown-item"><i class="bi bi-twitter"></i> Twitter</a>
                        <a href="#" class="dropdown-item" title="coming soon"><i class="bi bi-instagram"></i> Instagram</a>
                        <a href="https://api.liquidgeometry.tk" target="_blank" class="dropdown-item"><i class="bi bi-hdd-stack-fill"></i> REST API</a>
                        <a href="https://developers.liquidgeometry.tk" target="_blank" class="dropdown-item"><i class="bi bi-code-slash"></i> For Developers</a>
                        <a href="https://github.com/liquid-geometry/liquidgeometry" target="_blank" class="dropdown-item"><i class="bi bi-terminal-fill"></i> Clone the Repo</a>
                        <a href="https://github.com/liquid-geometry/liquidgeometry/issues" target="_blank" class="dropdown-item"><i class="bi bi-bug-fill"></i> Report a Bug</a>
                        <a href="https://github.com/liquid-geometry/liquidgeometry/issues" target="_blank" class="dropdown-item"><i class="bi bi-lightbulb-fill"></i> Suggest an Edit</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="" class="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Area Calculator
                        <i class="bi bi-caret-down-fill"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a href="atriangle.html" class="dropdown-item"><i class="bi bi-triangle"></i> Triangle</a>
                        <a href="acircle.html" class="dropdown-item"><i class="bi bi-circle"></i> Circle</a>
                        <a href="apara.html" class="dropdown-item"><i class="bi bi-file"></i> Parallelogram</a>
                        <a href="asquare.html" class="dropdown-item"><i class="bi bi-square"></i> Square</a>
                        <a href="atrapezoid.html" class="dropdown-item"><i class="bi bi-pentagon"></i> Trapezoid</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="" class="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pythagorian
                        <i class="bi bi-caret-down-fill"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a href="phypotenuse.html" class="dropdown-item"><i class="bi bi-symmetry-vertical"></i> Hypotenuse</a>
                        <a href="prightside.html" class="dropdown-item"><i class="bi bi-symmetry-vertical"></i> Right side</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="" class="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <a href="" class="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                        <i class="bi bi-caret-down-fill"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a href="" class="dropdown-item"><div class="g-signin2" data-onsuccess="onSignIn"></div></a>
                        <a href="" class="dropdown-item"><i class="bi bi-person-circle"></i> <span id="display">Not Signed In</span></a>
                        <a href="" class="dropdown-item" onclick="signOut();" id="signout"><i class="bi bi-door-closed"></i> Sign out</a>
                        <a href="tos.html" class="dropdown-item"><i class="bi bi-card-checklist"></i> Terms of Use</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="formulas.html"><i class="bi bi-book"></i> Formulas</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- NAVBAR END -->

```

### jQuery DOM operation

```JS

$(document).ready(function () {
    $("#button").click(calculation = (e) => {
        e.preventDefault();
        const lside = $("#lside").val();
        const sside = $("#sside").val();
        const height = $("#height").val();
        const result = ((parseFloat(lside) + parseFloat(sside)) * parseFloat(height)) / 2;
        if (lside <= 0 || sside <= 0 || height <= 0) {
            $("#output").text("Please enter a valid value");
            $("#lside").val(1);
            $("#sside").val(1);
            $("#height").val(1);
        }
        else {
            $("#output").text("The area of the trapezoid is " + result + " cm^2");
            $("#lside").val(1);
            $("#sside").val(1);
            $("#height").val(1);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").fadeToggle(500);
    });
});

```

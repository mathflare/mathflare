$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        const n = $("#vertex").val();
        if (n == "" || n <= 2 || !(Math.floor(n) == n)) {
            $("#output").html(
                `<p class=" text-warning">Please enter a valid value</p>`
            );
            $("#vertex").val(null);
        } else {
            $("#output").html(
                `<p class=" text-success">The number of diagonals in this convex ${n}-gon is ${(n * (n - 3)) / 2}</p>`
            );
            $("#vertex").val(null);
            console.log(Number.isSafeInteger(n))
        }
    });
});
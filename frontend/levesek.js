document.addEventListener("DOMContentLoaded", function () {
    var table = document.getElementById("levesek");

    window.addEventListener("load", async (event) => {
        let baseUrl = "http://localhost/Levesek-feladat/backend/index.php?levesek";
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let response = await fetch(baseUrl, options);
        let data = await response.json();
        let lista = "";
        data.forEach(element => {
            lista += `<option value="` + element.megnevezes + `">` + element.kaloria + `</option>`;
        });
        table.innerHTML = lista;
    })
});

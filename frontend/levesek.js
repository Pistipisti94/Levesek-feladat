document.addEventListener("DOMContentLoaded", async function () {
    var table = document.getElementById("levesek");

    let baseUrl = "http://localhost/Levesek-feladat/backend/levesek";
    let options = {
        method: "GET",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':'*'
        }
    };
    let response = await fetch(baseUrl, options);
    let data = await response.json();
    console.log(data);
    tabla = `
                            <table class="table table-striped ">
                                <thead>
                                    <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nev</th>
                                    <th scope="col">Született</th>
                                    <th scope="col">Iranyitoszam</th>
                                    <th scope="col">Orszag</th>
                                    <th scope="col">#</th>
                                    </tr>
                                </thead>
                            <tbody>
                            `;
    let row = 1;
    data.forEach(element => {
        tabla += `<tr><th scope='row'>` + element.megnevezes + `</th></tr>`;
        row++;
    });
    tabla += `</tbody>
                            </table>`;
    table.innerHTML = tabla;

    table.innerHTML = tabla;

});
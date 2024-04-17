document.addEventListener("DOMContentLoaded", function () {
    var table = document.getElementById("levesek");
    
    window.addEventListener("onload", async function () {
        let baseUrl = "http://localhost/Levesek-feladat/backend/levesek/";        
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };        
        let response = await fetch(baseUrl, options);
        let data = await response.json();
        let tabla = "";
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
            tabla += `<tr><th scope='row'>` + element.megnevezes + `</th>  <td id="nev`+element.azon+`">` + element.nev + `</td><td id="szulev`+element.azon+`">` + element.szulev + `</td><td id="irszam`+element.azon+`">` + element.irszam + `</td><td id="orsz`+element.azon+`">` + element.orsz + `</td><td><Button class="btn btn-primary pick" id="` + element.azon + `">Pick</Button></td></tr>`;
            row++;
        });
        tabla += `</tbody>
                            </table>`;
        table.innerHTML = tabla;
    })
});
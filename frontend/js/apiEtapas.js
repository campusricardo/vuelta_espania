const url = "http://127.0.0.1:4000/etapa/all";


const getCiclistas = (async () => {
    try {
        const fetchCiclistas = await fetch(url);
        const results = await fetchCiclistas.json();
        showCiclistas(results);
        return results;
    } catch (error) {
        console.log(error);
    }
})();


function showCiclistas(results) {

    results.forEach(result => {
        const div = document.createElement("div");
        const {nombre,duracionM,longitudK,tmrM,_id} = result;
        div.classList.add("card");
        div.innerHTML = `
        
        <p> id: ${_id} </p>
        <p> nombre: ${nombre}</p>
        <p> Duracion en minutos: ${duracionM} </p>
        <p> Longitud en Kilometros: ${longitudK} </p>
        <p> Record de tiempo en minutos: ${tmrM} </p>

        `;

        const section = document.querySelector(`.section-vuelta`);
        section.appendChild(div);
    });
}
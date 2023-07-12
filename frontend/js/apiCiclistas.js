const url = "http://127.0.0.1:4000/ciclista/all";


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
        const {edad,equipo,nombre,peso,_id} = result;
        div.classList.add("card");
        div.innerHTML = `
        
        <p> id: ${_id} </p>
        <p> nombre: ${nombre}</p>
        <p> edad: ${edad} </p>
        <p> equipo: ${equipo} </p>
        <p> peso: ${peso} </p>

        `;

        const section = document.querySelector(`.section-vuelta`);
        section.appendChild(div);
    });
}
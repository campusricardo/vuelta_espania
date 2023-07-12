const url = "http://127.0.0.1:4000/equipo/all";


const getCiclistas = (async () => {
    try {
        const fetchCiclistas = await fetch(url);
        const results = await fetchCiclistas.json();
        showCiclistas(results);
        console.log(results);
        return results;
    } catch (error) {
        console.log(error);
    }
})();


function showCiclistas(results) {
    results.forEach(result => {
        const div = document.createElement("div");
        const {can_ciclistas,nombre,pais,_id} = result;
        div.classList.add("card");
        div.innerHTML = `
        
        <p> id: ${_id} </p>
        <p> nombre: ${nombre}</p>
        <p> cantidad ciclistas: ${can_ciclistas} </p>
        <p> pais: ${pais} </p>

        `;

        const section = document.querySelector(`.section-vuelta`);
        section.appendChild(div);
    });
}
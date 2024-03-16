const pokemonImg = document.getElementById("pokemonImg");
pokemonImg.style.display = "none";

async function fetchData() {
    const pokemonName = document
        .getElementById("pokemonName")
        .value.toLowerCase();

    console.log(pokemonName);

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
        console.error("couldn't load data");
        return;
    }

    data = await response.json();

    pokemonImg.src = data.sprites.front_default;
    pokemonImg.style.display = "block";
}

document.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        fetchData();
    }
});

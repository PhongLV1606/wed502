// Định nghĩa interface cho Pokémon
interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

// Arrow function shuffle mảng
const shuffle = (data: Pokemon[]): Pokemon[] => {
    return data.sort(() => Math.random() - 0.5);
};

// Arrow function hiển thị ra DOM
const show = (data: Pokemon[]): void => {
    const container = document.getElementById("pokemon-list");
    if (!container) return;

    container.innerHTML = "";

    data.forEach(pokemon => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${pokemon.image}" alt="${pokemon.name}">
          <h3>${pokemon.name}</h3>
          <p>Type: ${pokemon.type}</p>
        `;

        container.appendChild(card);
    });
};

// Lấy dữ liệu từ PokeAPI
const fetchPokemons = async (): Promise<void> => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
        const data = await res.json();

        const pokemons: Pokemon[] = await Promise.all(
            data.results.map(async (item: any, index: number) => {
                const pokeRes = await fetch(item.url);
                const pokeData = await pokeRes.json();

                return {
                    id: index + 1,
                    name: pokeData.name,
                    image: pokeData.sprites.front_default,
                    type: pokeData.types[0].type.name
                };
            })
        );

        const shuffled = shuffle(pokemons);
        show(shuffled);

    } catch (error) {
        console.error("Error fetching pokemons:", error);
    }
};

fetchPokemons();

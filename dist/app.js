"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Arrow function shuffle mảng
const shuffle = (data) => {
    return data.sort(() => Math.random() - 0.5);
};
// Arrow function hiển thị ra DOM
const show = (data) => {
    const container = document.getElementById("pokemon-list");
    if (!container)
        return;
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
const fetchPokemons = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
        const data = yield res.json();
        const pokemons = yield Promise.all(data.results.map((item, index) => __awaiter(void 0, void 0, void 0, function* () {
            const pokeRes = yield fetch(item.url);
            const pokeData = yield pokeRes.json();
            return {
                id: index + 1,
                name: pokeData.name,
                image: pokeData.sprites.front_default,
                type: pokeData.types[0].type.name
            };
        })));
        const shuffled = shuffle(pokemons);
        show(shuffled);
    }
    catch (error) {
        console.error("Error fetching pokemons:", error);
    }
});
fetchPokemons();

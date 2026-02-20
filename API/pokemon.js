function retrievePokemon(data) {

    console.log(data);
    const img = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    const sound = data.cries.latest;
    const moves = data.moves.map(move => move.move.name);

    localStorage.setItem("key", JSON.stringify(data));

    let IMG = document.getElementById("pokemonIMG");
    IMG.src = img;
    IMG.alt = data.name;

    let audio = document.getElementById("pokemonAudio");
    audio.src = sound;

    let list1 = document.getElementById("list1")
    let list2 = document.getElementById("list2")
    let list3 = document.getElementById("list3")
    let list4 = document.getElementById("list4")

    list1.textContent = "";
    list2.textContent = "";
    list3.textContent = "";
    list4.textContent = ""; 


    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < moves.length; j++) {
            let option = document.createElement("option");
            option.value = moves[j];
            option.text = moves[j];

            if (i === 0) {
                list1.appendChild(option);
            }   else if (i === 1) {
                list2.appendChild(option);
            }   else if (i === 2) {
                list3.appendChild(option);
            }   else if (i === 3) {
                list4.appendChild(option);
            }   
        }      

    }

}

function findPokemon() {

    let pokemon = document.getElementById("pokemonInput").value;
    let storedData = localStorage.getItem(pokemon);

    if (storedData === null) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(data => {
            try {
                localStorage.setItem(pokemon, JSON.stringify(data));
                console.log("No data for " + pokemon + " in storage");
                retrievePokemon(data);
            } catch (e) {
                if (e.name === "QuotaExceededError") {
                    console.error("Storage quota exceeded. Clearing localStorage.");
                    localStorage.clear();

                    localStorage.setItem(pokemon, JSON.stringify(data));
                    console.log("No data for " + pokemon + " in storage");
                    retrievePokemon(data);
                }
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    } else { 
        let data = JSON.parse(storedData);
        console.log("Found data for " + pokemon + " in storage");
        retrievePokemon(data);
    }
}

function addTeam() {

    let pokemonIMG = document.getElementById("pokemonIMG").src;
    
    let list1 = document.getElementById("list1").value;
    let list2 = document.getElementById("list2").value;
    let list3 = document.getElementById("list3").value;
    let list4 = document.getElementById("list4").value;

    let newArticle = document.createElement("article");

    let pokeball = document.createElement("img");
    pokeball.src = "../assets/images/pokeball.png";
    pokeball.id = "pokeball";
    newArticle.appendChild(pokeball);

    let img = document.createElement("img");
    img.src = pokemonIMG;
    newArticle.appendChild(img);

    let movesList = document.createElement("ul");

    let move1 = document.createElement("li");
    move1.textContent = list1;
    movesList.appendChild(move1);

    let move2 = document.createElement("li");
    move2.textContent = list2;
    movesList.appendChild(move2);

    let move3 = document.createElement("li");
    move3.textContent = list3;
    movesList.appendChild(move3);

    let move4 = document.createElement("li");
    move4.textContent = list4;
    movesList.appendChild(move4);

    newArticle.appendChild(movesList);

    let teamSection = document.getElementsByClassName("team")[0];
    teamSection.appendChild(newArticle);
}
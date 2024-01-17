async function fetchData(){
    try{
    const pokemonName=document.getElementById("pokemonName").value.toLowerCase();
     const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
     if(!response.ok){
            throw new Error("could not fetch resource");
     }
     const data=  await response.json();
     const PokemonSprite=data.sprites.front_default;
     const imgElement=document.getElementById("PokemonSprite");
     imgElement.src=PokemonSprite;
     imgElement.style.display="block";


    }
    catch(error){

            console.error(error);

    }
}
fetchData();


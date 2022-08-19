// import axios from 'axios';

function getCharacterdata(id) {
    let app = document.getElementById('app');
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
            const character = response.data;
            console.log(character);
            app.innerHTML = `
            <div class="container-main">
                <img src="img/logo2.png" alt="ricky" width="80" height="80">
                <h1>Rick and Morty</h1>
            </div>
            <div class="card">
                <div class="image">
                    <img src="${character.image}" />
                </div>
                <div class="details">
                    <div class="center">
                        <img class="hvr-bounce-in" src="img/logo2.png" alt="ricky" width="40" height="40">
                        <h1>${character.id}- ${character.name}<br><span>${character.species}</span></h1>
                        <ul>
                            <li>Status: ${character.status}</li>
                            <li>Location: ${character.location.name}</li>
                            <li>Gender: ${character.gender}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        })
        .catch((error) => console.log(error))
}
getCharacterdata(1);
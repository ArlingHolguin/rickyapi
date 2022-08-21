// import axios from 'axios';

function getCharacterdata() {
    let app = document.getElementById('app');
    let caracter = document.getElementById('valueId').value
    axios.get(`https://rickandmortyapi.com/api/character/${caracter}`)
        .then((response) => {
            const character = response.data;
            console.log(character);
            app.innerHTML = `
            <div class="container-main">
                <img src="img/logo2.png" alt="ricky" width="80" height="80">
                <h1>${character.name}</h1>
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
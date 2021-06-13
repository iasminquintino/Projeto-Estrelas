const qtdeDosPersonagens = 671;
var loop;
for (loop = 0; loop < 4; loop++) {
    generateRandomNumber = () => {
        return Math.floor(Math.random() * qtdeDosPersonagens);
    }
    const id = generateRandomNumber();
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            var container = document.getElementById("personagem");
            container.innerHTML += `
        <div class="imgContainer">
        <img src=`+ data.image + ` /><br>
        <strong>`+ data.name + `</strong>
        </div>`;
        })

}
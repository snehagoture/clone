var form=document.getElementById("myform")
form.addEventListener('submit',function(e){
    e.preventDefault()
    var search =document.getElementById("search").value
   var originalName=search.split(' ').join('')
   alert(originalName)

    fetch("https://api.github.com/users/"+originalName)
     .then((result) => result.json())
     .then((data) => {
         console.log(data)
         
         document.getElementById("result").innerHTML =`
         <a  target="_blank" href= "https://api.github.com/users/${originalName}/repos">
         </a>
         `
         
         
     })
     
})
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) 
           
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch(' https://api.github.com/users/${originalName}/repos');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (e) {
        console.error(e);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <h3> ${character.description}</h3>
                <p>${character.updated_at}</p>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

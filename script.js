const textElement = document.querySelector('.text');
const searchInput = document.querySelector('.search');

const endpoint = 'https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json';
const countries = [];

fetch(endpoint)
    .then(data => data.json())
    .then(data => countries.push(...data));

function findMatches(wordToMatch, countries) {
    return countries.filter(country => {
        const regex = new RegExp(wordToMatch, 'gi');
        return country.name.match(regex) || country.code.match(regex);
    console.log(this.value); 
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, countries);
    console.log(matchArray);
     const hm = matchArray.map(a=>
            `<li>
                <span>${a.name}(${a.code})</span>
                <span>${a.dial_code}</span>
            </li>`)
    const mh = hm.join('');
    textElement.innerHTML = mh;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
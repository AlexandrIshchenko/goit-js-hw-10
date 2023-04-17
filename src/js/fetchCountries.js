const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = (name) => {
    return fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`).then(response => {
        return response.json();
    });
}
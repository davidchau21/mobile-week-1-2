// Function to perform reverse geocoding and render the country
const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Problem with geocoding: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(`You are in ${data.city}, ${data.country}`);
        const countryDataUrl = `https://restcountries.com/v3/alpha/${data.country}`;
        return fetch(countryDataUrl);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Problem with country data: ${response.status}`);
        }
        return response.json();
      })
      .then(countryData => {
        renderCountry(countryData, 'neighbour');
      })
      .catch(err => {
        console.error(`Something went wrong: ${err.message}`);
      });
  };
  
  // Test the function with coordinates
  whereAmI(52.508, 13.381); // Example coordinates 1
  whereAmI(19.037, 72.873); // Example coordinates 2
  whereAmI(-33.933, 18.474); // Example coordinates 3
  
  


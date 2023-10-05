const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
    const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

    request(url, (error, response, body) => {
        if (error) {
            callback(Error, null);
        } else if (response.statusCode !== 200) {
            callback(`HTTP request failed with status code ${response.statusCode}`, null);
        } else {
            const data = JSON.parse(body);
            if (data.length === 0) {
                callback(`Breed '${breedName}' not found.`, null);
            } else {
                const firstEntry = data[0];
                callback(null, firstEntry.description);
            }
        }
    });
};


module.exports = { fetchBreedDescription };
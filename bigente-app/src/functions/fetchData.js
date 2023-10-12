const sourceListChile = require('../data/sourceList-chile');
const sourceListCrossfit = require('../data/sourceList-crossfit');
const sourceListEnergy = require('../data/sourceList-energy');

async function fetchDataReddit(idSource) {
    const apiUrl = idSource.link + '.json';
    const rawData = [];

    try {
        const fetch = await import('node-fetch');
        const response = await fetch.default(apiUrl);
        const apiData = await response.json();
        rawData.push(apiData.data.children);
        //console.log(rawData[0]);
        
    } catch (error) {
        console.log('Error de codigo');
    }
    console.log(rawData[0][7])
}

fetchDataReddit(sourceListChile['2001'])


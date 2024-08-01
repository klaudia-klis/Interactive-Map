const statesInfo = {
    'al': { name: 'Alabama', capital: 'Montgomery', population: '5 million' },
    'ak': { name: 'Alaska', capital: 'Juneau', population: '731,000' },
    'az': { name: 'Arizona', capital: 'Phoenix', population: '7.3 million' },
    'ar': { name: 'Arkansas', capital: 'Little Rock', population: '3 million' },
    'ca': { name: 'California', capital: 'Sacramento', population: '39.5 million' },
    'co': { name: 'Colorado', capital: 'Denver', population: '5.8 million' },
    'ct': { name: 'Connecticut', capital: 'Hartford', population: '3.6 million' },
    'de': { name: 'Delaware', capital: 'Dover', population: '990,000' },
    'fl': { name: 'Florida', capital: 'Tallahassee', population: '21.5 million' },
    'ga': { name: 'Georgia', capital: 'Atlanta', population: '10.7 million' },
    'hi': { name: 'Hawaii', capital: 'Honolulu', population: '1.4 million' },
    'id': { name: 'Idaho', capital: 'Boise', population: '1.8 million' },
    'il': { name: 'Illinois', capital: 'Springfield', population: '12.6 million' },
    'in': { name: 'Indiana', capital: 'Indianapolis', population: '6.7 million' },
    'ia': { name: 'Iowa', capital: 'Des Moines', population: '3.2 million' },
    'ks': { name: 'Kansas', capital: 'Topeka', population: '2.9 million' },
    'ky': { name: 'Kentucky', capital: 'Frankfort', population: '4.5 million' },
    'la': { name: 'Louisiana', capital: 'Baton Rouge', population: '4.6 million' },
    'me': { name: 'Maine', capital: 'Augusta', population: '1.3 million' },
    'md': { name: 'Maryland', capital: 'Annapolis', population: '6.2 million' },
    'ma': { name: 'Massachusetts', capital: 'Boston', population: '7 million' },
    'mi': { name: 'Michigan', capital: 'Lansing', population: '10 million' },
    'mn': { name: 'Minnesota', capital: 'Saint Paul', population: '5.6 million' },
    'ms': { name: 'Mississippi', capital: 'Jackson', population: '3 million' },
    'mo': { name: 'Missouri', capital: 'Jefferson City', population: '6.1 million' },
    'mt': { name: 'Montana', capital: 'Helena', population: '1.1 million' },
    'ne': { name: 'Nebraska', capital: 'Lincoln', population: '1.9 million' },
    'nv': { name: 'Nevada', capital: 'Carson City', population: '3.1 million' },
    'nh': { name: 'New Hampshire', capital: 'Concord', population: '1.4 million' },
    'nj': { name: 'New Jersey', capital: 'Trenton', population: '9.2 million' },
    'nm': { name: 'New Mexico', capital: 'Santa Fe', population: '2.1 million' },
    'ny': { name: 'New York', capital: 'Albany', population: '19.8 million' },
    'nc': { name: 'North Carolina', capital: 'Raleigh', population: '10.5 million' },
    'nd': { name: 'North Dakota', capital: 'Bismarck', population: '770,000' },
    'oh': { name: 'Ohio', capital: 'Columbus', population: '11.7 million' },
    'ok': { name: 'Oklahoma', capital: 'Oklahoma City', population: '4 million' },
    'or': { name: 'Oregon', capital: 'Salem', population: '4.2 million' },
    'pa': { name: 'Pennsylvania', capital: 'Harrisburg', population: '12.8 million' },
    'ri': { name: 'Rhode Island', capital: 'Providence', population: '1.1 million' },
    'sc': { name: 'South Carolina', capital: 'Columbia', population: '5.2 million' },
    'sd': { name: 'South Dakota', capital: 'Pierre', population: '900,000' },
    'tn': { name: 'Tennessee', capital: 'Nashville', population: '6.9 million' },
    'tx': { name: 'Texas', capital: 'Austin', population: '29 million' },
    'ut': { name: 'Utah', capital: 'Salt Lake City', population: '3.3 million' },
    'vt': { name: 'Vermont', capital: 'Montpelier', population: '640,000' },
    'va': { name: 'Virginia', capital: 'Richmond', population: '8.5 million' },
    'wa': { name: 'Washington', capital: 'Olympia', population: '7.7 million' },
    'wv': { name: 'West Virginia', capital: 'Charleston', population: '1.8 million' },
    'wi': { name: 'Wisconsin', capital: 'Madison', population: '5.9 million' },
    'wy': { name: 'Wyoming', capital: 'Cheyenne', population: '580,000' },
};


document.addEventListener('DOMContentLoaded', () => {
    const states = document.querySelectorAll('.state path');
    const infoBox = document.createElement('div');
    const exit = document.querySelector('.exit');
    infoBox.className = 'info-box';
    document.body.appendChild(infoBox);

    states.forEach(state => {
        const stateClass = state.getAttribute('class').split(' ').pop();
        state.setAttribute('data-state', stateClass);
        state.addEventListener('click', () => {
            const stateId = state.getAttribute('data-state');
            const stateData = statesInfo[stateId];

            infoBox.style.display = 'block';

            if (stateData) {
                infoBox.innerHTML = `<span class="exit">x</span><h2>${stateData.name}</h2><p><img src="./assets/svg/capital.svg"><strong>Capital:</strong> ${stateData.capital}</p><p><img src="./assets/svg/population.svg"><strong>Population:</strong> ${stateData.population}</p>`;
            } else {
                infoBox.innerHTML = `<h2>No additional info</h2>`;
            }
        });
    });

    document.body.addEventListener('click', (event) => {
        if (event.target.className == 'exit') {
            infoBox.style.display = 'none';
        }
    })
});
// data source
const source = {
planet : ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'],
sign : ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],
house : ['first','second','third','fourth','fifth','sixth','seventh','eigth','ninth','tenth','eleventh','twelfth']
};

//random number generator
const RNG = l => {
    return Math.floor(Math.random() * l);
}

// create factory function
function opFactory(planet, sign, house) {
    return {
        planet,
        sign,
        house,
        get horoscope() {
            console.log(`${this.planet} is transitioning across ${this.sign}, soon to rise in the ${this.house} house, bring you good luck and fortune.`);
        }
    }
};

// create output object using factory function
const output = opFactory();
//console.log(output);

// for loop iterating over source
for (item in output) {  
    let i = 0;
    
    if (item != 'horoscope') {
        i = RNG(source[item].length);
    }

    switch (item) {
        case 'planet':
            //console.log(source.planet[i]);
            output[item] = source.planet[i];
            break;
        case 'sign':
            output[item] = source.sign[i];
            break;
        case 'house':
            output[item] = source.house[i];
            break;
        default:
            break;
    }
}

//console.log(output);
output.horoscope;

// data source
const source = {
planet : ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'],
sign : ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],
house : ['first','second','third','fourth','fifth','sixth','seventh','eigth','ninth','tenth','eleventh','twelfth'],
luck : ['very good','good','no','bad','very bad'],
freebie : ['a fortune','herpes','a swift death','vast sums of money','love','to the end']
};

//random number generator
const RNG = l => {
    return Math.floor(Math.random() * l);
}

// create factory function
function opFactory(planet, sign, house, luck, freebie) {

    return {
        planet : source.planet[RNG(source.planet.length)],
        sign : source.sign[RNG(source.sign.length)],
        house : source.house[RNG(source.house.length)],
        luck : source.luck[RNG(source.luck.length)],
        freebie : source.freebie[RNG(source.freebie.length)],
        get horoscope() {
            console.log(`${this.planet} is transitioning across ${this.sign}, soon to rise in the ${this.house} house, bringing you ${this.luck} luck and also ${this.freebie}.`);
        }
    }
};

// create output object using factory function
const output = opFactory();

//console.log(output);
output.horoscope;

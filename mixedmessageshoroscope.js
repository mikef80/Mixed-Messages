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

//console.log(source['planet'][RNG(source['planet'].length)]);

// create output object

const OP = (p, s, h) => {
    p : p;
    s : s;
    h : h;
}



// for loop iterating over source
for (item in source) {
    let i = RNG(source[item].length);

    /*console.log('source length: ' + source[item].length);
    console.log('item: ' + item);
    console.log('i=' + i);
    console.log('value: ' + source[item][i]);*/
}
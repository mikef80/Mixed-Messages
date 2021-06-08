let planet = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'];
let sign = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
let house = ['first','second','third','fourth','fifth','sixth','seventh','eigth','ninth','tenth','eleventh','twelfth'];

const RNG = () => {
    return Math.floor(Math.random() * 5);
}

//console.log(`${word1[RNG()]}, how's your ${word2[RNG()]}? I heard you bought a new ${word3[RNG()]}.`);
console.log(`With ${planet[RNG()]} rising in the ${house[RNG()]} house, you are about to embark on an important journey. ${sign[RNG()]} holds influence over you on this path.`);
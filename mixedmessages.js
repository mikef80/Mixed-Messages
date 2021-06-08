let word1 = ['Yo','Hi','Hello','Wotcha','Hey'];
let word2 = ['mum','dog','brother','dad','gran'];
let word3 = ['car','house','horse','bike','surfboard']

const RNG = () => {
    return Math.floor(Math.random() * 5);
}

console.log(`${word1[RNG()]}, how's your ${word2[RNG()]}? I heard you bought a new ${word3[RNG()]}.`);

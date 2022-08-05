function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const nanaInches = 120;
const nanaFeet = inchToFeet(nanaInches);
console.log(nanaFeet);
//JSHW REVIEW2 
//WENNONA WELLS

//FOR LOOPS
//VARIABLES OF SHOE BRANDS
var shoeBrands=['Nike','Adidas', 'Puma', 'Mizuno', 'Fila'];
console.log(shoeBrands);


//Variable is l as ladies
for(var l=0; l < shoeBrands.length; l++){
    console.log(l);
    var x = shoeBrands[l];
    console.log(x);
}
//Variable l = position 0. if l is less than the length of shoeBrands list number of 5, then loop.
//Print position to console EX. 0
//Variable x = where ever shoebrands position index is after loop 
//Print value for x of shoeBrands name EX. Nike
//Stop loop once index is equal to shoeBrands length number, 5


//FILTER LOOPS
filterShoes= shoeBrands.filter(item => {
    return item.length > 4;
}) 
console.log(filterShoes);


//MAP LOOPS
var mapShoes = shoeBrands.map(item =>{
    return item + 'for Ladies';
});
console.log(mapShoes);


//forEach LOOP
//forEach LOOP *Can use element or item
shoeBrands.forEach(item =>{  
    console.log(item);
});


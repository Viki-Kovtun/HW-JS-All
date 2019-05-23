var letters= [];
var str = "Backend As A Service"
console.log (str.split(' '));
var letters2 = str.split(' ');
for (var x of letters2){
    letters.push(x[0])
    };   
console.log(letters.join(''));
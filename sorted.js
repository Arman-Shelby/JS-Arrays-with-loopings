const numbers = [6 , 1 , 8 , 2 , 3 , 5];

// console.log(numbers);
numbers.sort();
// console.log(numbers);

const friends = ['sakib', 'nokib', 'akib' ,'rakib', 'bakib', 'aaaaaabul'];

friends.sort();
// console.log(friends);



const ages = [1 , 5 , 100 , 15 , 8 , 2 , 28];
// console.log(ages);
// ages.sort();
// console.log(ages);


//ascending order
const sortedAges = ages.sort(function(a, b){return a-b });

console.log(sortedAges);

//descending
const sortedAgesDesc = ages.sort(function (a,b){return b-a});
console.log(sortedAgesDesc);
const dailyActivities = ["Sleeping", "cooking", "coding"];
// console.log(dailyActivities);

// Targeting a particular item in an array using index(position of an item in an array).
// console.log(dailyActivities[1]);

// Array methods in Javascript............

// push()-----Adds an element in the last position of an array.
// dailyActivities.push('Docking');
// dailyActivities.push('Runtown');

// unshift()----Adds an element in the first position of an array.
// dailyActivities.unshift("code");
// dailyActivities.unshift("Reading news");
// console.log(dailyActivities);

// pop()--------Removes the last element in an array and returns the remaining items.
// dailyActivities.pop();
// console.log(dailyActivities);

// Seeing the removed item item in an array.
// const removedItem=dailyActivities.pop();
// console.log(removedItem);

// Shift() removes the first item in an array-----
// dailyActivities.shift();
// console.log(dailyActivities);

// Seeing the removed item item in an array.
// const element = dailyActivities.shift();
// console.log(element);
// console.log(dailyActivities);

//Slice()------used to copy items from one array to another......
// const copyArray = dailyActivities.slice();
// console.log(copyArray);

//using spread syntax(...)------------------------

// const copiedArray=[...dailyActivities,"❤️","👍"];
// console.log(copiedArray);

//Replacing an element in an array-------------

// dailyActivities.splice();
// console.log(dailyActivities);

let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// // Remove 'orange' and 'grape' starting from index 2
// const newArr=fruits.splice(2, 2);
// console.log(newArr);
// const none=fruits.concat("Shanana");
// console.log(none);

















// Modifing items using index

// *Used to rename items in an array using their respective positions
// *Can also be used to add an item ina an array.
// *If any position is skiped in this method...the skiped position will be undefined....

// dailyActivities[3] = "Watching football";
// dailyActivities[1] = "Sleeping";
// console.log(dailyActivities);




// const word=prompt("Enter any word."); 
// const vowels=['a','e','i','o','u'];
// const count=word.length;
// let newparam=vowels.count;
// console.log(count);
// const vowel=
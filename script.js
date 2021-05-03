console.log('script working');

///// Initial Array of Objects ////

let submission = [
    {
        name: 'Jane',
        score: 95,
        date: '2020-01-24',
        passed: true
    },
    {
        name: 'Joe',
        score: 77,
        date: '2018-05-14',
        passed: true
    },
    {
        name: 'Jack',
        score: 59,
        date: '2019-07-05',
        passed: false
    },
    {
        name: 'Jill',
        score: 88,
        date: '2020-04-22',
        passed: true
    }
];

    /// starting submission - log ///

// console.log(submission);


//// Functions ////

    //add submission needs to 'push' a new object into the array of 'submission'

function addSubmission (array, newName, newScore, newDate) {
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    }
    
    array.push(newSubmission) 

}

    /// test function - addSubmission ///

    // addSubmission(submission, 'Jennifer', 79, '12-21-2017');
    // console.log(submission);



//function deleteSubmissionByIndex
/*3. Declare a function named deleteSubmissionByIndex
○ Parameter(s): array, index
○ Functionality: remove the object from the array at the specified index using the
splice method.
*/

    // added the 1 to the index to set the deleteCount to 1, which means it will only remove 
    // delete 1 item from the selected index or start of the splice method.

function deleteSubmissionByIndex (array, index) {
    array.splice(index, 1);
}


    // this reads, splice submission, at index 2, deleting only 1 item as 1 is the deleteCount from the start of the splice
    // method
    //  deleteSubmissionByIndex(submission,2);
    // console.log(submission);

// 4. Declare a function named deleteSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: remove the object from the array that has the provided name.
//Incorporate the findIndex method and the splice method.

function deleteSubmissionByName (array, name){
    const index = array.findIndex(object => object.name === name);
    array.splice(index, 1);
}

    // deleteSubmissionByName(submission,'Jane');
    // console.log(submission);

// 5. Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s score in the array at the specified index. Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.

// const editSubmission = (array, index, score) => array[index].score > 60 ? true : false; 

function editSubmission (array, index, score) {
    return array[index].score = score;
}

// console.log(editSubmission(submission, 1, 90));



// 6 Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name. Use the
// find method.

function findSubmissionByName (array, name) {
    let index = array.find(object => object.name === name);
    return index;
}

//console.log(findSubmissionByName(submission, 'Jill'));

//// QUESTION - should this return the entire array, or should it just return the array index number to show where it is in the list?
//// currently shows the object and its info



// 7. Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array


function findLowestScore (array) {
        // let lowestScore = array, starting at the first index using [] brackets. This starts at index 0,
        // but the 'element' parameter assumes what is inside of the targetted element that is before .forEach. 
        // So array.forEach means for each element within array, loop through and check each. In this case, the objects/indexes of array (or submission) 
        // replace the [0]. So each loop goes up by 1. starting with 0, going to 1, then 2, etc.
    let lowestScore = array[0];
    array.forEach(element => {
            // if the indexes/objects within the array (submission) have a score value that is lower than the current lowestScore which = the 
            // last object that had the lowest score, then make the lowest score the new object (index/array within submission). 
        if (element.score < lowestScore.score) {
            lowestScore = element;
        } 
    });
            // once all of the objects within the array (submission) have been checked, then return lowestScore which should hold the object 
            //with the lowest
            // score, not the actual lowest score. If we wanted that, we would have lowestScore = array[0].score;
    return lowestScore;

}

console.log(findLowestScore(submission));


// 8. Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

function findAverageScore (array) {
    
    // if this is array[0].score, this starts it as the first object score instead of at 0 so it does the first amount twice, which is incorrect. off by one error.
    let currentScore = 0;

    for (const element of array){
        currentScore = element.score + currentScore;
    }
       let averageScore = currentScore /= array.length;
    return averageScore;
}

console.log(submission);
console.log(findAverageScore(submission));




// 9. Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have passing scores.

function filterPassing(array){
    // passing students will = the array filtered down to only the students(objects within the array) that have the passed value pair of true.
    let passingStudents = array.filter(object => object.passed === true);
    return passingStudents;
}

console.log(filterPassing(submission));


// 10. Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.

function filter90AndAbove (array){
    let passing90Array = array.filter(object => object.score >= 90);
    return passing90Array;
}
console.log(filter90AndAbove(submission));















//// how to debug ///

/*
in termal, type node .js
set a breakpoint by clicking on the left of the code line.
*/








// ////// practice arrow functions //////

// function sum(a, b) {
//     return a + b
// }

//     // arrow version //

// let theSum = (a,b) => a + b;
// console.log(theSum(5,4));


// function isPositive(number) {
//     return number >= 0
// }

//     // arrow version //
// const isThisPositive = number => number >= 0;
// console.log(isThisPositive(4));


// function randomNumber() {
//     return Math.random
// }

//     // arrow version //

// const theRandomNumber = () => Math.random;
// console.log(theRandomNumber(5))


// document.addEventListener('click', function () {
//     console.log('click')
// })


//     // arrow version // 

const findTheOldest = function(arr) {

    // create a cpy of the array to avoid modifying original array
    const sortedAges = [...arr];

    console.log("Sorted Array before " + sortedAges)

    // sort the ages from oldest to youngest
    // get the current date if person hasn't passed away yet
    sortedAges.sort((firstPerson, secondPerson) => {
        const age1 = (firstPerson.yearOfDeath || new Date().getFullYear()) - firstPerson.yearOfBirth;
        const age2 = (secondPerson.yearOfDeath || new Date().getFullYear()) - secondPerson.yearOfBirth;
        if(age2 > age1)
        {
            return 1;
        }
        else
        {
            return -1;
        }
    });


    // print out the oldest
    console.log("Sorted Array After " + sortedAges);
    return sortedAges[0];

};

// Do not edit below this line
module.exports = findTheOldest;

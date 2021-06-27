
//Get the ID of the p element in the header and apply Moment to it to get the current date
var currentDay = document.getElementById("currentDay");

//Variables to get the class list of the individual textareas 
var nineText = document.querySelector(".nine-am");
var tenText = document.querySelector(".ten-am");
var elevenText = document.querySelector(".eleven-am");
var twelveText = document.querySelector(".twelve-pm");
var oneText = document.querySelector(".one-pm");
var twoText = document.querySelector(".two-pm");
var threeText = document.querySelector(".three-pm");
var fourText = document.querySelector(".four-pm");
var fiveText = document.querySelector(".five-pm");
var saveButton = document.getElementsByClassName(".saveBtn")


//When the page loads, this if statement checks to see if the local storage for Notes, if it's empty, it console logs that, otherwise it runs loadNotes
if (localStorage.getItem("Notes") === null){
    console.log("No Saved Notes")
}
else {
loadNotes();  
}



//Variable that utilizes Moment.js to display the current day of the week and date  
var currentMoment = moment().format('dddd, MMMM Do YYYY');
currentDay.innerHTML = currentMoment;


//Function that useses Moment.js to check the individual time slots against the computer's clock and applys the relevant CSS class styling
function checkTime() {


    var nine = moment().set("hour", 9);

        if (moment().isAfter(nine)) {
            nineText.classList.add("past");
        }
        else if (moment().isSame(nine)) {
            nineText.classList.add("present");
            nineText.classList.remove("past");
        }
        else if (moment().isBefore(nine)) {
            nineText.classList.add("future");
        }

    var ten = moment().set("hour", 10);

        if (moment().isAfter(ten)) {
            tenText.classList.add("past");
        }
        else if (moment().isSame(ten)) {
            tenText.classList.add("present");
            tenText.classList.remove("past");
        }
        else if (moment().isBefore(ten)) {
            tenText.classList.add("future");
        }

    var eleven = moment().set("hour", 11);

        if (moment().isAfter(eleven)) {
            elevenText.classList.add("past");
        }
        else if (moment().isSame(eleven)) {
            elevenText.classList.add("present");
            elevenText.classList.remove("past");
        }
        else if (moment().isBefore(eleven)) {
            elevenText.classList.add("future");
        }

    var twelve = moment().set("hour", 12);

        if (moment().isAfter(twelve)) {
            twelveText.classList.add("past");
        }
        else if (moment().isSame(twelve)) {
            twelveText.classList.add("present");
            twelveText.classList.remove("past");
        }
        else if (moment().isBefore(twelve)) {
            twelveText.classList.add("future");
        }

    var one = moment().set("hour", 13);

        if (moment().isAfter(one)) {
            oneText.classList.add("past");
        }
        else if (moment().isSame(one)) {
            oneText.classList.add("present");
            oneText.classList.remove("past");
        }
        else if (moment().isBefore(one)) {
            oneText.classList.add("future");
        }

    var two = moment().set("hour", 14);

        if (moment().isAfter(two)) {
            twoText.classList.add("past");
        }
        else if (moment().isSame(two)) {
            twoText.classList.add("present");
            twoText.classList.remove("past");
        }
        else if (moment().isBefore(two)) {
            twoText.classList.add("future");
        }

    var three = moment().set("hour", 15);

        if (moment().isAfter(three)) {
            threeText.classList.add("past");
        }
        else if (moment().isSame(three)) {
            threeText.classList.add("present");
            threeText.classList.remove("past");
        }
        else if (moment().isBefore(three)) {
            threeText.classList.add("future");
        }

     var four = moment().set("hour", 16);

        if (moment().isAfter(four)) {
            fourText.classList.add("past");
        }
        else if (moment().isSame(four)) {
            fourText.classList.add("present");
            fourText.classList.remove("past");
        }
        else if (moment().isBefore(four)) {
            fourText.classList.add("future");
        }

    var five = moment().set("hour", 17);

        if (moment().isAfter(five)) {
            fiveText.classList.add("past");
        }
        else if (moment().isSame(five)) {
            fiveText.classList.add("present");
            fiveText.classList.remove("past");
        }
        else if (moment().isBefore(five)) {
            fiveText.classList.add("future");
        }

};

//Function checkTime set to run every half an hour in order to check the time and reapply the relevant CSS classes when they change
setInterval(function () {
    checkTime();
    
  }, (1000 * 60) * 30);



function saveNotes() {

    var notes = [];
    
    $('textarea').each(function () {
        notes.push(this.value);
    });

 
    console.log(notes);

   localStorage.setItem("Notes", JSON.stringify(notes))
    
}

//Function which takes the data in localStorage, applys it to an array, and then each index of that array is set to the corresponding text content of the textareas, thus saving the notes in the same place
function loadNotes() {

    var notes = [] 
 
    notes = JSON.parse(localStorage.getItem("Notes"));

    nineText.textContent = notes[0];
    tenText.textContent = notes[1];
    elevenText.textContent = notes[2];
    twelveText.textContent =  notes[3];
    oneText.textContent =  notes[4];
    twoText.textContent = notes[5];
    threeText.textContent = notes[6];
    fourText.textContent = notes[7];
    fiveText.textContent = notes[8];
 };


//Event listener added to each Save Button, triggering saveNotes function upon button click
document.querySelectorAll('.saveBtn').forEach(item => {
    item.addEventListener('click', event => {
        saveNotes();
    })
  })


checkTime();

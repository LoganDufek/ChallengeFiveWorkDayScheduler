
//Get the ID of the p element in the header and apply Moment to it to get the current date
var currentDay = document.getElementById("currentDay");
var scheduleEl = document.querySelectorAll("description");
//Get the class list of the individual textareas 
var nineText = document.querySelector(".nine-am");
var tenText = document.querySelector(".ten-am");
var elevenText = document.querySelector(".eleven-am");
var twelveText = document.querySelector(".twelve-pm");
var oneText = document.querySelector(".one-pm");
var twoText = document.querySelector(".two-pm");
var threeText = document.querySelector(".three-pm");
var fourText = document.querySelector(".four-pm");
var fiveText = document.querySelector(".five-pm");

var currentMoment = moment().format('dddd, MMMM Do YYYY');
currentDay.innerHTML = currentMoment;


function checkTime() {
//     hour = 9;
//     for (i = 0; i < 8; i++) {

//         var currentHour = moment().set("hour", 9);

//         if (moment().isAfter(currentHour)) {
//             nineText.classList.add("past");
//         }
//         else if (moment().isSame(currentHour)) {
//             nineText.classList.add("present");
//             nineText.classList.remove("past");
//         }
//         else if (moment().isBefore(currentHour)) {
//             nineText.classList.add("future");
//         }
//         hour++
//     }
// };


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

setInterval(function () {
    checkTime();
    console.log("Hi")
  }, (1000 * 60) * 2);

checkTime();
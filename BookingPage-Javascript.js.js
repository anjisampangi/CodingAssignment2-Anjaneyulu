const seats = [{
        id: 1,
        row: 1,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 2,
        row: 1,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 3,
        row: 1,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 4,
        row: 1,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 5,
        row: 1,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 6,
        row: 1,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 7,
        row: 2,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 8,
        row: 2,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 9,
        row: 2,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 10,
        row: 2,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 11,
        row: 2,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 12,
        row: 2,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 13,
        row: 3,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 14,
        row: 3,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 15,
        row: 3,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 16,
        row: 3,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 17,
        row: 3,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 18,
        row: 3,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 19,
        row: 4,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 20,
        row: 4,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 21,
        row: 4,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 22,
        row: 4,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 23,
        row: 4,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 24,
        row: 4,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 25,
        row: 5,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 26,
        row: 5,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 27,
        row: 5,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 28,
        row: 5,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 29,
        row: 5,
        available: Boolean,
        selected: Boolean,
    },
    {
        id: 30,
        row: 5,
        available: Boolean,
        selected: Boolean,
    },
]


numberrows = (5 - 1);
totalseats = seats.length;
seatsperrow = (totalseats / numberrows)
var number = 0;
var dothisnumber = 30
var grid = -1;


var selectgrid = document.querySelectorAll(".grid")

var row = 1;
var gridnumber = 0;
for (var r = 0; r < (numberrows + 1); r++) {
    for (var i = 0; i < seats.length; i++) {
        seats[i].selected === false;
        seats[i].available === true;
        if (seats[i].row === row) {
            console.log(seats[i].row, "seatstow", row, "row")
            var thisgrid = selectgrid[gridnumber];
            console.log(thisgrid, "thisgrid")
            var div = document.createElement("div");
            div.dataset.seat = seats[i].id;
            div.classList.add("seat");
            div.innerText = seats[i].id;
            if (seats[i].available === false) {
                div.classList.add("notavailable");
            }
            div.addEventListener("click", selecteer)
            thisgrid.appendChild(div);
        }
    }
    row += 1;
    gridnumber += 1;
}

var klicked = 0

function selecteer(e) {

    if (inputseats = document.getElementById("rentseats").value !== 0) {
        var geselecteerd = e.target.className.match('selected');
        if (geselecteerd) {
            klicked -= 1;
        } else {
            klicked += 1
        }

        if (inputseats = document.getElementById("rentseats").value >= klicked) {
            e.target.classList.toggle("selected");

        } else {
            alert("You cannot reserve more seats because you type that count only");
            klicked -= 1;

        }

        console.log(e.target.dataset.seat, "Yes, clicked");
        var number = e.target.dataset.seat;
        for (var i = 0; i < seats.length; i++) {
            if (number === seats[i].id) {
                console.log("Yay!")
                seats[i].selected = true;
                console.log(seats[0].selected, "<<< Now selected or not");
                console.log(seats[1].selected, "<<< Now selected or not");
                console.log(seats[2].selected, "<<< Now selected or not");
            }

        }

    } else {
        alert("select how much seats you want to reservate");
    }
}




function buySeats() {
    inputseats = document.getElementById("rentseats").value

    var notavailable = document.querySelectorAll(".notavailable")
    var isnotvalable = notavailable.length;
    var all = 30
    var seatsThatAreLeft = all - isnotvalable;
    console.log(isnotvalable, "notavailable", seatsThatAreLeft, "seatsleft");
    if (inputseats === 0) {
        alert("Enter in the white bar how many seats in the room you want to select");
    } else if (inputseats > seatsThatAreLeft) {
        alert("Unfortunately, there are fewer seats available, adjust the number in the white bar to a maximum of " + seatsThatAreLeft);
    } else if (klicked < inputseats) {
        alert("Select seats in the field according to the number of seats you want to reserve")
    } else {
        console.log("buy seats")
        selected = document.querySelectorAll(".seat");

        klicked = 0;
        console.log(klicked, "Now empty")

        inputseats = document.getElementById("rentseats").value = 0

        for (var i = 0; i < selected.length; i++) {
            console.log("In progress")
            if (selected[i].className.match('selected')) {
                selected[i].classList.add("notavailable");
                selected[i].classList.remove("selected");
            }

        }
    }
}

function Verify() {
    window.location.href = "https://userloginpage1.ccbp.tech"
}
seat_arr = [];
price_arr = [];
// count_arr = [];
let price;

function myfunc(value) {
    const selectedSeats = document.querySelectorAll('.seat.selected-seat');
    const selectedSeatsCount = selectedSeats.length;
    let temp = value.attributes.for.value;
    let seatno = temp.split("#");
    let position = seat_arr.indexOf(seatno[0]);
    let price_position = price_arr.indexOf(seatno[1]);

    if (selectedSeatsCount >= 0) {
        btnFunction();
    }

    if (price_position == -1) {
        // price_arr.length = 0;
        price_arr.push(seatno[1]);
        
        if (price_arr.length == 1) {
            price = price_arr;
            getpriceandticket(price);
            console.log(price_arr);
            // console.log(price_arr.length);
        }
        if (price_arr.length == 2) {
            price_arr = [];
            price_arr.push(seatno[1]);
            price = price_arr;
            getpriceandticket(price);
            // console.log(price_arr.length);
            // updateSelectedCount(price);
            // console.log(price_arr.length);
        }
    }

    // if (price_position == 1) {
    //     price_arr.length = 0;
    //     price = price_arr;
    //     getpriceandticket(price);
    //     console.log(price_arr);
    // }

    let final_ticketno;
    // if (selectedSeatsCount >= 6) {
        
    //     if(container.classList.contains('selected-seat')) {
    //         seat_arr.splice(seat_arr.length - 1, 1);
    //         final_ticketno = seat_arr;
    //         console.log('seat length ' + seat_arr.length)
    //         console.log('last element removed');
    //         document.getElementById("seatno").innerHTML = final_ticketno;
    //     }
    //     return;
    // }

    // else {
        if (position == -1) {
            if (selectedSeatsCount == 6){
                return;
            }
            seat_arr.push(seatno[0]);
            // count_arr.push(count);
            final_ticketno = seat_arr.join(",");
            document.getElementById("seatno").innerHTML = final_ticketno;
        }
        else {
            seat_arr.splice(position, 1);
            // count_arr.splice(0,1);
            final_ticketno = seat_arr;
            document.getElementById("seatno").innerHTML = final_ticketno;
        }
    // }

}

function getpriceandticket(price) {
    const container = document.querySelector('.select-seat');
    let seatcount;

    // console.log(price);
    var ticketPrice = +price;
    // ticketPrice.addEventListener('change', (e) => {
    //     ticketPrice = e.target.value
    //     updateSelectedCount()
    // })

    // console.log(ticketPrice)
    container.addEventListener('click', function (e) {
        // console.log(e.target)
        if (seatcount >= 6 && !e.target.classList.contains('selected-seat')) {
            alert("You can only book 6 ticket's at a time!");
            return seatcount;
        }
        else {
            if (
                e.target.classList.contains('seat') &&
                !e.target.classList.contains('occupied')
            ) {
                // console.log(e.target)
                e.target.classList.toggle('selected-seat')
                // button.disabled = false
                seatcount = updateSelectedCount(ticketPrice);
            }
        }
    })
}

function updateSelectedCount(ticketPrice) {
    const selectedSeats = document.querySelectorAll('.seat.selected-seat')
    // console.log(selectedSeats)
    const selectedSeatsCount = selectedSeats.length;

    if (selectedSeatsCount >= 7) {
        return;
    }
    else {
        // console.log(selectedSeatsCount)
        const count = document.getElementById('seatno');
        const seat = document.getElementById('seatno');
        const total = document.getElementById('total');
        count.innerText = seat.innerText
        // count.innerText = selectedSeatsCount

        total.innerText = `₹${selectedSeatsCount * ticketPrice}`;
    }
    return selectedSeatsCount;
}

function btnFunction() {
    const selectedSeats = document.querySelectorAll('.seat.selected-seat')
    const selectedSeatsCount = selectedSeats.length;
    var boarding = document.getElementById("boarding").value;
    var dropping = document.getElementById("dropping").value;
    var btn = document.querySelector('.submit-btn');
    if (selectedSeatsCount >= 0 && boarding != "Select Boarding Point" && dropping != "Select Dropping Point") {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}

function checkseat() {
    const selectedSeats = document.querySelectorAll('.seat.selected-seat')
    const selectedSeatsCount = selectedSeats.length;
    if (selectedSeatsCount >= 1) {
        // window.open("https://www.google.com");
    }
    else {
        alert("Please select a seat");
    }
}

function changeClass() {
    var x = document.getElementById("seat-select");
    var y = document.getElementById("bus-seat-btn");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerText = "Hide Seat";
    } else {
        x.style.display = "none";
        y.innerText = "Select Seat";
    }
} 
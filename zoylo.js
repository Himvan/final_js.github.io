var slots = {
    "slotInterval": 20,
    "morning": [{
        "startTime": "08:00",
        "endTime": "10:00"
    }],
    "afternoon": [{
        "startTime": "10:00",
        "endTime": "15:00"
    }],
    "evening": [{
        "startTime": "15:00",
        "endTime": "18:00"
    }],
    "night": [{
        "startTime": "18:00",
        "endTime": "22:00"
    }]
}

function morning() {
    let start_time = slots.morning[0].startTime.split(':').map(function (item) {
        return parseInt(item, 10);
    });
    let end_time = slots.morning[0].endTime.split(':').map(function (item) {
        return parseInt(item, 10);
    });
    let totalminute = (end_time[0] - start_time[0]) * 60 + (end_time[1] - start_time[1]);
    let timeslots = Math.floor(totalminute / parseInt(slots.slotInterval));
    let minutesum = start_time[1];
    let slot_interval = slots.slotInterval;
    let hour = start_time[0];
    let array = [];
    for (let i = 0; i < timeslots; i++) {
        if (minutesum < 60) {
            minutesum += slot_interval;
            array.push([hour, minutesum]);
        } else {
            minutesum = slot_interval;
            hour++;
            array.push([hour, minutesum]);
        }
    }
    console.log(array);
    return array;
}

function afternoon() {
    let start_time = slots.afternoon[0].startTime.split(':').map(function (item) {
        return parseInt(item, 10);
    });
    let end_time = slots.afternoon[0].endTime.split(':').map(function (item) {
        return parseInt(item, 10);
    });
    let totalminute = (end_time[0] - start_time[0]) * 60 + (end_time[1] - start_time[1]);
    let timeslots = Math.floor(totalminute / parseInt(slots.slotInterval));
    let minutesum = start_time[1];
    let slot_interval = slots.slotInterval;
    let hour = start_time[0];
    let array = [];
    for (let i = 0; i < timeslots; i++) {
        if (minutesum < 60) {
            minutesum += slot_interval;
            array.push([hour, minutesum]);
        } else {
            minutesum = slot_interval;
            hour++;
            array.push([hour, minutesum]);
        }
    }
    console.log(array);
    return array;
}

function evening() {
    let start_time = slots.evening[0].startTime.split(':').map(function (item) {
        return parseInt(item, 10);
    });
    let end_time = slots.evening[0].endTime.split(':').map(function (item) {
        return parseInt(item, 10);
    });
    let totalminute = (end_time[0] - start_time[0]) * 60 + (end_time[1] - start_time[1]);
    let timeslots = Math.floor(totalminute / parseInt(slots.slotInterval));
    let minutesum = start_time[1];
    let slot_interval = slots.slotInterval;
    let hour = start_time[0];
    let array = [];
    for (let i = 0; i < timeslots; i++) {
        if (minutesum < 60) {
            minutesum += slot_interval;
            array.push([hour, minutesum]);
        } else {
            minutesum = slot_interval;
            hour++;
            array.push([hour, minutesum]);
        }
    }
    console.log(array);
    return array;
}

function night() {
    let start_time = slots.night[0].startTime.split(':').map(function (item) {
        return parseInt(item, 10);
    });
    let end_time = slots.night[0].endTime.split(':').map(function (item) {
        return parseInt(item, 10);
    });
    let totalminute = (end_time[0] - start_time[0]) * 60 + (end_time[1] - start_time[1]);
    let timeslots = Math.floor(totalminute / parseInt(slots.slotInterval));
    let minutesum = start_time[1];
    let slot_interval = slots.slotInterval;
    let hour = start_time[0];
    let array = [];
    for (let i = 0; i < timeslots; i++) {
        if (minutesum < 60) {
            minutesum += slot_interval;
            array.push([hour, minutesum]);
        } else {
            minutesum = slot_interval;
            hour++;
            array.push([hour, minutesum]);
        }
    }
    console.log(array);
    return array;
}
morning();
afternoon();
evening();
night();


function create_button(input_time, b_colour) {
    var div1 = document.getElementById('button_div')
    var element = document.createElement("input");
    element.type = 'button';
    element.value = input_time;
    element.colour = b_colour;
    element.className = "slots_button";
    element.onclick = function () {
        alert("you have boooked appointment at-" + input_time);
    };
    div1.appendChild(element);
}

function morning_button() {
    let colour = '#B22222';
    const parent = document.getElementById("button_div");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    var arr = morning();
    for (let i = 0; i < arr.length; i++) {
        create_button(arr[i][0] + ":" + arr[i][1], colour);
    }

}

function evening_button() {
    const parent = document.getElementById("button_div");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    var arr = evening();
    for (let i = 0; i < arr.length; i++) {
        create_button(arr[i][0] + ":" + arr[i][1]);
    }

}

function night_button() {
    const parent = document.getElementById("button_div");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    var arr = night();
    for (let i = 0; i < arr.length; i++) {
        create_button(arr[i][0] + ":" + arr[i][1]);
    }

}

function afternoon_button() {
    const parent = document.getElementById("button_div");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    var arr = afternoon();
    for (let i = 0; i < arr.length; i++) {
        create_button(arr[i][0] + ":" + arr[i][1]);
    }

}

function display_slot_selector() {
    var maindiv = document.getElementsByClassName('slotselector');
  
        maindiv[0].style.display = "block";
    
}

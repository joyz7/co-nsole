let situation
const roles = document.querySelector('.role');
const helpline = document.querySelector('#helpline');
const hr = document.querySelector('#hr');
const leadership = document.querySelector('#leadership');
const friend = document.querySelector('#friend');
const color = ['#FFFFFF', '#dddedf']
let helplineStatus = "false";
let hrStatus = "false";
let leadershipStatus = "false";
let friendStatus = "false";

/*
roles.forEach(role => {
    roles.addEventListener('click', function() {
        document.querySelector('.role').style.background = color[0];
    });
});

function colorButton() {
    if (buttonPressed == "false") {
        document.querySelector('.role').style.background = color[0];

    } else if (buttonPressed == "true") {
        document.querySelector('.role').style.background = color[1];
    }
}
*/

pressButton(type) {
    if (type = "helpline") {
        helplineStatus = true;
        hrStatus = "false";
        leadershipStatus = "false";
        friendStatus = "false";
    } else if (type = "hr") {
        helplineStatus = false;
        hrStatus = "true";
        leadershipStatus = "false";
        friendStatus = "false";
    } else if (type = "leadership") {
        helplineStatus = false;
        hrStatus = "false";
        leadershipStatus = "true";
        friendStatus = "false";
    } else if (type = "friend") {
        helplineStatus = false;
        hrStatus = "false";
        leadershipStatus = "false";
        friendStatus = "true";
    }
}

main();

function main() {

    helpline.addEventListener('click', function() {
        document.querySelector('#helpline').style.background = color[1];
        pressButton("helpline");
    });

    hr.addEventListener('click', function() {
        document.querySelector('#hr').style.background = color[1];
        pressButton("hr");
    });
    
    leadership.addEventListener('click', function() {
        document.querySelector('#leadership').style.background = color[1];
        pressButton("hr");
    });

    friend.addEventListener('click', function() {
        document.querySelector('#friend').style.background = color[1];
        pressButton("hr");
    });

    
}


//const roles = document.querySelector('.role');
const helpline = document.getElementById('helpline');
const hr = document.getElementById('hr');
const leadership = document.getElementById('leadership');
const friend = document.getElementById('friend');
const color = ['#FFFFFF', '#616161']
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

function pressButton(type) {
    if (type == "helpline") {
        helpline.style.backgroundColor = color[1];
        hr.style.backgroundColor = color[0];
        leadership.style.backgroundColor = color[0];
        friend.style.backgroundColor = color[0];
        
        helplineStatus = "true";
        hrStatus = "false";
        leadershipStatus = "false";
        friendStatus = "false";
        console.log("helpline");
    } 
    
    if (type == "hr") {
        helpline.style.backgroundColor = color[0];
        hr.style.backgroundColor = color[1];
        leadership.style.backgroundColor = color[0];
        friend.style.backgroundColor = color[0];

        helplineStatus = "false";
        hrStatus = "true";
        leadershipStatus = "false";
        friendStatus = "false";
        console.log("hr");
    } 
    
    if (type == "leadership") {
        helpline.style.backgroundColor = color[0];
        hr.style.backgroundColor = color[0];
        leadership.style.backgroundColor = color[1];
        friend.style.backgroundColor = color[0];
        
        helplineStatus = "false";
        hrStatus = "false";
        leadershipStatus = "true";
        friendStatus = "false";
        console.log("leadership");
    } 
    
    if (type == "friend") {
        helpline.style.backgroundColor = color[0];
        hr.style.backgroundColor = color[0];
        leadership.style.backgroundColor = color[0];
        friend.style.backgroundColor = color[1];
        
        helplineStatus = "false";
        hrStatus = "false";
        leadershipStatus = "false";
        friendStatus = "true";
        console.log("friend");
    }
}

main();

function main() {

    helpline.addEventListener('click', function() {
        pressButton("helpline");
    });

    hr.addEventListener('click', function() {
        pressButton("hr");
    });
    
    leadership.addEventListener('click', function() {
        pressButton("leadership");
    });

    friend.addEventListener('click', function() {
        pressButton("friend");
    });
    
}

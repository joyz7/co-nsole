const sendBtn = document.getElementById("send-message-btn");
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hi there. I'm stressed because of school and I am failing my courses. What can I do?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        getResponse();
    }

    if (userText == "There are a few things you can do to try and improve your situation. First, try to talk to your professors and see if you can work out a plan to get back on track. Second, try to find a tutor or study group to help you with the material. Finally, try to reduce your stress levels in general by exercising, getting enough sleep, and finding time to relax.") {
        document.querySelector('.background-image').style.background="url('4.png')";
    } else if (userText == "If you're still struggling after talking to counselors, it might be time to talk to a therapist. A therapist can help you work through your issues and develop coping skills.") {
        document.querySelector('.background-image').style.background="url('3.png')";
    } else if (userText == "It may be time to try something else. Maybe you could try talking to a different therapist, or maybe you could try a different type of therapy.") {
        document.querySelector('.background-image').style.background="url('2.png')";
    } else if (userText == "Stop worrying, you're thinking too far in advance.") {
        document.querySelector('.background-image').style.background="url('1.png')";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});


sendBtn.addEventListener('click', function() {
    getResponse();
});

/*async function sentimentScoreIvan(answer) {
    const response = await fetch('https://api.cohere.ai/classify', {
        method: 'POST',
        headers: {
            'Authorization': 'BEARER AN6OcULtOuadQRbhhJvj9EhiZCPZq3Uwp1gSSCc5',
            'Content-Type': 'application/json'
        },
        // body: '{\n    "model": "large",\n    "inputs": [""],\n    "examples": [{"text": "", "label": ""}, {"text": "", "label": ""}]\n  }',
        body: JSON.stringify({
            'model': 'large',
            'inputs': answer,
            'examples': [{"text": "There is no harm in talking to someone you trust about what is going on with you. If you feel like you need to speak to someone, it might be a good idea.", "label": "Fair"}, {"text": "If you\'re feeling like you want to hurt yourself, it\'s important to get professional help. You can call a crisis line or go to a crisis center to talk to someone about what\'s going on.", "label": "Good"}, {"text": "When you\'re feeling overwhelmed, it\'s important to take some time for yourself. This can be anything from taking a few deep breaths to reading a book to taking a long bath. Whatever you do, make sure it\'s something that makes you feel good and helps you to relax.", "label": "Good"}, {"text": "If you\'re feeling like you need to talk to someone who can help you develop a plan to get better, there are a few things you can do. First, you can try reaching out to a therapist or counselor. Second, you can try attending a support group or finding a mentor. Finally, you can try reading books or articles on the subject of mental health.", "label": "Good"}, {"text": "One thing that might help is identifying what is causing you stress and trying to eliminate those triggers.", "label": "Fair"}, {"text": "I\'m sorry to hear, but I can\'t help you.", "label": "Bad"}, {"text": "That\'s shitty, there\'s nothing you can do about it.", "label": "Bad"}, {"text": "Just get over it and move on.", "label": "Bad"}, {"text": "This website offers a variety of support services that may be able to help you get back on track. Visit it for more information.", "label": "Meh"}, {"text": "Don\'t worry, it\'ll be fine.", "label": "Meh"}, {"text": "Take a deep breath, relax and let it go.", "label": "Meh"}, {"text": "There are many things you can do to help ease your social anxiety, such as building positive social skills and assertiveness.", "label": "Fair"}] 
        })
    });
    console.log(response);
}*/

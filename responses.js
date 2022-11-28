function getBotResponse(input) {
    if (input == "There are a few things you can do to try and improve your situation. First, try to talk to your professors and see if you can work out a plan to get back on track. Second, try to find a tutor or study group to help you with the material. Finally, try to reduce your stress levels in general by exercising, getting enough sleep, and finding time to relax.") {
        return "I've talked to counselors already, but I am still failing and I'm stressed about school. What can I do?";
    } else if (input == "If you're still struggling after talking to counselors, it might be time to talk to a therapist. A therapist can help you work through your issues and develop coping skills.") {
        return "What happens if talking to a therapist doesn't work?";
    } else if (input == "It may be time to try something else. Maybe you could try talking to a different therapist, or maybe you could try a different type of therapy.") {
        return "How would I know when to do that?";
    } else {
        return "I didn't quite catch that.";
    }
}

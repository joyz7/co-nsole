async function sentimentChange(role, question) {
    var answer = Transcribed.text;
    var sentiment = sentimentScore(role, question, answer);
    if (sentiment == Good) {
        console.log("test");
        //change background
        //can output one line of feedback too
    } else if (sentiment == Fair) {

    } else if (sentiment == Meh) {

    } else {

    }
}

async function sentimentScore(role, question, answer) {
    const cohere = require('cohere-ai'); 
    let prompt = `
    Question: Hi there. I'm stressed because of school and I am failing my courses. What can I do?
    Response: There are a few things you can do to try and improve your situation. First, try to talk to your professors and see if you can work out a plan to get back on track. Second, try to find a tutor or study group to help you with the material. Finally, try to reduce your stress levels in general by exercising, getting enough sleep, and finding time to relax.
    
    Question: I've talked to counselors already, but I am still failing and I'm stressed about school. What can I do?
    Response: If you're still struggling after talking to counselors, it might be time to talk to a therapist. A therapist can help you work through your issues and develop coping skills.
    
    Question: What happens if talking to a therapist doesn't work?
    Response: It may be time to try something else. Maybe you could try talking to a different therapist, or maybe you could try a different type of therapy.
    
    Question: How would I know when to do that?
    Response: Stop worrying, you're thinking too far in advance.

    Question: "${question}
    Response: "${answer}
    `

async function sentimentScore(role, question, answer) {
  const cohere = require('cohere-ai'); 
  cohere.init('{AN6OcULtOuadQRbhhJvj9EhiZCPZq3Uwp1gSSCc5}'); 
  (async () => { 
    const response = await cohere.classify({ 
      model: 'large', 
      inputs: ["If you're feeling down lately, here are some things you can do to help boost your mood: - Get out of bed and start your day- Eat a nutritious breakfast- Get some exercise- Spend time with friends or loved ones- Do something you enjoy- Get enough sleep", "If you\'re feeling like you want to hurt yourself, it\'s important to get professional help. You can call a crisis line or go to a crisis center to talk to someone about what\'s going on.", "Some things that might help include: -Identifying what is causing you stress and trying to eliminate those triggers-Establishing a support network of family and friends who can offer emotional and practical support-Making time for yourself each day to relax and rejuvenate-Seeking professional help if your stress is impacting your quality of life or causing you anxiety or depression-Avoid using alcohol, drugs, or other unhealthy coping mechanisms to deal with your stress", "If you\'re feeling like you need to talk to someone who can understand what you\'re going through, consider reaching out to a therapist or counselor. These professionals can offer support and guidance as you navigate your way through this difficult time.", "There are many ways to find a therapist or counselor in your area. You can check online directories, such as Psychology Today or GoodTherapy. You can also ask your doctor for a referral. Finally, you can contact your local mental health association or psychiatric society for names of therapists or counselors in your area.", "If you\'re feeling like you need to talk to someone who can offer you some hope, there are a few things you can do. First, you can try to talk to a friend or family member who may be able to offer some support. You can also try to find a therapist or counselor who can help you work through your feelings. Finally, you can try to find a support group for people who are dealing with similar issues.", "Shut up.", "Everything will be okay, don\'t give up!"], 
      examples: [{"text": "There is no harm in talking to someone you trust about what is going on with you. If you feel like you need to speak to someone, it might be a good idea.", "label": "Fair"}, {"text": "If you\'re feeling like you want to hurt yourself, it\'s important to get professional help. You can call a crisis line or go to a crisis center to talk to someone about what\'s going on.", "label": "Good"}, {"text": "When you\'re feeling overwhelmed, it\'s important to take some time for yourself. This can be anything from taking a few deep breaths to reading a book to taking a long bath. Whatever you do, make sure it\'s something that makes you feel good and helps you to relax.", "label": "Good"}, {"text": "If you\'re feeling like you need to talk to someone who can help you develop a plan to get better, there are a few things you can do. First, you can try reaching out to a therapist or counselor. Second, you can try attending a support group or finding a mentor. Finally, you can try reading books or articles on the subject of mental health.", "label": "Good"}, {"text": "One thing that might help is identifying what is causing you stress and trying to eliminate those triggers.", "label": "Fair"}, {"text": "I\'m sorry to hear, but I can\'t help you.", "label": "Bad"}, {"text": "That\'s shitty, there\'s nothing you can do about it.", "label": "Bad"}, {"text": "Just get over it and move on.", "label": "Bad"}, {"text": "This website offers a variety of support services that may be able to help you get back on track. Visit it for more information.", "label": "Meh"}, {"text": "Don\'t worry, it\'ll be fine.", "label": "Meh"}, {"text": "Take a deep breath, relax and let it go.", "label": "Meh"}, {"text": "There are many things you can do to help ease your social anxiety, such as building positive social skills and assertiveness.", "label": "Fair"}] 
    }); 
    console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`); 
  })(); 
  return response;
}

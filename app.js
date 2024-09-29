// const btn = document.querySelector('.talk')
// const content = document.querySelector('.content')


// function speak(text){
//     const text_speak = new SpeechSynthesisUtterance(text);

//     text_speak.rate = 1;
//     text_speak.volume = 1;
//     text_speak.pitch = 1;

//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe(){
//     var day = new Date();
//     var hour = day.getHours();

//     if(hour>=0 && hour<12){
//         speak("Good Morning Sir...")
//     }

//     else if(hour>12 && hour<17){
//         speak("Good Afternoon Sir...")
//     }

//     else{
//         speak("Good Evenining Sir...")
//     }

// }

// window.addEventListener('load', ()=>{
//     speak("Initializing G ONE..");
//     wishMe();
// });

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition =  new SpeechRecognition();

// recognition.onresult = (event)=>{
//     const currentIndex = event.resultIndex;
//     const transcript = event.results[currentIndex][0].transcript;
//     content.textContent = transcript;
//     takeCommand(transcript.toLowerCase());

// }

// btn.addEventListener('click', ()=>{
//     content.textContent = "Listening...."
//     recognition.start();
// })

// function takeCommand(message){
//     if(message.includes('hey') || message.includes('hello')){
//         speak("Hello Sir, How May I Help You?");
//     }
//     else if(message.includes("open google")){
//         window.open("https://google.com", "_blank");
//         speak("Opening Google...")
//     }
//     else if(message.includes("open youtube")){
//         window.open("https://youtube.com", "_blank");
//         speak("Opening Youtube...")
//     }
//     else if(message.includes("open facebook")){
//         window.open("https://facebook.com", "_blank");
//         speak("Opening Facebook...")
//     }

//     else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         const finalText = "This is what i found on internet regarding " + message;
// 	    speak(finalText);
  
//     }

//     else if(message.includes('wikipedia')) {
//         window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
//         const finalText = "This is what i found on wikipedia regarding " + message;
//         speak(finalText);
//     }

//     else if(message.includes('time')) {
//         const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
//         const finalText = time;
//         speak(finalText);
//     }

//     else if(message.includes('date')) {
//         const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
//         const finalText = date;
//         speak(finalText);
//     }
//     else if (message.includes('day')) { 
//         // Get the current day of the week and date in Hindi locale
//         const today = new Date().toLocaleDateString('hi-IN', { weekday: "long", month: "short", day: "numeric" });
        
//         // Speak the result
//         const finalText = today;
//         speak(finalText);
//     }    

//     else if(message.includes('calculator')) {
//         window.open('Calculator:///')
//         const finalText = "Opening Calculator";
//         speak(finalText);
//     }

//     else {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         const finalText = "I found some information for " + message + " on google";
//         speak(finalText);
//     }
// }

//Edited  code for the above function

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text, lang = 'en-US') {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.lang = 'UK English';
    
    text_speak.rate = 0.95;
    text_speak.volume = 1;
    text_speak.pitch = 1.2;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    const day = new Date();
    const hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Sir...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Sir...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing G-ONE..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening....";
    recognition.start();
});

function takeCommand(message) {
    let isHindi = message.includes("in hindi") || message.includes("हिंदी");

    // Set language based on request
    let lang = isHindi ? 'hi-IN' : 'en-US';

    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?", lang);
    }
    else if(message.includes("who are you")) 
    {
        speak("I am G ONE a virtual assistant , created by MR Anuj Sharma ");
    }
    else if(message.includes("who created you")){
        speak("I was created by MR Anuj Sharma ");
    }
    else if(message.includes("open your favourite youtube channel")) 
    {
        window.open("https://www.youtube.com/@AnujSharma_1627", "_blank");
        speak("Opening it...", lang);
    }
    else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...", lang);
    } 
    else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...", lang);
    } 
    else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...", lang);
    } 
    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText, lang);
    } 
    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText, lang);
    } 
    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time, lang);
    } 
    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        speak(date, lang);
    } 
    else if (message.includes('day')) {
        const today = new Date().toLocaleDateString('hi-IN', { weekday: "long", month: "short", day: "numeric" });
        speak(today, "hi-IN");
    } 
    else if (message.includes('calculator')) {
        window.open('Calculator:///');
        speak("Opening Calculator", lang);
    } 
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "this is what i found on internet regarding " + message + " on Google";
        speak(finalText, lang);
        window.open(`https://www.google.com/search?q=${message.replace("zara","")}`,"_blank")
    }
}

gsap.from("h1",{
    y:30,
    opacity:0,
    duration:2,
    delay:1,
    ease:"elastic.out(1.5,0.1)"
  })
  
  for (let i = 0; i < 60; i++) {
    let particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.top = `${Math.random() * window.innerHeight}px`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.animationDelay = `${Math.random() * 4}s`;
    document.body.appendChild(particle);
  }

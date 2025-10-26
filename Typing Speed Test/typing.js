let sentenceEl = document.getElementById('sentence')
let typingArea = document.getElementById('typing-area')
let timerEl = document.getElementById('timer')
let resultEl = document.getElementById('result')
let playEl = document.getElementById('play')
let resetBtn = document.getElementById('reset')


const paragraphs = [
    "Technology has become an essential part of our daily lives. From the moment we wake up to the time we go to sleep, we interact with devices that make our routines easier and more efficient. The internet allows us to connect with people around the world, access vast amounts of information, and automate everyday tasks with just a few taps.",

    "Reading books is one of the most effective ways to expand our imagination and improve our vocabulary. It allows us to explore new worlds, learn from different perspectives, and develop empathy for people whose experiences differ from our own. In a world dominated by digital distractions, taking time to read can be a refreshing and rewarding habit.",

    "Nature provides everything we need to survive — clean air, water, food, and raw materials. Yet, human activities have caused significant damage to the environment. Climate change, deforestation, and pollution are serious issues that require global cooperation. Every small action, from recycling to conserving energy, contributes to protecting our planet.",

    "Good communication is the foundation of strong relationships, both personal and professional. Being able to express yourself clearly and listen actively can prevent misunderstandings and build trust. In the workplace, effective communication helps teams collaborate better and achieve shared goals more efficiently.",

    "Time management is one of the most important skills for personal and professional success. Learning how to prioritize tasks, set realistic goals, and avoid procrastination allows you to make the most of your day. Even small improvements in managing your time can lead to greater productivity and less stress."
];

function renderTestParagraph(paragraph) {

    sentenceEl.innerHTML = "";

    paragraph.split("").forEach(char => {
        const charSpan = document.createElement("span");
        charSpan.innerText = char;
        charSpan.dataset.value = char;

        if (char === " ") {
            charSpan.innerHTML = "\u00A0"; // Unicode for &nbsp;
        }

        sentenceEl.appendChild(charSpan);
    })
}

function getParagraph(){
    return paragraphs[Math.floor(Math.random() * paragraphs.length)]
}

const paragraph = getParagraph()
renderTestParagraph(paragraph)
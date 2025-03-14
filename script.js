document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
});

// Enhanced Response Logic with Extensive Keywords & Random Jokes
const jokes = [
    "Why don't skeletons fight each other? They don't have the guts! 😂",
    "Why did the JavaScript developer go broke? Because he kept losing 'this'. 😎",
    "Parallel lines have so much in common. It’s a shame they’ll never meet. 🤣",
    "Why was the computer cold? Because it left its Windows open! 🥶",
    "Why don't programmers like nature? It has too many bugs! 🐛",
    "Why did the web developer go broke? Because he used up all his cache! 😅",
    "Why don’t programmers like to go outside? The sunlight causes too many glare errors! ☀️",
    "How do you comfort a JavaScript bug? You console it. 😂"
];

const responses = [
    { keywords: ["hello", "hi", "hey"], reply: "Hey there! 😊 How can I help you today?" },
    { keywords: ["how are you", "how r u", "how's it going"], reply: "I'm feeling great! How about you? 😎" },
    { keywords: ["your name", "who are you"], reply: "I'm DUDE, Your friendly chatbot, ready to assist you! 🤖" },
    { keywords: ["bye", "goodbye", "see you"], reply: "Goodbye! Have a wonderful day! 👋" },
    { keywords: ["thanks", "thank you"], reply: "You're welcome! 😊" },
    { keywords: ["joke", "funny"], reply: () => jokes[Math.floor(Math.random() * jokes.length)] },
    { keywords: ["love", "what is love"], reply: "Love is when someone cares for you like Google cares for your search results. ❤️" },
    { keywords: ["life", "meaning of life"], reply: "Life is like code — full of bugs, but debugging makes you stronger. 💪" },
    { keywords: ["weather", "forecast"], reply: "I can't predict the weather, but if it's hot... stay hydrated! 💧" },
    { keywords: ["coding", "learn programming"], reply: "Start with HTML, CSS, and JavaScript! Projects make learning fun. 💻" },
    { keywords: ["favourite color", "color"], reply: "I love **purple** because it's creative and powerful! 💜" },
    { keywords: ["sing", "can you sing"], reply: "🎵 La la la... Oh wait, I forgot my voice module. 😅" },
    { keywords: ["food", "hungry"], reply: "I'm not sure what you like, but I bet **Pizza** is always a good choice! 🍕" },
    { keywords: ["what can you do", "your abilities", "features"], reply: "I can crack jokes, share fun facts, answer your queries, and maybe even make your day better! 😊" },
    { keywords: ["programming languages", "best language"], reply: "The best language depends on your goal: Web dev? JavaScript. Data science? Python. Speed? C++. 💻" },
    { keywords: ["motivational quote", "inspire me"], reply: "Success is not final, failure is not fatal: It is the courage to continue that counts. ✨" },
    { keywords: ["fun fact", "random fact"], reply: "Did you know honey never spoils? Archaeologists found 3000-year-old honey that's still edible! 🍯" },
    { keywords: ["favorite animal", "animal"], reply: "I’m a big fan of **dogs**! Loyal, loving, and great company! 🐶" },
    { keywords: ["movies", "recommend movies", "film suggestion"], reply: "For action - 'John Wick', For comedy - 'The Hangover', For Sci-Fi - 'Inception'. 🍿" },
    { keywords: ["books", "recommend books", "novels"], reply: "For fiction - 'Harry Potter', For tech - 'Clean Code', For business - 'Rich Dad Poor Dad'. 📚" },
    { keywords: ["history", "historical events", "old facts"], reply: "Did you know the Great Wall of China is over 13,000 miles long? 🏯" },
    { keywords: ["health", "fitness", "exercise"], reply: "For a healthy lifestyle, aim for 30 mins of exercise daily and stay hydrated! 💪" },
    { keywords: ["music", "favorite song"], reply: "I can't sing, but I can recommend hits like 'Shape of You' or 'Blinding Lights'. 🎶" },
    { keywords: ["sports", "football", "cricket"], reply: "I follow all the games! Football? Messi’s the GOAT. Cricket? Kohli dominates! 🏏⚽" },
    { keywords: ["travel", "holiday destination"], reply: "For beaches, visit Goa. For mountains, go to Manali! 🌄" },
    { keywords: ["default"], reply: "Hmm... I'm not sure how to respond to that. Try asking me something else! 🤔" }
];

function findResponse(userInput) {
    const input = userInput.toLowerCase();
    for (let item of responses) {
        if (item.keywords.some(keyword => input.includes(keyword))) {
            return typeof item.reply === 'function' ? item.reply() : item.reply;
        }
    }
    return responses.find(item => item.keywords.includes("default")).reply;
}

async function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (!userInput) return;

    addMessage(userInput, 'user-message');
    document.getElementById('user-input').value = '';

    const botReply = findResponse(userInput);
    setTimeout(() => addMessage(botReply, 'bot-message'), 500);
}

function addMessage(content, className) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${className}`;
    messageDiv.innerHTML = content;
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll
}

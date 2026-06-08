const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

/* ENTER KEY SUPPORT */

userInput.addEventListener("keypress", function(e){
if(e.key === "Enter"){
sendMessage();
}
});

/* SEND MESSAGE */

function sendMessage(){

const userText = userInput.value.trim();

if(userText === "") return;

/* USER MESSAGE */

addMessage(userText,"user");

let botReply = "Sorry, I don't understand that question.";

/* CHECK RESPONSE */

for(let item of chatbotResponses){

for(let key of item.keywords){

if(userText.toLowerCase().includes(key.toLowerCase())){

botReply = item.answer;

break;

}

}

}

/* BOT MESSAGE */

setTimeout(()=>{

addMessage(botReply,"bot");

},500);

userInput.value = "";

}

/* QUICK BUTTON */

function sendQuickMessage(text){

userInput.value = text;

sendMessage();

}

/* ADD MESSAGE */

function addMessage(text,type){

const message = document.createElement("div");

message.classList.add("message");

if(type === "user"){

message.classList.add("user-message");

}else{

message.classList.add("bot-message");

}

message.innerText = text;

chatBox.appendChild(message);

chatBox.scrollTop = chatBox.scrollHeight;

}
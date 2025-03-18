const natural = require('natural');
const { stdin, stdout } = process;

// Create a classifier using the Bayes algorithm
const classifier = new natural.BayesClassifier();

// Train the chatbot with common questions and responses
classifier.addDocument('hello', 'Hi there! How can I assist you today?');
classifier.addDocument('hi', 'Hello! How can I help you?');
classifier.addDocument('hey', 'Hey there! What can I do for you?');
classifier.addDocument('good morning', 'Good morning! Hope you have a great day!');
classifier.addDocument('good evening', 'Good evening! How can I assist you?');

classifier.addDocument('how are you', 'I am just a chatbot, but I am doing great! What about you?');
classifier.addDocument('what is your name', 'I am an AI chatbot created using natural language processing!');
classifier.addDocument('who made you', 'I was created by a developer using Node.js and the "natural" library.');
classifier.addDocument('what can you do', 'I can chat with you, answer basic questions, tell jokes, and provide information!');

classifier.addDocument('what is ai', 'AI stands for Artificial Intelligence, which enables machines to think and learn.');
classifier.addDocument('what is machine learning', 'Machine learning is a subset of AI that allows systems to learn from data.');
classifier.addDocument('what is deep learning', 'Deep learning is a subset of machine learning that uses neural networks to process data.');

classifier.addDocument('tell me a joke', 'Why don’t skeletons fight each other? They don’t have the guts!');
classifier.addDocument('another joke', 'Why did the math book look sad? Because it had too many problems!');
classifier.addDocument('one more joke', 'Why was the belt arrested? Because it was holding up a pair of pants!');

classifier.addDocument('what is the weather like', 'I am not connected to live data, but you can check a weather website!');
classifier.addDocument('is it raining', 'I cannot check real-time weather, but you can look outside to see!');
classifier.addDocument('how hot is it today', 'I do not have real-time weather data, but checking a weather app might help.');

classifier.addDocument('bye', 'Goodbye! Have a wonderful day!');
classifier.addDocument('see you later', 'See you later! Take care!');
classifier.addDocument('good night', 'Good night! Sleep well and sweet dreams!');

classifier.addDocument('what is node.js', 'Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.');
classifier.addDocument('what is javascript', 'JavaScript is a programming language used for building web applications.');
classifier.addDocument('what is npm', 'NPM (Node Package Manager) is used to install JavaScript libraries.');

classifier.addDocument('what is your purpose', 'I am here to assist you with information and make conversations fun!');

classifier.train();

// Function to get chatbot response
function getResponse(input) {
  return classifier.classify(input) || "I'm not sure how to respond to that.";
}

// Setup input/output for user interaction
stdout.write("Chatbot is ready! Type 'exit' to quit.\n\nYou: ");
stdin.setEncoding("utf-8");

// Listen for user input
stdin.on("data", (data) => {
  const userInput = data.trim().toLowerCase();

  if (userInput === "exit") {
    console.log("Chatbot: Goodbye!");
    process.exit();
  }

  console.log("Chatbot:", getResponse(userInput));
  stdout.write("\nYou: ");
});

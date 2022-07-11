const messages = [
    "Jonathan",
    "Aby",
    "Julio",
    "Mata",
    "Alets",
    "Migue",
    "Jumex"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
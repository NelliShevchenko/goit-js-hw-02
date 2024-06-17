function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message; // return the original message if it's within or equal to maxLength
    } else {
        return message.slice(0, maxLength) + '...'; // truncate and add ellipsis
    }
}

// Test cases
console.log(formatMessage("Hello, world!", 10)); // Output: "Hello, wo..."
console.log(formatMessage("Hello, world!", 15)); // Output: "Hello, world!"
console.log(formatMessage("This is a long message.", 12)); // Output: "This is a l..."
console.log(formatMessage("Short", 10)); // Output: "Short"

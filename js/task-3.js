function checkForSpam(message) {
    // Convert the message to lowercase to perform case-insensitive check
    const lowerCaseMessage = message.toLowerCase();

    // Check if the message contains 'spam' or 'sale'
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(checkForSpam("Latest spam technology")); // Output: true
console.log(checkForSpam("Hello, how are you?")); // Output: false
console.log(checkForSpam("Buy this now, it's on sale!")); // Output: true
console.log(checkForSpam("No spam, please!")); // Output: true
console.log(checkForSpam("This message is clean")); // Output: false

//  Personalized Greeting
let userName = prompt("Please enter your first name:");

// Check if the input is empty and name "Guest" if it is empty
if (!userName) {
    userName = "Guest";
}

//  Welcome Message
alert(`Welcome to EatNow cafe, ${userName}! We hope you enjoy your experience at eatnow cafe.`);

//  Display Menu Items in Console
const menuItems = [
    "Grilled Chicken",
    "Chapati and beans",
    "rice chicken",
    "ugali sukuma",
    "pilau"
];

// Using forEach to display food items in a numbered list format
console.log("Menu Items:");
menuItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

//  Adding a New Dish
let newDish = prompt("Please suggest a new dish:");

if (newDish) {
    // If a valid dish is entered, add it to the array
    menuItems.push(newDish);
    console.log(`Thank you for your suggestion, ${userName}! The updated menu is:`);
    
    // Display the updated menu
    menuItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
} else {
    // If the input is empty, display an appropriate message
    console.log("No dish was added.");
}

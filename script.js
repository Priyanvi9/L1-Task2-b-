// Quotes for the day
const quotes = [
    '"The best time to start was yesterday. The second best time is now!"',
    '"Rise and shine! Every morning is a fresh start."',
    '"Afternoon: The perfect time to nourish yourself with healthy food."',
    '"Evening is the time to reflect, relax, and enjoy your meal."',
    '"Good night! Rest well and wake up to new opportunities."'
];

// Function to randomly select animation for page load
function setAnimationForContainer() {
    const container = document.getElementById('container');
    const animations = [
        'slideInRight',    // From right
        'slideInLeft',     // From left
        'slideInTop',      // From top
        'slideInBottom'    // From bottom
    ];
    const randomIndex = Math.floor(Math.random() * animations.length);
    container.style.animation = `${animations[randomIndex]} 1.5s ease-out forwards`;
}

// Function to ask user for their name and gender
function askUserDetails() {
    let userName = prompt("What is your name?");
    if (!userName) {
        userName = "Guest";
    }

    let gender = prompt("Are you a boy or a girl?").toLowerCase();
    if (gender === "boy") {
        greetUser(userName, "handsome");
    } else if (gender === "girl") {
        greetUser(userName, "cutie");
    } else {
        alert("Invalid input. Please specify 'boy' or 'girl'.");
        return;
    }
}

// Function to greet user based on time of day and their name/title
function greetUser(userName, title) {
    const currentTime = new Date().getHours();
    let greetingMessage;

    if (currentTime >= 5 && currentTime < 12) {
        greetingMessage = `Good Morning, ${userName}! Have a great day, ${title}! 🌞`;
    } else if (currentTime >= 12 && currentTime < 17) {
        greetingMessage = `Good Afternoon, ${userName}! Have a nice day, ${title}! 🌤`;
    } else if (currentTime >= 17 && currentTime < 21) {
        greetingMessage = `Good Evening, ${userName}! You're looking great, ${title}! 🌇`;
    } else {
        greetingMessage = `Good Night, ${userName}! Sleep well, ${title}! 🌌`;
    }

    alert(greetingMessage);
    setBackgroundAndGreeting();
}

// Update background and greeting based on time of day
function setBackgroundAndGreeting() {
    const currentTime = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    const foodSuggestionElement = document.getElementById('food-suggestion');
    const quoteElement = document.getElementById('quote');

    let greeting, food;

    if (currentTime >= 5 && currentTime < 12) {
        greeting = "Good Morning! 🌞";
        food = "How about some vegetarian pancakes or a smoothie bowl?";
        quoteElement.textContent = quotes[0];
    } else if (currentTime >= 12 && currentTime < 17) {
        greeting = "Good Afternoon! 🌤";
        food = "How about a light vegetarian sandwich or a fresh veggie salad?";
        quoteElement.textContent = quotes[1];
    } else if (currentTime >= 17 && currentTime < 21) {
        greeting = "Good Evening! 🌇";
        food = "How about a healthy vegetarian pasta or a hearty veggie stew?";
        quoteElement.textContent = quotes[2];
    } else {
        greeting = "Good Night! 🌌";
        food = "Maybe a warm bowl of vegetarian soup or light fruit snacks?";
        quoteElement.textContent = quotes[3];
    }

    greetingElement.textContent = greeting;
    foodSuggestionElement.textContent = food;

    // Display the main container after background color is set
    document.getElementById('container').style.display = 'block';
}

// Call this function when the page loads
window.onload = function() {
    setAnimationForContainer();
    askUserDetails();
};

// Function to show the food selection page with multiple buttons
function showFoodSelectionPage() {
    document.getElementById('container').style.display = 'none'; // Hide the main container
    document.getElementById('foodSelectionPage').style.display = 'block'; // Show the food selection page

    // Add buttons for different vegetarian dishes
    const foodButtonsContainer = document.getElementById('foodButtonsContainer');
    const dishes = [
        { name: "Paneer Tikka", youtubeUrl: "https://www.youtube.com/results?search_query=paneer+tikka" },
        { name: "Chole Bhature", youtubeUrl: "https://www.youtube.com/results?search_query=chole+bhature" },
        { name: "Biryani", youtubeUrl: "https://www.youtube.com/results?search_query=vegetarian+biryani" },
        { name: "Aloo Gobi", youtubeUrl: "https://www.youtube.com/results?search_query=aloo+gobi" },
        { name: "Dosa", youtubeUrl: "https://www.youtube.com/results?search_query=dosa" },
        { name: "Samosa", youtubeUrl: "https://www.youtube.com/results?search_query=samosa" },
        { name: "Spring Rolls", youtubeUrl: "https://www.youtube.com/results?search_query=vegetarian+spring+rolls" },
        { name: "Fried Rice", youtubeUrl: "https://www.youtube.com/results?search_query=vegetarian+fried+rice" },
        { name: "Momo", youtubeUrl: "https://www.youtube.com/results?search_query=vegetarian+momo" },
        { name: "Mapo Tofu", youtubeUrl: "https://www.youtube.com/results?search_query=vegetarian+mapo+tofu" },
    ];

    foodButtonsContainer.innerHTML = ""; // Clear previous buttons

    dishes.forEach(dish => {
        const button = document.createElement('button');
        button.classList.add('food-button');
        button.innerHTML = `${dish.name}`;
        button.onclick = () => openDishInYouTube(dish.youtubeUrl);
        foodButtonsContainer.appendChild(button);
    });
}

// Function to open the YouTube search page for the selected dish
function openDishInYouTube(youtubeUrl) {
    window.open(youtubeUrl, "_blank"); // Open the YouTube page for the dish in a new tab
}

// Function to go back to the main page from the food selection page
document.getElementById('backBtn').addEventListener('click', () => {
    document.getElementById('foodSelectionPage').style.display = 'none';
    document.getElementById('container').style.display = 'block';
});

// Handle button click for food suggestions
document.getElementById('clickBtn').addEventListener('click', showFoodSelectionPage);

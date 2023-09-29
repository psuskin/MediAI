// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

window.onscroll = function() {
    var header = document.getElementById("myHeader");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("blue");
    } else {
        header.classList.remove("blue");
    }
};

// JavaScript to handle form submission
document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting
    // You can add code here to handle the form data and calculate percentages
    // For this example, we'll show the graph immediately

    // Get the percentages and bars
    const percentages = document.querySelectorAll(".bar-percentage");
    const bars = document.querySelectorAll(".bar-fill");

    // Set the initial width to 0 and then transition to the specified percentage width
    for (let i = 0; i < percentages.length; i++) {
        bars[i].style.width = '0';
        setTimeout(() => {
            bars[i].style.width = percentages[i].textContent.trim();
        }, 100);
    }

    document.getElementById("reviewForm").style.display = "none";
    document.getElementById("reviewGraph").style.display = "block";
});

// JavaScript to handle mute/unmute button
const backgroundMusic = document.getElementById("backgroundMusic");
const muteButton = document.getElementById("muteButton");
const muteIcon = document.getElementById("muteIcon");
const unmuteIcon = document.getElementById("unmuteIcon");

backgroundMusic.volume = 0.4;

muteButton.addEventListener("click", function () {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        unmuteIcon.style.display = "none"; // Hide mute icon
        muteIcon.style.display = "inline-block"; // Show unmute icon
    } else {
        backgroundMusic.pause();
        unmuteIcon.style.display = "inline-block"; // Show mute icon
        muteIcon.style.display = "none"; // Hide unmute icon
    }
});



// Click event handlers for rating bars
const ratingBars = document.querySelectorAll(".bar");
ratingBars.forEach((bar, index) => {
    bar.addEventListener("click", function () {
        const rating = 5 - index; // Map bar index to rating (e.g., 0 -> 5 stars)
        showReviewsForRating(rating);
    });
});

// Function to display reviews for a specific rating
function showReviewsForRating(rating) {
    // Show the review list container
    const reviewListContainer = document.getElementById("reviewListContainer");
    reviewListContainer.style.display = "block";
}

const loginButton = document.getElementById("loginButton");
const loginWindow = document.getElementById("loginWindow");

loginButton.addEventListener("click", function () {
    // Toggle the visibility of the login window
    if (loginWindow.style.display === "block") {
        loginWindow.style.display = "none";
    } else {
        loginWindow.style.display = "block";
    }
});
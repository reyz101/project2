// script.js
const countdownElement = document.getElementById('countdown');

// Set the auction end date and time
const auctionEndTime = new Date('January 5, 2025 20:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = auctionEndTime - now;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    countdownElement.textContent = 'Auction Ended!';
    clearInterval(timerInterval);
  }
}

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

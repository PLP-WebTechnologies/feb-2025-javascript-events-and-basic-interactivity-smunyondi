// Cache DOM elements
const clickBtn = document.getElementById('clickBtn');
const hoverBox = document.getElementById('hoverBox');
const keyInfo = document.getElementById('keyInfo');
const secretBox = document.getElementById('secretBox');
const colorChangeBtn = document.getElementById('colorChangeBtn');
const bgChanger = document.getElementById('bgChanger');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const galleryImage = document.getElementById('galleryImage');
const tabs = document.querySelectorAll('.tab');
const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');

// 1. Event Handling
clickBtn.addEventListener('click', () => {
  alert('Button was clicked!');
});

hoverBox.addEventListener('mouseenter', () => {
  hoverBox.style.backgroundColor = 'lightgreen';
  hoverBox.style.boxShadow = '0 0 15px 5px violet';
});

hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.backgroundColor = 'lightblue';
  hoverBox.style.boxShadow = 'none';
});

document.addEventListener('keydown', (e) => {
  keyInfo.textContent = `You pressed: ${e.key}`;
});

secretBox.addEventListener('dblclick', () => {
  secretBox.style.backgroundColor = 'gold';
  secretBox.textContent = 'Secret revealed!';
  createConfetti();
});

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.textContent = '🎉';
  confetti.style.position = 'fixed';
  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.top = '50%';
  confetti.style.fontSize = '2rem';
  confetti.style.animation = 'fall 2s ease-out forwards';
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 2000);
}

// 2. Interactive Elements
colorChangeBtn.addEventListener('click', () => {
  colorChangeBtn.style.backgroundColor =
    colorChangeBtn.style.backgroundColor === 'orange' ? 'purple' : 'orange';
});

// Background color changer
const bgColors = ['#fce4ec', '#e3f2fd', '#f3e5f5', '#e8f5e9', '#fff3e0'];
let bgIndex = 0;

bgChanger.addEventListener('click', () => {
  document.body.style.backgroundColor = bgColors[bgIndex];
  bgIndex = (bgIndex + 1) % bgColors.length;
});

// Title color animation
const title = document.querySelector('h1');
const titleColors = ['red', 'blue', 'green', 'purple', 'orange'];
let titleIndex = 0;

setInterval(() => {
  title.style.color = titleColors[titleIndex];
  titleIndex = (titleIndex + 1) % titleColors.length;
}, 1000);

// Image Gallery
const images = [
  'https://images.pexels.com/photos/31800087/pexels-photo-31800087/free-photo-of-stylish-woman-in-white-lace-blouse-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/10145442/pexels-photo-10145442.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/31095104/pexels-photo-31095104/free-photo-of-stylish-woman-in-yellow-dress-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
];

galleryImage.style.height = '500px';

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  galleryImage.src = images[currentIndex];
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  galleryImage.src = images[currentIndex];
});

// Tabs
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach((tc) => tc.classList.remove('active'));
    const tabId = tab.getAttribute('data-tab');
    document.getElementById(`tab${tabId}`).classList.add('active');
  });
});

// 3. Form Validation
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!validateEmail(email)) {
    feedback.textContent = 'Please enter a valid email.';
    feedback.style.color = 'red';
    return;
  }

  if (password.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
    feedback.style.color = 'red';
    return;
  }

  feedback.style.color = 'green';
  feedback.textContent = 'Form submitted successfully!';
});

function validateEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

// Real-time password feedback
passwordInput.addEventListener('input', (e) => {
  if (e.target.value.length < 8) {
    feedback.textContent = 'Password too short.';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Password looks good!';
    feedback.style.color = 'green';
  }
});

// A simple typing effect script
const typingTextElement = document.querySelector(".typing-text");
const jobTitles = [
  "Web Designer",
  "Graphic Designer",
  "UI/UX Designer",
  "Front-end Developer",
];
let jobTitleIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < jobTitles[jobTitleIndex].length) {
    typingTextElement.textContent += jobTitles[jobTitleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100); // Speed of typing
  } else {
    setTimeout(deleteText, 2000); // Wait 2 seconds before deleting
  }
}

function deleteText() {
  if (charIndex > 0) {
    typingTextElement.textContent = jobTitles[jobTitleIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(deleteText, 50); // Speed of deleting
  } else {
    jobTitleIndex++;
    if (jobTitleIndex >= jobTitles.length) {
      jobTitleIndex = 0;
    }
    setTimeout(typeText, 1000); // Wait 1 second before typing the next title
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
  if (typingTextElement) {
    setTimeout(typeText, 1000);
  }
});

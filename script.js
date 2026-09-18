const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
});
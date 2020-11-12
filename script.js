const toggleSwitch = document.querySelector('input[type="checkbox"]');
const burguerMenu = document.querySelector('header .tools-container img');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileOptions = document.querySelectorAll('.mobile-menu li');

// Switch theme dynamically
const switchTheme = (event) => {
    const { checked } = event.target;
    document.documentElement.setAttribute('data-theme', checked ? 'dark' : 'light');
    localStorage.setItem('theme', checked ? 'dark' : 'light');
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for thenme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    toggleSwitch.checked = currentTheme === 'dark';
}

burguerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle("hidden");
})

Array.from(mobileOptions).forEach((element) =>
    element.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    })
)
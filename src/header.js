import './style.css';

function renderBlackHeader() {
    const element = document.createElement('div');
    element.classList.add('black-header');

    const title = document.createElement('h1');
    title.textContent = "The Restaurant Company.";
    title.classList.add('title');

    const navItems = document.createElement('ul');
    const homeBtn = document.createElement('li');
    const aboutBtn = document.createElement('li');
    navItems.classList.add('tabs');
    homeBtn.classList.add('tab-link');
    aboutBtn.classList.add('tab-link');
    homeBtn.textContent = "Home";
    aboutBtn.textContent = "About";


    // Append Navigation to ul
    navItems.appendChild(homeBtn);
    navItems.appendChild(aboutBtn);



    // Append Title and Navigation to black bar element
    element.appendChild(title);
    element.appendChild(navItems);


    return element;
}


export default renderBlackHeader;

// TODO: add styling to src folder plus do the additional addons for webpack.config.js thats in odin tutorials
import renderHomePage from "./homepage";
import renderBlackHeader from "./header";
import renderFooter from "./footer";
import renderAboutPage from "./about";
import './style.css';

function component() {
    const element = document.createElement('div');
    element.id = "content";

    let homepage = renderHomePage();

    let about = renderAboutPage();
    about.classList.add('hidden');

    element.appendChild(homepage);
    element.appendChild(about);

    return element;
}



// Switch Tabs depending on whether about or home is pressed
function switchTab(e) {
    if (e.srcElement.innerText === 'Home') {
        let home = document.querySelector('.homepage');
        if (home.classList.contains('hidden')) {
            home.classList.remove('hidden');
        }
        let about = document.querySelector('.aboutpage');
        if (!about.classList.contains('hidden')) {
            about.classList.add('hidden');
        }
    } else if (e.srcElement.innerText === 'About') {
        let home = document.querySelector('.homepage');
        home.classList.add('hidden');

        let about = document.querySelector('.aboutpage');
        about.classList.remove('hidden');
    }
}

  
document.body.appendChild(renderBlackHeader());
document.body.appendChild(component());

const buttons = Array.from(document.getElementsByClassName('tab-link'));

buttons.forEach(btn => btn.addEventListener('click', switchTab));
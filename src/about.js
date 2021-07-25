function renderAboutPage() {
    const element = document.createElement('div');
    element.classList.add('aboutpage');

    const text = document.createElement('h1');

    text.textContent = "Im the about page boo!";

    element.appendChild(text);

    return element;
}

export default renderAboutPage;
function renderFooter() {
    const footer = document.createElement('footer');

    const text = document.createElement('h1');
    text.textContent = "hello there";

    footer.appendChild(text);

    return footer;
}

export default renderFooter;

function renderHomePage() {
    const element = document.createElement('div');
    element.classList.add('squares-container');
    element.classList.add('homepage');

    const left = renderLeftSquare();
    const right = renderRightSquare();
    const wideSquare = renderWideSquare();

    left.classList.add('left-box');
    right.classList.add('right-box');

    element.appendChild(left);
    element.appendChild(right);
    element.appendChild(wideSquare);

    return element;
}

function wideSquare() {
    const squareShape = document.createElement('div');
    squareShape.classList.add('wide-square');

    return squareShape;
}

function square() {
    const squareShape = document.createElement('div');
    squareShape.classList.add('square');

    return squareShape;
}

function renderWideSquare() {
    const square = wideSquare();
    square.classList.add("wide-square");

    const text = document.createElement('p');
    text.textContent = "This is a wide Square";

    square.appendChild(text);

    return square;
}

function renderLeftSquare() {
    const leftSquare = square();

    const text = document.createElement('p');
    text.textContent = "yo hello there";

    leftSquare.appendChild(text);


    return leftSquare;
}

function renderRightSquare() {
    const rightSquare = square();

    const text = document.createElement('p');
    text.textContent = "Hey im the right side";

    rightSquare.appendChild(text);

    return rightSquare;

}

export default renderHomePage;
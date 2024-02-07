export function getTextsFromElements(elementsList) {
    return elementsList.toArray().map(item => item.innerText);
}


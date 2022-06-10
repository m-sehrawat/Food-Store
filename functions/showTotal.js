export const showTotal = (arr, parent) => {

    parent.innerHTML = null;

    const total = document.createElement('h4');

    total.textContent = `Food [${arr.length}]`;

    parent.append(total);

};

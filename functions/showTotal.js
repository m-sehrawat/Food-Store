export const showTotal = (arr, parent, title) => {

    parent.innerHTML = null;

    const total = document.createElement('h4');

    total.textContent = `${title} Food [${arr.length}]`;

    parent.append(total);

};

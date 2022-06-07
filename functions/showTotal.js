export const showTotal = (arr, parent, title) => {

    const total = document.createElement('h4');

    total.textContent = `${title} Food [${arr.length}]`;

    parent.append(total);

};

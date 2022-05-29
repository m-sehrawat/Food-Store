export const showTotal = (arr, parent) => {

    const total = document.createElement('h4');

    total.textContent = `Food [${arr.length}]`;

    parent.append(total);

};

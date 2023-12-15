let products = [];

function editProduct(index) {
    let product = products[index];
    let productName = prompt('Editar nombre:', product.name);
    let productDescription = prompt('Editar descripción:', product.description);
    
    if (productName && productDescription) {
        products[index] = { name: productName, description: productDescription };
        localStorage.setItem('products', JSON.stringify(products));
        loadProducts();
    } else {
        alert('Por favor, introduce un nombre y descripción válidos.');
    }
}
function loadProducts() {
    products = JSON.parse(localStorage.getItem('products')) || [];
    let productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach((product, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>
                <button class="btn btn-danger delete-product" data-index="${index}">Eliminar</button>
                <button class="btn btn-primary edit-product" data-index="${index}">Editar</button>
            </td>
        `;
        productList.appendChild(row);
    });
    
    let editButtons = document.querySelectorAll('.edit-product');
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            let index = button.getAttribute('data-index');
            editProduct(index);
        });
    });
}


document.getElementById('createForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let productName = document.getElementById('productName').value;
    let productDescription = document.getElementById('productDescription').value;
    products.push({ name: productName, description: productDescription });
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts();
});

document.getElementById('productList').addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-product')) {
        let index = event.target.getAttribute('data-index');
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        loadProducts();
    }
});

loadProducts();

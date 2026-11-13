const tableBody = document.querySelector('#productsTable tbody');
const addProductForm = document.querySelector('#addProductForm');
const errorDiv = document.getElementById('errorMessage');

function showError(message) {
    errorDiv.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.textContent = message;
    errorDiv.appendChild(h1);
}

function clearError() {
    errorDiv.innerHTML = '';
}

function renderProduct(product) {
    const tr = document.createElement('tr');
    // textContent evita problemi di HTML injection
    [product.title, product.price, product.description].forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
    });
    tableBody.appendChild(tr);
}

// Function to load products from server
function loadProducts() {

    // 1. Make a GET request using Fetch API
    
    // 2. Use a promise to convert it to JSON fileConvert the response to JSON
        
    // 3. Use a promise to render a table row for each product (use the )
  
    // 4. Use a promise to handle any errors
}

addProductForm.addEventListener('submit', event => {

    // 1. Collect the attribute values from the form

    // 2. Use fetch te send the new product to the server
});

loadProducts();

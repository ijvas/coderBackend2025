//Conectar websockets del lado cliente 
const socket = io();

const formulario = document.getElementById("formulario");
const productsList = document.getElementById("productsList");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formulario);
    const productData = {};

    formData.forEach((value, key) => {
        productData[key] = value;
    });

    //Enviar los datos del producto al servidor
    socket.emit("newProduct", productData);

});


socket.on("productAdded", (newProduct) => {

    productsList.innerHTML += 
    `<div class="card mx-auto mb-2 h-100" style="width: 18rem;" data-id="${newProduct._id}">
        <img src="${newProduct.thumbnail}" class="card-img-top" alt="img">
        <div class="card-body">
            <h5 class="card-title">${newProduct.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${newProduct.category}</h6>
            <p class="card-text">${newProduct.description}</p>
            <h6 class="card-subtitle mb-2 text-body-secondary">
                $${Number(newProduct.price)}
            </h6>
            <button class="btn btn-danger btn-delete" data-id="${newProduct._id}">Eliminar</button>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    </div>`;
});

//Eliminar producto
productsList.addEventListener("click", e => {
    if (e.target.matches(".btn-delete")) {
        const id = e.target.dataset.id;
        socket.emit("deleteProduct", id);
    }
});

socket.on("productDeleted", productId => {
    const card = productsList.querySelector(`[data-id="${productId}"]`);
    if (card) card.remove();
});
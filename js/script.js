// Get All inputs tag as a whole

var productName = document.getElementById('productName')
var productPrice = document.getElementById('productPrice')
var productDescription = document.getElementById('productDescription')
var productCategory = document.getElementById('productCategory')
var productID = document.getElementById('productID')
var productsBody = document.getElementById('productsBody')
var productContainer = []
var productContent=""

var addBtn = document.getElementById('addBtn')
var editBtn = document.getElementById('editBtn')
var currentProductID ;


// Local Storage check if there's data
    if(localStorage.products != null)
    {
        productContainer = JSON.parse(localStorage.getItem('products'))
        readProduts()
    }
    else{
        console.log("Al products fdya");
        
    }


// Add Create Product
function addProduct(){
    // variable store product
    var product ={
        name: productName.value,
        price: productPrice.value,
        description: productDescription.value,
        category: productCategory.value
    }
    productContainer.push(product)
    localStorage.setItem("products",JSON.stringify(productContainer))
    cleanFormInputs()
    readProduts()

}

// Get Value from array 

function readProduts(){
 
    productContent = ""
    for(var i =0; i<productContainer.length; i++)
    {
        productContent += 
                    `
                    <tr>
                    <td scope="row">${i}</td>
                    <td>${productContainer[i].name}</td>
                    <td>${productContainer[i].price}</td>
                    <td>${productContainer[i].description}</td>
                    <td>${productContainer[i].category}</td>
                    <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
                    <td><button onclick="getProduct(${i})" class="btn btn-info">Edit</button></td>
                    </tr>
                `
                
                
    }
    productsBody.innerHTML = productContent;

}

// Delete

function deleteProduct(indexElement){
    productContainer.splice(indexElement,1)
    localStorage.setItem("products",JSON.stringify(productContainer))
    readProduts()
}

// Update 

function getProduct(indexElement){
    productName.value = productContainer[indexElement].name
    productPrice.value = productContainer[indexElement].price
    productDescription.value = productContainer[indexElement].description
    productCategory.value = productContainer[indexElement].category
    currentProductID = indexElement
    editBtn.classList.remove('d-none')
    addBtn.classList.add('d-none')
}

function updateProduct(indexBta3ElElementElyHyt8yer)
{
    indexBta3ElElementElyHyt8yer = currentProductID
    productContainer[indexBta3ElElementElyHyt8yer].name = productName.value
    productContainer[indexBta3ElElementElyHyt8yer].price = productPrice.value 
    productContainer[indexBta3ElElementElyHyt8yer].description = productDescription.value
    productContainer[indexBta3ElElementElyHyt8yer].category = productCategory.value


    localStorage.setItem("products",JSON.stringify(productContainer))

    readProduts()
    cleanFormInputs()
    editBtn.classList.add('d-none')
    addBtn.classList.remove('d-none')
}

// Clean Form after add

function cleanFormInputs(){
    productName.value = ""
    productPrice.value =""
    productDescription.value = ""
    productCategory.value = ""
}


var students = [{name:"Mariam", age:23},{name:"Hagar", age:24}]

localStorage.setItem("Students",JSON.stringify(students))
var returnedVals = JSON.parse(localStorage.getItem("Students"))
console.log(returnedVals);
console.log(typeof(returnedVals))




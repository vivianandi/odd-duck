state = {
  products: [],
}

//Constructor
function newProduct(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  state.products.push(this);

}

//Randomly generate three unique product images from the images directory
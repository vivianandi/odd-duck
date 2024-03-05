state = {
  products: [],
}

let productImage1 = document.querySelector('.product1 img');
let productImage2 = document.querySelector('.product2 img');
let productImage3 = document.querySelector('.product3 img');

//Constructor
function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.votes = 0;
  state.products.push(this);

}

//Generate random numebr
function getRandomNumber() {
  return Math.floor(Math.random() * state.products.length);
}

//Function render products
//some random number of products based on number of our products?? 
// this represents random number of product in an array
function renderProducts() {
  let product1 = getRandomNumber();
  let product2 = getRandomNumber();
  let product3 = getRandomNumber();

  //loop to not show same pic - will delete thses lines soon!
  //while (product1 === product2) {
  //    product2 = getRandomNumber();
  //  }
  //  while (product1 === product3) {
  //    product3 = getRandomNumber();
  //  }
  //  while (product2 === product3) {
  //    product3 = getRandomNumber();
  //  }
  const productIndices = [product1, product2, product3];

  for (let i = 0; i < productIndices.length; i++) {
    //Nested loop to compare the current element with the rest of the elements
    for (let j = i + 1; j < productIndices.length; j++) {
      while (productIndices[i] === productIndices[j]) {
        productIndices[j] = getRandomNumber();
      }
    }
  }

  const [newProduct1, newProduct2, newProduct3] = productIndices;

  productImage1.src = state.products[product1].src;
  productImage2.src = state.products[product2].src;
  productImage3.src = state.products[product3].src;
}

//Instances
let bag = new Product('Bag', '/img/assets/bag.jpg')
let banana = new Product('Banana', '/img/assets/banana.jpg')
let bathroom = new Product('Bathroom', '/img/assets/bathroom.jpg')
let boots = new Product('Boots', '/img/assets/boots.jpg')
let breakfast = new Product('Breakfast', '/img/assets/breakfast.jpg')
let bubblegum = new Product('Bubblegum', '/img/assets/bubblegum.jpg')
let chair = new Product('Chair', '/img/assets/chair.jpg')
let cthulhu = new Product('Cthulhu', '/img/assets/cthulhu.jpg')
let dogDuck = new Product('Dog Duck', '/img/assets/dog-duck.jpg')
let dragon = new Product('Dragon', '/img/assets/dragon.jpg')
let pen = new Product('Pen', '/img/assets/pen.jpg')
let petSweep = new Product('Pet Sweep', '/img/assets/pet-sweep.jpg')
let scissors = new Product('Scissors', '/img/assets/scissors.jpg')
let shark = new Product('Shark', '/img/assets/shark.jpg')
let sweep = new Product('Sweep', '/img/assets/sweep.png')
let tauntaun = new Product('Tauntaun', '/img/assets/tauntaun.jpg')
let unicorn = new Product('Unicorn', '/img/assets/unicorn.jpg')
let waterCan = new Product('Water Can', '/img/assets/water-can.jpg')
let wineGlass = new Product('Wine Glass', '/img/assets/wine-glass.jpg')

//Render products
renderProducts()
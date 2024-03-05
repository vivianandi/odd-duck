state = {
  products: [],
}

//Constructor
function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.votes = 0;
  state.products.push(this);

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
let dogDuck = new Product('Dog Duck', '/img/assets/dogDuck.jpg')
let dragon = new Product('Dragon', '/img/assets/dragon.jpg')
let pen = new Product('Pen', '/img/assets/pen.jpg')
let petSweep = new Product('Pet Sweep', '/img/assets/petSweep.jpg')
let scissors = new Product('Scissors', '/img/assets/scissors.jpg')
let shark = new Product('Shark', '/img/assets/shark.jpg')
let sweep = new Product('Sweep', '/img/assets/sweep.jpg')
let tauntaun = new Product('Tauntaun', '/img/assets/tauntaun.jpg')
let unicorn = new Product('Unicorn', '/img/assets/unicorn.jpg')
let waterCan = new Product('Water Can', '/img/assets/waterCan.jpg')
let wineGlass = new Product('Wine Glass', '/img/assets/wineGlass.jpg')

//Randomly generate three unique product images from the images directory

console.log(state.products);
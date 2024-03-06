state = {
  products: [],
  maxVotes: 25,
  votesCast: 0,
  previousPageProducts: [],
}

let productImage1 = document.querySelector('.product1 img');
let productImage2 = document.querySelector('.product2 img');
let productImage3 = document.querySelector('.product3 img');
let productContainer = document.querySelector('.products');
let results = document.querySelector('.results');

//Constructor
function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.votes = 0;
  state.products.push(this);

}

// //Generate random numebr
// function getRandomNumber() {
//   return Math.floor(Math.random() * state.products.length);
// }
//new generate random numebr function
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * state.products.length);

  //checks if new rando number already par tof prev page, if so product of the [i] was already on prev page, so new random num 
  while (state.previousPageProducts.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * state.products.length);
  }

  return randomNumber;
}

//Function render products
//some random number of products based on number of our products?? 
// this represents random number of product in an array
function renderProducts() {
  let product1 = getRandomNumber();
  let product2 = getRandomNumber();
  let product3 = getRandomNumber();

  //TODO: loop to not show same pic -  combine in one loop
  while (product1 === product2) {
    product2 = getRandomNumber();
  }
  while (product1 === product3) {
    product3 = getRandomNumber();
  }
  while (product2 === product3) {
    product3 = getRandomNumber();
  }

  productImage1.src = state.products[product1].src;
  productImage1.alt = state.products[product1].name;
  productImage2.src = state.products[product2].src;
  productImage2.alt = state.products[product2].name;
  productImage3.src = state.products[product3].src;
  productImage3.alt = state.products[product3].name;

  state.products[product1].views++;
  state.products[product2].views++;
  state.products[product3].views++;

  console.log(state.products);
}

function showTotals() {

  let productNames = [];
  let productVotes = [];
  let productViews = [];
  for (let i = 0; i < state.products.length; i++) {
    productNames.push(state.products[i].name);
    productVotes.push(state.products[i].votes);
    productViews.push(state.products[i].views);
  }

  //create a canvas context 
  const ctx = document.getElementById('myChart').getContext('2d');

  //chart js options
  let options = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [
        {
          label: '# of Votes',
          data: productVotes,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1
        },
        {
          label: '# of Views',
          data: productViews,
          backgroundColor: [
            'rgba(0, 0, 255, 0.2)',
          ],
          borderColor: [
            'rgba(0, 0, 255, 1)',
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  //make a new chart with the canvas context with some options
  const myChart = new Chart(ctx, options);

}

//add event listener for clicks, plus add votes
//TODO: stop event listener
productContainer.addEventListener("click", (event) => {
  let name = event.target.alt;
  for (let i = 0; i < state.products.length; i++) {
    if (state.products[i].name === name) {
      state.products[i].votes++;
      break;
    }
  }
  state.votesCast++;
  if (state.votesCast >= state.maxVotes) {
    showTotals();
    productContainer.removeEventListener("click", (event));
  } else {
    renderProducts();
  }
});

//TODO: loop for Instances
let bag = new Product('Bag', 'assets/bag.jpg')
let banana = new Product('Banana', 'assets/banana.jpg')
let bathroom = new Product('Bathroom', 'assets/bathroom.jpg')
let boots = new Product('Boots', 'assets/boots.jpg')
let breakfast = new Product('Breakfast', 'assets/breakfast.jpg')
let bubblegum = new Product('Bubblegum', 'assets/bubblegum.jpg')
let chair = new Product('Chair', 'assets/chair.jpg')
let cthulhu = new Product('Cthulhu', 'assets/cthulhu.jpg')
let dogDuck = new Product('Dog Duck', 'assets/dog-duck.jpg')
let dragon = new Product('Dragon', 'assets/dragon.jpg')
let pen = new Product('Pen', 'assets/pen.jpg')
let petSweep = new Product('Pet Sweep', 'assets/pet-sweep.jpg')
let scissors = new Product('Scissors', 'assets/scissors.jpg')
let shark = new Product('Shark', 'assets/shark.jpg')
let sweep = new Product('Sweep', 'assets/sweep.png')
let tauntaun = new Product('Tauntaun', 'assets/tauntaun.jpg')
let unicorn = new Product('Unicorn', 'assets/unicorn.jpg')
let waterCan = new Product('Water Can', 'assets/water-can.jpg')
let wineGlass = new Product('Wine Glass', 'assets/wine-glass.jpg')

//Render products
renderProducts()

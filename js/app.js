'use strict';

let state = {
  products: [],
  maxVotes: 25,
  votesCast: 0,
  previousPageProducts: [],
};

// Constructor for Product
function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.votes = 0;
  state.products.push(this);
}

let bag = new Product("Bag", "./assets/bag.jpg");
let banana = new Product('Banana', './assets/banana.jpg');
let bathroom = new Product('Bathroom', './assets/bathroom.jpg');
let boots = new Product('Boots', './assets/boots.jpg');
let breakfast = new Product('Breakfast', './assets/breakfast.jpg');
let bubblegum = new Product('Bubblegum', './assets/bubblegum.jpg');
let chair = new Product('Chair', './assets/chair.jpg');
let cthulhu = new Product('Cthulhu', './assets/cthulhu.jpg');
let dogDuck = new Product('Dog Duck', './assets/dog-duck.jpg');
let dragon = new Product('Dragon', './assets/dragon.jpg');
let pen = new Product('Pen', './assets/pen.jpg');
let petSweep = new Product('Pet Sweep', './assets/pet-sweep.jpg');
let scissors = new Product('Scissors', './assets/scissors.jpg');
let shark = new Product('Shark', './assets/shark.jpg');
let sweep = new Product('Sweep', './assets/sweep.jpg');
let tauntaun = new Product('Tauntaun', './assets/tauntaun.jpg');
let unicorn = new Product('Unicorn', './assets/unicorn.jpg');
let waterCan = new Product('Water Can', './assets/water-can.jpg');
let wineGlass = new Product('Wine Glass', './assets/wine-glass.jpg');

let productImage1 = document.querySelector('.product1 img');
let productImage2 = document.querySelector('.product2 img');
let productImage3 = document.querySelector('.product3 img');
let productContainer = document.querySelector('.products');
let results = document.querySelector('.results');


// Save the products to local storage
function saveProducts() {
  let stringifiedProducts = JSON.stringify(state);
  localStorage.setItem('productApp', stringifiedProducts);
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.products.length);
}

// Render products
function renderProducts() {
  let productImage1 = document.querySelector('.product1 img');
  let productImage2 = document.querySelector('.product2 img');
  let productImage3 = document.querySelector('.product3 img');

  let product1, product2, product3;

  // Ensure each product is unique and not in the previous set
  do {
    product1 = state.products[getRandomNumber()];
    product2 = state.products[getRandomNumber()];
    product3 = state.products[getRandomNumber()];
  } while (
    product1 === product2 ||
    product1 === product3 ||
    product2 === product3 ||
    state.previousPageProducts.includes(product1) ||
    state.previousPageProducts.includes(product2) ||
    state.previousPageProducts.includes(product3)
  );

  productImage1.src = product1.src;
  productImage1.alt = product1.name;
  productImage2.src = product2.src;
  productImage2.alt = product2.name;
  productImage3.src = product3.src;
  productImage3.alt = product3.name;

  product1.views++;
  product2.views++;
  product3.views++;

  // Save the current set products for comparison in the next set
  state.previousPageProducts = [product1, product2, product3];

  console.log(state.products);
}

// Load from local storage --or-- create products
function loadProducts() {
  let savedProducts = localStorage.getItem('productApp');

  if (savedProducts) {
    try {
      state = JSON.parse(savedProducts);
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
      state = { products: [], maxVotes: 25, votesCast: 0, previousPageProducts: [] };
    }
  } else {
    renderProducts();
  }
  console.log('state.products:', state.products);
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

  const ctx = document.getElementById('myChart').getContext('2d');

  let options = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [
        {
          label: '# of Votes',
          data: productVotes,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
        {
          label: '# of Views',
          data: productViews,
          backgroundColor: ['rgba(0, 0, 255, 0.2)'],
          borderColor: ['rgba(0, 0, 255, 1)'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const myChart = new Chart(ctx, options);
}

function clickHandler(event) {
  let name = event.target.alt;
  for (let i = 0; i < state.products.length; i++) {
    if (state.products[i].name === name) {
      state.products[i].votes++;
      break;
    }
  }
  state.votesCast++;

  // Call saveProducts() to update local storage
  saveProducts();

  if (state.votesCast >= state.maxVotes) {
    localStorage.setItem('productApp', JSON.stringify(state));
    showTotals();
    productContainer.removeEventListener('click', clickHandler);
  } else {
    renderProducts();
  }
}

// Check if there is existing data in localStorage
if (localStorage.getItem('productApp')) {
  state = JSON.parse(localStorage.getItem('productApp'));
} else {
  // If no existing data, create products and render them
  renderProducts();
}

productContainer.addEventListener('click', clickHandler);

// Load and render products
renderProducts();
loadProducts();



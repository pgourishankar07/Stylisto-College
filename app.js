const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Hoodies",
    price: 599,
    desc: "Cozy, stylish hoodies: Soft fleece, modern designs, perfect for layering. Elevate your comfort and style effortlessly. Embrace warmth with flair.",
    colors: [
      {
        code: "white",
        img: "./img/air.png",
      },
      {
        code: "black",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Tees Series",
    price: 1149,
    desc: "Essential Tees Series: Classic, Comfortable, Versatile. Elevate your wardrobe with timeless style. Perfect for any occasion, day or night.",
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "black",
        img: "./img/grpSirt2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Simple Design",
    price: 299,
    desc: "Minimalist Chic: Clean lines, understated elegance. Effortlessly stylish, timeless appeal. Simplify your look with sophisticated simplicity.",
    colors: [
      {
        code: "lightgray",
        img: "./img/shirt5.png",
      },
      {
        code: "black",
        img: "./img/shirt7.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      // {
      //   code: "lightgray",
      //   img: "./img/crater2.png",

      // },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDesc.textContent = choosenProduct.desc;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

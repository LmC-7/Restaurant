const menu = [
  {
    id: 1,
    title: "Buttermilk  Pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "./images/item-1.jpg",
    description: "Fluffy pancakes served with maple syrup and butter",
  },
  {
    id: 2,
    title: "Eggs Benedict",
    category: "Breakfast",
    price: 10.99,
    img: "./images/Egg-Benedict-2-728x1091.jpg",
    description:
      "Poached eggs served on English muffins with ham and hollandaise sauce",
  },
  {
    id: 3,
    title: "Chicken Caesar Salad",
    category: "Lunch",
    price: 12.99,
    img: "./images/Grilled-Chicken-Caesar-Salad-Photograph.jpg",
    description:
      "Grilled chicken served on romaine lettuce with Caesar dressing",
  },
  {
    id: 4,
    title: "Beef Burger",
    category: "Lunch",
    price: 14.99,
    img: "./images/Homemade-Beef-Burgers-4.webp",
    description: "Juicy beef burger served with fries and a pickle",
  },
  {
    id: 5,
    title: "Margherita Pizza",
    category: "Dinner",
    price: 16.99,
    img: "./images/margherita-pizza-recipe-1-2-548x824.jpg",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
  },
  {
    id: 6,
    title: "Spaghetti Carbonara",
    category: "Dinner",
    price: 13.99,
    img: "./images/creamy-carbonara-1.jpg",
    description: "Spaghetti with creamy egg sauce, pancetta, and Parmesan",
  },
  {
    id: 7,
    title: "Apple Pie",
    category: "Dessert",
    price: 7.99,
    img: "./images/best-apple-pie-from-scratch-728x971.webp",
    description: "Warm apple pie served with a scoop of vanilla ice cream",
  },
  {
    id: 8,
    title: "Chocolate Cake",
    category: "Dessert",
    price: 8.99,
    img: "./images/triple-chocolate-cake-4-850x1276.jpg",
    description: "Rich chocolate cake served with whipped cream",
  },
  {
    id: 9,
    title: "Caesar Salad",
    category: "Salad",
    price: 8.99,
    img: "./images/Caesar-Salad-24.jpg",
    description: "Romaine lettuce with Caesar dressing, croutons and Parmesan",
  },
  {
    id: 10,
    title: "Greek Salad",
    category: "Salad",
    price: 9.99,
    img: "./images/Greek-Salad-Recipe-Easy-768x1152.jpg",
    description:
      "Fresh salad with tomatoes, cucumbers, olives, feta, and Greek dressing",
  },
  {
    id: 11,
    title: "French Toast",
    category: "Breakfast",
    price: 11.99,
    img: "./images/french.jpg",
    description: "Sweet French toast served with maple syrup and fresh berries",
  },
  {
    id: 12,
    title: "Club Sandwich",
    category: "Lunch",
    price: 12.99,
    img: "./images/item-12.jpg",
    description:
      "Triple-decker sandwich with turkey, bacon, lettuce, and tomato",
  },
  {
    id: 13,
    title: "Chicken Alfredo",
    category: "Dinner",
    price: 14.99,
    img: "./images/Chicken-Alfredo-blog-4-768x1024.jpg",
    description:
      "Creamy pasta with grilled chicken, Parmesan, and fresh parsley",
  },
  {
    id: 14,
    title: "Cheesecake",
    category: "Dessert",
    price: 7.99,
    img: "./images/cheesecake-1-22-730x913.jpg",
    description: "Creamy cheesecake served with a sweet strawberry sauce",
  },
  {
    id: 15,
    title: "Cobb Salad",
    category: "Salad",
    price: 9.99,
    img: "./images/Cobb-Salad_0.jpg",
    description:
      "Mixed greens with chicken, bacon, avocado, blue cheese, and hard-boiled egg",
  },
  {
    id: 16,
    title: "Omelette",
    category: "Breakfast",
    price: 10.99,
    img: "./images/best-omelette-recipe-1.jpg",
    description:
      "Fluffy omelette with your choice of fillings, served with toast",
  },
  {
    id: 17,
    title: "Fish and Chips",
    category: "Lunch",
    price: 13.99,
    img: "./images/SteakFrites_14.jpg",
    description: "Crispy fried fish served with chips and tartar sauce",
  },
  {
    id: 18,
    title: "Steak Frites",
    category: "Dinner",
    price: 21.99,
    img: "./images/IMG_9513-scaled.jpg",
    description: "Grilled steak served with fries and a side salad",
  },
  {
    id: 19,
    title: "Tiramisu",
    category: "Dessert",
    price: 8.99,
    img: "./images/best-tiramisu-recipe-SQUARE.jpg",
    description:
      "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream",
  },
  {
    id: 20,
    title: "Caprese Salad",
    category: "Salad",
    price: 8.99,
    img: "./images/072810_1.jpg",
    description:
      "Fresh mozzarella, tomatoes, and basil, drizzled with balsamic reduction",
  },
];

const menuContainer = document.querySelector(".menuContainer");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map((item) => {
    return `<div class="item">
    <div class="image">
      <img src=${item.img}   alt="${item.title}  " />
    </div>
    <div class="text">
      <div class="price">
        <h4> ${item.title} </h4>
        <h4> ${item.price} </h4>
      </div>
     <hr class="ligne">
      <div class="description">
        <p>
         ${item.description}
        </p>
      </div>
    </div>
  </div>`;
  });
  displayMenu = displayMenu.join("");
  menuContainer.innerHTML=displayMenu;
});

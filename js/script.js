
let menus = document.querySelector("nav");
let menubutton = document.querySelector(".menu-button");
let closebutton = document.querySelector(".close-button");

menubutton.addEventListener("click", function(){
    menus.classList.add("active");
})

closebutton.addEventListener("click", function(){
    menus.classList.remove("active");
})

// swiperjs code
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
    var swiper1 = new Swiper(".mySwiper-1", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination-1",
          clickable: true,
        },
        breakpoints:{
           0:{
            slidesPerView: 1,
           },
           768:{
            slidesPerView: 2,
           },
           968:{
            slidesPerView: 3,
           },
        }
      });
  
  
  // Dynamic Images 

  const SectionCenter = document.querySelector(".menu_items_container");
  const filterButtons = document.querySelectorAll(".button-cat");

  filterButtons.forEach(function(button){
    button.addEventListener("click",function(e){
   const Category = e.currentTarget.dataset.id;
     const menuCategory = menu.filter(function(menuItem){
           if(menuItem.Category==Category){
                return menuItem;
         } 
      });
      if(Category=="Deep_Dish"){
          displayMenusItem(menuCategory);
      }
      else{
          displayMenusItem(menuCategory);
      }
  })
    
})


const Deep_Dish =[
     //Deep Dish//
     {
        id:1,
        title: "Cheese Deep Dish",
        description: "Our classic Chicago style deep dish",
        Category: "Deep_Dish",

        //img: ""//
    },
    {
        id:2,
        title: "Ricciardi Classic",
        description: "Number one seller - loaded with extra sausage",
        Category: "Deep_Dish",

        //img: ""//
    },
    {
        id:3,
        title: "Rick's Favorite",
        description: "Our classic loaded with sausage, mushrooms, and pepperoni",
        Category: "Deep_Dish",

        //img: ""//
    },
    {
        id:4,
        title: "Meat Lovers",
        description: "Our classic loaded with sausage, bacon, pepperoni, and canadian bacon",
        Category: "Deep_Dish",

        //img: ""//
    },
    {
        id:5,
        title: "Joe's Favorite",
        description: "Our classic loaded with sausage, bacon, and pepperoni",
        Category: "Deep_Dish",

        //img: ""//
    },
    {
        id:11,
        title: "Pizza Toppings",
        description: "Build your own Pizza by adding Sausage, Pepperoni, Bacon, Mushrooms, Onions, Green Bell Pepper, Jalapeno Pepper, Banana Pepper, Black Olives, Spinach, Canadian Bacon, or Giardiniera Peppers",
        Category: "Deep_Dish",

        //img: ""//
    },

]
  const menu =[
    //Deep Dish//
    {
        id:1,
        title: "Cheese Deep Dish",
        description: "Our classic Chicago style deep dish",
        Category: "Deep_Dish",

        //img: ""//
    },
    {
        id:2,
        title: "Ricciardi Classic",
        description: "Number one seller - loaded with extra sausage",
        Category: "Deep_Dish",

        //img: ""//
    },
    {
        id:3,
        title: "Rick's Favorite",
        description: "Our classic loaded with sausage, mushrooms, and pepperoni",
        Category: "Deep_Dish",

        //img: ""//
    },
    {
        id:4,
        title: "Meat Lovers",
        description: "Our classic loaded with sausage, bacon, pepperoni, and canadian bacon",
        Category: "Deep_Dish",

        //img: ""//
    },
    {
        id:5,
        title: "Joe's Favorite",
        description: "Our classic loaded with sausage, bacon, and pepperoni",
        Category: "Deep_Dish",

        //img: ""//
    },
    {
        id:11,
        title: "Pizza Toppings",
        description: "Build your own Pizza by adding Sausage, Pepperoni, Bacon, Mushrooms, Onions, Green Bell Pepper, Jalapeno Pepper, Banana Pepper, Black Olives, Spinach, Canadian Bacon, or Giardiniera Peppers",
        Category: "Deep_Dish",

        //img: ""//
    },

    //Thin Crust//
    {
        id:6,
        title: "Hot Honey",
        description: "Our thin crust topped with cupped pepperoni and covered in hot honey",
        Category: "Thin_Crust",

        //img: ""//
    },
    {
        id:7,
        title: "Meat Lovers",
        description: "Our thin crust topped with sausage, pepperoni, bacon, and Canadian bacon",
        Category: "Thin_Crust",

        //img: ""//
    },
    {
        id:8,
        title: "Supreme",
        description: "Our thin crust topped with sausage, pepperoni, mushrooms, onions, and green peppers",
        Category: "Thin_Crust",

        //img: ""//
    },
    {
        id:9,
        title: "Mad Italian",
        description: "Our thin crust topped with fresh Italian sausage and spicy giardiniera",
        Category: "Thin_Crust",

        //img: ""//
    },
    {
        id:10,
        title: "Garden Lovers",
        description: "Our thin crust topped with mushrooms, onions, green peppers, olives, and spinach",
        Category: "Thin_Crust",

        //img: ""//
    },
    {
        id:11,
        title: "Cheese Thin Crust",
        description: "Our thin crust topped with homemade sause and quality cheese",
        Category: "Thin_Crust",

        //img: ""//
    },
    {
        id:11,
        title: "Pizza Toppings",
        description: "Build your own Pizza by adding Sausage, Pepperoni, Bacon, Mushrooms, Onions, Green Bell Pepper, Jalapeno Pepper, Banana Pepper, Black Olives, Spinach, Canadian Bacon, or Giardiniera Peppers",
        Category: "Thin_Crust",

        //img: ""//
    },

    //Appetizers//


    {
        id:12,
        title: "Wings",
        description: "Fried to golden perfection with your choice of buffalo, garlic parmesan, BBQ, lemon pepper dry rub, Thai chili, hot honey, or our hell sauce. Served with ranch or blue cheese",
        Category: "Appetizers",
   
        //img: ""//
    },
    {
        id:13,
        title: "Buffalo Shrimp",
        description: "Nine fried shrimp tossed in our hot sauce or house buffalo sauce",
        Category: "Appetizers",
  
        //img: ""//
    },
    {
        id:14,
        title: "Buffalo Fries",
        description: "Golden fries with our hot sauce or house buffalo sauce, blue cheese crumbles, bacon, and green onions",
        Category: "Appetizers",
 
        //img: ""//
    },
    {
        id:15,
        title: "Loaded Tots",
        description: "Golden tots topped with chili, cheese, sour cream, green onions, bacon and jalapeño slices",
        Category: "Appetizers",
  
        //img: ""//
    },
    {
        id:16,
        title: "Fried Mozzarella",
        description: "Breaded and fried mozzarella served with house marinara",
        Category: "Appetizers",
  
        //img: ""//
    },
    {
        id:17,
        title: "Wisconsin Cheese Curds",
        description: "Small pieces of curdled milk, roughly the size of peanuts in the shell, with a mild and cheddar-like flavor",
        Category: "Appetizers",
       
        
    },
    {
        id:18,
        title: "Fried Mushrooms",
        description: "Breaded and fried mushrooms served with house marinara",
        Category: "Appetizers",
 
        //img: ""//
    },
    {
        id:19,
        title: "Fried Zucchini",
        description: "Breaded and fried zucchini served with house marinara",
        Category: "Appetizers",
   
        
    },
    {
        id:20,
        title: "Calamari",
        description: "Calamari rings are breaded and fried until golden served with house marinara",
        Category: "Appetizers",
   
        
    },
    {
        id:21,
        title: "Jalapeño Poppers",
        description: "Jalapeño peppers fried and stuffed with cheese and spices",
        Category: "Appetizers",
    
        
    },
    {
        id:22,
        title: "Toasted Beef Ravioli",
        description: "Filled with a blend of high-quality ground beef, pecorino and romano cheese, onion, garlic, and spices",
        Category: "Appetizers",
      
        
    },
    {
        id:23,
        title: "Cheesy Garlic Bread",
        description: "Our Tribeca French bun baked with garlic butter and topped with mozzarella cheese",
        Category: "Appetizers",
     
        
    },
    {
        id:24,
        title: "House Meatballs",
        description: "A half pound of meatballs served with our house marinara and parmigiano reggiano",
        Category: "Appetizers",
       
        
    },


    
    //Sandwiches//
    {
        id:25,
        title: "Cheeseburger",
        description: "(Cheddar, American, Pepper Jack, or Swiss) Your choice of toppings – ketchup, mustard, mayonnaise, onions, relish, pickles, tomato's, lettuce, jalapeños or bacon",
        Category: "Sandwiches",
     
        
    },
    {
        id:26,
        title: "House Patty Melt",
        description: "Double patty with Swiss and American cheese, grilled onions and our zesty house sauce on rye",
        Category: "Sandwiches",
       
        
    },
    {
        id:27,
        title: "Maxwell Street Polish Sausage",
        description: "Polish Sausage, mustard, poppy seed buns, sport peppers and grilled onions",
        Category: "Sandwiches",
       
        
    },
    {
        id:28,
        title: "Italian Beef",
        description: "Thinly sliced slow-roasted beef served on a 6” turano roll with your choice of sweet peppers and hot giardiniera. Dipped or Baptized",
        Category: "Sandwiches",
     
        
    },
    {
        id:29,
        title: "Meatball Sub",
        description: "House made meatballs and maranara sauce on a 6 inch roll topped with parmigiano reggiano",
        Category: "Sandwiches",
       
        
    },
    {
        id:30,
        title: "Gyro",
        description: "A lamb and beef blend served with tomatoes, onions, feta cheese and our house tzatziki sauce",
        Category: "Sandwiches",
       
        
    },
    {
        id:31,
        title: "Chicago Dog",
        description: "A grilled Vienna all-beef frank in a hot, steamed bun topped with fresh tomato, fresh onions, pickle spear, relish, sport peppers, tangy French's mustard and sprinkled with celery salt",
        Category: "Sandwiches",
     
        
    },
    {
        id:32,
        title: "Chicken Club",
        description: "Fried chicken topped with bacon, lettuce, tomato, pepper jack cheese, and mayo",
        Category: "Sandwiches",
       
        
    },
    {
        id:33,
        title: "Fried Fish or Shrimp Basket",
        description: "Beer battered haddock or fried shrimp served with your choice of tartar sauce or cocktail sauce",
        Category: "Sandwiches",
       
        
    },
    {
        id:34,
        title: "Fish Sandwich",
        description: "Beer battered haddockwith american cheese lettuce and tarter sauce on a hogie roll",
        Category: "Sandwiches",
     
        
    },

    //pasta//
    {
        id:35,
        title: "Spaghetti Marinara",
        description: "Add freshly baked French Bread or a side salad",
        Category: "Pasta",
     
        
    },
    {
        id:36,
        title: "Spaghetti and Meatballs",
        description: "Add freshly baked French Bread or a side salad",
        Category: "Pasta",
       
        
    },
    //salad//
    {
        id:37,
        title: "House Salad",
        description: "Seasonal mixed greens with cucumbers, tomatoes, olives, red onions, croutons and pepperoncini",
        Category: "Salad",
     
        
    },
    {
        id:38,
        title: "Gyro Salad",
        description: "Seasonal mixed greens with cucumbers, tomatoes, Greek olives, red onions, feta cheese, gyro meat and our house tzatziki sauce",
        Category: "Salad",
       
        
    },
    {
        id:39,
        title: "Side Salad",
        description: "Seasonal mixed greens with cucumbers, tomatoes, olives, red onions, croutons and pepperoncini",
        Category: "Salad",
       
        
    },
    //kids//
    {
        id:40,
        title: "Hamburger",
        description: "",
        Category: "Kids",
     
        
    },
    {
        id:41,
        title: "Cheeseburger",
        description: "",
        Category: "Kids",
       
        
    },
    {
        id:42,
        title: "Chicken Nuggets",
        description: "",
        Category: "Kids",
       
        
    },
    {
        id:43,
        title: "Spaghetti and Meatball",
        description: "",
        Category: "Kids",
     
        
    },
    {
        id:44,
        title: "Corn Dog",
        description: "",
        Category: "Kids",
       
        
    },
  ]

window.addEventListener("DOMContentLoaded",function(){
   displayMenusItem(Deep_Dish);
 });

function displayMenusItem(menuItem){
  let displayMenusItem = menuItem.map(function(item){
      return `<div class="img_cards">
      
      <p class="normal_heading-1">${item.title}</p>
      <p>${item.description}</p>
  </div>`;  
})
 //<img src=${item.img} alt="">
   displayMenusItem = displayMenusItem.join("");
   SectionCenter.innerHTML = displayMenusItem;
 }
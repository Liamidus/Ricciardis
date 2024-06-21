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

  const SectionCenter = document.querySelector(".bar_items_container");
  const filterButtons = document.querySelectorAll(".button-cat");

  filterButtons.forEach(function(button){
    button.addEventListener("click",function(e){
   const Category = e.currentTarget.dataset.id;
     const menuCategory = menu.filter(function(menuItem){
           if(menuItem.Category==Category){
                return menuItem;
         } 
      });
      if(Category=="Draft"){
          displayMenusItem(menuCategory);
      }
      else{
          displayMenusItem(menuCategory);
      }
  })
    
})


const Draft =[
     //Draft//
     {
        id:1,
        title: "Miller Lite",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:2,
        title: "Michelob Ultra",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:3,
        title: "Yuengling",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:4,
        title: "Chance IPA",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:5,
        title: "Goose Island IPA",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:6,
        title: "Bells Amber Ale",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:7,
        title: "Blue Moon",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:8,
        title: "Guinness",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
]
  const menu =[
       //Draft//
       {
        id:1,
        title: "Miller Lite",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:2,
        title: "Michelob Ultra",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:3,
        title: "Yuengling",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:4,
        title: "Chance IPA",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:5,
        title: "Goose Island IPA",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:6,
        title: "Bells Amber Ale",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:7,
        title: "Blue Moon",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },
    {
        id:8,
        title: "Guinness",
        description: "Draft",
        Category: "Draft",

        //img: ""//
    },

    //Bottles/Cans//
    {
        id:9,
        title: "Corona Extra",
        description: "Bottle and Cans",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:10,
        title: "Corona Light",
        description: "Bottle and Cans",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:11,
        title: "Modelo",
        description: "Bottle and Cans",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:12,
        title: "Atlanta Hard Cider",
        description: "Cans in seasonal flavors",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:13,
        title: "Peroni",
        description: "Italian Pilsner",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:14,
        title: "Stella Artois",
        description: "Bottle and Cans",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:15,
        title: "Bitburger",
        description: "German Pilsner",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:16,
        title: "Coors Light",
        description: "Bottle and Cans",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:17,
        title: "Heineken",
        description: "Bottle",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:18,
        title: "Wicked Weed Pernicious",
        description: "Can - IPA",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:19,
        title: "High Noon",
        description: "Cans",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:20,
        title: "Truly Hard Seltzer",
        description: "Cans",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:21,
        title: "PBR",
        description: "Cans",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:22,
        title: "Creatures Comfort",
        description: "Cans",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:23,
        title: "Tropicalia",
        description: "Cans",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:24,
        title: "Budweiser",
        description: "Cans",
        Category: "Bottle_cans",

        //img: ""//
    },

    //Wine//
    {
        id:25,
        title: "Cabernet Sauvignon",
        description: "Red wine with dark fruit flavors like black cherry, blackberry, and black currant. It also has savory notes of spice and black pepper. The aroma notes include vanilla and clove (a result of the oak barrel aging) and a distinct hint of green bell pepper",
        Category: "Wine",

        //img: ""//
    },
    {
        id:26,
        title: "Pinot Grigio",
        description: "A light white wine generally known for its fruit flavors of limes, lemons, peaches, green apples, and honeysuckle. It can be highly acidic, making it less sweet than the popular Chardonnay wine",
        Category: "Wine",

        //img: ""//
    },
    {
        id:27,
        title: "Chardonnay",
        description: "A dry, medium- to full-bodied wine with moderate acidity",
        Category: "Wine",

        //img: ""//
    },
    {
        id:28,
        title: "Moscato",
        description: "It's pleasantly light-bodied and sweet, making it refreshingly light and pleasant to drink",
        Category: "Wine",

        //img: ""//
    },
    {
        id:29,
        title: "Merlot",
        description: "It's a dry, medium to full-bodied wine with notes of plum, oak, graphite, black cherries, and cocoa",
        Category: "Wine",

        //img: ""//
    },
    
    //Specials//
    {
        id:30,
        title: "The Ricciardi",
        description: "Bacardi, Orange Juice, and Blue Curacao",
        Category: "Specials",

        //img: ""//
    },
    {
        id:31,
        title: "The Cheery Cherry",
        description: "Tequila, Tripple Sec, Sour Apple, Grenadine, Pineapple, and Cherry",
        Category: "Specials",

        //img: ""//
    },
    {
        id:32,
        title: "Adios Baby",
        description: "Vodka, Gin, Rum,Tiquila, Blue Curacao, Sour Mix, and Sprite",
        Category: "Specials",

        //img: ""//
    },
    {
        id:33,
        title: "Shecago",
        description: "Citrus Vodka, Tripple Sec, Lime Juice, Cranberry, Orange Juice, Grenadine",
        Category: "Specials",

        //img: ""//
    },
    {
        id:34,
        title: "Madhouse on Madison",
        description: "Vodka, Blue Curacao, Grenadine, Lime Juice, and Sprite",
        Category: "Specials",

        //img: ""//
    },
    
    //Drinks//
    {
        id:29,
        title: "Sweetened Tea",
        description: "",
        Category: "Drinks",

        //img: ""//
    },
    {
        id:29,
        title: "Un-Sweetened Tea",
        description: "",
        Category: "Drinks",

        //img: ""//
    },
    {
        id:29,
        title: "Lemonade",
        description: "",
        Category: "Drinks",

        //img: ""//
    },
    {
        id:29,
        title: "Pepsi",
        description: "",
        Category: "Drinks",

        //img: ""//
    },
    {
        id:29,
        title: "Diet Pepsi",
        description: "",
        Category: "Drinks",

        //img: ""//
    },
    {
        id:29,
        title: "Sierra Mist",
        description: "",
        Category: "Drinks",

        //img: ""//
    },
    {
        id:29,
        title: "Mountain Dew",
        description: "",
        Category: "Drinks",

        //img: ""//
    },
    {
        id:29,
        title: "Dr.Pepper",
        description: "",
        Category: "Drinks",

        //img: ""//
    },
    {
        id:29,
        title: "Root Beer",
        description: "",
        Category: "Drinks",

        //img: ""//
    },
    {
        id:29,
        title: "Coke Products",
        description: "by the can",
        Category: "Drinks",

        //img: ""//
    },
  ]

window.addEventListener("DOMContentLoaded",function(){
   displayMenusItem(Draft);
 });

function displayMenusItem(menuItem){
  let displayMenusItem = menuItem.map(function(item){
      return `<div class="img_cards">
      
      <h5 class="normal_heading-1">${item.title}</h5>
      <p>${item.description}</p>
  </div>`;  
})
 //<img src=${item.img} alt="">
   displayMenusItem = displayMenusItem.join("");
   SectionCenter.innerHTML = displayMenusItem;
 }
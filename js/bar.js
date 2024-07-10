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
      if(Category=="Specials"){
          displayMenusItem(menuCategory);
      }
      else{
          displayMenusItem(menuCategory);
      }
  })
    
})


const Specials =[
     //Draft//
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
]
  const menu =[
       //Draft//
       {
        id:1,
        title: "Miller Lite",
        description: "4.2% ABV Light American Lager",
        Category: "Draft",

        //img: ""//
    },
    {
        id:2,
        title: "Michelob Ultra",
        description: "4.2% ABV Light American Lager",
        Category: "Draft",

        //img: ""//
    },
    {
        id:3,
        title: "Yuengling",
        description: "4.5% ABV Traditional Lager",
        Category: "Draft",

        //img: ""//
    },
    {
        id:4,
        title: "Chance IPA",
        description: "6.2% ABV India Pale Ale",
        Category: "Draft",

        //img: ""//
    },
    {
        id:5,
        title: "Goose Island IPA",
        description: "5.9% ABV India Pale Ale",
        Category: "Draft",

        //img: ""//
    },
    {
        id:6,
        title: "Bells Amber Ale",
        description: "5.8% ABV Toasted and Sweet Ale",
        Category: "Draft",

        //img: ""//
    },
    {
        id:7,
        title: "Blue Moon",
        description: "5.4% ABV Belgian-Style Witbier",
        Category: "Draft",

        //img: ""//
    },
    {
        id:8,
        title: "Guinness",
        description: "4.2% ABV Irish Stout",
        Category: "Draft",

        //img: ""//
    },

    //Bottles/Cans//
    {
        id:9,
        title: "Corona Extra",
        description: "4.6% ABV Pilsner-Style Lager",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:10,
        title: "Corona Light",
        description: "4.1% ABV Pilsner-Style Lager",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:11,
        title: "Modelo",
        description: "4.4% ABV Mexican Lager",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:12,
        title: "Atlanta Hard Cider",
        description: "5.9% ABV Cans in Seasonal Flavors",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:13,
        title: "Peroni",
        description: "4.7% ABV Italian Pilsner",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:14,
        title: "Stella Artois",
        description: "5.0% ABV Belgium Pilsner",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:15,
        title: "Bitburger",
        description: "4.8% ABV German Pilsner",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:16,
        title: "Coors Light",
        description: "4.2% ABV Light American Lager",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:17,
        title: "Heineken",
        description: "5.4% ABV Dutch Traditional Lager",
        Category: "Bottle_cans",
        
        //img: "../images/Heineken.png"//
    },
    {
        id:18,
        title: "Wicked Weed Pernicious",
        description: "7.3% ABV India Pale Ale",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:19,
        title: "High Noon",
        description: "4.5% ABV Vodka Soda",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:20,
        title: "Truly Hard Seltzer",
        description: "5.0% ABV Hard Seltzer",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:21,
        title: "PBR",
        description: "4.7% ABV Full-Bodied Lager",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:22,
        title: "Creatures Comfort",
        description: "6.0% ABV India Pale Ale",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:23,
        title: "Tropicalia",
        description: "6.6% ABV Juicy India Pale Ale",
        Category: "Bottle_cans",

        //img: ""//
    },
    {
        id:24,
        title: "Budweiser",
        description: "5.0% ABV Adjunct Pale Lager",
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
        description: "By The Can",
        Category: "Drinks",

        //img: ""//
    },
  ]

window.addEventListener("DOMContentLoaded",function(){
   displayMenusItem(Specials);
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
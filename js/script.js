const init = () => {
   // const menuLinks = document.querySelectorAll(".menu__link");
   const menuItems = document.querySelectorAll(".menu-mid");
   const menuFin = document.querySelector("#my-fin");
   const warning = document.querySelector(".warning");

   menuItems.forEach(item =>{
      item.addEventListener("click", (event)=>{
         menuItems.forEach(item =>{
            if(item.classList.contains("bgc-white")){
               item.classList.remove("bgc-white")
            }
         })
         item.classList.add("bgc-white");
            showMenu();
      })
   })

   const showMenu = () => {
      const menu = document.querySelector(".header-bottom");
      if(menuFin.classList.contains("bgc-white")){
         menu.classList.add("is-show");
      } else {
         menu.classList.remove("is-show");
      }
   }
}
init();
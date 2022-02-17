export const hideWarning = (element)=>{
   const span = element.querySelector("span");
   span.addEventListener("click", ()=>{
      element.style.display = "none";
   })
}

export const showTabContent = (arrTab, arrTabContent) => {
   arrTab.forEach(item => {
      item.addEventListener("click",function(event){
         const attrHref = this.getAttribute("data-href");
         arrTabContent.forEach(function(item){
            item.classList.remove("tab-content--active");
            if(item.dataset.href === attrHref){
               item.classList.add("tab-content--active");
            }
         })
      })
   });
}

export const hideHtml = (htmlSection_1, htmlSection_2) => {
   htmlSection_1.style.display = "none";
   htmlSection_2.style.display = "none";
}
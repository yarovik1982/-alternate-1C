export const hideWarning = (element)=>{
   const span = element.querySelector("span");
   span.addEventListener("click", ()=>{
      element.style.display = "none";
   })
}
const FormFilling = ()=>{
  const docsHeader = document.getElementById("docs-header");
  const buttons = docsHeader.querySelectorAll("[data-evt");
  const inp = document.getElementById("number");

  buttons.forEach(item => {
   item.addEventListener("click", event => {
      const btn = event.target;
      let attr = btn.dataset.evt;
      if(attr === "Записать"){
         writeDoc();
      }
      if(attr === "Провести"){
         holdDoc();
      }
   })
})
  function writeDoc(){
  let value = inp.value;
  let doc = {
     number: value,
     date:null,
     name:null,
     hold:false,
  };
  localStorage.setItem("doc", JSON.stringify(doc));
  return doc;
}

function holdDoc(){
   doc = localStorage.getItem(JSON.parse("doc"))
   obj.hold = true;
}
}
export default FormFilling;
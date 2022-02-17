const FormFilling = ()=>{
   const inputNumber = document.getElementById("input-number");
   const inputTitle = document.getElementById("input-name");
   const inputsValue = document.querySelectorAll(".input-doc");
   const btnAll = document.querySelectorAll("[data-evt]");
   const linkList = document.querySelectorAll(".menu__link");
   const container = document.querySelector("#tabular");
   
   

   const showDate = ()=> {
      const inputDate = document.getElementById("input-date");
      const currentDate = new Date();
      inputDate.value = "";
      inputDate.value = currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString();
      return inputDate.value;
   }
   showDate();

   const doc = {
      "number": null,
      "date": null,
      "title": null,
      "write":null,//записан
      "hold":null,//проведен
   };

const Document = {
   documents:  
            JSON.parse(localStorage.getItem("documents")) || [],
      // [localStorage.getItem("documents")],
   
   getWriteDocs : ()=>{
      return this.document.filter(({write}) => write == true);
   },
   getHoldDocs : ()=>{
      return this.documents.filter(({hold}) => hold == true);
   },
   
   saveDoc : function ({number,date,title}){
      localStorage.setItem("documents",JSON.stringify([]));
      this.documents.push({number,date,title, write:true, hold:false});
      localStorage.setItem("documents", JSON.stringify(this.documents));
   },
  changeBool : function({number}){
      this.documents.forEach(item => {
         if(number == item.number){
         item.hold = true;
         }
      });
  },
  saveAndHoldDoc : () => {
     this.saveDoc(doc);
     this.changeBool();
  },
   };
   
      document.addEventListener("click", event => {
         const currentBtn = event.target;
         autoNum();
         if(currentBtn.dataset.evt === "write"){
            doc.number = inputNumber.value;
            doc.date = showDate();
            doc.title = inputTitle.value;
            inputNumber.value = "";
            inputTitle.value = "";
            Document.saveDoc(doc);
         }
         if(currentBtn.dataset.evt === "more"){
         }
      })

       function autoNum  (){
         const array = JSON.parse(localStorage.getItem("documents"));
         if(array === null || array.length === 0){ 
         inputNumber.value = 1;
      } else {
         inputNumber.value = array.length + 1;
      }
         return array;
      }
      

      linkList.forEach(link => {
         link.addEventListener("click", event => {
            event.preventDefault();
            const element = event.target;
            if(element.closest("#documents-registr")){
               document.getElementById("buttons-group").style.display = "none";
               document.getElementById("docs-form").style.display = "none";
               // document.getElementById("tabular-header").remove();
               document.querySelector(".row__title").textContent = "";
               document.querySelector(".row__title").textContent = "Список документов";
               renderData()
            }
         })
      })

      function renderData(){
         let docsList = autoNum();
         console.log(docsList);
         docsList.forEach((item) => {
            container.insertAdjacentHTML("beforeend",
                                                      `<div class="tabular-row" data-roll="row">
                                                         <div class="tabular-col">${item.number}</div>
                                                         <div class="tabular-col">${item.date}</div>
                                                         <div class="tabular-col">${item.title}</div>
                                                      </div>`
            )
         })
         
      }
}
export default FormFilling;




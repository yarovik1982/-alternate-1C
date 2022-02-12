const FormFilling = ()=>{
   const inputNumber = document.getElementById("input-number");
   const inputTitle = document.getElementById("input-name");
   const inputsValue = document.querySelectorAll(".input-doc");
   const btnAll = document.querySelectorAll("[data-evt]");
   

   const showDate = ()=> {
      const inputDate = document.getElementById("input-date");
      const currentDate = new Date();
      inputDate.value = "";
      inputDate.value = currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString();
      return inputDate.value;
   }
   showDate();

   const doc = {
      number: null,
      date: null,
      title: null,
      write:null,//записан
      hold:null,//проведен
   };

const Document = {
   documents:  
      [ localStorage.getItem("documents") || []],
   
   getWriteDocs : ()=>{
      return this.document.filter(({write}) => write == true);
   },
   getHoldDocs : ()=>{
      return this.documents.filter(({hold}) => hold == true);
   },
   
   saveDoc : function ({number,date,title}){
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
     this.saveDoc();
     this.changeBool();
  },
   };
   
   // const getForm = ()=>{
      // let arr = [];
      // for(let i = 0; i < inputsValue.length; i++){
      //    arr.push(inputsValue[i].value)
      // }
      // doc.number = inputNumber.value;
      // doc.date = showDate();
      // doc.title = inputTitle.value;
      // console.log(doc);
   // }
   // getForm({doc})

   // btnAll.forEach(btn => {
      document.addEventListener("click", event => {
         const currentBtn = event.target;
         if(currentBtn.dataset.evt === "write"){
            doc.number = inputNumber.value;
            doc.date = showDate();
            doc.title = inputTitle.value;
            inputNumber.value = "";
            inputTitle.value = "";
            // getForm(doc);
            Document.saveDoc(doc);
         }
         if(currentBtn.dataset.evt === "hold"){
            
         }
      })
   // })
   
   
   
}
export default FormFilling;


// writeDoc : function (){
   //    document.addEventListener("click", event => {
   //       const el = event.target;
   //       if(el.dataset.evt === "write"){
   //          this.saveDoc(doc);
   //          inputNumber.value = "";
   //          inputTitle.value = "";
   //       }
   //       setAutoNum();
   //    })
   // },

   // const setAutoNum = function () {
   //    const array = localStorage.getItem("documents");
   //    let arrNum = [];
   //    if(array === null){
   //       inputNumber.value = 1;
   //       arrNum.push(inputNumber.value);
   //    }else {
   //       inputNumber.value = arrNum.length + 1;
   //       arrNum.push(inputNumber.value);
   //    }
   //    console.log(arrNum);
   // }
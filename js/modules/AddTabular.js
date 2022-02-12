const AddTabular = () => {
   const docsHeader = document.getElementById("docs-header");
   const tabular = document.getElementById("tabular");
   const tabularBody = document.querySelector(".tabular-body");
   
   
   function incrementNumber(){  //  нумерует строки
      const tabularRow = tabularBody.querySelectorAll(".tabular-row");
      let number = tabularRow.length;
      const lastItem = tabularRow[tabularRow.length- 1];
      const tabularNumberStr = lastItem.querySelector(".tabular-number-str");
      tabularNumberStr.textContent = number - 1;
   }

   docsHeader.addEventListener("click", event => { // клик по кнопке "Добавить" -> добавляет строку
      const btn = event.target;
      if(btn.dataset.evt == "Добавить"){
         row.renderElement()
         incrementNumber();
         setFocus();
         deletionMark();
      }
   });

   document.addEventListener("keydown", (event)=>{ // таб по клавише "insert" добавляет строку
      if(event.code === "Insert"){
         row.renderElement()
         incrementNumber();
         setFocus();
         deletionMark();
      }
   });

   const setFocus = () => { // Устанавливает фокус в первую ячейку последней строки
      const tabularColList = document.querySelectorAll(".tabular-col");

      tabularColList.forEach(item => {
         if(item.textContent === "")
         item.focus();
      })
      return tabularColList;
   }

   class CreateHtmlElement  { // динамически создает строку табличной части
      constructor(element, cssClass, string){
      this.htmlElement = element;
      this.cssClass = cssClass;
      this.html = string;
   }
   renderElement(){
      const item = document.createElement(this.htmlElement);
      item.className = this.cssClass;
      item.innerHTML = this.html;

      tabular.appendChild(item);
   }
   }
   const row = new CreateHtmlElement("div", "tabular-row tabular-row-tr",`<div class="tabular-td tabular-col tabular-number-str" data-td-number="">1</div>
                                                           <div class="tabular-td tabular-col tabular-name" contenteditable></div>
                                                           <div class="tabular-td tabular-col tabular-amount" contenteditable> </div>
                                                           <div class="tabular-td tabular-col tabular-price" contenteditable> </div>
                                                           <div class="tabular-td tabular-col tabular-sum" contenteditable> </div>`
                                    );
  
   const deletionMark = function () { //добавляет или удаляет класс пометки на удаление
     const tabularRow = tabularBody.querySelectorAll(".tabular-row");

     tabularRow.forEach(item => {
        item.addEventListener("click", event => {
           const element = event.target;
           if(element.closest(".tabular-row-tr")){
              item.classList.toggle("delete-bgc");
           }
           document.addEventListener("keydown", event => {
              if(event.code === "Delete"){
                 deleteRow();
                 
              }
           })
        })
     })
  }
  const deleteRow = function () {
     const isMark = tabularBody.querySelectorAll(".delete-bgc");
     isMark.forEach(item => {
        item.remove();
     })
     renumber();
  }
  const renumber = function () {
   const tdesList = tabularBody.querySelectorAll("[data-td-number]");
   for(let i = 0; i < tdesList.length; i++){
      let element = tdesList[i];
      element.textContent = i + 1;
   }
  }
  

}
export default AddTabular;
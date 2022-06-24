const Registration = () => {
   const loc = document.location;
   const buttons = document.querySelectorAll(".header__user-btn");
   const popupContainer = document.getElementById("popup");
   const inputName = document.querySelector("#input-name-r");
   const inputPass = document.querySelector("#input-pass-r");
   const inputDblPass = document.querySelector("#input-dblpass-r");
   const inputLoginName = document.querySelector("#input-name");
   const inputLoginPass = document.querySelector("#input-pass");
   const registrationButton = document.querySelector("[data-btn='registr']");
   const loginButton = document.querySelector("[data-btn='login']");
   const viewsPassword = document.querySelectorAll(".password-control");
   const inputs = document.querySelectorAll(".popup__input");
   const closePopupBtn = document.querySelector(".popup__form-close");
   
   // создание объекта , запись данных для входа в локальное хранилище
   const user = {
      userName : "",
      userPass : "",
   };

   const Users = {
      userAll : JSON.parse(localStorage.getItem("users")) || [], 

      writeUser : function ({userName, userPass}){
         this.userAll.push({userName, userPass});
         localStorage.setItem("users", JSON.stringify(this.userAll));
      },
      getUsersList: function () {
         return this.userAll;
      },
   }
   
   registrationButton.addEventListener("click", event => {
      event.preventDefault();
      user.userName = inputName.value;
      user.userPass = inputPass.value;
      inputName.value = "";
      inputPass.value = "";
      inputDblPass.value = "";
      Users.writeUser(user);
   })

   loginButton.addEventListener("click", (event)=> {
      event.preventDefault();
     
//       const usersList = Users.userAll;
      const usersList = Users.getUsersList();
      const dataInput = {
         userName : inputLoginName.value,
         userPass : inputLoginPass.value,
      };
      usersList.forEach(item => {
         if(item.userName === dataInput.userName && item.userPass === dataInput.userPass){
//             loc.pathname = loc.pathname + "application.html";
//             window.location.pathname = "/application.html"
            const location = window.location.href;
            const locationArr = location.split("/")
            locationArr[locationArr.length - 1] = "application.html"
            window.location.href = locationArr.join("/")
         }else {
            document.querySelectorAll(".error").forEach(item => {
               item.style.backgroundColor = "red";
            })
         }
      })
   })
   //-----------------------------------------------------------------------------

   viewsPassword.forEach(item => {
      item.addEventListener("click", function(event) {
         showPassword(this);
      })
   })

   function showPassword(target){
      const parent = target.parentElement;
      const childs = parent.childNodes;
      const current = childs[3];
      if(current.getAttribute("type") === "password"){ 
      current.setAttribute("type","text");
   }else{
      current.setAttribute("type", "password")
   }
      target.classList.toggle('view');
      return false;
   }

//  Смена фона страницы
   const setBgcForBody = (color, pathname) => {
      if (loc.pathname === pathname) {
         document.body.style.backgroundColor = color;
      }
   }
   window.onload = setBgcForBody("#ffff60", "/index.html");

   // В зависимости от того, какую кнопку нажал пользователь "регистрация", или "вход" открывается соответсвующая форма
   buttons.forEach(function(item) {
      item.addEventListener("click", (event) => {
         event.preventDefault();
          this.element = event.target;
          const parentElement = this.element.closest(".header__user-btn");
          const hrefAttr = parentElement.getAttribute("href");
          if(hrefAttr){
             removeClass();
             showPopup(hrefAttr);
          }
            popupContainer.classList.remove("none");
      })
   })

   function showPopup(id){
      const popup = document.querySelector(id);
      if(popup.classList.contains("is-show")){
         popup.classList.remove("is-show");
      }
      popup.classList.add("is-show");
      document.querySelector(".rules").style.display = "none";
   }
   //----------------------------------------------------------------------------------------------------------------------------
   
   // удаляет активный класс у форм
   function removeClass () {
      const popups = document.querySelectorAll(".popup__item");
      popups.forEach(item => {
         item.classList.remove("is-show");
      })
   }
   
   //Закрывает попап с формой
   function closePopup () {
      popupContainer.classList.add("none");
      document.querySelector(".rules").style.display = "flex";
      if(document.querySelector(".popup__item").classList.contains("is-show")){
         document.querySelector(".popup__item").classList.remove("is-show");
      }
   }

   document.addEventListener("click", event => {
      const element = event.target;
      if(element.classList.contains("popup") || element.classList.contains("popup__form-close")){
         closePopup();
      }
   })
}
Registration();

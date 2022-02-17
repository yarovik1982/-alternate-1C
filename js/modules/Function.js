import ClickHandling from "./ClickHandling.js";
import FormFilling from "./FormFilling.js";
import AddTabular from "./AddTabular.js";
import { hideHtml, hideWarning, showTabContent} from "./Events.js";

const body = document.body;
const elements = body.querySelectorAll("*");
// const inpDate = document.querySelector(".inp__date");
const docsHeader = document.getElementById("docs-header");
const warning = document.querySelector(".warning");
const tabsList = document.querySelectorAll(".tab");
const tabsContentList = document.querySelectorAll(".tab-content");
const rowCloseIcon = document.querySelector(".row__close-icon");
const sectionDocs = document.querySelector(".docs");
const sectionTabular = document.querySelector(".tabular");

rowCloseIcon.addEventListener("click", function(){
   hideHtml(sectionDocs, sectionTabular);
})







hideWarning(warning);
showTabContent(tabsList, tabsContentList);
ClickHandling();
FormFilling();
AddTabular();

import ClickHandling from "./ClickHandling.js";
import FormFilling from "./FormFilling.js";
import AddTabular from "./AddTabular.js";
import { hideWarning } from "./Events.js";

const body = document.body;
const elements = body.querySelectorAll("*");
// const inpDate = document.querySelector(".inp__date");
const docsHeader = document.getElementById("docs-header");
const warning = document.querySelector(".warning");

const eventShowWarning = ()=>{
   
   hideWarning(warning);
}
eventShowWarning();








ClickHandling();
FormFilling();
AddTabular();

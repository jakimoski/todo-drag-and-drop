import { dragStartHandler, addDragDropHandlers, onSubmitHandler, showFormHandler, } from "./events.js";
import { renderForm } from "./services.js";
// Select dom elements
const itemsToDrag = document.querySelectorAll(".item");
const dragSections = (document.querySelectorAll(".todos-container .section"));
const addItemWrapper = document.querySelector(".item-add");
// Add event to all initial draggable items
itemsToDrag === null || itemsToDrag === void 0 ? void 0 : itemsToDrag.forEach((el) => el.addEventListener("dragstart", dragStartHandler));
// TODO APP INIT
window.addEventListener("DOMContentLoaded", () => {
    var _a;
    if (addItemWrapper) {
        // Render form
        renderForm(addItemWrapper);
        // Add event hadler on submit form
        (_a = document
            .querySelector("#todo-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", onSubmitHandler);
        // Add event handler to toggle form
        addItemWrapper.addEventListener("click", showFormHandler);
    }
    // Add event to all drop target sections
    addDragDropHandlers(dragSections);
});

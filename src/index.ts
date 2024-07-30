import {
  dragStartHandler,
  addDragDropHandlers,
  onSubmitHandler,
  showFormHandler,
} from "./events.js";
import { renderForm } from "./services.js";

// Select dom elements
const itemsToDrag = <NodeList>document.querySelectorAll(".item");
const dragSections = <NodeList>(
  document.querySelectorAll(".todos-container .section")
);
const addItemWrapper = <HTMLElement>document.querySelector(".item-add");
// Add event to all initial draggable items
itemsToDrag?.forEach((el) =>
  el.addEventListener("dragstart", dragStartHandler)
);

// TODO APP INIT
window.addEventListener("DOMContentLoaded", () => {
  if (addItemWrapper) {
    // Render form
    renderForm(addItemWrapper);
    // Add event handler on submit form
    document
      .querySelector("#todo-form")
      ?.addEventListener("submit", onSubmitHandler);

    // Add event handler to toggle form
    addItemWrapper.addEventListener("click", showFormHandler);
  }
  // Add event to all drop target sections
  addDragDropHandlers(dragSections);
});

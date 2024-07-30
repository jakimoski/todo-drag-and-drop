import { renderInputFormGroup } from "./helpers.js";
//FUNCTION TO RENDER DARG ITEMSS
export function renderDragElement(obj, id, parent) {
    //Increase the value of id
    id++;
    // Create to do item
    const dragItem = document.createElement("div");
    dragItem.classList.add("item");
    dragItem.id = `${id}`; //id is not necessary for this project functionality
    dragItem.draggable = true;
    // To do title
    const itemTitle = document.createElement("h5");
    itemTitle.textContent = obj.title;
    // To do value
    const itemValue = document.createElement("span");
    itemValue.textContent = `${obj.points}`;
    itemTitle.appendChild(itemValue);
    //To do description
    const itemDesc = document.createElement("p");
    itemDesc.textContent = obj.description;
    // Apend title and description to drag item
    dragItem.append(itemTitle, itemDesc);
    parent.append(dragItem);
    return dragItem;
}
// FUNCTION TO RENDER FORM
export function renderForm(parent) {
    const form = document.createElement("form");
    form.classList.add("d-none", "mt-3");
    form.id = "todo-form";
    // Title input
    const titleFormGroup = renderInputFormGroup("input", "todo-title", "To do title", "textarea", "Title...", true);
    // Points input
    const pointsFormGroup = renderInputFormGroup("input", "todo-points", "To Do Points", "number", "Story Points...", true);
    // Description input
    const descFormGroup = renderInputFormGroup("textarea", "todo-desc", "To Do Description", "text", "Description...", true);
    // Submit btn
    const submitButton = document.createElement("button");
    submitButton.id = "todo-submit";
    submitButton.type = "submit";
    submitButton.classList.add("btn", "btn-success", "btn-block", "mb-2");
    submitButton.textContent = "Add";
    form.append(titleFormGroup, pointsFormGroup, descFormGroup, submitButton);
    parent.appendChild(form);
    return form;
}

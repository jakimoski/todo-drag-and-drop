import { dragHelper } from "./helpers.js";
import { renderDragElement } from "./services.js";
export function dragStartHandler(e) {
    // pass the element to drag - add dragging class
    const target = e.target;
    target.classList.add("dragging");
}
export function dragEnterHandler(e) {
    e.preventDefault();
    // Get the section and add shadow
    dragHelper(e.target, true);
}
export function dragOverHandler(e) {
    e.preventDefault();
    // Get the section and add shadow
    dragHelper(e.target, true);
}
export function dragLeaveHandler(e) {
    // Get the section and remove shadow
    dragHelper(e.target, false);
}
export function dropHandler(e) {
    // Get the section and add shadow
    const target = e.target;
    dragHelper(target, false);
    // Get the draggable item and the element where to append(drop target)
    const item = document.querySelector(".dragging");
    const dropTarget = target.closest(".items-list");
    console.log(target === e.target);
    setTimeout(() => {
        // Add it to the drop target
        dropTarget.append(item);
    }, 100);
    // Remove dragging class
    item.classList.remove("dragging");
}
// ADD DRAG AND DROP EVENTS ON ALL TARGET SECTIONS
export function addDragDropHandlers(list) {
    list.forEach((sec) => {
        sec.addEventListener("dragenter", dragEnterHandler);
        sec.addEventListener("dragover", dragOverHandler);
        sec.addEventListener("dragleave", dragLeaveHandler);
        sec.addEventListener("drop", dropHandler);
    });
}
// FUNCTION TO TOGGLE FORM
export function showFormHandler(e) {
    const form = document.querySelector("#todo-form");
    const target = e.target;
    const header = target === null || target === void 0 ? void 0 : target.closest("h5");
    if (target !== header)
        return;
    setTimeout(() => {
        form === null || form === void 0 ? void 0 : form.classList.toggle("d-none");
    }, 100);
}
// Initial drag items ids
let id = 1;
// ON FORM SUBMIT HANDLER
export function onSubmitHandler(e) {
    e.preventDefault();
    // Wrapper for the new to do items
    const newToDoWrapper = (document.querySelector("#to-do .items-list"));
    //Get form and form inputs
    const form = e.target;
    const title = document.querySelector("#todo-title");
    const points = document.querySelector("#todo-points");
    const desc = document.querySelector("#todo-desc");
    //Create obj from input values
    const dragObj = {
        title: title.value,
        points: points.value,
        description: desc.value,
    };
    //Render new to-do drag item
    const newitem = renderDragElement(dragObj, id, newToDoWrapper);
    newitem.addEventListener("dragstart", dragStartHandler);
    //Increase the value of id for next new drag item
    id++;
    // Reset input values
    points.value = title.value = desc.value = "";
    // Hide the form
    form.classList.add("d-none");
    return newitem;
}

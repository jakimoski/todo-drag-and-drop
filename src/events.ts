import { dragHelper } from "./helpers.js";
import { renderDragElement } from "./services.js";
import { DragItem } from "./types.js";

export function dragStartHandler(e: Event): void {
  // pass the element to drag - add dragging class
  const target = <HTMLElement>e.target;
  target.classList.add("dragging");
}

export function dragEnterHandler(e: Event): void {
  e.preventDefault();
  // Get the section and add shadow
  dragHelper(<HTMLElement>e.target, true);
}

export function dragOverHandler(e: Event): void {
  e.preventDefault();
  // Get the section and add shadow
  dragHelper(<HTMLElement>e.target, true);
}

export function dragLeaveHandler(e: Event): void {
  // Get the section and remove shadow
  dragHelper(<HTMLElement>e.target, false);
}

export function dropHandler(e: Event): void {
  // Get the section and add shadow
  const target = <HTMLElement>e.target;
  dragHelper(target, false);
  // Get the draggable item and the element where to append(drop target)
  const item = <HTMLElement>document.querySelector(".dragging");
  const dropTarget = <HTMLElement>target.closest(".items-list");
  console.log(target === e.target);

  setTimeout(() => {
    // Add it to the drop target
    dropTarget.append(item);
  }, 100);

  // Remove dragging class
  item.classList.remove("dragging");
}

// ADD DRAG AND DROP EVENTS ON ALL TARGET SECTIONS
export function addDragDropHandlers(list: NodeList): void {
  list.forEach((sec) => {
    sec.addEventListener("dragenter", dragEnterHandler);
    sec.addEventListener("dragover", dragOverHandler);
    sec.addEventListener("dragleave", dragLeaveHandler);
    sec.addEventListener("drop", dropHandler);
  });
}

// FUNCTION TO TOGGLE FORM
export function showFormHandler(e: Event): void {
  const form = <HTMLFormElement>document.querySelector("#todo-form");
  const target = <HTMLElement>e.target;
  const header = <HTMLElement>target?.closest("h5");
  if (target !== header) return;
  setTimeout(() => {
    form?.classList.toggle("d-none");
  }, 100);
}
// Initial drag items ids
let id = 1;

// ON FORM SUBMIT HANDLER
export function onSubmitHandler(e: Event): HTMLElement {
  e.preventDefault();

  // Wrapper for the new to do items
  const newToDoWrapper = <HTMLElement>(
    document.querySelector("#to-do .items-list")
  );
  //Get form and form inputs
  const form = <HTMLElement>e.target;
  const title = <HTMLInputElement>document.querySelector("#todo-title");
  const points = <HTMLInputElement>document.querySelector("#todo-points");
  const desc = <HTMLInputElement>document.querySelector("#todo-desc");

  //Create obj from input values
  const dragObj: DragItem = {
    title: title.value,
    points: points.value,
    description: desc.value,
  };

  //Render new to-do drag item
  const newItem: HTMLElement = renderDragElement(dragObj, id, newToDoWrapper);
  newItem.addEventListener("dragstart", dragStartHandler);

  //Increase the value of id for next new drag item
  id++;

  // Reset input values
  points.value = title.value = desc.value = "";

  // Hide the form
  form.classList.add("d-none");
  return newItem;
}

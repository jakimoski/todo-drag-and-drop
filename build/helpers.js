// HELPER FUNCTION TO ADD AND REMOVE SHADOW ON DROP TARGETS
export function dragHelper(target, shadow) {
    const targetEl = target;
    const section = targetEl.closest(".section");
    shadow ? section.classList.add("shadow") : section.classList.remove("shadow");
    return section;
}
// HELPER FUNCTION FOR INPUT FORM GROUP ELEMENTS
export function renderInputFormGroup(inputType, id, label, type, placeholder, required) {
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");
    const labelElement = document.createElement("label");
    labelElement.classList.add("d-none");
    labelElement.htmlFor = id;
    labelElement.textContent = label;
    const inputElement = document.createElement(inputType);
    inputElement.id = id;
    inputElement.classList.add("form-control");
    inputType !== "textarea" ? (inputElement.type = type) : "";
    inputElement.required = required;
    inputElement.placeholder = placeholder;
    formGroup.appendChild(labelElement);
    formGroup.appendChild(inputElement);
    return formGroup;
}

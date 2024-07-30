// HELPER FUNCTION TO ADD AND REMOVE SHADOW ON DROP TARGETS
export function dragHelper(target: HTMLElement, shadow: boolean): HTMLElement {
  const targetEl = <HTMLElement>target;
  const section = <HTMLElement>targetEl.closest(".section");
  shadow ? section.classList.add("shadow") : section.classList.remove("shadow");
  return section;
}

// HELPER FUNCTION FOR INPUT FORM GROUP ELEMENTS
export function renderInputFormGroup(
  inputType: string,
  id: string,
  label: string,
  type: string,
  placeholder: string,
  required: boolean
): HTMLElement {
  const formGroup = <HTMLElement>document.createElement("div");
  formGroup.classList.add("form-group");

  const labelElement = <HTMLLabelElement>document.createElement("label");
  labelElement.classList.add("d-none");
  labelElement.htmlFor = id;
  labelElement.textContent = label;

  const inputElement = <HTMLInputElement>document.createElement(inputType);
  inputElement.id = id;
  inputElement.classList.add("form-control");
  inputType !== "textarea" ? (inputElement.type = type) : "";
  inputElement.required = required;
  inputElement.placeholder = placeholder;

  formGroup.appendChild(labelElement);
  formGroup.appendChild(inputElement);

  return formGroup;
}

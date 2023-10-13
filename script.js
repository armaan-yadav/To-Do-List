const mainOutput = document.querySelector(".main-output");
const formInput = document.querySelector("#form-input");
const formBtn = document.querySelector(".form-btn");
const formDonee = document.querySelector(".form-donee");
let editBtn = document.querySelectorAll(".edit");
let deleteBtn = document.querySelectorAll(".delete");
let outputs;

function addTask() {
  if (formInput.value) {
    const newDiv = document.createElement("div");
    const newDivSpan = document.createElement("span");
    newDivSpan.textContent = formInput.value;
    const newDivDiv = document.createElement("div");
    const newDivBtn1 = document.createElement("button");
    newDivBtn1.classList.add("edit");
    newDivBtn1.innerHTML = `Edit`;
    const newDivBtn2 = document.createElement("button");
    newDivBtn2.classList.add("delete");
    newDivBtn2.innerHTML = `Delete`;
    newDiv.classList.add("output");
    newDiv.appendChild(newDivSpan);
    newDivDiv.appendChild(newDivBtn1);
    newDivDiv.appendChild(newDivBtn2);
    newDiv.appendChild(newDivDiv);
    mainOutput.appendChild(newDiv);
  }
  formInput.value = "";
}

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   empty string is a falsy value
  addTask();
  editBtn = document.querySelectorAll(".edit");
  deleteBtn = document.querySelectorAll(".delete");
  outputs = document.querySelectorAll(".output");
  deleteTask();
  editTask();
});

function deleteTask() {
  deleteBtn.forEach((x) => {
    x.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    });
  });
}

function editTask() {
  editBtn.forEach((x) => {
    x.addEventListener("click", (e) => {
      formBtn.style.display = "none";
      formDonee.style.display = "block";
      formInput.value =
        e.target.parentElement.parentElement.children[0].textContent;
      formInput.focus();
      formDonee.addEventListener("click", (f) => {
        f.preventDefault();
        console.log(
          e.target.parentElement.parentElement.children[0].textContent,
          formInput.value
        );
        e.target.parentElement.parentElement.children[0].textContent =
          formInput.value;
        formDonee.style.display = "none";
        formBtn.style.display = "block";
        formInput.value = "";
      });
    });
  });
}

// const x = document.querySelector(".x");

// x.addEventListener("click", () => {
//   mainOutput.children[0].children[0].style.textDecoration = "line-through";
//   mainOutput.children[0].parentNode.appendChild(mainOutput.children[0]);
// });

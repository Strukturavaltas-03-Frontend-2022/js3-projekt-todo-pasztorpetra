// date 

const timeDisplay= () => {
  const date = new Date();
 
  let mm = date.getMonth()+1;
  let dd = date.getDate();
  let yyyy = date.getFullYear();

  mm = (mm < 10) ? "0" + mm : mm;
  dd = (dd < 10) ? "0" + dd : dd;
  yyyy = (yyyy < 10) ? "0" + yyyy : yyyy;
  
  document.querySelector(".month").innerHTML = mm;
  document.querySelector(".day").innerHTML = dd;
  document.querySelector(".year").innerHTML = yyyy;
}
setInterval(timeDisplay, 1000);

//function
// getting all required elements

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
}

showTasks();

addBtn.onclick = () => {
  let userData = inputBox.value;
  let getLocalStorage = localStorage.getItem("new Todo");
  if (getLocalStorage == null) {
    listArr = [];
  }else {
    listArr = JSON.parse(getLocalStorage);
  }
  listArr.push(userData);
  localStorage.setItem("New Todo", JSON.stringify(listArr)); 
  showTasks();
}

const showTasks = () => {
  let getLocalStorage = localStorage.getItem("new Todo");
  if (getLocalStorage == null) {
    listArr = [];
  }else {
    listArr = JSON.parse(getLocalStorage);
  }
  const pendingNumb = document.querySelector(".pendingNumb");
  pendingNumb.texcontent = listArr.length;
  let newTag = '';
  listArr.forEach((element, index) => {
    newTag += `<input type="checkbox" name=${index} value=${index}><label>input type="checkbox"><label for=${index}>${element}</label>
    <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span>`;
  });
  todoList.innerHTML = newTag;
  inputBox.value = "";
}

const deleteTask = (index) => {
  let getLocalStorage = localStorage.getItem("new Todo");
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1);

  localStorage.setItem("New Todo", JSON.stringify(listArr)); 
  showTasks();
}

deleteAllBtn.onclick = () => {
  listArr = [];
  localStorage.setItem("New Todo", JSON.stringify(listArr)); 
  showTasks();
}

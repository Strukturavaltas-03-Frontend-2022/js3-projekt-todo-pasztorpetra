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

inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
}

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
}

function showTasks() {
  let getLocalStorage = localStorage.getItem("new Todo");
  if (getLocalStorage == null) {
    listArr = [];
  }else {
    listArr = JSON.parse(getLocalStorage);
  }
  let newTag = '';
  listArr.forEach((element, index) => {
    newTag = ``;
  });
}

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
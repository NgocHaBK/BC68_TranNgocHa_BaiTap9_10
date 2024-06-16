function handleSubmit(e) {
    e.preventDefault();
    console.log("bạn vào form")
  let inputUser = document.querySelectorAll("#formQLSV input,#formQLSV select");
  console.log(inputUser);
};
document.getElementById("formQLSV").onsubmit = handleSubmit;
console.log("bạn vào index")
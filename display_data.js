$(document).ready(function () {
  getData();
});

function getData() {
  let localStorageData = localStorage.getItem("student");
  let studentObj = JSON.parse(localStorageData);
  console.log(studentObj);
  $("#Firstname").text(studentObj.Firstname);
  $("#Lastname").text(studentObj.Lastname);
  $("#Email").text(studentObj.Email);
  $("#Username").text(studentObj.Username);
  $("#Password").text(studentObj.Password);
}

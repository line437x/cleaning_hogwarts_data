"use strict";

// to do: trim first names
// to do: make all names first letter upperCase and the rest lowerCase

window.addEventListener("load", getJson);
let students;
const allStudents = [];

async function getJson() {
  const url = "https://petlatkea.dk/2021/hogwarts/students.json";
  let data = await fetch(url);
  students = await data.json();

  console.table(students);

  createStudents();
}

function createStudents() {
  students.forEach((object) => {
    // Define a template for the data objects
    const Student = {
      firstName: "",
      lastName: "",
      middleName: "",
      nickName: "",
      image: "",
      house: "",
    };
    // create a objects from a prototype
    const student = Object.create(Student);

    // ----- First name -----
    //Trim objects
    let originalName = object.fullname.trim();
    let originalMiddleName = originalName.substring(originalName.indexOf(" "), originalName.lastIndexOf(" ")).trim();
    //Find first name in string
    if (originalName.includes(" ")) {
      student.firstName = originalName.substring(0, 1).toUpperCase() + originalName.substring(1, originalName.indexOf(" "));
    } else {
      student.firstName = originalName.substring(0, 1).toUpperCase() + originalName.substring(1);
    }
    //Change to upper- and lower case
    student.firstName = student.firstName.substring(0, 1).toUpperCase() + student.firstName.substring(1).toLowerCase();

    // ----- Last name -----
    //Find last name in string
    student.lastName = originalName.substring(originalName.lastIndexOf(" ") + 1);
    //Change to upper- and lower case
    student.lastName = student.lastName.substring(0, 1).toUpperCase() + student.lastName.substring(1).toLowerCase();

    //----- Middle name -----
    // student.middleName = originalName.substring(originalName.indexOf(" ") + 1, originalName.lastIndexOf(" "));

    //----- Nick name -----
    //Trim objects
    if (originalName.includes('"')) {
      student.nickName = originalName.substring(originalName.indexOf('"') + 1, originalName.lastIndexOf('"'));
    }
    // // ----- Image -----
    //Find the right image
    student.image = "images/" + student.lastName + ".png";

    // ----- House -----
    //Trim objects
    let originalHouse = object.house.trim();
    //Find the name of the house
    student.house = originalHouse;
    //Change to upper- and lower case
    student.house = student.house.substring(0, 1).toUpperCase() + student.house.substring(1).toLowerCase();
    console.table(student);
  });
  //   displayList();
}

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

    // Split fullname into several parts
    let originalName = object.fullname.trim();
    let splitNames = originalName.split(" ");
    // ----- First name -----
    student.firstName = splitNames[0];
    student.firstName = student.firstName.substring(0, 1).toUpperCase() + student.firstName.substring(1).toLowerCase();
    // ----- Last name -----
    student.lastName = splitNames[-1];
    // student.lastName = student.lastName.substring(0, 1).toUpperCase() + student.lastName.substring(1).toLowerCase();
    //----- Middle name -----

    //----- Nick name -----

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

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

  prepareObjects();
}

function prepareObjects() {
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
    const studentInfo = Object.create(Student);
  });

  //   displayList();
}

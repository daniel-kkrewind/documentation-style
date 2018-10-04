/**
 * This is the description for the hello function
 * @param {object}person - Person object
 * @param {string}person.firstName - First name to be printed
 * @param {string}person.lastName - Last name to be printed
 */
const hello = (person) => {
  console.log("hello world");
  console.log("hello" + person.firstName + person.lastName);
}

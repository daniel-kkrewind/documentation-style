
type PersonObject = {
  firstName: string,
  lastName: string;
}

/**
 * This is the description for the hi function
 * @param person - A container object
 * @param {string}person.firstName - First name to be printed
 * @param {string}person.lastName - Last name to be printed
 */
const ts_hi = (person: PersonObject) => {
  console.log(person.firstName + person.lastName);
}

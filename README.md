Technical Documentations

Executive Summary:

Code commenting style is the same for both generators. That means we can change generators at any time without needing to amend the code comments.

My preferred documentation generator: JSDocs.
Reasons:

More widely supported
TypeDocs has slower performance. Might become a problem when project scales up.
Allows AWS API parameter nesting
More customization options (i.e. More themes to choose from, more options incase themes don't suit requirements)
Documentation Generator:

JSDocs for Javascript Documentation https://github.com/jsdoc3/jsdoc
TypeDocs for Typescript Documentation http://typedoc.org/
Choose one or the other.
Installation:

Both applications uses npm. So just run:
npm install --global typedoc
or
npm install --global jsdoc
JSDoc Operation:

For single/multiple files:
jsdoc file1.js file2.js
For entire project:
jsdoc -r projectFolder
HTML Files will be located in a folder named 'out'
Note: Transpile Typescript files into .js files before running JSDoc

TypeDoc Operation:

For entire project:
typedoc --out path/to/documentation path/to/typescript/project
TypeDoc will only generate documentation for .ts files.
Note: If you want TypeDoc to generate documentation for .js files, refer to:
https://github.com/TypeStrong/typedoc/issues/643

Themes:

TypeDoc has 2 themes to choose from: http://typedoc.org/guides/themes/
JSDocs has a few:
- https://github.com/clenemt/docdash
- http://docstrap.github.io/docstrap/themes/lumen/index.html
- https://github.com/danyg/jsdoc3Template/wiki#screenshots

Code Commenting Guide:

Quick example:

/** This line is for function description
 * @param {string} name - Person's name.
 * @param {integer} age - Person's age
 * @param {object} child- Person's child object
 * @param {string} child.fname - Child's first name
 * @param {integer} child.age - Child's age
 */
function Person(name, age, child) {
console.log('hello' + name);
};
For more detailed guides:

http://usejsdoc.org/about-getting-started.html
(See JSDoc Examples) http://usejsdoc.org/index.html
Worth reading:
Typescript can understand JSDoc comments (which helps with writing less buggy code)
https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript

A large collection of articles regarding technical documentation:
https://github.com/PharkMillups/beautiful-docs

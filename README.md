Technical Documentations

### Executive Summary:
Code commenting style is the same for both generators. That means we can change generators at any time without needing to amend the code comments.

My preferred documentation generator: JSDocs.
Reasons:
1. More widely supported
2. TypeDocs has slower performance. Might become a problem when project scales up.
3. Allows AWS API parameter nesting
4. More customization options (i.e. More themes to choose from, more options incase themes don't suit requirements)

### Code Commenting Guide:
#### Quick example:
```javascript
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
```
For more detailed guides:
- http://usejsdoc.org/about-getting-started.html
- (See JSDoc Examples) http://usejsdoc.org/index.html

### Documentation Generator:
1. JSDocs for Javascript Documentation https://github.com/jsdoc3/jsdoc
2. TypeDocs for Typescript Documentation http://typedoc.org/
_Choose one or the other._

#### Installation:
- Both applications uses npm. So just run:
<code> npm install --global typedoc</code>
or
<code> npm install --global jsdoc</code>

#### JSDoc Operation:
- For single/multiple files:
<code>jsdoc file1.js file2.js</code>
- For entire project:
<code>jsdoc -r projectFolder</code>

HTML Files will be located in a folder named 'out'
Note: Transpile Typescript files into .js files before running JSDoc

#### TypeDoc Operation:
- For entire project:
<code> typedoc --out path/to/documentation path/to/typescript/project </code>

TypeDoc will only generate documentation for .ts files.
Note: If you want TypeDoc to generate documentation for .js files, refer to:
https://github.com/TypeStrong/typedoc/issues/643


#### Themes:
TypeDoc has 2 themes to choose from: http://typedoc.org/guides/themes/
JSDocs has a few:
	- https://github.com/clenemt/docdash
	- http://docstrap.github.io/docstrap/themes/lumen/index.html
	- https://github.com/danyg/jsdoc3Template/wiki#screenshots

#### Worth reading:
Typescript can understand JSDoc comments (which helps with writing less buggy code)
https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript

A large collection of articles regarding technical documentation:
https://github.com/PharkMillups/beautiful-docs

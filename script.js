// so we dont get style and classes mixed up with the JS, we'll use data attributes instead of classes for the numbers and symbols

// grab all number buttons // data attr must be inside of brackets
const numberButtons = document.querySelectorAll('[data-number]')

const operationButtons = document.querySelectorAll('[data-operation]')
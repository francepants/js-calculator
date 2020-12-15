//1
// so we dont get style and classes mixed up with the JS, we'll use data attributes instead of classes for the numbers and symbols
// grab all number buttons // data attr must be inside of brackets
const numberButtons = document.querySelectorAll('[data-number]')

// grab all operations
const operationButtons = document.querySelectorAll('[data-operation]')

// since there's only one equals, we use query selecter (without the all) to grab the single element
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

//6
// create a calculator

//2
class Calculator {
    //3
    // constructor: takes all inputs for it, as well as all functions for calculator
    constructor(previousOperandTextElement, currentOperandTextElement) {
        //these give us a way to set text elements inside of our class
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement

        //5
        this.clear() //call the function // clear all inputs and set them to default every time we create a calculator
    }

    //4
    // define functions that our calc will perform
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined //since there are no operations since it was cleared
    }

    delete() {

    }

    appendNumber(number) {
 
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}

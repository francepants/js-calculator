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
        //9 - to make sure calc is working
        // this.currentOperand = number

        //use toString because we want our numbers to be appended and not added
        //also want the '.' to be added only once
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    //11
    chooseOperation(operation) {
        if (this.currentOperand === '') return  //13
        if (this.previousOperand !== '' ) { //14 will update variables as we need
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {

    }

    updateDisplay() {
        // 8 - to make sure calc is working
        this.currentOperandTextElement.innerText = this.currentOperand
        //12
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}


//6
// create a calculator
// pass in everything from constructor
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//7 select number buttons // loop through btns and add event listener for each whenver we click on the btn
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        //append whatever text is inside btn that's clicked
        calculator.appendNumber(button.innerText) 
        // display the values
        calculator.updateDisplay()
    })
})

//10 choose operation
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        //append whatever text is inside btn that's clicked
        calculator.chooseOperation(button.innerText) 
        // display the values
        calculator.updateDisplay()
    })
})
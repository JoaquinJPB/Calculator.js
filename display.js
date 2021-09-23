class Display{
    constructor(displayPreviousValue, displayActualValue){
        this.displayPreviousValue = displayPreviousValue;
        this.displayActualValue = displayActualValue;
        this.calculator = new Calculator();
        this.actualValue = '';
        this.previousValue = '';
    }

    addNumber(number){
        this.actualValue = number;
        this.printValues();
    }

    printValues(){
        this.displayActualValue.textContent = this.actualValue;
        this.displayPreviousValue.textContent = this.previousValue;
    }
}
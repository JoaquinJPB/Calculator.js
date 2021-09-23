class Display{
    constructor(displayPreviousValue, displayActualValue){
        this.displayPreviousValue = displayPreviousValue;
        this.displayActualValue = displayActualValue;
        this.operatorType = undefined;
        this.calculator = new Calculator();
        this.actualValue = '';
        this.previousValue = '';
    }

    clear(){
        this.actualValue = this.actualValue.toString().slice(0,-1);
        this.printValues();
    }

    clearAll(){
        this.actualValue = '';
        this.previousValue = '';
        this.operatorType = undefined;
        this.printValues();
    }

    addNumber(number){
        if(number === '.' && this.actualValue.includes('.')) return
        this.actualValue = this.actualValue.toString() + number.toString();
        this.printValues();
    }

    printValues(){
        this.displayActualValue.textContent = this.actualValue;
        this.displayPreviousValue.textContent = this.previousValue;
    }
}
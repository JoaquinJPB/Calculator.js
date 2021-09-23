class Display{
    constructor(displayPreviousValue, displayActualValue){
        this.displayPreviousValue = displayPreviousValue;
        this.displayActualValue = displayActualValue;
        this.operatorType = undefined;
        this.calculator = new Calculator();
        this.actualValue = '';
        this.previousValue = '';
        this.operators = {
            sum: '+',
            subtract: '-',
            multiply: '*',
            divide: '/'
        }
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

    compute(type){
        this.operatorType !== 'equal' && this.calculate();
        this.operatorType = type;
        this.previousValue = this.actualValue || this.previousValue;
        this.actualValue = '';
        this.printValues();
    }

    addNumber(number){
        if(number === '.' && this.actualValue.includes('.')) return
        this.actualValue = this.actualValue.toString() + number.toString();
        this.printValues();
    }

    printValues(){
        this.displayActualValue.textContent = this.actualValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.operators[this.operatorType] || ''}`;
    }

    calculate(){
        const previousValue = parseFloat(this.previousValue);
        const actualValue = parseFloat(this.actualValue);

        if (isNaN(actualValue) || isNaN(previousValue)) return
        this.actualValue = this.calculator[this.operatorType](previousValue, actualValue);
    }
}
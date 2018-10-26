const INNER_CONTAINER_NAME = 'calculator-container';
const HEAD_NAME = 'calculator-head';
const BODY_NAME = 'calculator-body';

class Calculator {

    // List of all symbols
    get symbolsMethods() {
        return [
            { id: 'plus', name: '+', method: () => this.addToInput('+') },
            { id: 'minus', name: '-', method: () => this.addToInput('-') },
            { id: 'mult', name: '*', method: () => this.addToInput('*') },
            { id: 'div', name: '/', method: () => this.addToInput('/') },
            { id: 'space', name: '_', method: () => this.addToInput(' ') },
            { id: 'left', name: '(', method: () => this.addToInput('(') },
            { id: 'right', name: ')', method: () => this.addToInput(')') }
        ];
    }

    // List of actions
    get actionsMethods() {
        return [
            { id: 'previous', name: 'previous', method: () => this.navigateToMemory(-1) },
            { id: 'next', name: 'next', method: () => this.navigateToMemory(1) },
            { id: 'remove', name: 'delete', method: () => this.removeLast() },
            { id: 'reset', name: 'reset', method: () => this.input.value = '' },
            { id: 'enter', name: 'enter', method: () => this.computeEval() }
        ];
    }

    // List of digits
    get digitsList() {
        return  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    }

    constructor(containerId) {
        // init memory feature
        this.memory = [];
        this.currentMemoryIdx = 0;
        // Build calculator in the div
        this.container = document.getElementById(containerId);
        this.buildCalculator();
    }

    // Build the calculator HTML and events
    buildCalculator() {
        this.container.innerHTML += '<div class="' + INNER_CONTAINER_NAME + '">\
                                        <div class="' + HEAD_NAME + '">\
                                        </div>\
                                        <div class="' + BODY_NAME + '">\
                                        </div>\
                                    </div>';
        this.buildCalculatorHead();
        this.buildCalculatorBody();
    }

    // Build the calculator head
    buildCalculatorHead() {
        this.head = this.container.getElementsByClassName(HEAD_NAME)[0];
        this.head.innerHTML += '<input type="text" disabled/>';
        this.input = this.head.querySelector('input');
    }

    // Build the calcultor body
    buildCalculatorBody() {
        this.body = this.container.getElementsByClassName(BODY_NAME)[0];
        this.body.innerHTML += '<div class="symbols"></div><div class="actions"></div><div class="digits"></div>';
        this.symbols = this.body.querySelector('.symbols');
        this.symbolsMethods.forEach(s => this.symbols.innerHTML += '<div class="button" data-id="' + s.id + '">' + s.name + '</div>');
        this.symbolsMethods.forEach(s => this.symbols.querySelector('[data-id="' + s.id + '"]').addEventListener('click', s.method));
        this.actions = this.body.querySelector('.actions');
        this.actionsMethods.forEach(a => this.actions.innerHTML += '<div class="button" data-id="' + a.id + '">' + a.name + '</div>');
        this.actionsMethods.forEach(a => this.actions.querySelector('[data-id="' + a.id + '"]').addEventListener('click', a.method));
        this.digits = this.body.querySelector('.digits');
        this.digitsList.forEach(d => this.digits.innerHTML += '<div class="button digit" data-id="' + d + '">' + d + '</div>');
        this.digitsList.forEach(d => this.digits.querySelector('[data-id="' + d + '"]').addEventListener('click', () => this.addToInput(d)));
    }

    // Add the given character to the input value
    addToInput(character) {
        this.input.value += character;
    }

    // Remove last character of the input value
    removeLast() {
        this.input.value = this.input.value.slice(0, -1);
    }

    // Navigate in the memory
    navigateToMemory(offset) {
        if (this.currentMemoryIdx + offset >= 0 && this.currentMemoryIdx + offset < this.memory.length) {
            this.currentMemoryIdx += offset;
            this.input.value = this.memory[this.currentMemoryIdx];
        }
    }

    // Compute the eval (2 + 2 => 4)
    computeEval() {
        const result = eval(this.input.value);

        this.input.value = result;
        // Push in memory
        this.memory.push(result);
        this.currentMemoryIdx = this.memory.length - 1;
    }

};
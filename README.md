# CAUcalculator
Write an interative calculator program providing the following features using HTML, CSS, and Javascript.

- Basic arithmetic operators (+, -, *, /)

- Parenthsis

- Memory

## Requirements

Nothing, just need a browser to see the index.html

## Design

All the design are in the CSS files, everything was made to make this calculator like a module.
It can be move to any website, very easily.

## Why it's a special calculator ?

It's because I did everything to make it like a module, you just need to write this :  
`const calculator = new Calculator('The div id where the calculator need to happen')`

With of course before a link to the script :  
`<script type="text/javascript" src="./js/calculator/index.js"></script>`

So, all the calculator is modular too, in the Javascript code,  
you will see that all the buttons / interactions are just arrays of objects.  
Like this:  
```
return [
         { id: 'previous', name: 'long-arrow-alt-left', method: () => this.navigateToMemory(-1) },
         { id: 'next', name: 'long-arrow-alt-right', method: () => this.navigateToMemory(1) },
         { id: 'remove', name: 'backspace', method: () => this.removeLast() },
         { id: 'reset', name: 'eraser', method: () => this.input.value = '' },
         { id: 'enter', name: 'equals', method: () => this.computeEval() }
       ];
```

## References

I used Awesome Fonts icons for this calculator, this is the website :  
https://fontawesome.com/icons

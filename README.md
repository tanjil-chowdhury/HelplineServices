Q1- difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: In getElementById we select id and in getElementsByClassName we select Class name . in  querySelector we select css class but in returns only first match of the class. so we use querySelectorAll where we also select css but it returns all in node list.


Q2- How do you create and insert a new element into the DOM?
Ans: First Create the element 
example; let new = document.createElement("p"); 
then, Add content
example; new.innerText = "Hello world";

Add attributes / classes
new.id = "newPara";              
new.className = "highlight";

append into the DOM
document.body.appendChild(new);

Q3: What is Event Bubbling and how does it work?
Ans: when an event happens on an element, it first runs the event handlers on that element, then it  bubbles up the DOM tree.
when we click an element, event fires on the target first, then event “bubbles up” to the parent the it goes to  parent’s parent like body, then <html>, the document. and last it end at document.

Q4: What is Event Delegation in JavaScript? Why is it useful?
Ans:  It is define when we attach one event listener to a common parent element.
Because of event bubbling, events triggered on the children will bubble up to the parent, and the parent’s single event listener can catch them.
It is useful because  by ust one listener on a parent can handle all children.

Q5: What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() stops the browser’s default behavior for that event and stopPropagation() stops the event from propagating  through the DOM.

let stack = [];

function push() {
    const input = document.getElementById('stackInput').value;
    if (input === "") {
        alert("Please enter a value.");
        return;
    }
    stack.push(input);
    document.getElementById('stackInput').value = "";
    displayStack();
}

function pop() {
    if (stack.length === 0) {
        alert("Stack is empty, cannot pop.");
        return;
    }
    stack.pop();
    displayStack();
}

function displayStack() {
    const stackContainer = document.getElementById('stack');
    stackContainer.innerHTML = '';
    for (let i = stack.length - 1; i >= 0; i--) {
        const div = document.createElement('div');
        div.className = 'stack-item';
        div.textContent = stack[i];
        stackContainer.appendChild(div);
    }
}

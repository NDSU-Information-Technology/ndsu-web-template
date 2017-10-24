
if (typeof enableCodeExample !== 'undefined' && enableCodeExample) {
    Array.prototype.forEach.call(document.querySelectorAll('.code-example, .language-html'), (element) => {
        let elementId = element.getAttribute('id');
        if (!elementId) {
            elementId = 'codeExample_' + Math.random().toString(36).substr(2, 10);
            element.setAttribute('id', elementId);
        }

        let sourceCodeElement = element.querySelector('.code-source, pre.highlight');
        if (!sourceCodeElement) return;

        let sourceCode;
        if (sourceCodeElement.nodeName === 'TEXTAREA'){
            sourceCode = sourceCodeElement.value;
        }
        else if (sourceCodeElement.nodeName === 'PRE'){
            sourceCode = sourceCodeElement.innerText;
        }

        if (!sourceCode) return;
        let sourceCodeElementId = sourceCodeElement.getAttribute('id');
        if (!sourceCodeElementId) {
            sourceCodeElementId = elementId + '_sourceCode';
            sourceCodeElement.setAttribute('id', sourceCodeElementId);
        }
        sourceCodeElement.style.height = sourceCodeElement.scrollHeight + 'px';
        let sourceCodeLabel = document.createElement('h5');
        sourceCodeLabel.innerText = 'Source Code';

        let resultElement = document.createElement('div');
        let resultElementId = elementId + '_result';
        resultElement.setAttribute('id', resultElementId);
        resultElement.className = 'code-result';
        resultElement.innerHTML = sourceCode;
        let resultLabel = document.createElement('h5');
        resultLabel.innerText = 'Result';
        
        let sourceCodeParentElement = sourceCodeElement.parentElement;
        let beforeElement = sourceCodeParentElement === element ? sourceCodeElement : sourceCodeParentElement;

        element.insertBefore(sourceCodeLabel, beforeElement);
        element.appendChild(resultLabel);
        element.appendChild(resultElement);

        // TODO: Implement Tabbing
        // http://w3c.github.io/aria-practices/examples/tabs/tabs-1/tabs.html
    });
}
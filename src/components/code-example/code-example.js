
if (typeof enableCodeExample !== 'undefined' && enableCodeExample) {
    Array.prototype.forEach.call(document.querySelectorAll('.code-example, .language-html'), (element) => {
        var elementId = element.getAttribute('id');
        if (!elementId) {
            elementId = 'codeExample_' + Math.random().toString(36).substr(2, 10);
            element.setAttribute('id', elementId);
        }

        var sourceCodeElement = element.querySelector('.code-source, pre.highlight');
        if (!sourceCodeElement) return;

        var sourceCode;
        if (sourceCodeElement.nodeName === 'TEXTAREA'){
            sourceCode = sourceCodeElement.value;
        }
        else if (sourceCodeElement.nodeName === 'PRE'){
            sourceCode = sourceCodeElement.innerText;
        }

        if (!sourceCode) return;
        var sourceCodeElementId = sourceCodeElement.getAttribute('id');
        if (!sourceCodeElementId) {
            sourceCodeElementId = elementId + '_sourceCode';
            sourceCodeElement.setAttribute('id', sourceCodeElementId);
        }
        sourceCodeElement.style.height = sourceCodeElement.scrollHeight + 'px';
        var sourceCodeLabel = document.createElement('h5');
        sourceCodeLabel.innerText = 'Source Code';

        var resultElement = document.createElement('div');
        var resultElementId = elementId + '_result';
        resultElement.setAttribute('id', resultElementId);
        resultElement.className = 'code-result';
        resultElement.innerHTML = sourceCode;
        var resultLabel = document.createElement('h5');
        resultLabel.innerText = 'Result';
        
        element.insertBefore(sourceCodeLabel, sourceCodeElement);
        element.appendChild(resultLabel);
        element.appendChild(resultElement);

        // TODO: Implement Tabbing
        // http://w3c.github.io/aria-practices/examples/tabs/tabs-1/tabs.html
    });
}
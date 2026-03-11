// Code block copy-to-clipboard functionality
// Wraps each .highlight block with a container and adds a copy button.
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var highlights = document.querySelectorAll('.highlight');

    highlights.forEach(function (block) {
      // Create wrapper
      var wrapper = document.createElement('div');
      wrapper.className = 'highlight-wrapper';
      block.parentNode.insertBefore(wrapper, block);
      wrapper.appendChild(block);

      // Create copy button
      var button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copy';
      button.setAttribute('aria-label', 'Copy code to clipboard');
      button.type = 'button';
      wrapper.appendChild(button);

      button.addEventListener('click', function () {
        // Get the code text (from the <code> element inside <pre>)
        var code = block.querySelector('pre code');
        if (!code) {
          code = block.querySelector('pre');
        }
        if (!code) return;

        var text = code.textContent || code.innerText;

        navigator.clipboard.writeText(text).then(function () {
          button.textContent = 'Copied!';
          button.classList.add('copied');
          setTimeout(function () {
            button.textContent = 'Copy';
            button.classList.remove('copied');
          }, 2000);
        }).catch(function () {
          // Fallback for older browsers
          var textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand('copy');
            button.textContent = 'Copied!';
            button.classList.add('copied');
            setTimeout(function () {
              button.textContent = 'Copy';
              button.classList.remove('copied');
            }, 2000);
          } catch (e) {
            button.textContent = 'Error';
          }
          document.body.removeChild(textarea);
        });
      });
    });
  });
})();

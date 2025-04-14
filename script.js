const keys = document.querySelectorAll('.key');
const output = document.getElementById('output');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const value = key.textContent.trim().toLowerCase();
    key.classList.add('active');
    setTimeout(() => key.classList.remove('active'), 150);

    switch (value) {
      case 'space':
        output.value += ' ';
        break;
      case 'return':
        output.value += '\n';
        break;
      case 'delete':
        output.value = output.value.slice(0, -1);
        break;
      case 'tab':
        output.value += '\t';
        break;
      case 'caps':
      case 'shift':
      case 'command':
      case 'option':
      case 'control':
      case 'fn':
       
        break;
      case '←':
        output.selectionStart = output.selectionEnd = Math.max(0, output.selectionStart - 1);
        break;
      case '→':
        output.selectionStart = output.selectionEnd = output.selectionEnd + 1;
        break;
      case '↑':
      case '↓':
        
        break;
      default:
        output.value += key.textContent;
        break;
    }
  });
});

    const list = document.querySelector('#myList');
    const button = document.getElementById('addBtn');

    button.addEventListener('click', () => {
      const newItem = document.createElement('li');
      const itemCount = list.children.length + 1;
      newItem.textContent = `New Item ${itemCount}`;

      // Check if the position is odd
      if (itemCount % 2 !== 0) {
        newItem.classList.add('odd-style');
      }

      list.appendChild(newItem);
    });
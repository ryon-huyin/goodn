
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Im going to sleep now. Good night, Kezia.').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 80); // 80ms delay untuk efek mengetik
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
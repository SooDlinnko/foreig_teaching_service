document.querySelectorAll('.radio-input').forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.checked) {
        console.log('Радиокнопка выбрана');
      }
    });
  });
  
const colors = {
    default2: "#E0E0E0",
    success5: "#2EEB36"
};

document.querySelectorAll('.toggle-input').forEach(toggle => {
    toggle.addEventListener('change', function () {
        this.parentElement.style.backgroundColor = this.checked ? colors.success5 : colors.default2;
    });
});

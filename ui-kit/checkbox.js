class Checkbox {
    constructor(selector) {
      this.checkbox = document.querySelector(selector);
      if (!this.checkbox) return;
  
      this.input = this.checkbox.querySelector("input");
      this.box = this.checkbox.querySelector(".checkbox-box");
  
      this.input.addEventListener("change", () => this.updateState());
    }
  
    updateState() {
      if (this.input.checked) {
        this.checkbox.classList.remove("error"); // Убираем ошибку
      }
    }
  
    setError() {
      this.input.checked = true;
      this.checkbox.classList.add("error");
    }
  }
  
  // Использование:
  document.addEventListener("DOMContentLoaded", () => {
    new Checkbox(".checkbox");
  });
  
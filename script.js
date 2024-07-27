const convertBtn = document.querySelector("#convert-btn");
    const input = document.querySelector("#number");
    const outputBox = document.querySelector("#output");

    convertBtn.addEventListener("click", () => {
      inputHandle();
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        inputHandle();
      }
    });

    function inputHandle() {
      const value = input.value;
      if (value === "") {
        outputBox.classList.remove('output');
        outputBox.classList.add('output-box-red');
        outputBox.innerHTML = `<p id="output">Please enter a valid number</p>`;
      } else if(value < 1){
 outputBox.classList.remove('output');
        outputBox.classList.add('output-box-red');
        outputBox.innerHTML = `<p id="output">Please enter a number greater than or equal to 1</p>`;
      }
      else if (value > 3999) {
        outputBox.classList.remove('output');
        outputBox.classList.add('output-box-red');
        outputBox.innerHTML = `<p id="output">Please enter a number less than or equal to 3999.</p>`;
      } else {
        outputBox.classList.remove('output-box-red');
        outputBox.classList.add('output');
        outputBox.innerHTML = `<p id="output">${decimalToRoman(value)}</p>`;
      }
    }

    function decimalToRoman(num) {
      const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
      ];

      let result = '';
      for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
          result += romanNumerals[i].symbol;
          num -= romanNumerals[i].value;
        }
      }
      return result;
    }
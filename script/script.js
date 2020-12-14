'use strict';

//аккордеон
const accordeon = () => {
  const accordeonItem = document.querySelectorAll('.question-item');
  
  accordeonItem.forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.answer'),
      arrow = item.querySelector('.arrow');

      answer.classList.toggle('check-active');
      if (answer.classList[1]) {
          arrow.style.cssText = `
      transform: rotate(90deg);
      `;
      } 
      else {
      arrow.style.cssText = `
      transform: rotate(0deg);
      `;
      }
    });
  });
};
accordeon();



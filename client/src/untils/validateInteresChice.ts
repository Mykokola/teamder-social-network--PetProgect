import React from "react";
export const validateFruitSelection = (value:string[]) => {
    // 'value' - це масив вибраних чекбоксів (значень фруктів)
    return value && value.length > 0 || 'Будь ласка, оберіть хоча б один фрукт';
  };
  
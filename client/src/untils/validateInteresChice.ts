import React from "react";
export const validateInteresSelection = (value:string[]) => {
    return value && value.length > 0 || 'Будь ласка, оберіть хоча б один фрукт';
  };
  
import { Request } from "express";
declare module 'express' {
    interface Request {
      user: any; // Тип `user` зазвичай буде об'єктом або моделлю користувача
    }
  }

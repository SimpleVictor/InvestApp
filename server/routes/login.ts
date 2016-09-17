import { Router, Request, Response, NextFunction } from "express";



const loginRouter: Router = Router();


loginRouter.post("/signup", function (request: Request, response: Response, next: NextFunction) {

});

// login method
loginRouter.post("/", function (request: Request, response: Response, next: NextFunction) {

});

export { loginRouter }

import { Router, Request, Response, NextFunction } from "express";



const loginRouter: Router = Router();


loginRouter.post("/data", function (request: Request, response: Response, next: NextFunction) {
    let sendMe;

    let workWithMe = request.body;

    response.json(sendMe);
});

export { loginRouter }

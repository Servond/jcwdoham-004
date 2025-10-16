import { Router, Request, Response, NextFunction } from "express";

// data object sementara
const users = [
  {
    id: 1,
    name: "Budi",
    email: "budi@gmail.com",
    password: "budi123",
  },
  {
    id: 2,
    name: "Siti",
    email: "siti@gmail.com",
    password: "siti123",
  },
];

const userRouter = Router();

// GET http://localhost:8080/api/users
userRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      message: "OK",
      data: users,
    });
  } catch (err) {
    next(err);
  }
});

// GET http://localhost:8080/api/users/4
userRouter.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params; // req.params.id
    const user = users.filter((user) => user.id === Number(id))[0];

    res.json({
      message: "OK",
      data: user,
    });
  } catch (err) {
    next(err);
  }
});
export default userRouter;

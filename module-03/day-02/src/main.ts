import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import router from "./routers";

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

// // global middleware
// // app.use((req: Request, res: Response, next: NextFunction) => {
// //   console.log("application level middleware");
// //   console.log(`${req.method} - ${req.url} - ${new Date()}`);
// //   next();
// // });

// // Routing ke resources users dimana akan mengambil semua data user
// app.get("/api/users", (req: Request, res: Response) => {
//   console.log("2");

//   const { titles, type, category } = req.query;
//   res.json({
//     message: "OK",
//     data: "Semua data user",
//     // req.query biasa akan digunakan untuk filter, sort, pagination
//     query: req.query,
//   });
// });

// // Routing ke resources users dimana akan mengambil 1 data user
// // GET http://localhost:8080/api/users/fasd
// // :id -> req query params
// app.get("/api/users/:id", (req: Request, res: Response) => {
//   console.log("2");

//   const { id } = req.params; // req.params.id
//   res.json({
//     message: "OK",
//     data: "Satu data user dengan id " + id,
//   });
// });

// app.post(
//   "/api/users",
//   ValidationMiddleware,
//   (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { email, password } = req.body;

//       if (email !== "budi") throw new Error("Invalid email");

//       res.json({
//         message: "OK",
//         data: {
//           email,
//           password,
//         },
//       });
//     } catch (err) {
//       next(err);
//     }
//   }
// );

// function ValidationMiddleware(req: Request, res: Response, next: NextFunction) {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({
//       message: "Email and password are required",
//     });
//   }

//   next();
// }

app.use("/api", router); // http://localhost:8080/api

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: "NG",
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

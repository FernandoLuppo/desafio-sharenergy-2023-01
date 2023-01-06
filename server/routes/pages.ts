//  NPM
import express from "express";
//  Controllers
import userController from "../controller/UserController";
import randomUserController from "../controller/randomUserController";
import clientListController from "../controller/clientListController";
//  Configuration
const router = express.Router()

//  Routes
//  Register
router.post("/register", userController.register)
//  Login
router.post("/login", userController.login )
router.post("/localStorage", userController.localStorage )
//  Home
router.get("/randomUser", randomUserController.randomUser)
//  Client List
router.post("/newClient", clientListController.newClient)
router.get("/clientList/:id", clientListController.clientList)
router.put("/clientList/edit", clientListController.newClientListEdit)
router.get("/clientList/edit/:id", clientListController.clientListEdit)
router.delete("/clientList/delete/:id", clientListController.ClientListDelete)


export default router
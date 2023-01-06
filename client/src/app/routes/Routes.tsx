//  NPM
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
//  Context
import { AuthProvider, AuthRequire } from "../shared/context"
//  Components
import { ClientList, ClientListEdit, Home, HttpCat, Login, RandomDog, Register } from "../pages"

export const Routes = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" element={<AuthRequire><Home /></AuthRequire>} />
                    <Route path="/httpCat" element={<AuthRequire><HttpCat /></AuthRequire>} />
                    <Route path="/randomDog" element={<AuthRequire><RandomDog /></AuthRequire>} />
                    <Route path="/clientList" element={<AuthRequire><ClientList /></AuthRequire>} />
                    <Route path="/clientList/edit/:id" element={<AuthRequire><ClientListEdit /></AuthRequire>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                
                    <Route path="*" element={<AuthRequire><Home /></AuthRequire>} />
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    )
}
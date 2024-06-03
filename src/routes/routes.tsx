import React from "react";
import {Routes as ReactRouterRoutes,Route} from "react-router-dom"
import { LoginPage } from "../pages/login.page";
import { SignupForm } from "../components/auth/signup-form/signup-form.component";

const Routes: React.FC=()=>{
    return(
        <ReactRouterRoutes>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="signup" element={<SignupForm/>}/>
        </ReactRouterRoutes>
    )
}

export {Routes};
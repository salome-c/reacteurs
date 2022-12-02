
import {
    createHashRouter,
    createRoutesFromElements,
    Route,
    Outlet
} from "react-router-dom";
import niv1 from "./niv1";
import Niv1 from "./niv1";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Outlet/>}>
            <Route index element={<Niv1/>} />
        </Route>
    )
);



export default function App() {
    return (
        <Niv1/>
        //<RouterProvider router={router} />
    );
}
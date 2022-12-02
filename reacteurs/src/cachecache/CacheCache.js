
import {
    createHashRouter,
    createRoutesFromElements,
    Route,
    Outlet, RouterProvider, Link
} from "react-router-dom";
import Niv1 from "./niv1";
import Niv2 from "./niv2";
import Niv3 from "./niv3";
import Score from "./Score";
import Defeated from "./Defete";
import {useEffect, useState} from "react";
import modal from "bootstrap/js/src/modal";



const router = createHashRouter(
    createRoutesFromElements(

        <Route path="/" element={<Outlet/>}>
            <Route index element={<Niv1/>} />
            <Route path="/Niv2" element={<Niv2/>} />
            <Route path="/Niv2/Niv3" element={<Niv3 />} />
            <Route path="/Niv2/Niv3/Score" element={<Score />}/>
            <Route path="/Niv2/Niv3/Defeated" element={<Defeated/>} />
        </Route>
    )
);



 const CacheCache = () => {

    const [time, setTime] = useState(60);
    const [startTimer, setStartTimer] = useState(true);
     const [modal,setModal] = useState(false)


     let score = 0;


    useEffect(() => {

        if(startTimer){
            const timerId = setInterval(async () => {
                setTime(t => t - 1)


                if(window.location.href ==="http://localhost:3000/#/Niv2/Niv3/Score"){
                     score = time;
                    console.log(score)
                    setStartTimer(!startTimer)
                }

            }, 1000);


            return () => clearInterval(timerId)
        }
    }, [startTimer])


         const Change = () => {
             console.log(time)
             let Score = time;

             if (time <= 0) {
                 score="Perdu";
             }
         }
    return (
        <div>
            <div className="time" onChange={Change()}>Temps : {time} seconde</div>
        <RouterProvider router={router} />


        </div>
        //<RouterProvider router={router} />
    );
}

export default CacheCache
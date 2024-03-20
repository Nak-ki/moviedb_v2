import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {GenresPage, MovieInfoPage, MoviesPage} from "./pages";



const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>
            },
            {
                path:'genres', element:<GenresPage/>
            },
            {
                path:'overview/:id', element:<MovieInfoPage/>
            }
        ]
    }
])

export {
    router
}
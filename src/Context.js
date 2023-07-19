import { createContext, useState } from "react";
import { db } from './firebase';


export const MyContext = createContext();

const ContextProvider = ({ children }) => {

    const [ projects, setProjects ] = useState();

    const showProjects = () => {

        db.collection('projects').onSnapshot( snapshot => {
            // console.log(snapshot.docs,'querysanpshot')
            let appObj = [];
            const array = []
            snapshot.docs.map((doc) => {
                appObj =  { id: doc.id, ...doc.data() } ;
                console.log(appObj)
                array.push(appObj)
            });
            setProjects(array);
        })
        
    };

   

    const initialState ={ projects, setProjects, showProjects };
    return (
        <MyContext.Provider value={initialState}>{children}</MyContext.Provider>
    )
}

export default ContextProvider;
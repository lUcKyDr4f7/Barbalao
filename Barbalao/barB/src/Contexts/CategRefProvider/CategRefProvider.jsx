import { useRef, createContext} from 'react';
import { getCateg } from '../../assets/Data/AllCategories.js';

export const CategRefCtx = createContext();

export default function CategRefProvider({children}) {

    const categRefs = getCateg().map(c => {
        return {...c, 'ref': useRef(null)}
    });


    return (
        <CategRefCtx.Provider value={categRefs}>
            {children}
        </CategRefCtx.Provider>
    )
}
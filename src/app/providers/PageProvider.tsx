import { useState, ReactNode} from "react";
import { IPageContext, PageContext } from "../contexts/PageContext";

interface IPageProviderProps{
    children : ReactNode
}

export default function PageProvider({children} : IPageProviderProps){
    const [currentPage, setCurrentPage] = useState<number>(0)

    const contextValue : IPageContext = {
        page : currentPage,
        setPage : setCurrentPage
    }
    return(
    <PageContext value={contextValue}>
        {children}
    </PageContext>
    )
        
    
}
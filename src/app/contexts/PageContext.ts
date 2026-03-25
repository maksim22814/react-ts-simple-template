import {createContext} from "react"

export interface IPageContext{
    readonly page : number,
    setPage : (page : number) => void
}
export const PageContext = createContext<IPageContext>(
    {
        page: 0,
        setPage: () => {}
    }
)
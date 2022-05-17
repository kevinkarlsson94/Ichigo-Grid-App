import { createContext, Dispatch } from 'react'

export interface IGridLayoutContext {
    shouldRerender: boolean
    setShouldRerender: Dispatch<React.SetStateAction<boolean>>
}

export const GridLayoutContext = createContext<IGridLayoutContext>({
    shouldRerender: false,
    setShouldRerender: () => null,
})

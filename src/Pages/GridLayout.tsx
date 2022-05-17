import { useState } from 'react'
import { GridItem } from './GridItem'
import { GridLayoutContext } from './GridLayout.context'
import styles from './Styles.module.scss'

export const GridLayout = () => {
    const [shouldRerender, setShouldRerender] = useState<boolean>(false)

    const mapGridItems = () =>
        [...Array(9)].map((_, index: number) => (
            <GridItem
                customClass={styles[`GridItem${index + 1}`]}
                key={index}
            />
        ))

    return (
        // Context is kinda overkill here, but in the future the GridItem might contain children too
        // which in this case will remove prop drilling.
        // Looks little better in the render too instead of passing the state and setter as props :)
        <GridLayoutContext.Provider
            value={{ shouldRerender, setShouldRerender }}
        >
            <div className={styles.Container}>
                <div className={styles.Grid}>{mapGridItems()}</div>
            </div>
        </GridLayoutContext.Provider>
    )
}

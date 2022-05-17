import clsx from 'clsx'
import { useContext, useEffect, useState } from 'react'
import { generateRandomTemplate, ITemplate } from '../Utils/helpers'
import { GridLayoutContext, IGridLayoutContext } from './GridLayout.context'

import styles from './Styles.module.scss'
import './Styles.module.scss'

export const GridItem = ({ customClass }: { customClass?: string }) => {
    const { shouldRerender, setShouldRerender } =
        useContext<IGridLayoutContext>(GridLayoutContext)
    const [template, setTemplate] = useState<ITemplate>(
        generateRandomTemplate()
    )
    useEffect(() => {
        if (shouldRerender) {
            setTemplate(generateRandomTemplate())
            setShouldRerender(false)
        }
    }, [shouldRerender, setShouldRerender])

    return (
        <div
            onClick={() => setShouldRerender(!shouldRerender)}
            style={{
                background: template.color,
            }}
            className={clsx(styles.GridItem, customClass)}
        >
            {template.label}
        </div>
    )
}

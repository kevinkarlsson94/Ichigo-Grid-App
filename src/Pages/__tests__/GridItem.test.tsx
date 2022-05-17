import { render } from '@testing-library/react'
import { GridItem } from '../GridItem'

describe('GridItem', () => {
    it('should return a random template', () => {
        const { container } = render(<GridItem />)
        expect(container).toBeTruthy()
    })
})

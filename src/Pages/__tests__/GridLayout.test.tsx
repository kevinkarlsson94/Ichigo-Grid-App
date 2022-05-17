import { render } from '@testing-library/react'
import { GridLayout } from '../GridLayout'

describe('GridLayout', () => {
    it('should return a random template', () => {
        const { container } = render(<GridLayout />)
        expect(container).toBeTruthy()
    })
})

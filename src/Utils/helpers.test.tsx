import { generateRandomTemplate } from './helpers'

describe('generateRandomTemplate', () => {
    it('should return a random template', () => {
        const template = generateRandomTemplate()
        expect(template).toBeTruthy()
        expect(template.color).toBeTruthy()
        expect(template.label).toBeTruthy()
    })
})

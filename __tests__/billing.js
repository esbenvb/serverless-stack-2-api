import { calculateCost } from '../libs/billing-lib'


describe('calculateCost', () => {
    it('returns right price for 10', () => {
        const storage = 10

        const expectedCost = 4000
        const cost = calculateCost(storage)
        expect(cost).toEqual(expectedCost)
    })
    it('returns right price for 10', () => {
        const storage = 100

        const expectedCost = 20000
        const cost = calculateCost(storage)
        expect(cost).toEqual(expectedCost)
    })
    it('returns right price for 10', () => {
        const storage = 101

        const expectedCost = 10100
        const cost = calculateCost(storage)
        expect(cost).toEqual(expectedCost)
    })
})

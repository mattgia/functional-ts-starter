/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statement */

import { routeHandler } from './routes'

describe('a sample test', () => {
    it('should assert something', () => {
        expect(routeHandler('world')).toEqual({hello: 'world'})
    })
})
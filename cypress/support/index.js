import './commands'

require('cypress-xpath')

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-cy', 'data-test','id', 'class', 'attributes', 'data-testid', 'tag', 'nth-child','data-wc'],
})
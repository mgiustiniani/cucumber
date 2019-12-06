import ExpressionStepDefinition from './ExpressionStepDefinition'
import { CucumberExpression, ParameterTypeRegistry } from 'cucumber-expressions'
import IStepDefinition from './IStepDefinition'

export default function makeDummyStepDefinitions(): IStepDefinition[] {
  const parameterTypeRegistry = new ParameterTypeRegistry()
  return [
    new ExpressionStepDefinition(
      new CucumberExpression('a passed {word}', parameterTypeRegistry),
      (thing: string) => undefined
    ),
    new ExpressionStepDefinition(
      new CucumberExpression('a passed {word} with', parameterTypeRegistry),
      (thing: string, dataTableOrDocString) => undefined
    ),
    new ExpressionStepDefinition(
      new CucumberExpression(
        'a passed {word} with text attachment {string}',
        parameterTypeRegistry
      ),
      function(thing: string, textAttachment) {
        this.attach(textAttachment, 'text/plain')
      }
    ),
    new ExpressionStepDefinition(
      new CucumberExpression(
        'I have {int} cukes/cucumbers in my {word}',
        parameterTypeRegistry
      ),
      (count: number, container: string) => undefined
    ),
    new ExpressionStepDefinition(
      new CucumberExpression('a failed {word}', parameterTypeRegistry),
      (thing: string) => {
        throw new Error(`This step failed. The thing was "${thing}"`)
      }
    ),
    new ExpressionStepDefinition(
      new CucumberExpression('a failed {word} with', parameterTypeRegistry),
      (thing: string, dataTableOrDocString) => {
        throw new Error(
          `This step failed. The thing was "${thing}" and the dataTable/docString was ${JSON.stringify(
            dataTableOrDocString
          )}`
        )
      }
    ),
    new ExpressionStepDefinition(
      new CucumberExpression('a pending {word}', parameterTypeRegistry),
      (thing: string) => {
        return 'pending'
      }
    ),
    new ExpressionStepDefinition(
      new CucumberExpression('an ambiguou(s) {word}', parameterTypeRegistry),
      (thing: string) => undefined
    ),
    new ExpressionStepDefinition(
      new CucumberExpression('an (a)mbiguous {word}', parameterTypeRegistry),
      (thing: string) => undefined
    ),
  ]
}

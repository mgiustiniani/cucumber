require 'yaml'
require 'json'
require 'cucumber/cucumber_expressions/cucumber_expression_tokenizer'
require 'cucumber/cucumber_expressions/errors'

# Plan:
# - tokenizer tests
# - parser test
# - cucumber expressions compiler
# - phrases

module Cucumber
  module CucumberExpressions
    describe 'Cucumber expression tokenizer' do
      Dir['testdata/tokens/*.yaml'].each do |testcase|
        expectation = YAML.load_file(testcase) # encoding?
        it "#{testcase}" do
          tokenizer = CucumberExpressionTokenizer.new
          if expectation['exception'].nil?
            tokens = tokenizer.tokenize(expectation['expression'])
            expect(tokens).to eq(JSON.parse(expectation['expected']))
          else
            expect { tokenizer.tokenize(expectation['expression']) }.to raise_error(CucumberExpressionError, expectation['exception'])
          end
        end
      end
    end
  end
end
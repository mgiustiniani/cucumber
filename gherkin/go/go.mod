module github.com/cucumber/gherkin-go/v16

require (
	github.com/cucumber/messages-go/v13 v13.2.1
	github.com/gogo/protobuf v1.3.1
	github.com/stretchr/testify v1.7.0
)

replace github.com/cucumber/messages-go/v13 => ../../messages/go

go 1.13

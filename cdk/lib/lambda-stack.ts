import { Stack, StackProps } from "aws-cdk-lib";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Function(this, "demo-lambda", {
      runtime: Runtime.NODEJS_14_X,
      handler: "handler.demo",
      code: Code.fromAsset("lib/lambda"),
    });
  }
}

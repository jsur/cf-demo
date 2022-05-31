import { Stack, StackProps } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // NodejsFunction uses esbuild to automatically transpile ts into js!
    new NodejsFunction(this, "demo-lambda", {
      runtime: Runtime.NODEJS_14_X,
      handler: "demo",
      entry: "./lib/lambda/handler.ts",
    });
  }
}

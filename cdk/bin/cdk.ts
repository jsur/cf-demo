import * as cdk from "aws-cdk-lib";
import { CdkStack } from "../lib/cdk-stack";
import { LambdaStack } from "../lib/lambda-stack";

const config = {
  env: { account: "566312720731", region: "eu-central-1" },
};

const app = new cdk.App();

new CdkStack(app, "CdkStack", {
  env: config.env,
});

new LambdaStack(app, "LambdaStack", {
  env: config.env,
});

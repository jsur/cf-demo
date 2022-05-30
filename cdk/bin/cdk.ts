import * as dotenv from "dotenv";
import * as cdk from "aws-cdk-lib";
import { CdkStack } from "../lib/cdk-stack";
import { LambdaStack } from "../lib/lambda-stack";

dotenv.config();

const config = {
  env: { account: process.env.AWS_ACCOUNT_ID, region: "eu-central-1" },
};

const app = new cdk.App();

new CdkStack(app, "CdkStack", {
  env: config.env,
});

new LambdaStack(app, "LambdaStack", {
  env: config.env,
});

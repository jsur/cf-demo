import { CfnOutput, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "demo-bucket", {
      bucketName: "demo-bucket-julius",
      removalPolicy: RemovalPolicy.RETAIN,
    });

    new CfnOutput(this, "demo-output", {
      description: "Outputting this for demo purposes",
      value: bucket.bucketArn,
      exportName: "demo-bucket-arn",
    });
  }
}

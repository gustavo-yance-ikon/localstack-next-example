import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Nextjs } from "cdk-nextjs-standalone";

/**
 * This stack showcases how to use cdk-nextjs with Next.js App Router
 */
export class AppRouterStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const nextjs = new Nextjs(this, "nextjs", {
      nextjsPath: "./nextjs", // relative path from your project root to NextJS
      buildCommand: "npx open-next@^2 build",
      overrides: {
        nextjsServer: {
          nextjsBucketDeploymentProps: {},
          functionProps: {
            memorySize: 1024,
          },
        },
      },
    });

    new CfnOutput(this, "CloudFrontDistributionDomain", {
      value: nextjs.distribution.distributionDomain,
    });
  }
}

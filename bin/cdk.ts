#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AppRouterStack } from "../lib/cdk-stack";
const app = new cdk.App();
new AppRouterStack(app, "ar", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
}); // ar = app router

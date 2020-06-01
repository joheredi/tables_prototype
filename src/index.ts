import { AzureTable } from "./azureTable";
import {
  RequestPolicy,
  HttpOperationResponse,
  WebResourceLike,
  RequestPolicyFactory,
} from "@azure/core-http";

// Using this to load EnvVariables from .env file
require("dotenv").config();

const accountUrl = process.env.ACCOUNT_URL;
const SASToken = process.env.SAS_TOKEN;

/**
 * This is just a no-op credential which does nothing but to return the
 * original webResource.
 * A real credential would add an "Authorize" header.
 * We use this since we are authenticating in the URL with th SAS token
 */
function AnonymousCredential() {
  return { signRequest: async (webResource) => webResource };
}

/**
 * Figures out if a given url already has query parameters
 * If a url has query parameters it has a '?' in it
 */
function hasQueryParams(url: string) {
  const parts = url.split("?");
  return parts.length > 1;
}

/**
 * Determines the character to use to append the SAS token to the URL
 * when there are already query parameters it should use '&' otherwise
 * '?' since it will be the first query parameter to be added
 */
function getSASAppendCharacter(url: string) {
  if (hasQueryParams(url)) {
    return "&";
  }

  return "?";
}

/**
 * Creates a Factory for a RequestPolicy.
 * A request policy is something that can manipulate the request before it is sent
 * and can also manipulate the response once it is received
 */
const sasTokenPolicyFactory: RequestPolicyFactory = {
  create: (nextPolicy: RequestPolicy): RequestPolicy => {
    return {
      /**
       * Here we define our SAS policy which will simply append the SAS token to the URL
       */
      sendRequest: (
        webResource: WebResourceLike
      ): Promise<HttpOperationResponse> => {
        /**
         * 1. Figure out how we're going to appen the SAS token with a '?' or '&'
         */
        const appendCharacter = getSASAppendCharacter(webResource.url);
        /**
         * 2. Append the token to the URL
         */
        webResource.url = webResource.url + `${appendCharacter}${SASToken}`;
        /**
         * 3. Hand-off the request to the next policy in the pipeline
         */
        return nextPolicy.sendRequest(webResource);
        /**
         * 4. If we wanted to do anything with the result, instead of returning we could await and do something with the response
         *    in this case we don't need to so we just return it.
         */
      },
    };
  },
};

const client = new AzureTable(AnonymousCredential(), accountUrl, {
  /**
   * We can send request policies as options. Here we do that by passing a function
   * which takes the defaultFactories, these are created by core-http and include
   * deserialization, logging, etc. We want to keep all of those that's why we do '...defaultFactories'
   * and append our SASTokenPolicyFactory
   */
  requestPolicyFactories: (defaultFactories) => [
    ...defaultFactories,
    sasTokenPolicyFactory,
  ],
});

client.table
  .create({ tableName: "TestTable" })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));

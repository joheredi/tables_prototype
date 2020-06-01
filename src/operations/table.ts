/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureTable } from "../azureTable";
import {
  TableQueryOptionalParams,
  TableQueryOperationResponse,
  TableProperties,
  TableCreateOptionalParams,
  TableCreateResponse,
  TableDeleteOptionalParams,
  TableDeleteResponse,
  TableQueryEntitiesOptionalParams,
  TableQueryEntitiesResponse,
  TableQueryEntitiesWithPartitionAndRowKeyOptionalParams,
  TableQueryEntitiesWithPartitionAndRowKeyResponse,
  TableUpdateEntityOptionalParams,
  TableUpdateEntityResponse,
  TableMergeEntityOptionalParams,
  TableMergeEntityResponse,
  TableDeleteEntityOptionalParams,
  TableDeleteEntityResponse,
  TableInsertEntityOptionalParams,
  TableInsertEntityResponse,
  TableGetAccessPolicyOptionalParams,
  TableGetAccessPolicyResponse,
  TableSetAccessPolicyOptionalParams,
  TableSetAccessPolicyResponse,
} from "../models";

/**
 * Class representing a Table.
 */
export class Table {
  private readonly client: AzureTable;

  /**
   * Initialize a new instance of the class Table class.
   * @param client Reference to the service client
   */
  constructor(client: AzureTable) {
    this.client = client;
  }

  /**
   * Queries tables under the given account.
   * @param options The options parameters.
   */
  query(
    options?: TableQueryOptionalParams
  ): Promise<TableQueryOperationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      queryOperationSpec
    ) as Promise<TableQueryOperationResponse>;
  }

  /**
   * Creates a new table under the given account.
   * @param tableProperties The Table properties.
   * @param options The options parameters.
   */
  create(
    tableProperties: TableProperties,
    options?: TableCreateOptionalParams
  ): Promise<TableCreateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { tableProperties, options: operationOptions },
      createOperationSpec
    ) as Promise<TableCreateResponse>;
  }

  /**
   * Operation permanently deletes the specified table.
   * @param table The name of the table.
   * @param options The options parameters.
   */
  delete(
    table: string,
    options?: TableDeleteOptionalParams
  ): Promise<TableDeleteResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { table, options: operationOptions },
      deleteOperationSpec
    ) as Promise<TableDeleteResponse>;
  }

  /**
   * Queries entities in a table.
   * @param table The name of the table.
   * @param options The options parameters.
   */
  queryEntities(
    table: string,
    options?: TableQueryEntitiesOptionalParams
  ): Promise<TableQueryEntitiesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { table, options: operationOptions },
      queryEntitiesOperationSpec
    ) as Promise<TableQueryEntitiesResponse>;
  }

  /**
   * Queries entities in a table.
   * @param table The name of the table.
   * @param partitionKey The partition key of the entity.
   * @param rowKey The row key of the entity.
   * @param options The options parameters.
   */
  queryEntitiesWithPartitionAndRowKey(
    table: string,
    partitionKey: string,
    rowKey: string,
    options?: TableQueryEntitiesWithPartitionAndRowKeyOptionalParams
  ): Promise<TableQueryEntitiesWithPartitionAndRowKeyResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { table, partitionKey, rowKey, options: operationOptions },
      queryEntitiesWithPartitionAndRowKeyOperationSpec
    ) as Promise<TableQueryEntitiesWithPartitionAndRowKeyResponse>;
  }

  /**
   * Update entity in a table.
   * @param table The name of the table.
   * @param partitionKey The partition key of the entity.
   * @param rowKey The row key of the entity.
   * @param options The options parameters.
   */
  updateEntity(
    table: string,
    partitionKey: string,
    rowKey: string,
    options?: TableUpdateEntityOptionalParams
  ): Promise<TableUpdateEntityResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { table, partitionKey, rowKey, options: operationOptions },
      updateEntityOperationSpec
    ) as Promise<TableUpdateEntityResponse>;
  }

  /**
   * Merge entity in a table.
   * @param table The name of the table.
   * @param partitionKey The partition key of the entity.
   * @param rowKey The row key of the entity.
   * @param options The options parameters.
   */
  mergeEntity(
    table: string,
    partitionKey: string,
    rowKey: string,
    options?: TableMergeEntityOptionalParams
  ): Promise<TableMergeEntityResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { table, partitionKey, rowKey, options: operationOptions },
      mergeEntityOperationSpec
    ) as Promise<TableMergeEntityResponse>;
  }

  /**
   * Deletes the specified entity in a table.
   * @param table The name of the table.
   * @param partitionKey The partition key of the entity.
   * @param rowKey The row key of the entity.
   * @param ifMatch Match condition for an entity to be deleted. If specified and a matching entity is
   *                not found, an error will be raised. To force an unconditional delete, set to the wildcard character
   *                (*).
   * @param options The options parameters.
   */
  deleteEntity(
    table: string,
    partitionKey: string,
    rowKey: string,
    ifMatch: string,
    options?: TableDeleteEntityOptionalParams
  ): Promise<TableDeleteEntityResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { table, partitionKey, rowKey, ifMatch, options: operationOptions },
      deleteEntityOperationSpec
    ) as Promise<TableDeleteEntityResponse>;
  }

  /**
   * Insert entity in a table.
   * @param table The name of the table.
   * @param options The options parameters.
   */
  insertEntity(
    table: string,
    options?: TableInsertEntityOptionalParams
  ): Promise<TableInsertEntityResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { table, options: operationOptions },
      insertEntityOperationSpec
    ) as Promise<TableInsertEntityResponse>;
  }

  /**
   * Retrieves details about any stored access policies specified on the table that may be used with
   * Shared Access Signatures.
   * @param table The name of the table.
   * @param options The options parameters.
   */
  getAccessPolicy(
    table: string,
    options?: TableGetAccessPolicyOptionalParams
  ): Promise<TableGetAccessPolicyResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { table, options: operationOptions },
      getAccessPolicyOperationSpec
    ) as Promise<TableGetAccessPolicyResponse>;
  }

  /**
   * Sets stored access policies for the table that may be used with Shared Access Signatures.
   * @param table The name of the table.
   * @param options The options parameters.
   */
  setAccessPolicy(
    table: string,
    options?: TableSetAccessPolicyOptionalParams
  ): Promise<TableSetAccessPolicyResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { table, options: operationOptions },
      setAccessPolicyOperationSpec
    ) as Promise<TableSetAccessPolicyResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const queryOperationSpec: coreHttp.OperationSpec = {
  path: "/Tables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableQueryResponse,
      headersMapper: Mappers.TableQueryHeaders,
    },
  },
  queryParameters: [
    Parameters.format,
    Parameters.top,
    Parameters.select,
    Parameters.filter,
    Parameters.nextTableName,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
  ],
  serializer,
};
const createOperationSpec: coreHttp.OperationSpec = {
  path: "/Tables",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.TableResponse,
      headersMapper: Mappers.TableCreateHeaders,
    },
    204: {
      headersMapper: Mappers.TableCreateHeaders,
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableCreateHeaders,
    },
  },
  requestBody: Parameters.tableProperties,
  queryParameters: [Parameters.format],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.contentType,
    Parameters.responsePreference,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/Tables('{table}')",
  httpMethod: "DELETE",
  responses: {
    204: {
      headersMapper: Mappers.TableDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableDeleteHeaders,
    },
  },
  urlParameters: [Parameters.url, Parameters.table],
  headerParameters: [Parameters.version, Parameters.requestId],
  serializer,
};
const queryEntitiesOperationSpec: coreHttp.OperationSpec = {
  path: "/{table}()",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableEntityQueryResponse,
      headersMapper: Mappers.TableQueryEntitiesHeaders,
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableQueryEntitiesHeaders,
    },
  },
  queryParameters: [
    Parameters.format,
    Parameters.top,
    Parameters.select,
    Parameters.filter,
    Parameters.timeout,
    Parameters.nextPartitionKey,
    Parameters.nextRowKey,
  ],
  urlParameters: [Parameters.url, Parameters.table],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
  ],
  serializer,
};
const queryEntitiesWithPartitionAndRowKeyOperationSpec: coreHttp.OperationSpec = {
  path: "/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableEntityQueryResponse,
      headersMapper: Mappers.TableQueryEntitiesWithPartitionAndRowKeyHeaders,
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableQueryEntitiesWithPartitionAndRowKeyHeaders,
    },
  },
  queryParameters: [
    Parameters.format,
    Parameters.select,
    Parameters.filter,
    Parameters.timeout,
  ],
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey,
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
  ],
  serializer,
};
const updateEntityOperationSpec: coreHttp.OperationSpec = {
  path: "/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  httpMethod: "PUT",
  responses: {
    204: {
      headersMapper: Mappers.TableUpdateEntityHeaders,
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableUpdateEntityHeaders,
    },
  },
  requestBody: Parameters.tableEntityProperties,
  queryParameters: [Parameters.format, Parameters.timeout],
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey,
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.contentType1,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const mergeEntityOperationSpec: coreHttp.OperationSpec = {
  path: "/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  httpMethod: "PATCH",
  responses: {
    204: {
      headersMapper: Mappers.TableMergeEntityHeaders,
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableMergeEntityHeaders,
    },
  },
  requestBody: Parameters.tableEntityProperties,
  queryParameters: [Parameters.format, Parameters.timeout],
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey,
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.contentType1,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const deleteEntityOperationSpec: coreHttp.OperationSpec = {
  path: "/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  httpMethod: "DELETE",
  responses: {
    204: {
      headersMapper: Mappers.TableDeleteEntityHeaders,
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableDeleteEntityHeaders,
    },
  },
  queryParameters: [Parameters.format, Parameters.timeout],
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey,
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.ifMatch1,
  ],
  serializer,
};
const insertEntityOperationSpec: coreHttp.OperationSpec = {
  path: "/{table}",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } },
      },
      headersMapper: Mappers.TableInsertEntityHeaders,
    },
    204: {
      headersMapper: Mappers.TableInsertEntityHeaders,
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableInsertEntityHeaders,
    },
  },
  requestBody: Parameters.tableEntityProperties,
  queryParameters: [Parameters.format, Parameters.timeout],
  urlParameters: [Parameters.url, Parameters.table],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.contentType,
    Parameters.responsePreference,
  ],
  mediaType: "json",
  serializer,
};
const getAccessPolicyOperationSpec: coreHttp.OperationSpec = {
  path: "/{table}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "SignedIdentifier" },
          },
        },
        serializedName: "SignedIdentifiers",
        xmlName: "SignedIdentifiers",
        xmlIsWrapped: true,
        xmlElementName: "SignedIdentifier",
      },
      headersMapper: Mappers.TableGetAccessPolicyHeaders,
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableGetAccessPolicyHeaders,
    },
  },
  queryParameters: [Parameters.timeout, Parameters.comp],
  urlParameters: [Parameters.url, Parameters.table],
  headerParameters: [Parameters.version, Parameters.requestId],
  isXML: true,
  serializer,
};
const setAccessPolicyOperationSpec: coreHttp.OperationSpec = {
  path: "/{table}",
  httpMethod: "PUT",
  responses: {
    204: {
      headersMapper: Mappers.TableSetAccessPolicyHeaders,
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableSetAccessPolicyHeaders,
    },
  },
  requestBody: Parameters.tableAcl,
  queryParameters: [Parameters.timeout, Parameters.comp],
  urlParameters: [Parameters.url, Parameters.table],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.contentType2,
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer,
};

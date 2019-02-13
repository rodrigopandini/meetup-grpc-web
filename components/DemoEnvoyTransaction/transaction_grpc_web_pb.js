/**
 * @fileoverview gRPC-Web generated client stub for transactionproto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.transactionproto = require('./transaction_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.transactionproto.TransactionClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.transactionproto.TransactionPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.transactionproto.TransactionClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.transactionproto.TransactionClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.transactionproto.TransactionModel,
 *   !proto.transactionproto.Response>}
 */
const methodInfo_Transaction_PostTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.transactionproto.Response,
  /** @param {!proto.transactionproto.TransactionModel} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.transactionproto.Response.deserializeBinary
);


/**
 * @param {!proto.transactionproto.TransactionModel} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.transactionproto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.transactionproto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.transactionproto.TransactionClient.prototype.postTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/transactionproto.Transaction/PostTransaction',
      request,
      metadata,
      methodInfo_Transaction_PostTransaction,
      callback);
};


/**
 * @param {!proto.transactionproto.TransactionModel} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.transactionproto.Response>}
 *     The XHR Node Readable Stream
 */
proto.transactionproto.TransactionPromiseClient.prototype.postTransaction =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.postTransaction(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.transactionproto;


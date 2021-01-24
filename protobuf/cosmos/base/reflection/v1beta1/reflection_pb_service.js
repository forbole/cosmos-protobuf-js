// package: cosmos.base.reflection.v1beta1
// file: cosmos/base/reflection/v1beta1/reflection.proto

const { grpc } = require('@improbable-eng/grpc-web');
const cosmos_base_reflection_v1beta1_reflection_pb = require('./reflection_pb');

const ReflectionService = (function () {
  function ReflectionService() {}
  ReflectionService.serviceName = 'cosmos.base.reflection.v1beta1.ReflectionService';
  return ReflectionService;
}());

ReflectionService.ListAllInterfaces = {
  methodName: 'ListAllInterfaces',
  service: ReflectionService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
  responseType: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse,
};

ReflectionService.ListImplementations = {
  methodName: 'ListImplementations',
  service: ReflectionService,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
  responseType: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse,
};

exports.ReflectionService = ReflectionService;

function ReflectionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ReflectionServiceClient.prototype.listAllInterfaces = function listAllInterfaces(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(ReflectionService.ListAllInterfaces, {
    request: requestMessage,
    host: this.serviceHost,
    metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd(response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          const err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel() {
      callback = null;
      client.close();
    },
  };
};

ReflectionServiceClient.prototype.listImplementations = function listImplementations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(ReflectionService.ListImplementations, {
    request: requestMessage,
    host: this.serviceHost,
    metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd(response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          const err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel() {
      callback = null;
      client.close();
    },
  };
};

exports.ReflectionServiceClient = ReflectionServiceClient;

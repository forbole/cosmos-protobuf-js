// package: cosmos.tx.v1beta1
// file: cosmos/tx/v1beta1/service.proto

const { grpc } = require('@improbable-eng/grpc-web');
const cosmos_tx_v1beta1_service_pb = require('./service_pb');

const Service = (function () {
  function Service() {}
  Service.serviceName = 'cosmos.tx.v1beta1.Service';
  return Service;
}());

Service.Simulate = {
  methodName: 'Simulate',
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.SimulateRequest,
  responseType: cosmos_tx_v1beta1_service_pb.SimulateResponse,
};

Service.GetTx = {
  methodName: 'GetTx',
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.GetTxRequest,
  responseType: cosmos_tx_v1beta1_service_pb.GetTxResponse,
};

Service.BroadcastTx = {
  methodName: 'BroadcastTx',
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
  responseType: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse,
};

Service.GetTxsEvent = {
  methodName: 'GetTxsEvent',
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
  responseType: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse,
};

exports.Service = Service;

function ServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServiceClient.prototype.simulate = function simulate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Service.Simulate, {
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

ServiceClient.prototype.getTx = function getTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Service.GetTx, {
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

ServiceClient.prototype.broadcastTx = function broadcastTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Service.BroadcastTx, {
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

ServiceClient.prototype.getTxsEvent = function getTxsEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Service.GetTxsEvent, {
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

exports.ServiceClient = ServiceClient;

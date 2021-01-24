// package: ibc.core.client.v1
// file: ibc/core/client/v1/tx.proto

const { grpc } = require('@improbable-eng/grpc-web');
const ibc_core_client_v1_tx_pb = require('./tx_pb');

const Msg = (function () {
  function Msg() {}
  Msg.serviceName = 'ibc.core.client.v1.Msg';
  return Msg;
}());

Msg.CreateClient = {
  methodName: 'CreateClient',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_tx_pb.MsgCreateClient,
  responseType: ibc_core_client_v1_tx_pb.MsgCreateClientResponse,
};

Msg.UpdateClient = {
  methodName: 'UpdateClient',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_tx_pb.MsgUpdateClient,
  responseType: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse,
};

Msg.UpgradeClient = {
  methodName: 'UpgradeClient',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
  responseType: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse,
};

Msg.SubmitMisbehaviour = {
  methodName: 'SubmitMisbehaviour',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
  responseType: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse,
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.createClient = function createClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.CreateClient, {
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

MsgClient.prototype.updateClient = function updateClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.UpdateClient, {
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

MsgClient.prototype.upgradeClient = function upgradeClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.UpgradeClient, {
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

MsgClient.prototype.submitMisbehaviour = function submitMisbehaviour(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.SubmitMisbehaviour, {
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

exports.MsgClient = MsgClient;

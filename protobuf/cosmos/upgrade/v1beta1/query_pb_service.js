// package: cosmos.upgrade.v1beta1
// file: cosmos/upgrade/v1beta1/query.proto

const { grpc } = require('@improbable-eng/grpc-web');
const cosmos_upgrade_v1beta1_query_pb = require('./query_pb');

const Query = (function () {
  function Query() {}
  Query.serviceName = 'cosmos.upgrade.v1beta1.Query';
  return Query;
}());

Query.CurrentPlan = {
  methodName: 'CurrentPlan',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
  responseType: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse,
};

Query.AppliedPlan = {
  methodName: 'AppliedPlan',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
  responseType: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse,
};

Query.UpgradedConsensusState = {
  methodName: 'UpgradedConsensusState',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
  responseType: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse,
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.currentPlan = function currentPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.CurrentPlan, {
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

QueryClient.prototype.appliedPlan = function appliedPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.AppliedPlan, {
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

QueryClient.prototype.upgradedConsensusState = function upgradedConsensusState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.UpgradedConsensusState, {
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

exports.QueryClient = QueryClient;

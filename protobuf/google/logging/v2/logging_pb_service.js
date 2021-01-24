// package: google.logging.v2
// file: google/logging/v2/logging.proto

const google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb');
const { grpc } = require('@improbable-eng/grpc-web');
const google_logging_v2_logging_pb = require('./logging_pb');

const LoggingServiceV2 = (function () {
  function LoggingServiceV2() {}
  LoggingServiceV2.serviceName = 'google.logging.v2.LoggingServiceV2';
  return LoggingServiceV2;
}());

LoggingServiceV2.DeleteLog = {
  methodName: 'DeleteLog',
  service: LoggingServiceV2,
  requestStream: false,
  responseStream: false,
  requestType: google_logging_v2_logging_pb.DeleteLogRequest,
  responseType: google_protobuf_empty_pb.Empty,
};

LoggingServiceV2.WriteLogEntries = {
  methodName: 'WriteLogEntries',
  service: LoggingServiceV2,
  requestStream: false,
  responseStream: false,
  requestType: google_logging_v2_logging_pb.WriteLogEntriesRequest,
  responseType: google_logging_v2_logging_pb.WriteLogEntriesResponse,
};

LoggingServiceV2.ListLogEntries = {
  methodName: 'ListLogEntries',
  service: LoggingServiceV2,
  requestStream: false,
  responseStream: false,
  requestType: google_logging_v2_logging_pb.ListLogEntriesRequest,
  responseType: google_logging_v2_logging_pb.ListLogEntriesResponse,
};

LoggingServiceV2.ListMonitoredResourceDescriptors = {
  methodName: 'ListMonitoredResourceDescriptors',
  service: LoggingServiceV2,
  requestStream: false,
  responseStream: false,
  requestType: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest,
  responseType: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse,
};

LoggingServiceV2.ListLogs = {
  methodName: 'ListLogs',
  service: LoggingServiceV2,
  requestStream: false,
  responseStream: false,
  requestType: google_logging_v2_logging_pb.ListLogsRequest,
  responseType: google_logging_v2_logging_pb.ListLogsResponse,
};

LoggingServiceV2.TailLogEntries = {
  methodName: 'TailLogEntries',
  service: LoggingServiceV2,
  requestStream: true,
  responseStream: true,
  requestType: google_logging_v2_logging_pb.TailLogEntriesRequest,
  responseType: google_logging_v2_logging_pb.TailLogEntriesResponse,
};

exports.LoggingServiceV2 = LoggingServiceV2;

function LoggingServiceV2Client(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LoggingServiceV2Client.prototype.deleteLog = function deleteLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(LoggingServiceV2.DeleteLog, {
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

LoggingServiceV2Client.prototype.writeLogEntries = function writeLogEntries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(LoggingServiceV2.WriteLogEntries, {
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

LoggingServiceV2Client.prototype.listLogEntries = function listLogEntries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(LoggingServiceV2.ListLogEntries, {
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

LoggingServiceV2Client.prototype.listMonitoredResourceDescriptors = function listMonitoredResourceDescriptors(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(LoggingServiceV2.ListMonitoredResourceDescriptors, {
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

LoggingServiceV2Client.prototype.listLogs = function listLogs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(LoggingServiceV2.ListLogs, {
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

LoggingServiceV2Client.prototype.tailLogEntries = function tailLogEntries(metadata) {
  let listeners = {
    data: [],
    end: [],
    status: [],
  };
  const client = grpc.client(LoggingServiceV2.TailLogEntries, {
    host: this.serviceHost,
    metadata,
    transport: this.options.transport,
  });
  client.onEnd((status, statusMessage, trailers) => {
    listeners.status.forEach((handler) => {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach((handler) => {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage((message) => {
    listeners.data.forEach((handler) => {
      handler(message);
    });
  });
  client.start(metadata);
  return {
    on(type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write(requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end() {
      client.finishSend();
    },
    cancel() {
      listeners = null;
      client.close();
    },
  };
};

exports.LoggingServiceV2Client = LoggingServiceV2Client;

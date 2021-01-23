// package: google.logging.v2
// file: google/logging/v2/logging.proto

var google_logging_v2_logging_pb = require("../../../google/logging/v2/logging_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LoggingServiceV2 = (function () {
  function LoggingServiceV2() {}
  LoggingServiceV2.serviceName = "google.logging.v2.LoggingServiceV2";
  return LoggingServiceV2;
}());

LoggingServiceV2.DeleteLog = {
  methodName: "DeleteLog",
  service: LoggingServiceV2,
  requestStream: false,
  responseStream: false,
  requestType: google_logging_v2_logging_pb.DeleteLogRequest,
  responseType: google_protobuf_empty_pb.Empty
};

LoggingServiceV2.WriteLogEntries = {
  methodName: "WriteLogEntries",
  service: LoggingServiceV2,
  requestStream: false,
  responseStream: false,
  requestType: google_logging_v2_logging_pb.WriteLogEntriesRequest,
  responseType: google_logging_v2_logging_pb.WriteLogEntriesResponse
};

LoggingServiceV2.ListLogEntries = {
  methodName: "ListLogEntries",
  service: LoggingServiceV2,
  requestStream: false,
  responseStream: false,
  requestType: google_logging_v2_logging_pb.ListLogEntriesRequest,
  responseType: google_logging_v2_logging_pb.ListLogEntriesResponse
};

LoggingServiceV2.ListMonitoredResourceDescriptors = {
  methodName: "ListMonitoredResourceDescriptors",
  service: LoggingServiceV2,
  requestStream: false,
  responseStream: false,
  requestType: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest,
  responseType: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse
};

LoggingServiceV2.ListLogs = {
  methodName: "ListLogs",
  service: LoggingServiceV2,
  requestStream: false,
  responseStream: false,
  requestType: google_logging_v2_logging_pb.ListLogsRequest,
  responseType: google_logging_v2_logging_pb.ListLogsResponse
};

LoggingServiceV2.TailLogEntries = {
  methodName: "TailLogEntries",
  service: LoggingServiceV2,
  requestStream: true,
  responseStream: true,
  requestType: google_logging_v2_logging_pb.TailLogEntriesRequest,
  responseType: google_logging_v2_logging_pb.TailLogEntriesResponse
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
  var client = grpc.unary(LoggingServiceV2.DeleteLog, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

LoggingServiceV2Client.prototype.writeLogEntries = function writeLogEntries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LoggingServiceV2.WriteLogEntries, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

LoggingServiceV2Client.prototype.listLogEntries = function listLogEntries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LoggingServiceV2.ListLogEntries, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

LoggingServiceV2Client.prototype.listMonitoredResourceDescriptors = function listMonitoredResourceDescriptors(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LoggingServiceV2.ListMonitoredResourceDescriptors, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

LoggingServiceV2Client.prototype.listLogs = function listLogs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LoggingServiceV2.ListLogs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

LoggingServiceV2Client.prototype.tailLogEntries = function tailLogEntries(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(LoggingServiceV2.TailLogEntries, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.LoggingServiceV2Client = LoggingServiceV2Client;


// package: google.logging.v2
// file: google/logging/v2/logging.proto

import * as google_logging_v2_logging_pb from "../../../google/logging/v2/logging_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LoggingServiceV2DeleteLog = {
  readonly methodName: string;
  readonly service: typeof LoggingServiceV2;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_logging_v2_logging_pb.DeleteLogRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type LoggingServiceV2WriteLogEntries = {
  readonly methodName: string;
  readonly service: typeof LoggingServiceV2;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_logging_v2_logging_pb.WriteLogEntriesRequest;
  readonly responseType: typeof google_logging_v2_logging_pb.WriteLogEntriesResponse;
};

type LoggingServiceV2ListLogEntries = {
  readonly methodName: string;
  readonly service: typeof LoggingServiceV2;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_logging_v2_logging_pb.ListLogEntriesRequest;
  readonly responseType: typeof google_logging_v2_logging_pb.ListLogEntriesResponse;
};

type LoggingServiceV2ListMonitoredResourceDescriptors = {
  readonly methodName: string;
  readonly service: typeof LoggingServiceV2;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest;
  readonly responseType: typeof google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse;
};

type LoggingServiceV2ListLogs = {
  readonly methodName: string;
  readonly service: typeof LoggingServiceV2;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_logging_v2_logging_pb.ListLogsRequest;
  readonly responseType: typeof google_logging_v2_logging_pb.ListLogsResponse;
};

type LoggingServiceV2TailLogEntries = {
  readonly methodName: string;
  readonly service: typeof LoggingServiceV2;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof google_logging_v2_logging_pb.TailLogEntriesRequest;
  readonly responseType: typeof google_logging_v2_logging_pb.TailLogEntriesResponse;
};

export class LoggingServiceV2 {
  static readonly serviceName: string;
  static readonly DeleteLog: LoggingServiceV2DeleteLog;
  static readonly WriteLogEntries: LoggingServiceV2WriteLogEntries;
  static readonly ListLogEntries: LoggingServiceV2ListLogEntries;
  static readonly ListMonitoredResourceDescriptors: LoggingServiceV2ListMonitoredResourceDescriptors;
  static readonly ListLogs: LoggingServiceV2ListLogs;
  static readonly TailLogEntries: LoggingServiceV2TailLogEntries;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class LoggingServiceV2Client {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  deleteLog(
    requestMessage: google_logging_v2_logging_pb.DeleteLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteLog(
    requestMessage: google_logging_v2_logging_pb.DeleteLogRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  writeLogEntries(
    requestMessage: google_logging_v2_logging_pb.WriteLogEntriesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_logging_v2_logging_pb.WriteLogEntriesResponse|null) => void
  ): UnaryResponse;
  writeLogEntries(
    requestMessage: google_logging_v2_logging_pb.WriteLogEntriesRequest,
    callback: (error: ServiceError|null, responseMessage: google_logging_v2_logging_pb.WriteLogEntriesResponse|null) => void
  ): UnaryResponse;
  listLogEntries(
    requestMessage: google_logging_v2_logging_pb.ListLogEntriesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_logging_v2_logging_pb.ListLogEntriesResponse|null) => void
  ): UnaryResponse;
  listLogEntries(
    requestMessage: google_logging_v2_logging_pb.ListLogEntriesRequest,
    callback: (error: ServiceError|null, responseMessage: google_logging_v2_logging_pb.ListLogEntriesResponse|null) => void
  ): UnaryResponse;
  listMonitoredResourceDescriptors(
    requestMessage: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse|null) => void
  ): UnaryResponse;
  listMonitoredResourceDescriptors(
    requestMessage: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest,
    callback: (error: ServiceError|null, responseMessage: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse|null) => void
  ): UnaryResponse;
  listLogs(
    requestMessage: google_logging_v2_logging_pb.ListLogsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_logging_v2_logging_pb.ListLogsResponse|null) => void
  ): UnaryResponse;
  listLogs(
    requestMessage: google_logging_v2_logging_pb.ListLogsRequest,
    callback: (error: ServiceError|null, responseMessage: google_logging_v2_logging_pb.ListLogsResponse|null) => void
  ): UnaryResponse;
  tailLogEntries(metadata?: grpc.Metadata): BidirectionalStream<google_logging_v2_logging_pb.TailLogEntriesRequest, google_logging_v2_logging_pb.TailLogEntriesResponse>;
}


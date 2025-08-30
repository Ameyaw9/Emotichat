// package: emotichat
// file: emotichat.proto

import * as emotichat_pb from "./emotichat_pb";
import {grpc} from "@improbable-eng/grpc-web";

type emotichatAnalyzeEmotion = {
  readonly methodName: string;
  readonly service: typeof emotichat;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof emotichat_pb.VoiceTextRequest;
  readonly responseType: typeof emotichat_pb.EmotionAnalysisResponse;
};

type emotichatGetRecommendedTherapy = {
  readonly methodName: string;
  readonly service: typeof emotichat;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof emotichat_pb.EmotionRequest;
  readonly responseType: typeof emotichat_pb.TherapyRecommendationResponse;
};

type emotichatStartBreathingSession = {
  readonly methodName: string;
  readonly service: typeof emotichat;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof emotichat_pb.BreathingSessionRequest;
  readonly responseType: typeof emotichat_pb.BreathingGuideResponse;
};

type emotichatGetInspirationalQuote = {
  readonly methodName: string;
  readonly service: typeof emotichat;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof emotichat_pb.QuoteRequest;
  readonly responseType: typeof emotichat_pb.QuoteResponse;
};

type emotichatLogUserInteraction = {
  readonly methodName: string;
  readonly service: typeof emotichat;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof emotichat_pb.UserInteractionRequest;
  readonly responseType: typeof emotichat_pb.InteractionLogResponse;
};

type emotichatGetSessionSummary = {
  readonly methodName: string;
  readonly service: typeof emotichat;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof emotichat_pb.SessionSummaryRequest;
  readonly responseType: typeof emotichat_pb.SessionSummaryResponse;
};

export class emotichat {
  static readonly serviceName: string;
  static readonly AnalyzeEmotion: emotichatAnalyzeEmotion;
  static readonly GetRecommendedTherapy: emotichatGetRecommendedTherapy;
  static readonly StartBreathingSession: emotichatStartBreathingSession;
  static readonly GetInspirationalQuote: emotichatGetInspirationalQuote;
  static readonly LogUserInteraction: emotichatLogUserInteraction;
  static readonly GetSessionSummary: emotichatGetSessionSummary;
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

export class emotichatClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  analyzeEmotion(
    requestMessage: emotichat_pb.VoiceTextRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.EmotionAnalysisResponse|null) => void
  ): UnaryResponse;
  analyzeEmotion(
    requestMessage: emotichat_pb.VoiceTextRequest,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.EmotionAnalysisResponse|null) => void
  ): UnaryResponse;
  getRecommendedTherapy(
    requestMessage: emotichat_pb.EmotionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.TherapyRecommendationResponse|null) => void
  ): UnaryResponse;
  getRecommendedTherapy(
    requestMessage: emotichat_pb.EmotionRequest,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.TherapyRecommendationResponse|null) => void
  ): UnaryResponse;
  startBreathingSession(
    requestMessage: emotichat_pb.BreathingSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.BreathingGuideResponse|null) => void
  ): UnaryResponse;
  startBreathingSession(
    requestMessage: emotichat_pb.BreathingSessionRequest,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.BreathingGuideResponse|null) => void
  ): UnaryResponse;
  getInspirationalQuote(
    requestMessage: emotichat_pb.QuoteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.QuoteResponse|null) => void
  ): UnaryResponse;
  getInspirationalQuote(
    requestMessage: emotichat_pb.QuoteRequest,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.QuoteResponse|null) => void
  ): UnaryResponse;
  logUserInteraction(
    requestMessage: emotichat_pb.UserInteractionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.InteractionLogResponse|null) => void
  ): UnaryResponse;
  logUserInteraction(
    requestMessage: emotichat_pb.UserInteractionRequest,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.InteractionLogResponse|null) => void
  ): UnaryResponse;
  getSessionSummary(
    requestMessage: emotichat_pb.SessionSummaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.SessionSummaryResponse|null) => void
  ): UnaryResponse;
  getSessionSummary(
    requestMessage: emotichat_pb.SessionSummaryRequest,
    callback: (error: ServiceError|null, responseMessage: emotichat_pb.SessionSummaryResponse|null) => void
  ): UnaryResponse;
}


// package: emotichat
// file: emotichat.proto

import * as jspb from "google-protobuf";

export class VoiceTextRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getInputText(): string;
  setInputText(value: string): void;

  getAudioFilePath(): string;
  setAudioFilePath(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceTextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceTextRequest): VoiceTextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceTextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceTextRequest;
  static deserializeBinaryFromReader(message: VoiceTextRequest, reader: jspb.BinaryReader): VoiceTextRequest;
}

export namespace VoiceTextRequest {
  export type AsObject = {
    userId: string,
    inputText: string,
    audioFilePath: string,
    language: string,
    timestamp: string,
  }
}

export class EmotionAnalysisResponse extends jspb.Message {
  getEmotion(): string;
  setEmotion(value: string): void;

  getConfidenceScore(): number;
  setConfidenceScore(value: number): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  getAnalysisNotes(): string;
  setAnalysisNotes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmotionAnalysisResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmotionAnalysisResponse): EmotionAnalysisResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmotionAnalysisResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmotionAnalysisResponse;
  static deserializeBinaryFromReader(message: EmotionAnalysisResponse, reader: jspb.BinaryReader): EmotionAnalysisResponse;
}

export namespace EmotionAnalysisResponse {
  export type AsObject = {
    emotion: string,
    confidenceScore: number,
    timestamp: string,
    analysisNotes: string,
  }
}

export class EmotionRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getDetectedEmotion(): string;
  setDetectedEmotion(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmotionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmotionRequest): EmotionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmotionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmotionRequest;
  static deserializeBinaryFromReader(message: EmotionRequest, reader: jspb.BinaryReader): EmotionRequest;
}

export namespace EmotionRequest {
  export type AsObject = {
    userId: string,
    detectedEmotion: string,
    timestamp: string,
  }
}

export class TherapyRecommendationResponse extends jspb.Message {
  getTherapyType(): string;
  setTherapyType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMediaLink(): string;
  setMediaLink(value: string): void;

  getDuration(): string;
  setDuration(value: string): void;

  clearRecommendedActivitiesList(): void;
  getRecommendedActivitiesList(): Array<string>;
  setRecommendedActivitiesList(value: Array<string>): void;
  addRecommendedActivities(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TherapyRecommendationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TherapyRecommendationResponse): TherapyRecommendationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TherapyRecommendationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TherapyRecommendationResponse;
  static deserializeBinaryFromReader(message: TherapyRecommendationResponse, reader: jspb.BinaryReader): TherapyRecommendationResponse;
}

export namespace TherapyRecommendationResponse {
  export type AsObject = {
    therapyType: string,
    description: string,
    mediaLink: string,
    duration: string,
    recommendedActivitiesList: Array<string>,
  }
}

export class BreathingSessionRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getEmotionContext(): string;
  setEmotionContext(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BreathingSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BreathingSessionRequest): BreathingSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BreathingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BreathingSessionRequest;
  static deserializeBinaryFromReader(message: BreathingSessionRequest, reader: jspb.BinaryReader): BreathingSessionRequest;
}

export namespace BreathingSessionRequest {
  export type AsObject = {
    userId: string,
    emotionContext: string,
    timestamp: string,
  }
}

export class BreathingGuideResponse extends jspb.Message {
  getGuideText(): string;
  setGuideText(value: string): void;

  getInhaleDuration(): number;
  setInhaleDuration(value: number): void;

  getHoldDuration(): number;
  setHoldDuration(value: number): void;

  getExhaleDuration(): number;
  setExhaleDuration(value: number): void;

  getAudioGuideLink(): string;
  setAudioGuideLink(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BreathingGuideResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BreathingGuideResponse): BreathingGuideResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BreathingGuideResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BreathingGuideResponse;
  static deserializeBinaryFromReader(message: BreathingGuideResponse, reader: jspb.BinaryReader): BreathingGuideResponse;
}

export namespace BreathingGuideResponse {
  export type AsObject = {
    guideText: string,
    inhaleDuration: number,
    holdDuration: number,
    exhaleDuration: number,
    audioGuideLink: string,
  }
}

export class QuoteRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getEmotionContext(): string;
  setEmotionContext(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuoteRequest): QuoteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuoteRequest;
  static deserializeBinaryFromReader(message: QuoteRequest, reader: jspb.BinaryReader): QuoteRequest;
}

export namespace QuoteRequest {
  export type AsObject = {
    userId: string,
    emotionContext: string,
    timestamp: string,
  }
}

export class QuoteResponse extends jspb.Message {
  getQuote(): string;
  setQuote(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuoteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuoteResponse): QuoteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuoteResponse;
  static deserializeBinaryFromReader(message: QuoteResponse, reader: jspb.BinaryReader): QuoteResponse;
}

export namespace QuoteResponse {
  export type AsObject = {
    quote: string,
    author: string,
  }
}

export class UserInteractionRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getActionType(): string;
  setActionType(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInteractionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserInteractionRequest): UserInteractionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserInteractionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInteractionRequest;
  static deserializeBinaryFromReader(message: UserInteractionRequest, reader: jspb.BinaryReader): UserInteractionRequest;
}

export namespace UserInteractionRequest {
  export type AsObject = {
    userId: string,
    sessionId: string,
    actionType: string,
    content: string,
    timestamp: string,
  }
}

export class InteractionLogResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InteractionLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InteractionLogResponse): InteractionLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InteractionLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InteractionLogResponse;
  static deserializeBinaryFromReader(message: InteractionLogResponse, reader: jspb.BinaryReader): InteractionLogResponse;
}

export namespace InteractionLogResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class SessionSummaryRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SessionSummaryRequest): SessionSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionSummaryRequest;
  static deserializeBinaryFromReader(message: SessionSummaryRequest, reader: jspb.BinaryReader): SessionSummaryRequest;
}

export namespace SessionSummaryRequest {
  export type AsObject = {
    userId: string,
    sessionId: string,
  }
}

export class SessionSummaryResponse extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  clearEmotionsDetectedList(): void;
  getEmotionsDetectedList(): Array<string>;
  setEmotionsDetectedList(value: Array<string>): void;
  addEmotionsDetected(value: string, index?: number): string;

  getDominantEmotion(): string;
  setDominantEmotion(value: string): void;

  getSummaryNotes(): string;
  setSummaryNotes(value: string): void;

  clearRecommendedFollowupsList(): void;
  getRecommendedFollowupsList(): Array<string>;
  setRecommendedFollowupsList(value: Array<string>): void;
  addRecommendedFollowups(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SessionSummaryResponse): SessionSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionSummaryResponse;
  static deserializeBinaryFromReader(message: SessionSummaryResponse, reader: jspb.BinaryReader): SessionSummaryResponse;
}

export namespace SessionSummaryResponse {
  export type AsObject = {
    sessionId: string,
    userId: string,
    emotionsDetectedList: Array<string>,
    dominantEmotion: string,
    summaryNotes: string,
    recommendedFollowupsList: Array<string>,
  }
}


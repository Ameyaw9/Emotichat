// package: emotichat
// file: emotichat.proto

var emotichat_pb = require("./emotichat_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var emotichat = (function () {
  function emotichat() {}
  emotichat.serviceName = "emotichat.emotichat";
  return emotichat;
}());

emotichat.AnalyzeEmotion = {
  methodName: "AnalyzeEmotion",
  service: emotichat,
  requestStream: false,
  responseStream: false,
  requestType: emotichat_pb.VoiceTextRequest,
  responseType: emotichat_pb.EmotionAnalysisResponse
};

emotichat.GetRecommendedTherapy = {
  methodName: "GetRecommendedTherapy",
  service: emotichat,
  requestStream: false,
  responseStream: false,
  requestType: emotichat_pb.EmotionRequest,
  responseType: emotichat_pb.TherapyRecommendationResponse
};

emotichat.StartBreathingSession = {
  methodName: "StartBreathingSession",
  service: emotichat,
  requestStream: false,
  responseStream: false,
  requestType: emotichat_pb.BreathingSessionRequest,
  responseType: emotichat_pb.BreathingGuideResponse
};

emotichat.GetInspirationalQuote = {
  methodName: "GetInspirationalQuote",
  service: emotichat,
  requestStream: false,
  responseStream: false,
  requestType: emotichat_pb.QuoteRequest,
  responseType: emotichat_pb.QuoteResponse
};

emotichat.LogUserInteraction = {
  methodName: "LogUserInteraction",
  service: emotichat,
  requestStream: false,
  responseStream: false,
  requestType: emotichat_pb.UserInteractionRequest,
  responseType: emotichat_pb.InteractionLogResponse
};

emotichat.GetSessionSummary = {
  methodName: "GetSessionSummary",
  service: emotichat,
  requestStream: false,
  responseStream: false,
  requestType: emotichat_pb.SessionSummaryRequest,
  responseType: emotichat_pb.SessionSummaryResponse
};

exports.emotichat = emotichat;

function emotichatClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

emotichatClient.prototype.analyzeEmotion = function analyzeEmotion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(emotichat.AnalyzeEmotion, {
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

emotichatClient.prototype.getRecommendedTherapy = function getRecommendedTherapy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(emotichat.GetRecommendedTherapy, {
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

emotichatClient.prototype.startBreathingSession = function startBreathingSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(emotichat.StartBreathingSession, {
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

emotichatClient.prototype.getInspirationalQuote = function getInspirationalQuote(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(emotichat.GetInspirationalQuote, {
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

emotichatClient.prototype.logUserInteraction = function logUserInteraction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(emotichat.LogUserInteraction, {
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

emotichatClient.prototype.getSessionSummary = function getSessionSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(emotichat.GetSessionSummary, {
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

exports.emotichatClient = emotichatClient;


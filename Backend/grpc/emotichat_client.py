import grpc
import emotichat_pb2
import emotichat_pb2_grpc

def run():
    channel = grpc.insecure_channel('localhost:50051')
    stub = emotichat_pb2_grpc.EmotiChatStub(channel)

    # Analyze Emotion
    emotion_response = stub.AnalyzeEmotion(emotichat_pb2.VoiceTextRequest(
        user_id="user123",
        input_text="I feel peaceful today.",
        audio_file_path="",
        language="en",
        timestamp="2025-08-06T10:00:00Z"
    ))
    print("Emotion:", emotion_response.emotion)

    # Get Therapy
    therapy_response = stub.GetRecommendedTherapy(emotichat_pb2.EmotionRequest(
        user_id="user123",
        detected_emotion="Sad",
        timestamp="2025-08-06T10:01:00Z"
    ))
    print("Recommended Therapy:", therapy_response.therapy_type)

    # Start Breathing
    breathing = stub.StartBreathingSession(emotichat_pb2.BreathingSessionRequest(
        user_id="user123",
        emotion_context="Anxious",
        timestamp="2025-08-06T10:02:00Z"
    ))
    print("Breathing Guide:", breathing.guide_text)

    # Get Quote
    quote = stub.GetInspirationalQuote(emotichat_pb2.QuoteRequest(
        user_id="user123",
        emotion_context="Anxious",
        timestamp="2025-08-06T10:03:00Z"
    ))
    print("Quote:", quote.quote)

    # Log Interaction
    interaction = stub.LogUserInteraction(emotichat_pb2.UserInteractionRequest(
        user_id="user123",
        session_id="sess001",
        action_type="Breathing",
        content="Followed breathing guide",
        timestamp="2025-08-06T10:04:00Z"
    ))
    print("Log Message:", interaction.message)

    # Get Summary
    summary = stub.GetSessionSummary(emotichat_pb2.SessionSummaryRequest(
        user_id="user123",
        session_id="sess001"
    ))
    print("Session Summary:", summary.summary_notes)

if __name__ == '__main__':
    run()

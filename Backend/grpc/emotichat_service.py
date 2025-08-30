import grpc
from concurrent import futures
import time

import emotichat_pb2
import emotichat_pb2_grpc

class emotichatServicer(emotichat_pb2_grpc.emotichatServicer):
    def AnalyzeEmotion(self, request, context):
        print(f"Analyzing Emotion for: {request.user_id}")
        return emotichat_pb2.EmotionAnalysisResponse(
            emotion="Calm",
            confidence_score=0.92,
            timestamp=request.timestamp,
            analysis_notes="User appears calm and composed."
        )

    def GetRecommendedTherapy(self, request, context):
        print(f"Getting Therapy for Emotion: {request.detected_emotion}")
        return emotichat_pb2.TherapyRecommendationResponse(
            therapy_type="Music Therapy",
            description="Listen to calm piano melodies.",
            media_link="https://gsxskdhvnblrjclfmnou.supabase.co/storage/v1/object/sign/emoti-chat01.files/333-hz-healing-frequencies-221873.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZDI0M2FkZC1hNjM0LTQxMTMtODU4ZS0yMGFkNTcxZDJmZjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlbW90aS1jaGF0MDEuZmlsZXMvMzMzLWh6LWhlYWxpbmctZnJlcXVlbmNpZXMtMjIxODczLm1wMyIsImlhdCI6MTc0ODg2MjAwMywiZXhwIjoxNzgwMzk4MDAzfQ.5iwbb9f8WPDLFxN9BKDUkoshEwPy3CEspptY0SNm2zk",
            duration="10min",
            recommended_activities=["Deep breathing", "Journaling"]
        )

    def StartBreathingSession(self, request, context):
        return emotichat_pb2.BreathingGuideResponse(
            guide_text="Inhale... Hold... Exhale...",
            inhale_duration=4,
            hold_duration=7,
            exhale_duration=8,
            audio_guide_link="https://gsxskdhvnblrjclfmnou.supabase.co/storage/v1/object/sign/emoti-chat01.files/healing-music-335083.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZDI0M2FkZC1hNjM0LTQxMTMtODU4ZS0yMGFkNTcxZDJmZjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlbW90aS1jaGF0MDEuZmlsZXMvaGVhbGluZy1tdXNpYy0zMzUwODMubXAzIiwiaWF0IjoxNzQ4ODYyMTIzLCJleHAiOjE3ODAzOTgxMjN9.ogFfUSF_eIUa6qLu_KSjQxOXKy4KDuSOGnOxPPIrKu8"
        )

    def GetInspirationalQuote(self, request, context):
        return emotichat_pb2.QuoteResponse(
            quote="Believe you can and you're halfway there.",
            author="Theodore Roosevelt"
        )

    def LogUserInteraction(self, request, context):
        print(f"Logging Interaction: {request.action_type}")
        return emotichat_pb2.InteractionLogResponse(
            success=True,
            message="Interaction logged successfully."
        )

    def GetSessionSummary(self, request, context):
        return emotichat_pb2.SessionSummaryResponse(
            session_id=request.session_id,
            user_id=request.user_id,
            emotions_detected=["Calm", "Happy"],
            dominant_emotion="Calm",
            summary_notes="The session helped reduce anxiety.",
            recommended_followups=["Meditation", "Hydration", "Sleep early"]
        )

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    emotichat_pb2_grpc.add_emotichatServicer_to_server(emotichatServicer(), server)
    server.add_insecure_port('[::]:50051')
    print("EmotiChat gRPC server started on port 50051...")
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    serve()

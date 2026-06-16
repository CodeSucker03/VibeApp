"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { insforge } from "@/lib/insforge-client";
import { trackEvent, identifyUser } from "@/lib/posthog-client";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const error = urlParams.get("error");

      if (error) {
        trackEvent('oauth_sign_in_failed', { error });
        router.push("/login?error=oauth_failed");
        return;
      }

      // The SDK automatically handles insforge_code exchange on page load
      // Wait for SDK to process, then verify session
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const { data, error: authError } = await insforge.auth.getCurrentUser();
      
      if (authError || !data?.user) {
        console.error("[callback] auth error:", authError);
        trackEvent('oauth_callback_error', { error: authError?.message || 'no_session' });
        router.push("/login?error=oauth_failed");
        return;
      }

      // Identify user in PostHog
      identifyUser(data.user.id, data.user.email);
      trackEvent('oauth_sign_in_success');
      router.push("/dashboard");
    };

    handleCallback();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-text-secondary">Completing sign in...</p>
      </div>
    </div>
  );
}
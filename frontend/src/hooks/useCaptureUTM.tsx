import { useEffect } from "react";

export function useCaptureUTM() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");

    if (utmSource) {
      localStorage.setItem("utm_source", utmSource);
      if (utmMedium) localStorage.setItem("utm_medium", utmMedium);
      if (utmCampaign) localStorage.setItem("utm_campaign", utmCampaign);
    }
  }, []);
}

import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

interface TawkToChatProps {
  propertyId?: string;
  widgetId?: string;
}

const TawkToChat = ({ 
  propertyId = "YOUR_PROPERTY_ID", 
  widgetId = "YOUR_WIDGET_ID" 
}: TawkToChatProps) => {
  useEffect(() => {
    // Check if Tawk.to is already loaded
    if (window.Tawk_API) return;

    // Set load start time
    window.Tawk_LoadStart = new Date();

    // Create and append the Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    return () => {
      // Cleanup on unmount
      if (window.Tawk_API) {
        window.Tawk_API = undefined;
      }
    };
  }, [propertyId, widgetId]);

  return null; // This component doesn't render anything visible
};

export default TawkToChat;

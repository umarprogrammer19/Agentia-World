import { useEffect } from "react";

declare global {
    interface Window {
        kommunicate?: any;
    }
}

const useKommunicate = (): void => {
    useEffect(() => {
        const kommunicateAppId = process.env.NEXT_PUBLIC_KOMMUNICATE_APP_ID;

        if (!kommunicateAppId) {
            console.error("Kommunicate App ID is missing in environment variables!");
            return;
        }

        (function (document: Document, kommunicate: any) {
            const kommunicateSettings = {
                appId: kommunicateAppId,
                popupWidget: true,
                automaticChatOpenOnNavigation: true,
            };

            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://widget.kommunicate.io/v2/kommunicate.app";

            script.onload = () => {
                window.kommunicate = kommunicate;
                kommunicate._globals = kommunicateSettings;
            };

            document.head.appendChild(script);
        })(document, window.kommunicate || {});
    }, []);
};

export default useKommunicate;

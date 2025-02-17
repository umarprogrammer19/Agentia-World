"use client";

import { useEffect } from "react";

const ChatBot: React.FC = () => {
    useEffect(() => {
        const appId = process.env.NEXT_PUBLIC_KOMMUNICATE_APP_ID;

        if (!appId) {
            console.error("❌ Kommunicate App ID is missing in environment variables!");
            return;
        }

        if (document.getElementById("kommunicate-script")) {
            console.warn("⚠️ Kommunicate script already exists. Skipping injection.");
            return;
        }

        console.log("🚀 Injecting Kommunicate script...");

        const kommunicateSettings = {
            appId,
            popupWidget: true,
            automaticChatOpenOnNavigation: true,
        };

        const script = document.createElement("script");
        script.id = "kommunicate-script";
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://widget.kommunicate.io/v2/kommunicate.app";

        script.onload = () => {
            console.log("✅ Kommunicate script loaded successfully!");

            if (!(window as any).kommunicate) {
                (window as any).kommunicate = {};
            }

            (window as any).kommunicate._globals = kommunicateSettings;

            setTimeout(() => {
                const chatWidget = document.querySelector(
                    ".kommunicate-widget-iframe"
                ) as HTMLElement | null;

                if (chatWidget) {
                    chatWidget.style.position = "fixed";
                    chatWidget.style.bottom = "20px";
                    chatWidget.style.right = "20px";
                    chatWidget.style.width = "60px";
                    chatWidget.style.height = "60px";
                    chatWidget.style.zIndex = "99999";
                    chatWidget.style.backgroundColor = "purple";
                    console.log("🎨 Chatbot widget styles applied.");
                } else {
                    console.warn("⚠️ Chat widget not found after delay.");
                }
            }, 3000);
        };

        script.onerror = () => {
            console.error("❌ Failed to load Kommunicate script.");
        };

        document.body.appendChild(script);

        return () => {
            console.log("🗑️ Cleaning up Kommunicate script...");
            const existingScript = document.getElementById("kommunicate-script");
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return null;
};

export default ChatBot;

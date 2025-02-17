"use client";
import useKommunicate from "../hooks/useKommunicate";
import { useEffect } from "react";

const ChatBot: React.FC = () => {
    useEffect(() => {
        useKommunicate();
    }, []);

    return null;
};

export default ChatBot;

import { ArrowPathIcon } from "@heroicons/react/24/solid";
import {
    Card,
    Avatar,
    Input,
    Typography,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { chatlogData } from "@/data";
  
  export function ChatbotTypes() {

    return (
      <Card color="transparent" className="w-[24rem] p-5">
        <div className="bg-gray-400 w-full py-5 rounded-lg hover:cursor-pointer">
            <Typography
                as="li"
                variant="small"
                className="capitalize"
            >
                File
            </Typography>
        </div>
        <div className="bg-gray-400 w-full py-5 rounded-lg hover:cursor-pointer">
            <Typography
                as="li"
                variant="small"
                className="capitalize"
            >
                Text
            </Typography>
        </div>
      </Card>
    );
  }
  
  ChatbotTypes.displayName = "ChatbotTypes";
  
  export default ChatbotTypes;
  
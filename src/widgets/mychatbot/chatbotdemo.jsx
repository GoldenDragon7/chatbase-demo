import { ArrowPathIcon } from "@heroicons/react/24/solid";
import {
    Card,
    Avatar,
    Input,
    Typography,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { chatlogData } from "@/data";
  
export function ChatbotDemo() {
  const [chatlog, setChatlog] = useState([]);

  useEffect(() => {
    settingChatLog(chatlogData);
  }, []);

  const compare = (a, b) => {
    const datetimeA = new Date(a.created_at);
    const datetimeB = new Date(b.created_at);
  
    if (datetimeA < datetimeB) {
      return 1;
    } else if (datetimeA > datetimeB) {
      return -1;
    } else {
      return 0;
    }
  };

  const settingChatLog = (logs) => {
    let sortdata = logs[0];
    sortdata.logdata.sort(compare);
    setChatlog(sortdata.logdata);
  };

  const PageReload = () => {
    // setChatlog();
    console.log("Reload!!!")
  };

  return (
    <Card color="transparent" shadow={false} className="rounded-lg border-2 border-gray-400 w-full px-2 pb-3 overflow-y-auto h-[32rem] max-h-[32rem]">
      <div className="border-b-2 border-gray-400 flex justify-end py-1">
        <Typography
          as="li"
          variant="small"
          className="capitalize flex align-center"
        >
          <ArrowPathIcon className="w-[25x] h-[25px] opacity-75 m-1 hover:cursor-pointer" onClick={PageReload} />
        </Typography>
      </div>
      <div className="pt-2 px-2">
      {
        chatlog && chatlog.map((item, idx) => {
          if (item.isBot) {
            return (
              <div className="w-full flex justify-start my-2 pr-10" key={idx}>
                <Typography id="wordPos" className="rounded-lg px-2 py-2 bg-blue-100 text-left">{item.desc}</Typography>
              </div>
            )
          } else {
            return (
              <div className="w-full flex justify-end my-2 pl-10" key={idx}>
                <Typography id="wordPos" className="rounded-lg px-2 py-2 bg-blue-100 text-left">{item.desc}</Typography>
              </div>
            )
          }
        })
      }
      </div>
      <div className="w-full">
        <Input label="" icon={<i className="fa fa-paper-plane" />} />
      </div>
    </Card>
  );
}

ChatbotDemo.displayName = "ChatbotDemo";

export default ChatbotDemo;
  
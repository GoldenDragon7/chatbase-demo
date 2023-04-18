import { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import {
    Card,
    Avatar,
    Input,
    Typography,
    Button,
    Checkbox
  } from "@material-tailwind/react";
  import { ChatbotDemo } from "@/widgets/mychatbot";
  
export function MybotSettings() {
    const [botimgable, setBotImgable] = useState(true);
    const [usericonable, setUserIconable] = useState(true);

    const handleCheckbox = () => {
        const flag = botimgable;
        setBotImgable(!flag);
    };

    const handleChatIcon = () => {
        const flag = usericonable;
        setUserIconable(!flag);
    };

    return (
        <div className="text-left w-full">
            <div className="my-5">
                <div className="block text-sm font-medium text-gray-700">
                    Chatbot ID
                </div>
                <div className="font-semibold text-black">
                    embedding-txt-txt-qwyydusut
                </div>
            </div>
            <div className="my-5">
                <div className="block text-sm font-medium text-gray-700">
                    Number of characters
                </div>
                <div className="font-semibold text-black">
                    9348
                </div>
            </div>
            <div className="my-5">
                <div className="block text-sm font-medium text-gray-700">
                    Name
                </div>
                <div className="w-full mt-1">
                    <input className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900" label="Input..."/>
                </div>
            </div>
            <div className="my-5">
                <div className="block text-sm font-medium text-gray-700">
                    Base Prompt (system message)
                </div>
                <div className="w-full mt-1">
                    <textarea rows={5} maxLength={2500} className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900" ></textarea>
                </div>
            </div>
            <div className="my-5">
                <div className="block text-sm font-medium text-gray-700">
                    Model
                </div>
                <div className="w-full mt-1">
                    <select id="model" name="model" className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900">
                        <option value="gpt-3.5-turbo" selected="">gpt-3.5-turbo</option>
                        <option value="gpt-4">gpt-4</option>
                    </select>
                </div>
                <p className="mt-2 text-sm text-zinc-500">
                    1 message using gpt-3.5-turbo costs 1 message credit. 1 message using gpt-4 costs 20 message credits.
                </p>
            </div>
            <div className="my-5">
                <div className="block text-sm font-medium text-gray-700">
                    Visibilty
                </div>
                <div className="w-full mt-1">
                    <select id="model" name="model" className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900">
                        <option value="private" selected="">Private</option>
                        <option value="private_but_can_be_embedded">Private but can be embedded on website</option>
                        <option value="public">Public</option>
                    </select>
                </div>
                <p className="mt-2 text-sm text-zinc-500">
                    'Private': No one can access your chatbot except you (your account)
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                    'Private but can be embedded on website': Other people can't access your chatbot if you send them the link, but you can still embed it on your website and your website visitors will be able to use it. (make sure to set your domains)
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                    'Public': Anyone with the link can access it on chatbase.co and can be embedded on your website.
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                    Set to public if you want to be able to send a link of your chatbot to someone to try it.
                </p>
            </div>
            <div className="my-5">
                <div className="block text-sm font-medium text-gray-700">
                    Domains
                </div>
                <div className="mt-1">
                    <textarea name="domains" placeholder="example.com" className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900" maxLength={400}></textarea>
                </div>
                <p className="mt-2 text-sm text-zinc-500">
                    Enter each domain in a new line
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                    Domains you want to embed your chatbot on. Your chatbot visibility has to be 'Public' or 'Private but can be embedded on website' for this to work.
                </p>
            </div>
            <div className="my-5 pb-8">
                <div className="block text-sm font-medium text-gray-700">
                    Rate Limiting
                </div>
                <p className="mt-2 text-sm text-zinc-500">
                    Limit the number of messages sent from one device on the iframe and chat bubble (this limit will not be applied to you on chatbase.co, only on your website for your users to prevent abuse).
                </p>
                <div className="mt-1 text-sm text-zinc-700">
                    Limit to only
                    <input name="ip_limit" type="number" className="mx-2 min-w-0 p-1 px-2 rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900" value="20"></input>
                    messages every
                    <input name="ip_limit_timeframe" type="number" className="mx-2 min-w-0 p-1 px-2 rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900" value="240"></input>
                    seconds.
                </div>
                <div className="text-sm text-zinc-700 my-4">
                    <p className="mt-2 text-sm text-zinc-500">
                        Show this message to show when limit is hit
                    </p>
                    <input name="ip_limit_message" className="min-w-0 p-1 mt-1 px-2 w-full rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900" value="Too many messages in a row"></input>
                </div>
            </div>
            <h4 className="mt-5 font-semibold text-lg">Chat Interface</h4>
            <h4 className="mb-8 text-sm text-zinc-600">applies when embedded on a website</h4>
            <div className="flex">
                <div className="w-1/2 px-2">
                    <div className="my-5">
                        <div className="block text-sm font-medium text-gray-700">
                            Initial Messages
                        </div>
                        <div className="w-full mt-1">
                            <textarea rows={3} maxLength={1000} className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900" ></textarea>
                        </div>
                        <p className="mt-2 text-sm text-zinc-500">
                            Enter each message in a new line.
                        </p>
                    </div>
                    <div className="my-5">
                        <div className="block text-sm font-medium text-gray-700">
                            Suggested Messages
                        </div>
                        <div className="w-full mt-1">
                            <textarea rows={3} maxLength={1000} className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900" ></textarea>
                        </div>
                        <p className="mt-2 text-sm text-zinc-500">
                            Enter each message in a new line.
                        </p>
                    </div>
                    <div className="my-5">
                        <div className="block text-sm font-medium text-gray-700">
                            Theme
                        </div>
                        <div className="w-full mt-1">
                            <select id="theme" name="theme" class="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900">
                                <option value="light" selected="">light</option>
                                <option value="dark">dark</option>
                            </select>
                        </div>
                    </div>
                    {
                        botimgable && (
                            <div className="my-5">
                                <div className="block text-sm font-medium text-gray-700">
                                    Update chatbot profile picture
                                </div>
                                <div className="w-full mt-1">
                                    <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file"></input>
                                </div>
                            </div>
                        )
                    }
                    <div className="text-sm font-medium text-gray-700 flex items-center">
                        <Checkbox onChange={handleCheckbox}/>
                        Remove Chatbot Profile Picture
                    </div>
                    <div className="my-5">
                        <Input size="md" label="Display name" />
                    </div>
                    <div className="w-full mt-8">
                        <div className="block text-sm font-medium text-gray-700">
                            Update chatbot profile picture
                        </div>
                        <div className="w-1/3 mt-2">
                            <Input type="color" label="color" list="presetColors" class="rounded-sm cursor-pointer" value="#3B81F6" />
                        </div>
                    </div>
                    <div className="my-5">
                        <Typography>
                            **If the changes here don't show up immediately on your website try clearing your browser cache or use incognito. (New users will see the changes immediately)**
                        </Typography>
                    </div>
                    {
                        usericonable && (
                            <div className="my-5">
                                <div className="block text-sm font-medium text-gray-700">
                                    Update chatbot icon
                                </div>
                                <div className="w-full mt-1">
                                    <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file"></input>
                                </div>
                            </div>
                        )
                    }
                    <div className="text-sm font-medium text-gray-700 flex items-center">
                        <Checkbox onChange={handleChatIcon}/>
                        Remove Chatbot Icon
                    </div>
                    <div className="w-full mt-8">
                        <div className="block text-sm font-medium text-gray-700">
                            Chat Bubble Button Color
                        </div>
                        <div className="w-1/3 mt-2">
                            <Input type="color" label="color" list="presetColors" class="rounded-sm cursor-pointer" value="#3B81F6" />
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="block text-sm font-medium text-gray-700">
                            Align Chat Bubble Button
                        </div>
                        <div className="w-full mt-1">
                            <select id="theme" name="theme" class="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900">
                                <option value="right" selected="">right</option>
                                <option value="left">left</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="w-full flex">
                            <div>
                                Auto show initial messages after
                            </div>
                            <div className="w-4">
                                <input name="auto_open_chat_window_after" type="number" class="min-w-0 p-1 px-2 rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900" value="3"/>
                            </div>
                        </div>
                        <Typography>
                            seconds (negative to disable)
                        </Typography>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <ChatbotDemo />
                </div>
            </div>
            <div className="w-full flex justify-end">
                <Button variant="gradient" size="lg" className="mt-8">
                    Save Changes
                </Button>
            </div>
        </div>
    );
}

MybotSettings.displayName = "MybotSettings";

export default MybotSettings;
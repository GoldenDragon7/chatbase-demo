import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  ArrowUturnDownIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { ChatbotCard } from "@/widgets/cards";
import { useNavigate } from "react-router-dom";
import { mybotlist } from '@/data';

export function Mybots() {
  const navigate = useNavigate();

  const selectBot = (index) => {
    console.log(index);
    navigate("/chatbot");
  };

  return (
    <>
      <section className="relative block h-[50vh]">
        {/* <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" /> */}
        {/* <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" /> */}
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="p-10">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/bot.svg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl bg-white"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button className="bg-blue-400">New Chatbot</Button>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  My Chatbots
                </Typography>
              </div>
              <div className="mt-20 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4 flex justify-center">
                {
                  mybotlist && mybotlist.map((item, idx) => {
                    return (
                      <div key={idx} onClick={() => selectBot(idx)}>
                        <ChatbotCard
                          img={item.img}
                          botname={item.botname}
                          datasrc={item.datasrc}
                        />
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mybots;

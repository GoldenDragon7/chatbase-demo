import React from "react";
import { 
  Avatar,
  Typography,
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { tabdata } from '@/data';
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Chatbot() {
  return (
    <>
      <section className="relative block h-[50vh]">
        {/* <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" /> */}
        {/* <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" /> */}
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">  
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  My Chatbot
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                      <Tabs value="chatbot" className="w-full">
                        <TabsHeader
                          className="bg-transparent"
                          indicatorProps={{
                            className: "bg-blue-500/10 shadow-none text-blue-500",
                          }}
                        >
                          {
                            tabdata && tabdata.map(({ label, value }) => (
                              <Tab key={value} value={value} className="w-max mx-5">
                                {label}
                              </Tab>
                            ))
                          }
                        </TabsHeader>
                        <TabsBody>
                          {
                            tabdata && tabdata.map(({ value, desc }) => (
                              <TabPanel key={value} value={value}>
                                {React.createElement(desc)}
                              </TabPanel>
                            ))
                          }
                        </TabsBody>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Chatbot;

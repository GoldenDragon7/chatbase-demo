import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { ChatbotDemo } from "@/widgets/mychatbot";

export function Home() {
  return (
    <>
      <div className="relative flex content-center items-center justify-center pt-48 pb-16">
        {/* <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" /> */}
        {/* <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" /> */}
        <div className="max-w-8xl container relative mx-auto ">
          <div className="flex flex-wrap items-center w-full">
            <div className="mx-auto w-2/3 px-4 text-center lg:w-8/12 text-gray-900">
              <div className="w-3/4 mx-auto">
                <Typography
                  variant="h1"
                  className="mb-1 font-black text-6xl"
                >
                  Custom ChatGPT for
                </Typography>
                <Typography
                  variant="h1"
                  className="mb-6 font-black text-[#a272e9] text-6xl"
                >
                  your website
                </Typography>
                <Typography variant="lead" className="text-gray-600">
                  Just upload a document or add a link to your website and get a ChatGPT-like chatbot that can answer any question on it. Then add a chat widget to your website.
                </Typography>
                <Button size="lg" className="mt-8 capitalize bg-[#4f46e5] text-sm py-2 px-4 font-semibold shadow-none hover:shadow-none">
                  Build your chatbot
                </Button>
              </div>
            </div>
            <div className="w-1/3">
              <div className="w-3/5 flex flex-col items-end">
                <img src="/img/producthunt-bot.png" className="w-full h-[26rem] border-gray-100 border-2" />
                <img src="/img/dropdown.svg" className="w-10 h-10"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="px-4 mt-32 pb-16">
        <div className="container mx-auto">
          <PageTitle heading="Live Demo">
            <Typography variant="h6">
              This chatbot was trained on a document explaining <b className="text-black">Chatbase</b>
            </Typography>
            <Typography variant="h6">
              You can embed a widget like this on any page on your website!
            </Typography>
          </PageTitle>
          <div className="mt-16 w-full">
            <div className="w-4/5 mx-auto">
              <ChatbotDemo />
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;

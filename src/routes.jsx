import { Home, Affiliate, Pricing, APIPage, Featured, Mybots, Chatbot } from "@/pages";
import {
  HomeIcon,
  LinkIcon,
  ClipboardDocumentIcon,
  UsersIcon,
  CreditCardIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/solid";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

export const routes = [
  {
    isauth: false,
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    isauth: false,
    icon: UsersIcon,
    name: "affiliate",
    path: "/affiliate",
    element: <Affiliate />,
  },
  {
    isauth: false,
    icon: CreditCardIcon,
    name: "pricing",
    path: "/pricing",
    element: <Pricing />,
  },
  {
    isauth: false,
    icon: LinkIcon,
    name: "apis",
    path: "/apis",
    element: <APIPage />,
  },
  {
    isauth: false,
    icon: ClipboardDocumentIcon,
    name: "featured Chatbots",
    path: "/featured",
    element: <Featured />,
  },
  {
    isauth: false,
    icon: ChatBubbleOvalLeftEllipsisIcon,
    name: "My Chatbots",
    path: "/mybots",
    element: <Mybots />,
  },
  {
    isauth: true,
    icon: ArrowRightOnRectangleIcon,
    name: "SignIn",
    path: "/signIn",
    element: <SignIn />,
  },
  {
    isauth: true,
    name: "SignUp",
    path: "/signUp",
    element: <SignUp />,
  },
  {
    isauth: true,
    name: "chatbot",
    path: "/chatbot",
    element: <Chatbot />,
  },
];

export default routes;

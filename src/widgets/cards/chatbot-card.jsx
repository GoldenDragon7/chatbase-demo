import {
  Card,
  Avatar,
  Typography,
} from "@material-tailwind/react";

export function ChatbotCard({ img, botname, datasrc }) {
  return (
    <Card color="transparent" shadow={false} className="text-center rounded-2xl shadow-lg shadow-gray-500/50 w-250 h-250 hover:shadow-gray-500/100 hover:cursor-pointer">
      <Avatar
        src={img}
        alt={botname}
        size="xxl"
        className="m-auto w-full h-full rounded-b-none"
      />
      <Typography variant="h4" color="blue-gray" className="mt-6 mb-1">
        {botname}
      </Typography>
      <Typography variant="h5" color="blue-gray" className="mt-1 mb-1">
        {datasrc}
      </Typography>
    </Card>
  );
}

ChatbotCard.displayName = "ChatbotCard";

export default ChatbotCard;

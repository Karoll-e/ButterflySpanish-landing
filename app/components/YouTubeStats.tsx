import {Users, BookOpenCheck, Video } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  iconBgColor?: string;
}

const StatItem = ({ icon, value, label, iconBgColor = "bg-gray-100" }: StatItemProps) => (
  <div className="flex items-center gap-3">
    <div className={`p-3 rounded-full ${iconBgColor}`}>
      {icon}
    </div>
    <div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-zinc-600">{label}</div>
    </div>
  </div>
);

export function YouTubeStats() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-8 sm:gap-12 pt-4">
      <div className="flex gap-8 sm:gap-12">
        <StatItem
          icon={<Video className="h-6 w-6 text-rose-600" />}
          value="150+"
          label="Video lessons"
          iconBgColor="bg-rose-100/50"
        />
        <StatItem
          icon={
              <Users className="h-6 w-6 text-yellow-600"/>
          }
          value="1.3M+"
          label="Subscribers"
          iconBgColor="bg-yellow-100/50"
        />
      </div>
      <StatItem
        icon={
            <BookOpenCheck className="h-6 w-6 text-green-600"/>
        }
        value="12+"
        label="Years of experience"
        iconBgColor="bg-green-100/50"
      />
    </div>
  );
} 
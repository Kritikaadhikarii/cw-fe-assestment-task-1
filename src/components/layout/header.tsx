import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search } from "lucide-react";

export default function Header() {
  const [search, setSearch] = useState("");
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Logo" className="w-10 h-10" />
        <div className="hidden sm:block text-white font-semibold text-lg">
          Wortionary
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div style={{ position: "relative" }}>
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className="text-gray-400 text-sm" />
          </span>

          <Input
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-gray-800 text-white border-none focus:ring-0 rounded-full"
          />
        </div>
        <Avatar style={{ width: "32px", height: "32px" }}>
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
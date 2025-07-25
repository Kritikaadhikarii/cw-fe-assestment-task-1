import { Badge } from "@/components/ui/badge";

export default function TagList({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="mt-8 px-6 max-w-5xl mx-auto">
      <div className="text-white text-lg font-semibold mb-4">{title}</div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
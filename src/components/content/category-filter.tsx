"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: { label: string; value: string }[];
  paramName?: string;
}

export function CategoryFilter({
  categories,
  paramName = "category",
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get(paramName) || "";

  function handleClick(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === active || value === "") {
      params.delete(paramName);
    } else {
      params.set(paramName, value);
    }
    const qs = params.toString();
    router.push(qs ? `?${qs}` : ".", { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleClick("")}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          !active
            ? "bg-primary text-white"
            : "bg-stone-100 text-text-dark-secondary hover:bg-stone-200"
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => handleClick(cat.value)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            active === cat.value
              ? "bg-primary text-white"
              : "bg-stone-100 text-text-dark-secondary hover:bg-stone-200"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

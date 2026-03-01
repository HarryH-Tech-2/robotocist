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
          "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
          !active
            ? "border-primary bg-primary text-white shadow-md shadow-primary/25"
            : "border-stone-300 bg-white text-text-dark-secondary hover:border-primary/50 hover:text-primary"
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => handleClick(cat.value)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
            active === cat.value
              ? "border-primary bg-primary text-white shadow-md shadow-primary/25"
              : "border-stone-300 bg-white text-text-dark-secondary hover:border-primary/50 hover:text-primary"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

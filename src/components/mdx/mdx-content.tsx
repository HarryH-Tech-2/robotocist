import * as runtime from "react/jsx-runtime";
import { cn } from "@/lib/utils";

const sharedComponents = {
  // We'll register custom components here
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXContentProps {
  code: string;
  components?: Record<string, React.ComponentType>;
  className?: string;
}

export function MDXContent({ code, components, className }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return (
    <div className={cn("prose prose-lg max-w-none", className)}>
      <Component components={{ ...sharedComponents, ...components }} />
    </div>
  );
}

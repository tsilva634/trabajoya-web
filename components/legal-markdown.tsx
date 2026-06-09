import ReactMarkdown from "react-markdown"

const markdownComponents = {
  p: ({ ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 text-sm leading-relaxed text-muted-foreground" {...props} />
  ),
  h1: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mb-4 mt-8 text-xl font-bold text-foreground first:mt-0" {...props} />
  ),
  h2: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mb-3 mt-6 text-lg font-bold text-foreground first:mt-0" {...props} />
  ),
  h3: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-2 mt-4 text-base font-semibold text-foreground first:mt-0" {...props} />
  ),
  ul: ({ ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-4 list-outside list-disc space-y-2 pl-6" {...props} />
  ),
  ol: ({ ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-4 list-outside list-decimal space-y-2 pl-6" {...props} />
  ),
  li: ({ ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="mb-2 text-sm leading-relaxed text-muted-foreground" {...props} />
  ),
  strong: ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  a: ({ ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-primary underline hover:text-primary/80" {...props} />
  ),
}

export function LegalMarkdown({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
    </div>
  )
}

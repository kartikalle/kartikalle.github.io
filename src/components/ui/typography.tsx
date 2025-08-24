// src/components/ui/typography.tsx

export function TypographyH1({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            {children}
        </h1>
    );
}

export function TypographyH2({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    );
}

export function TypographyP({ children }: { children: React.ReactNode }) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {children}
        </p>
    );
}

export function TypographyList({ children }: { children: React.ReactNode }) {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {children}
        </ul>
    );
}

import { Button } from "@/components/ui/button";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <h1 className="scroll-m-20 text-center text-8xl font-extrabold tracking-tight text-balance mb-6">404</h1>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">Page Not Found</h2>
            <p className="text-muted-foreground text-xl mb-8 text-center">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Button asChild>
                <a href="/">Go back home</a>
            </Button>
        </div>
    );
}

export default NotFound;

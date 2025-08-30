function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-6">Kartik's Website</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6 text-gray-600 dark:text-gray-300 max-w-2xl text-center">
                Hi I'm Kartik! This is my website where you can learn more about me and see some of the projects I have been working on. Feel free to click through the website and take a look at anything on here. You can find links to my LinkedIn, Github, and resume on this site. I'll be updating this website with new projects and features here and there.
            </p>
        </div>
    );
}

export default Home;

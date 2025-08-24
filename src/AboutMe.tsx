function AboutMe() {
    const currentYear = new Date().getFullYear();
    const tennisPlayingYears = currentYear - 2013; // started playing in 2015
    const tennisWatchingYears = currentYear - 2019; // started watching in 2019

    return (
        <div className="flex flex-col items-center justify-center px-4 pt-12 pb-12">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                About Me
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4 text-gray-600 dark:text-gray-300 max-w-2xl text-center">
                I am a senior at North Carolina State University majoring in Computer Science and Math. Here are a few hobbies/interests that I have:
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2 mb-4 text-left max-w-2xl text-gray-700 dark:text-gray-200">
                <li>I love to play and watch tennis. I have been playing for about {tennisPlayingYears} years now and watching for {tennisWatchingYears} years. My favorite player is Dominic Thiem.</li>
                <li>I am a huge football fan and a big fan of the New England Patriots.</li>
                <li>I am very interested in solving challenging problems, especially ones that require problem solving and critical thinking skills. I like to learn about ingenious solutions and try to understand the thinking process. This is a big reason why I am interested in computer science and math.</li>  
            </ul>
        </div>
    );
}

export default AboutMe;

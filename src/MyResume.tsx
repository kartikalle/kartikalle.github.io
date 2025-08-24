function MyResume() {
    return (
        <div className="flex flex-col items-center justify-center px-4 pt-12 pb-12">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                My Resume
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6 text-gray-600 dark:text-gray-300 max-w-2xl text-center">
                You can view my resume below.
            </p>
            <iframe
                src="/Kartik_Alle_Resume.pdf"
                width="800"
                height="800"
                className="rounded-md shadow-md border"
                title="Kartik Alle Resume"
            ></iframe>
        </div>
    );
}

export default MyResume;

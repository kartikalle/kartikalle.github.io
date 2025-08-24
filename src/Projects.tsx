import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function Projects() {
    return (
        <div className="flex flex-col items-center justify-center px-4 pt-12 pb-12">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Projects
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4 text-gray-600 dark:text-gray-300 max-w-2xl text-center">
                Here are a some of my projects that I am working on or have worked on in the past. Some of the project titles are clickable and will redirect you to more information about the project.
            </p>
            <div className="w-full max-w-2xl space-y-6">
                <div>
                    <a href="https://github.com/kartikalle/kartikalle.github.io" target="_blank" rel="noopener noreferrer" className="group">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2 group-hover:underline">This Website</h3>
                    </a>
                    <p className="font-semibold text-lg flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-600 text-white">TypeScript</Badge>
                        <Badge className="bg-purple-600 text-white">React</Badge>
                        <Badge className="bg-green-500 text-white">Tailwind</Badge>
                    </p>
                    <p>
                        This website is built with React, TypeScript, and Tailwind CSS, using Vite for fast development and shadcn/ui for modern, accessible components. Everything is styled with utility-first CSS, and the site is fully responsive and theme-aware. I use this project to experiment with new frontend tools and best practices as I learn them.
                    </p>
                </div>
                <Separator className="my-4" />
                <div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">Self-Driving Car Traffic Sign Recognition</h3>
                    <p className="font-semibold text-lg flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-500 text-white">Python</Badge>
                        <Badge className="bg-yellow-500 text-black">NumPy</Badge>
                        <Badge className="bg-orange-600 text-white">TensorFlow</Badge>
                        <Badge className="bg-green-600 text-white">ROS2</Badge>
                        <Badge className="bg-red-500 text-white">OpenCV</Badge>
                    </p>
                    <p>
                        I built a self-driving car project where the car could spot stop signs and speed limit signs using a deep learning model trained on traffic sign images. With OpenCV and NumPy handling the computer vision side, and TensorFlow powering the neural network, the car was able to recognize these signs in real time and actually follow the rules—stopping at stop signs and adjusting its speed for speed limits. ROS2 helped tie everything together so the car could react on the fly. It was a fun way to combine AI, computer vision, and robotics!
                    </p>
                </div>
                <Separator className="my-4" />
                <div>
                    <a href="/Mushroom_Classification.pdf" target="_blank" rel="noopener noreferrer" className="group">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2 group-hover:underline">Mushroom Classification</h3>
                    </a>
                    <p className="font-semibold text-lg flex items-center gap-2 mb-2">
                        <Badge className="bg-orange-500 text-white">scikit-learn</Badge>
                        <Badge className="bg-yellow-400 text-black">Pandas</Badge>
                        <Badge className="bg-blue-500 text-white">Python</Badge>
                        <Badge className="bg-yellow-500 text-black">NumPy</Badge>
                    </p>
                    <p>In this project, we train and test various machine learning algorithms, such as logistic regression, support vector machines, and fully connected neural networks to determine if a mushroom is edible or not. We detail how these different machine learning models work and how we have configured them for this specific task. We then analyze the results and interpret them and their applications.</p>
                </div>
                <Separator className="my-4" />
                <div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">Light Bender</h3>
                    <p className="font-semibold text-lg flex items-center gap-2 mb-2">
                        <Badge className="bg-pink-500 text-white">GameMaker</Badge>
                        <Badge className="bg-teal-400 text-black">GML</Badge>
                    </p>
                    <p>In this project, we created an educational computer game that teaches students the foundations of how light works. This game has many levels where players will solve puzzles with to get a light beam to hit a target. The players will have to move mirrors around to guide the beam to hit the target. We used GameMaker Lite and GameMaker Language to implement the light reflection and refraction.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;

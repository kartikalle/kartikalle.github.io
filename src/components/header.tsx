import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { Link } from "react-router-dom"
import linkedinIcon from "@/assets/LI-In-Bug.png"
import githubIcon from "@/assets/github-mark.png"
import githubIconWhite from "@/assets/github-mark-white.png"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function Header() {
    const { theme } = useTheme();
    let effectiveTheme = theme;
    if (theme === 'system') {
        if (typeof window !== 'undefined' && window.matchMedia) {
            effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
    }

    return (
        <header className="w-full h-20 px-8 flex items-center justify-between bg-background/80 backdrop-blur sticky top-0 z-50">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/" className="text-base font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/about" className="text-base font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">About Me</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/projects" className="text-base font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">Projects</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/resume" className="text-base font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">My Resume</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/kartik-alle-3b3148200" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="icon" className="size-8 p-0">
                        <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                    </Button>
                </a>
                <a href="https://github.com/kartikalle" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="icon" className="size-8 p-0">
                        <img src={effectiveTheme === 'dark' ? githubIconWhite : githubIcon} alt="GitHub" className="w-6 h-6" />
                    </Button>
                </a>
                <ModeToggle />
            </div>
        </header>
    )
}

import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import MyResume from "./MyResume";
import NotFound from "./NotFound";


function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<AboutMe />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/resume' element={<MyResume />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
import { Home, Menu, MessageSquare, Moon, Settings, Sun, User, CircleHelp, Contact2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import ModernDashboard from '@/pages/Dashboard';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SettingsComponent from '@/pages/Settings';
import Profile from '@/pages/Profile';
import CompanyAbout from '@/pages/About';
import Contact from '@/pages/Contact';

export default function ResponsiveSidebar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load dark mode preference from localStorage or default to false
    return localStorage.getItem('darkMode') === 'true';
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Update dark mode class on the HTML element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <SidebarProvider>
        <div className={`flex w-full h-screen ${isDarkMode ? 'dark' : ''}`}>
          {/* Sidebar */}
          <Sidebar
            className={`bg-white flex flex-col gap-6 dark:bg-gray-800 text-gray-800 dark:text-white ${
              isSidebarOpen ? 'block' : 'hidden'
            } md:block`}
          >
            <SidebarHeader className="p-4 border-b dark:border-gray-700">
              <h2 className="text-lg font-semibold">My App</h2>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu className='flex flex-col  gap-3 pt-4'>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      to="/"
                      className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2"
                    >
                      <Home className="h-5 w-5" />
                      <span>Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                  <Link
                      to="/contact"
                      className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2"
                    >
                      <Contact2Icon className="h-5 w-5" />
                      <span>Contact</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                  <Link
                      to="/about"
                      className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2"
                    >
                      <CircleHelp className="h-5 w-5" />
                      <span>About</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2"
                    >
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="p-4 border-t dark:border-gray-700">
              <Link to={'/profile'}>
              <Button
                variant="outline"
                className="w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                >
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
              </Link>
            </SidebarFooter>
          </Sidebar>

          {/* Main Content */}
          <SidebarInset className="flex flex-col flex-grow bg-transparent">
            <header className="flex items-center h-14 justify-between p-4 border-b dark:bg-gray-800 dark:border-gray-700">
              <SidebarTrigger className="md:hidden" onClick={toggleSidebar}>
                <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
              </SidebarTrigger>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">Conpany Logo</h1>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </header>
            <main className="flex-grow p-4">
              <Routes>
                <Route path="/" element={<ModernDashboard darkMode={isDarkMode} />} />
                <Route path="/settings" element={<SettingsComponent darkMode={isDarkMode} />} />
                <Route path="/profile" element={<Profile darkMode={isDarkMode} />} />
                <Route path="/about" element={<CompanyAbout darkMode={isDarkMode} />} />
                <Route path="/contact" element={<Contact darkMode={isDarkMode} />} />
              </Routes>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </Router>
  );
}

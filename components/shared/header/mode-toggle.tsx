'use client';

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
    const { theme, setTheme } = useTheme();
    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className="focus-visible:ring-0 focus-visible:ring-offset-0">
                    {theme === 'dark' ? (<MoonIcon />) : (<SunIcon />)}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>Light</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>Dark</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default ModeToggle;
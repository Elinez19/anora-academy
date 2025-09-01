"use client"

import {
  IconDotsVertical,
  IconLogout,
  IconHome,
  IconDashboard,
  IconBook,
} from "@tabler/icons-react"
import { useEffect, useState } from "react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Skeleton } from "./ui/skeleton"
import Link from "next/link"
import { useSignOut } from "@/hooks/use-signout"

export function NavUser() {
  const { isMobile, state } = useSidebar()
  const isCollapsed = state === "collapsed"
  const [user, setUser] = useState<{
    id: string;
    email?: string;
    name?: string;
    image?: string;
  } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const signOut = useSignOut()

  useEffect(() => {
    checkAuthStatus()
    
    const handleStorageChange = () => {
      checkAuthStatus()
    }
    
    const handleLogout = () => {
      setUser(null)
    }
    
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkAuthStatus()
      }
    }
    
    const intervalId = setInterval(checkAuthStatus, 30000)
    
    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('auth:logout', handleLogout)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      clearInterval(intervalId)
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('auth:logout', handleLogout)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/session')
      if (response.ok) {
        const data = await response.json()
        if (data.session?.user) {
          setUser(data.session.user)
        } else {
          setUser(null)
        }
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error('Failed to check auth status:', error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <Skeleton className="h-12 w-full" />
  }

  if (!user) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg grayscale">
                <AvatarImage src={user.image ?? `https://avatar.vercel.sh/${user.name}`} alt={user.name || ""} />
                <AvatarFallback className="rounded-lg">
                  {user.name && user.name.length > 0 ? user.name.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium text-amber-800">{user.name && user.name.length > 0 ? user.name : user.email?.split("@")[0]}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {user.email}
                    </span>
                  </div>
                  <IconDotsVertical className="ml-auto size-4 text-amber-800" />
                </>
              )}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.image ?? `https://avatar.vercel.sh/${user.name}`} alt={user.name || ""} />
                  <AvatarFallback className="rounded-lg">{user.name?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium text-amber-800">{user.name && user.name.length > 0 ? user.name : user.email?.split("@")[0]}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/">
                  <IconHome />
                  HomePage
                </Link>
              </DropdownMenuItem>
                <DropdownMenuItem asChild>
                <Link href="/admin">
                  <IconDashboard />
                 Dashboard  
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin/courses">
                  <IconBook />
                  Courses
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={signOut}>
              <IconLogout />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import React from 'react'
import { Link } from '@nextui-org/react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Image src="/static/images/logo.webp" alt="logo" width="40" height="40" />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        {headerNavLinks.map((link) => (
          <NavbarItem key={link.title}>
            <Link
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <SearchButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex items-center justify-center gap-10">
        {headerNavLinks.map((item) => (
          <NavbarMenuItem key={item.title}>
            <Link className="w-full text-4xl" href={item.href}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header


"use client";

import Link from "next/link";
import {
  Book,
  Menu,
  Sunset,
  Trees,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// ========================================
// TypeScript Interfaces
// ========================================

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;

  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };

  menu?: MenuItem[];

  auth?: {
    login: {
      title: string;
      url: string;
    };

    signup: {
      title: string;
      url: string;
    };
  };
}

// ========================================
// Default Navigation Configuration
// ========================================

const defaultMenu: MenuItem[] = [
  {
    title: "Home",
    url: "/",
  },

  {
    title: "Products",
    url: "/product",
    items: [
      {
        title: "All Products",
        description: "Explore our available products.",
        icon: <Book className="size-5 shrink-0" />,
        url: "/product",
      },
      {
        title: "Company",
        description: "Learn more about our company.",
        icon: <Trees className="size-5 shrink-0" />,
        url: "/about",
      },
      {
        title: "Careers",
        description: "Explore career opportunities.",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "/careers",
      },
      {
        title: "Support",
        description: "Get help from our support team.",
        icon: <Zap className="size-5 shrink-0" />,
        url: "/contact",
      },
    ],
  },

  {
    title: "Contact",
    url: "/contact",
    items: [
      {
        title: "Help Center",
        description: "Find answers to common questions.",
        icon: <Zap className="size-5 shrink-0" />,
        url: "/contact",
      },
      {
        title: "Contact Us",
        description: "Get in touch with our team.",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "/contact",
      },
      {
        title: "Status",
        description: "Check the status of our services.",
        icon: <Trees className="size-5 shrink-0" />,
        url: "/status",
      },
      {
        title: "Terms of Service",
        description: "Read our terms and conditions.",
        icon: <Book className="size-5 shrink-0" />,
        url: "/terms",
      },
    ],
  },
];

// ========================================
// Navbar Component
// ========================================

const Navbar1 = ({
  logo = {
    url: "/",
    src: "https://cdn.shadcnblocks.com/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "My Website Logo",
    title: "My Website",
  },

  menu = defaultMenu,

  auth = {
    login: {
      title: "Login",
      url: "/login",
    },

    signup: {
      title: "Register",
      url: "/register",
    },
  },

  className,
}: Navbar1Props) => {
  return (
    <section className={cn("border-b py-4", className)}>
      <div className="container mx-auto px-4">

        {/* ================================== */}
        {/* Desktop Navigation */}
        {/* ================================== */}

        <nav className="hidden items-center justify-between lg:flex">

          {/* Logo and Menu */}
          <div className="flex items-center gap-6">

            {/* Logo */}
            <Link
              href={logo.url}
              className="flex items-center gap-2"
            >
              <img
                src={logo.src}
                className={cn(
                  "max-h-8 w-auto dark:invert",
                  logo.className
                )}
                alt={logo.alt}
              />

              <span className="text-lg font-semibold tracking-tight">
                {logo.title}
              </span>
            </Link>

            {/* Desktop Menu Items */}
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>

          </div>

          {/* Authentication Buttons */}
          <div className="flex gap-2">

            <Button
              variant="outline"
              size="sm"
              render={<Link href={auth.login.url} />}
              nativeButton={false}
            >
              {auth.login.title}
            </Button>

            <Button
              size="sm"
              render={<Link href={auth.signup.url} />}
              nativeButton={false}
            >
              {auth.signup.title}
            </Button>

          </div>
        </nav>

        {/* ================================== */}
        {/* Mobile Navigation */}
        {/* ================================== */}

        <div className="block lg:hidden">

          <div className="flex items-center justify-between">

            {/* Mobile Logo */}
            <Link
              href={logo.url}
              className="flex items-center gap-2"
            >
              <img
                src={logo.src}
                className={cn(
                  "max-h-8 w-auto dark:invert",
                  logo.className
                )}
                alt={logo.alt}
              />

              <span className="text-lg font-semibold tracking-tight">
                {logo.title}
              </span>
            </Link>

            {/* Mobile Menu Drawer */}
            <Sheet>

              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Open navigation menu"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] overflow-y-auto sm:w-[360px]"
              >

                <SheetHeader>
                  <SheetTitle>
                    <Link
                      href={logo.url}
                      className="flex items-center gap-2"
                    >
                      <img
                        src={logo.src}
                        className="max-h-8 w-auto dark:invert"
                        alt={logo.alt}
                      />

                      <span>{logo.title}</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 p-4">

                  {/* Mobile Menu Items */}
                  <Accordion className="flex w-full flex-col gap-4">

                    {menu.map((item) =>
                      renderMobileMenuItem(item)
                    )}

                  </Accordion>

                  {/* Mobile Authentication Buttons */}
                  <div className="flex flex-col gap-3">

                    <Button
                      variant="outline"
                      className="w-full"
                      render={<Link href={auth.login.url} />}
                      nativeButton={false}
                    >
                      {auth.login.title}
                    </Button>

                    <Button
                      className="w-full"
                      render={<Link href={auth.signup.url} />}
                      nativeButton={false}
                    >
                      {auth.signup.title}
                    </Button>

                  </div>

                </div>

              </SheetContent>
            </Sheet>

          </div>
        </div>

      </div>
    </section>
  );
};

// ========================================
// Desktop Menu Item Renderer
// ========================================

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>

        <NavigationMenuTrigger>
          {item.title}
        </NavigationMenuTrigger>

        <NavigationMenuContent className="bg-popover text-popover-foreground">

          <div className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2">

            {item.items.map((subItem) => (
              <NavigationMenuLink
                key={subItem.title}
                render={<SubMenuLink item={subItem} />}
              />
            ))}

          </div>

        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>

      <NavigationMenuLink
        render={<Link href={item.url} />}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>

    </NavigationMenuItem>
  );
};

// ========================================
// Mobile Menu Item Renderer
// ========================================

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem
        key={item.title}
        value={item.title}
        className="border-b-0"
      >

        <AccordionTrigger className="py-0 text-base font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>

        <AccordionContent className="mt-2">

          <div className="flex flex-col gap-2">

            {item.items.map((subItem) => (
              <SubMenuLink
                key={subItem.title}
                item={subItem}
              />
            ))}

          </div>

        </AccordionContent>

      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="text-base font-semibold transition-colors hover:text-primary"
    >
      {item.title}
    </Link>
  );
};

// ========================================
// Reusable Submenu Link
// ========================================

const SubMenuLink = ({
  item,
}: {
  item: MenuItem;
}) => {
  return (
    <Link
      href={item.url}
      className="flex min-w-0 flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
    >

      {item.icon && (
        <div className="text-foreground">
          {item.icon}
        </div>
      )}

      <div className="min-w-0">

        <div className="text-sm font-semibold">
          {item.title}
        </div>

        {item.description && (
          <p className="mt-1 text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}

      </div>

    </Link>
  );
};

export { Navbar1 };


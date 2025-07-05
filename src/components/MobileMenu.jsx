import * as React from "react";
import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, MessageCircle, Download } from "lucide-react";

// Simples Button sem Slot, sem cva, sem cn
const Button = React.forwardRef(function Button(
    { className = "", children, onClick, type = "button" },
    ref
    ) {
    return (
        <button
        type={type}
        ref={ref}
        onClick={onClick}
        className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
        >
        {children}
        </button>
    );
    });

    // Itens do Sidebar
    const sidebarItems = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/brunpena",
        external: true,
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "#",
        external: true,
    },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:brunopena454@gmail.com",
        external: true,
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        href: "https://wa.me/55SEUNUMERO",
        external: true,
    },
    {
        icon: Download,
        label: "Download CV",
        href: "#",
        external: false,
    },
    ];

    export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
        <Button
            className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50 w-8 h-8 sm:w-10 sm:h-10 bg-card/95 backdrop-blur-md border border-border/50 hover:bg-card rounded-md"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? (
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
        </Button>

        {isOpen && (
            <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            />
        )}

        <div
            className={`fixed left-0 top-0 h-full w-64 sm:w-72 bg-card/95 backdrop-blur-md border-r border-border z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="flex flex-col h-full py-4 sm:py-6">
            <div className="flex items-center px-3 sm:px-4 mb-6 sm:mb-8 mt-8 sm:mt-12">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                <img
                    src="https://avatars.githubusercontent.com/u/130068559?v=4"
                    alt="Bruno Eduardo Pena"
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="ml-2 sm:ml-3">
                <h3 className="font-semibold text-sm sm:text-base">Bruno Pena</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Full Stack Dev</p>
                </div>
            </div>

            <nav className="flex-1 space-y-2 sm:space-y-4 px-3 sm:px-4">
                {sidebarItems.map((item, index) => (
                <Button
                    key={index}
                    className="w-full h-10 sm:h-12 rounded-lg hover:bg-secondary/30 transition-all duration-200 justify-start px-2 sm:px-3 text-sm sm:text-base flex"
                    onClick={() => setIsOpen(false)}
                >
                    <a
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : ""}
                    className="flex items-center w-full"
                    >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-all duration-200 hover:text-primary flex-shrink-0" />
                    <span className="whitespace-nowrap">{item.label}</span>
                    </a>
                </Button>
                ))}
            </nav>

            <div className="border-t border-border pt-3 sm:pt-4 px-3 sm:px-4">
                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                © 2024 Bruno Pena
                </p>
            </div>
            </div>
        </div>
        </div>
    );
}

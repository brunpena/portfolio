import { useState } from 'react';
import { Github, Linkedin, Mail, MessageCircle, Download } from 'lucide-react';

const sidebarItems = [
{
icon: Github,
label: 'GitHub',
href: 'https://github.com/brunpena',
external: true
},
{
icon: Linkedin,
label: 'LinkedIn',
href: '#',
external: true
},
{
icon: Mail,
label: 'Email',
href: 'mailto:brunopena454@gmail.com',
external: true
},
{
icon: MessageCircle,
label: 'WhatsApp',
href: 'https://wa.me/55SEUNUMERO',
external: true
},
{
icon: Download,
label: 'Download CV',
href: '#',
external: false
}
];

export function Sidebar({ className }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
    <div
        className={`fixed left-0 top-0 h-full bg-card/95 backdrop-blur-md border-r border-border z-40 transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-56 lg:w-64' : 'w-14 lg:w-16'
        } ${className || ''}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
    >
        <div className="flex flex-col h-full py-4 lg:py-6">
        {/* Avatar */}
        <div
            className={`flex items-center mb-8 lg:mb-12 transition-all duration-300 ${
            isExpanded ? 'px-3 lg:px-4' : 'justify-center px-0'
            }`}
        >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
            <img
                src="https://avatars.githubusercontent.com/u/130068559?v=4"
                alt="Bruno Eduardo Pena"
                className="w-full h-full object-cover"
            />
            </div>
            {isExpanded && (
            <div className="ml-2 lg:ml-3 transition-all duration-300">
                <h3 className="font-semibold text-xs lg:text-sm">Bruno Pena</h3>
                <p className="text-xs text-muted-foreground">Full Stack Dev</p>
            </div>
            )}
        </div>

        {/* Navegação */}
        <nav
            className={`flex-1 space-y-4 lg:space-y-6 transition-all duration-300 ${
            isExpanded ? 'px-3 lg:px-4' : 'px-2'
            }`}
        >
            {sidebarItems.map((item, index) => (
            <a
                key={index}
                href={item.href}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : ''}
                title={!isExpanded ? item.label : undefined}
                className={`flex items-center w-full h-10 lg:h-12 rounded-lg hover:bg-secondary/30 transition-all duration-200 group ${
                isExpanded ? 'justify-start px-2 lg:px-3' : 'justify-center px-0'
                }`}
            >
                <item.icon
                className={`flex-shrink-0 transition-all duration-200 group-hover:text-primary ${
                    isExpanded ? 'w-4 h-4 lg:w-5 lg:h-5' : 'w-5 h-5 lg:w-6 lg:h-6'
                }`}
                />
                {isExpanded && (
                <span className="ml-2 lg:ml-3 transition-all duration-300 whitespace-nowrap text-xs lg:text-sm">
                    {item.label}
                </span>
                )}
            </a>
            ))}
        </nav>

        {/* Rodapé */}
        {isExpanded && (
            <div className="border-t border-border pt-3 lg:pt-4 px-3 lg:px-4 transition-all duration-300">
            <p className="text-xs text-muted-foreground text-center">
                © 2024 Bruno Pena
            </p>
            </div>
        )}
        </div>
    </div>
    );
}

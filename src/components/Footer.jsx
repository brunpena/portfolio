import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, Heart } from 'lucide-react';

export function Footer() {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/brunpena', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:brunopena454@gmail.com', label: 'Email' },
        { icon: MessageCircle, href: 'https://wa.me/55SEUNUMERO', label: 'WhatsApp' },
    ];

    const quickLinks = [
        { label: 'Sobre', href: '#about' },
        { label: 'Habilidades', href: '#skills' },
        { label: 'Projetos', href: '#projects' },
        { label: 'Contato', href: '#contact' },
    ];

    return (
        <footer className="bg-card/50 border-t border-border px-5 py-10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
            
            {/* Seção Principal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
            
            {/* Sobre */}
            <div className="space-y-4">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    BP
                </div>
                <div>
                    <h3 className="font-bold text-lg">Bruno Pena</h3>
                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto sm:mx-0">
                Desenvolvedor apaixonado por criar soluções web inovadoras e de alta performance. Sempre em busca de novos desafios e oportunidades de crescimento.
                </p>
            </div>

            {/* Links Rápidos (linha no mobile) */}
            <div className="space-y-4">
                <h4 className="font-semibold text-base text-foreground">Links Rápidos</h4>
                <nav className="flex overflow-x-auto sm:flex-col sm:space-y-2 gap-4 sm:gap-0 justify-center sm:justify-start text-sm text-muted-foreground">
                {quickLinks.map((link) => (
                    <a
                    key={link.label}
                    href={link.href}
                    className="shrink-0 hover:text-primary transition-colors whitespace-nowrap"
                    >
                    {link.label}
                    </a>
                ))}
                </nav>
            </div>

            {/* Contato: apenas botões no mobile */}
            <div className="space-y-4">
                <h4 className="font-semibold text-base text-foreground">Contato</h4>

                {/* Texto somente em telas maiores */}
                <div className="hidden sm:block space-y-1 text-sm text-muted-foreground">
                <p>✉️ brunopena454@gmail.com</p>
                <p>📍 Brasil</p>
                <p>🎓 Estudante UTFPR</p>
                </div>

                {/* Ícones sociais */}
                <div className="flex justify-center sm:justify-start gap-3 pt-2">
                {socialLinks.map((social) => (
                    <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-border rounded-md hover:bg-primary/10 hover:border-primary/30 transition"
                    >
                    <social.icon className="w-4 h-4" />
                    </a>
                ))}
                </div>
            </div>
            </div>

            {/* Rodapé inferior */}
            <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground space-y-3">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2">
                <div className="flex items-center gap-2 flex-wrap justify-center">
                <span>© {new Date().getFullYear()} Bruno Eduardo Pena.</span>
                <span className="flex items-center gap-1">
                    Feito com <Heart className="w-4 h-4 text-red-500 animate-pulse" /> e muito código.
                </span>
                </div>
                <div>Desenvolvido com React + JavaScript</div>
            </div>
            </div>
        </div>
        </footer>
    );
}

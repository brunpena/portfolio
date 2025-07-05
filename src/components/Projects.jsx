import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/Badge';
import { Github, ExternalLink } from 'lucide-react';
import React from 'react';

// Componente simples de botão (sem Slot, cva ou cn)
function SimpleButton({ children, href, variant = 'default', size = 'default', className = '', ...props }) {
    const baseStyles =
        'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const sizeStyles = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
    };
    const variantStyles = {
        default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        outline:
        'border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 focus:ring-gray-500',
    };

    const combined =
        `${baseStyles} ${sizeStyles[size] || ''} ${variantStyles[variant] || ''} ${className}`.trim();

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combined} {...props}>
        {children}
        </a>
    );
    }

    export function Projects() {
    const projects = [
        {
        title: 'Financias_mec',
        description: 'Site para organizar as finanças de uma auto mecanica',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
        technologies: ['JavaScript', 'HTML', 'CSS', 'MySQL'],
        githubUrl: 'https://github.com/brunpena/Financias_mec',
        demoUrl: '#',
        featured: true,
        },
        {
        title: 'Site Português',
        description: 'Site interativo para o livro de português com recursos educacionais',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
        technologies: ['JavaScript', 'HTML', 'CSS', 'Web APIs'],
        githubUrl: 'https://github.com/brunpena/sitePortugues',
        demoUrl: '#',
        featured: false,
        },
        {
        title: 'Controle de Dados',
        description: 'Sistema de controle e gerenciamento de dados com interface intuitiva',
        image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop',
        technologies: ['JavaScript', 'SQL', 'API Integration'],
        githubUrl: 'https://github.com/brunpena/controleDados',
        demoUrl: '#',
        featured: false,
        },
        {
        title: 'Página de Vendas',
        description: 'Landing page moderna para vendas com design responsivo',
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        githubUrl: 'https://github.com/brunpena/pagina_vendas',
        demoUrl: '#',
        featured: false,
        },
    ];

    return (
        <section id="projects" className="py-12 sm:py-20 px-4">
            <div className="container mx-auto">
                <div className="max-w-7xl mx-auto">
                {/* Título da seção */}
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Meus <span className="text-blue-600">Projetos</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Alguns dos projetos que desenvolvi aplicando minhas habilidades técnicas
                    </p>
                </div>

                {/* Projeto em destaque */}
                {projects
                    .filter(project => project.featured)
                    .map((project, index) => (
                    <div key={index} className="mb-8 sm:mb-16">
                        <div className="portfolio-card p-0 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                            <div className="relative group overflow-hidden order-2 md:order-1">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="p-4 sm:p-8 flex flex-col justify-center order-1 md:order-2">
                            <Badge className="w-fit mb-4 bg-blue-100 text-blue-700 text-xs">
                                Projeto em Destaque
                            </Badge>
                            <h3 className="text-xl sm:text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                </Badge>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <SimpleButton href={project.githubUrl}>
                                <Github className="h-4 w-4" />
                                Ver Código
                                </SimpleButton>
                                <SimpleButton href={project.demoUrl} variant="outline">
                                <ExternalLink className="h-4 w-4" />
                                Ver Demo
                                </SimpleButton>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}

                {/* Outros projetos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    {projects
                    .filter(project => !project.featured)
                    .map((project, index) => (
                        <Card key={index} className="portfolio-card p-0 overflow-hidden group">
                        <div className="relative overflow-hidden">
                            <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <div className="flex gap-2">
                                <SimpleButton
                                href={project.githubUrl}
                                size="sm"
                                variant="outline"
                                className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                                >
                                <Github className="h-4 w-4" />
                                </SimpleButton>
                                <SimpleButton
                                href={project.demoUrl}
                                size="sm"
                                variant="outline"
                                className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                                >
                                <ExternalLink className="h-4 w-4" />
                                </SimpleButton>
                            </div>
                            </div>
                        </div>

                        <CardHeader className="pb-3 p-4">
                            <CardTitle className="text-base sm:text-lg">{project.title}</CardTitle>
                        </CardHeader>

                        <CardContent className="pt-0 p-4">
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                                </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                +{project.technologies.length - 3}
                                </Badge>
                            )}
                            </div>
                        </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Ver todos */}
                <div className="text-center mt-8 sm:mt-12">
                    <a
                        href="https://github.com/brunpena"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm sm:text-base font-medium px-8 py-3 border border-primary/30 hover:bg-primary/10 transition-all duration-300"
                    >
                        Ver Todos os Projetos no GitHub
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
}

import { useState } from 'react';
import { Mail, MessageCircle, Github } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const { toast } = useToast();

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            nome: formData.name,
            email: formData.email,
            assunto: formData.subject,
            texto: formData.message,
        };

        try {
            const response = await fetch('http://localhost:3000/enviar-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error('Erro ao enviar');

            toast({
            title: 'Mensagem enviada com sucesso!',
            description: 'Obrigado pelo contato. Responderei em breve!',
            });

            setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            });
        } catch (error) {
            toast({
            title: 'Erro ao enviar',
            description: 'Algo deu errado. Tente novamente mais tarde.',
            variant: 'destructive',
            });
        }
    };


    const contactMethods = [
        {
        icon: Mail,
        title: 'Email',
        description: 'brunopena454@gmail.com',
        href: 'mailto:brunopena454@gmail.com',
        color: 'text-blue-500'
        },
        {
        icon: MessageCircle,
        title: 'WhatsApp',
        description: 'Chat direto',
        href: 'https://wa.me/5544997371077',
        color: 'text-green-500'
        },
        {
        icon: Github,
        title: 'GitHub',
        description: '@brunpena',
        href: 'https://github.com/brunpena',
        color: 'text-gray-500'
        }
    ];

    return (
        <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-3 sm:px-4 lg:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                        Entre em <span className="gradient-text">Contato</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                        Vamos conversar sobre seus projetos e como posso ajudar
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                        <div className="portfolio-card">
                            <CardHeader className="p-4 sm:p-6">
                                <CardTitle className="text-lg sm:text-xl lg:text-2xl">Envie uma Mensagem</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6">
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div>
                                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Nome *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Seu nome completo"
                                            className="flex h-10 w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                        </div>
                                        <div>
                                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Email *</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="seu@email.com"
                                            className="flex h-10 w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Assunto *</label>
                                        <input
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Assunto da mensagem"
                                        className="flex h-10 w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Mensagem *</label>
                                        <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Conte-me sobre seu projeto ou dúvida..."
                                        className="flex w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm sm:text-base font-medium px-8 py-3 bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow"
                                    >
                                        Enviar Mensagem
                                    </button>
                                </form>
                            </CardContent>
                        </div>

                            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                            <div className="grid gap-3 sm:gap-4 lg:gap-6">
                                {contactMethods.map((method, index) => (
                                <Card key={index} className="portfolio-card border border-border/50 hover:border-primary/30 transition-colors">
                                    <CardContent className="p-3 sm:p-4 lg:p-6">
                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        <div className={`p-2 sm:p-3 rounded-lg bg-muted ${method.color} flex-shrink-0`}>
                                        <method.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-sm sm:text-base lg:text-lg truncate">{method.title}</h3>
                                        <p className="text-muted-foreground text-xs sm:text-sm truncate">{method.description}</p>
                                        </div>
                                        {method.href !== '#' && (
                                        <a
                                            href={method.href}
                                            target={method.href.startsWith('http') ? '_blank' : '_self'}
                                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-3 py-1.5 text-xs sm:text-sm font-medium hover:bg-accent hover=text-accent-foreground transition-all"
                                        >
                                            Conectar
                                        </a>
                                        )}
                                    </div>
                                    </CardContent>
                                </Card>
                                ))}
                            </div>

                            <div className="portfolio-card p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">Vamos Trabalhar Juntos!</h3>
                                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                                Estou sempre interessado em novos projetos e oportunidades de colaboração.
                                Se você tem uma ideia, projeto ou apenas quer conversar sobre tecnologia,
                                não hesite em entrar em contato!
                                </p>
                                <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-primary/10 text-primary">🚀 Projetos Web</span>
                                <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-primary/10 text-primary">💡 Consultoria Técnica</span>
                                <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-primary/10 text-primary">🤝 Colaborações</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

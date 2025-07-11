
import { Badge } from "./ui/Badge";
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function About() {
    return (
    <section id="about" className="py-8 sm:py-12 lg:py-20 relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-6 sm:mb-8 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                    Sobre <span className="gradient-text">Mim</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Desenvolvedor apaixonado por tecnologia e inovação
                </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-start">
                {/* Esquerda */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    <div className="portfolio-card">
                    <div className="flex items-center mb-3 sm:mb-4">
                        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Formação Acadêmica</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-2 leading-relaxed">
                        Ensino Médio Integrado em Informática para a Internet
                    </p>
                    <p className="text-sm sm:text-base font-medium text-primary">
                        Universidade Tecnológica Federal do Paraná (UTFPR)
                    </p>
                    </div>

                    <div className="portfolio-card">
                    <div className="flex items-center mb-3 sm:mb-4">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Experiência</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Desenvolvedor Full Stack com experiência prática em múltiplas linguagens 
                        e tecnologias, focado em soluções de integração, automação e desenvolvimento 
                        web de alta performance.
                    </p>
                    </div>

                    <div className="portfolio-card">
                    <div className="flex items-center mb-3 sm:mb-4">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Localização</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                        Campo Mourão - PR
                    </p>
                    </div>
                </div>

                {/* Direita */}
                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                        <div className="portfolio-card">
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">Áreas de Interesse</h3>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                <Badge variant="secondary" className="text-xs sm:text-sm">Desenvolvimento Web</Badge>
                                <Badge variant="secondary" className="text-xs sm:text-sm">Integração de Sistemas</Badge>
                                <Badge variant="secondary" className="text-xs sm:text-sm">Banco de Dados</Badge>
                            </div>
                        </div>

                        <div className="portfolio-card">
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">Especialidades</h3>
                            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                                <li className="flex items-start">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                <span className="leading-relaxed">Desenvolvimento Full Stack (Frontend + Backend)</span>
                                </li>
                                <li className="flex items-start">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                <span className="leading-relaxed">Integração e automação de sistemas</span>
                                </li>
                                <li className="flex items-start">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                <span className="leading-relaxed">Otimização de performance e escalabilidade</span>
                                </li>
                                <li className="flex items-start">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                <span className="leading-relaxed">Gestão e modelagem de bancos de dados</span>
                                </li>
                            </ul>
                        </div>

                        <div className="portfolio-card">
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">Filosofia de Trabalho</h3>
                            <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
                                "Motivado por desafios de integração, automação e desenvolvimento de 
                                soluções web de alta performance. Busco sempre aprender e aplicar 
                                as melhores práticas para entregar resultados excepcionais."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

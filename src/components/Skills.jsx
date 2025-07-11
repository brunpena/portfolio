
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/Badge';

export function Skills() {
    const skillCategories = [
    {
    title: 'Conhecimento em Linguagens',
    icon: '💻',
    skills: [
        { name: 'C', level: 20, color: 'bg-blue-500' },
        { name: 'C++', level: 20, color: 'bg-blue-600' },
        { name: 'Python', level: 90, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-400' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-400' }
        ]
    },
    {
    title: 'Frontend Development',
    icon: '🎨',
    skills: [
        { name: 'HTML5', level: 95, color: 'bg-orange-500' },
        { name: 'CSS3', level: 90, color: 'bg-blue-500' },
        { name: 'React', level: 85, color: 'bg-cyan-500' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-teal-500' }
        ]
    },
    {
    title: 'Banco de Dados',
    icon: '🗄️',
    skills: [
        { name: 'SQL Server', level: 85, color: 'bg-red-600' },
        { name: 'Estrutura de Dados', level: 90, color: 'bg-orange-600' },
        { name: 'Supabase', level: 95, color: 'bg-green-500' },
        { name: 'MachBase Neo', level: 95, color: 'bg-purple-500' }
        ]
    },
    {
    title: 'Ferramentas & Tecnologias',
    icon: '🛠️',
    skills: [
        { name: 'Node.js', level: 70, color: 'bg-orange-500' },
        { name: 'GitHub', level: 90, color: 'bg-gray-600' },
        { name: 'VS Code', level: 92, color: 'bg-blue-500' },
        { name: 'APIs REST', level: 85, color: 'bg-green-500' }
        ]
    }
    ] ;

    return (
        <section id="skills" className="py-8 sm:py-12 lg:py-20 bg-muted/30 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-6 sm:mb-8 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                    Minhas <span className="gradient-text">Habilidades</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Tecnologias e ferramentas que domino para criar soluções incríveis
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="portfolio-card">
                        <div className="flex items-center mb-3 sm:mb-4 lg:mb-6">
                        <span className="text-xl sm:text-2xl lg:text-3xl mr-2 sm:mr-3">{category.icon}</span>
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold">{category.title}</h3>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="space-y-1.5 sm:space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                                <Badge variant="outline" className="text-xs sm:text-sm">
                                {skill.level}%
                                </Badge>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5 sm:h-2 overflow-hidden">
                                <div
                                className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{ 
                                    width: `${skill.level}%`,
                                    animationDelay: `${skillIndex * 100}ms`
                                }}
                                />
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>

                {/* Additional Skills */}
                <div className="mt-6 sm:mt-8 lg:mt-12 text-center">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6">Outras Competências</h3>
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-3">
                    {[
                        'Integração de Sistemas',
                        'Automação',
                        'Responsive Design',
                        'Problem Solving',
                        'Team Collaboration',
                        'Agile Development'
                    ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-3 hover:bg-primary/20 transition-colors">
                        {skill}
                        </Badge>
                    ))}
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

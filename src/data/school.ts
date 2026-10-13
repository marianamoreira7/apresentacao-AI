import { Bot, Drama, Goal, Music, Puzzle, Sprout, Trophy, Volleyball } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ⚠️ Todos os dados deste arquivo são FICTÍCIOS (nomes, horários, contatos).

export const SCHOOL_NAME = 'Colégio Municipal de Barreto Pelotas'

export const CONTACT = {
  address: 'Endereço de exemplo, Barreto, Pelotas/RS',
  phone: '(53) 0000-0000',
  email: 'contato@exemplo.edu.br',
  hours: 'Segunda a sexta, das 7h30 às 17h',
}

/* ---------- Itinerário (grade horária) ---------- */

export type SubjectId = 'pt' | 'mat' | 'cie' | 'his' | 'geo' | 'ing' | 'edf' | 'art' | 'cd'

export interface Subject {
  id: SubjectId
  name: string
  teacher: string
  room: string
  cell: string // classes Tailwind (família azul)
}

export const SUBJECTS: Record<SubjectId, Subject> = {
  pt: { id: 'pt', name: 'Português', teacher: 'Profª Helena Martins', room: 'Sala da turma', cell: 'bg-blue-200 border-blue-500' },
  mat: { id: 'mat', name: 'Matemática', teacher: 'Profª Camila Rocha', room: 'Sala da turma', cell: 'bg-sky-200 border-sky-500' },
  cie: { id: 'cie', name: 'Ciências', teacher: 'Profª Juliana Duarte', room: 'Laboratório de Ciências', cell: 'bg-cyan-200 border-cyan-500' },
  his: { id: 'his', name: 'História', teacher: 'Profª Marta Silveira', room: 'Sala da turma', cell: 'bg-indigo-200 border-indigo-500' },
  geo: { id: 'geo', name: 'Geografia', teacher: 'Profª Letícia Moura', room: 'Sala da turma', cell: 'bg-blue-300 border-blue-600' },
  ing: { id: 'ing', name: 'Inglês', teacher: 'Profª Renata Teixeira', room: 'Sala da turma', cell: 'bg-sky-300 border-sky-600' },
  edf: { id: 'edf', name: 'Educação Física', teacher: 'Profª Fernanda Lopes', room: 'Quadra poliesportiva', cell: 'bg-cyan-300 border-cyan-600' },
  art: { id: 'art', name: 'Artes', teacher: 'Profª Paula Garcia', room: 'Sala de Artes', cell: 'bg-indigo-300 border-indigo-600' },
  cd: { id: 'cd', name: 'Cultura Digital', teacher: 'Profª Aline Costa', room: 'Laboratório de Informática', cell: 'bg-slate-200 border-slate-500' },
}

export const SUBJECT_LIST: Subject[] = Object.values(SUBJECTS)

// "Profª Helena Martins" -> "Profª Helena"
export const shortTeacher = (teacher: string) => teacher.split(' ').slice(0, 2).join(' ')

export const TURMAS = ['6º ano A', '7º ano A', '8º ano A', '9º ano A']

export const DAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']

export const PERIODS = [
  { start: '07:30', end: '08:20' },
  { start: '08:20', end: '09:10' },
  { start: '09:30', end: '10:20' },
  { start: '10:20', end: '11:10' },
  { start: '11:10', end: '12:00' },
]

export const BREAK = { start: '09:10', end: '09:30' }

// Linhas = dias (seg a sex), colunas = aulas (1ª a 5ª).
// Cada coluna tem matérias diferentes, então, ao girar os dias entre as turmas,
// nenhuma professora fica em duas turmas ao mesmo tempo.
const BASE: SubjectId[][] = [
  ['pt', 'mat', 'cie', 'ing', 'art'],
  ['cie', 'pt', 'mat', 'geo', 'his'],
  ['his', 'ing', 'pt', 'mat', 'cie'],
  ['cd', 'edf', 'art', 'pt', 'mat'],
  ['mat', 'cd', 'geo', 'edf', 'pt'],
]

export function getSubject(turma: number, day: number, period: number): Subject {
  return SUBJECTS[BASE[(day + turma) % 5][period]]
}

/* ---------- Projetos ---------- */

export interface Project {
  id: string
  title: string
  tag: string
  icon: LucideIcon
  schedule: string
  teacher: string
  description: string
  band: string // classes Tailwind do topo do cartão
}

export const PROJECTS: Project[] = [
  {
    id: 'futsal',
    title: 'Futsal',
    tag: 'Esporte',
    icon: Goal,
    schedule: 'Terças e quintas, 13h30',
    teacher: 'Profª Fernanda Lopes',
    description: 'Treinos para todos os níveis e jogos amistosos entre as turmas.',
    band: 'bg-blue-700',
  },
  {
    id: 'volei',
    title: 'Vôlei',
    tag: 'Esporte',
    icon: Volleyball,
    schedule: 'Quartas e sextas, 13h30',
    teacher: 'Profª Daiane Pires',
    description: 'Fundamentos, jogos em equipe e muita diversão na quadra.',
    band: 'bg-sky-600',
  },
  {
    id: 'bocha',
    title: 'Bocha Adaptada',
    tag: 'Inclusão',
    icon: Trophy,
    schedule: 'Segundas, 14h',
    teacher: 'Profª Daiane Pires e equipe do AEE',
    description: 'Esporte para jogar junto: todos participam, cada um no seu ritmo.',
    band: 'bg-indigo-600',
  },
  {
    id: 'danca',
    title: 'Dança Inclusiva',
    tag: 'Arte',
    icon: Music,
    schedule: 'Quintas, 14h',
    teacher: 'Profª Paula Garcia e equipe do AEE',
    description: 'Movimento, música e expressão para todos os corpos.',
    band: 'bg-cyan-700',
  },
  {
    id: 'horta',
    title: 'Horta Escolar',
    tag: 'Ciência',
    icon: Sprout,
    schedule: 'Terças, 14h',
    teacher: 'Profª Juliana Duarte',
    description: 'Plantar, cuidar e colher: ciência de um jeito que dá para tocar.',
    band: 'bg-blue-600',
  },
  {
    id: 'teatro',
    title: 'Teatro',
    tag: 'Arte',
    icon: Drama,
    schedule: 'Quartas, 14h',
    teacher: 'Profª Helena Martins',
    description: 'Improviso, leitura e a montagem da peça de fim de ano.',
    band: 'bg-indigo-700',
  },
  {
    id: 'robotica',
    title: 'Robótica',
    tag: 'Tecnologia',
    icon: Bot,
    schedule: 'Sextas, 14h',
    teacher: 'Profª Aline Costa',
    description: 'Montar, programar e testar pequenos robôs em equipe.',
    band: 'bg-sky-700',
  },
  {
    id: 'xadrez',
    title: 'Xadrez',
    tag: 'Jogos',
    icon: Puzzle,
    schedule: 'Segundas, 13h30',
    teacher: 'Profª Camila Rocha',
    description: 'Estratégia, concentração e campeonatos entre as turmas.',
    band: 'bg-cyan-800',
  },
]

/* ---------- Basquete feminino ---------- */

export const TEAM = {
  name: 'Fênix do Barreto',
  sport: 'Basquete feminino',
  motto: 'Voa, Fênix!',
  description:
    'O time de basquete feminino do colégio é aberto a todas as meninas do 6º ao 9º ano, com ou sem experiência. Aqui se aprende a jogar em equipe, a ter confiança e a se divertir na quadra.',
  practice: 'Segundas e quartas, 15h30',
  place: 'Quadra poliesportiva',
  coach: 'Profª Daiane Pires (técnica)',
}

export const TEAM_FACTS = [
  { value: '2', label: 'treinos por semana' },
  { value: '6º ao 9º', label: 'ano, todas bem-vindas' },
  { value: 'Abertas', label: 'vagas para o time' },
]

export const GAMES = [
  { date: 'Sáb, 24/10', time: '9h', match: 'Fênix do Barreto × Escola Aurora', where: 'Em casa' },
  { date: 'Sáb, 07/11', time: '10h', match: 'Colégio Horizonte × Fênix do Barreto', where: 'Fora' },
  { date: 'Sáb, 21/11', time: '9h', match: 'Fênix do Barreto × Escola Primavera', where: 'Em casa' },
]

/* ---------- Inclusão ---------- */

export const INCLUSION_ITEMS = [
  {
    title: 'Sala de Recursos (AEE)',
    text: 'Atendimento educacional especializado, no contraturno, com atividades pensadas para cada estudante.',
  },
  {
    title: 'Professoras de apoio',
    text: 'Acompanham os estudantes dentro da sala de aula, ao lado da professora regente.',
  },
  {
    title: 'Materiais adaptados',
    text: 'Textos ampliados, jogos táteis e recursos visuais para aprender de várias formas.',
  },
  {
    title: 'Espaços acessíveis',
    text: 'Rampas, banheiros adaptados e sinalização clara em toda a escola.',
  },
  {
    title: 'Cada um no seu ritmo',
    text: 'Atividades e avaliações flexíveis, respeitando o tempo de aprender de cada pessoa.',
  },
  {
    title: 'Família e escola juntas',
    text: 'Conversas frequentes com as famílias para construir o melhor caminho em conjunto.',
  },
]

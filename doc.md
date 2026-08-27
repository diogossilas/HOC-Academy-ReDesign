# Documento de Arquitetura & Sistema Modular (Studio Modular)

Este documento reúne a especificação arquitetural, os princípios de engenharia de software e a estrutura de modularização do sistema **HOC Academy**, anteriormente visualizados no módulo *Studio Modular*.

---

## 1. Visão Geral da Arquitetura

A aplicação foi construída sobre os pilares fundamentais da **Separação de Responsabilidades (Separation of Concerns - SoC)**, **Alta Coesão** e **Baixo Acoplamento**, garantindo facilidade de manutenção, estabilidade de componentes e excelência em usabilidade.

```
┌─────────────────────────────────────────────────────────────┐
│                    HOC ACADEMY SHELL                        │
├──────────────────────────────┬──────────────────────────────┤
│  Navegação & Layout (Shell)  │  Gestão de Perfil & Usuário  │
├──────────────────────────────┼──────────────────────────────┤
│  Showcase & Hero Destaques   │  Motor de Catálogo & Scroll  │
├──────────────────────────────┼──────────────────────────────┤
│  Exploração & Filtros        │  Acessibilidade & Fala (TTS) │
├──────────────────────────────┼──────────────────────────────┤
│  Perfil Pessoal & Estudos    │  Bunker Estratégico (Hub)    │
└──────────────────────────────┴──────────────────────────────┘
```

---

## 2. Pipeline de Engenharia em 4 Fases

O ciclo de vida do desenvolvimento segue um pipeline progressivo e rigoroso:

### Fase 01 · Brief (Definição de Requisitos & Escopo do Problema)
- **Princípio**: Entendimento do Problema antes da Solução Técnica.
- **Objetivo**: Identificação clara dos objetivos do usuário, levantamento de requisitos funcionais e não-funcionais, e definição das fronteiras conceituais do sistema.
- **Responsabilidades**:
  - Mapeamento das necessidades do usuário e regras de domínio acadêmico-estratégico.
  - Definição dos critérios de sucesso e acessibilidade (WCAG AA).
  - Identificação dos pontos de entrada e fluxos de navegação fundamentais.
- **Artefatos**: Documento de Requisitos, Histórias de Usuário, Matriz de Escopo.
- **Status**: Concluído (`completed`).

### Fase 02 · Sketch (Design de Interação & Estrutura Conceitual)
- **Princípio**: Prototipação Ágil & Validação de UX/UI.
- **Objetivo**: Prototipação rápida da hierarquia visual, fluxos de navegação, contratos de interface e wireframes estruturais sem acoplamento a frameworks.
- **Responsabilidades**:
  - Definição da hierarquia de componentes e wireframing.
  - Planejamento de rotas e estados de transição.
  - Definição dos esquemas de dados e tipos TypeScript (`/src/types.ts`).
- **Artefatos**: Esquemas de Componentes, Wireframes Estruturais, Contratos de Tipos.
- **Status**: Concluído (`completed`).

### Fase 03 · Studio (Ambiente Integrado de Composição & Refinamento)
- **Princípio**: Composição de UI Elegante & Reativa.
- **Objetivo**: Construção de componentes atômicos, refinamento de design tokens, animações com motion e montagem dos blocos funcionais.
- **Responsabilidades**:
  - Desenvolvimento de micro-interações e transições fluidas com Motion.
  - Integração de serviços assíncronos e hooks customizados.
  - Aprimoramento de contrastes visuais, tipografia de alta legibilidade e acessibilidade.
- **Artefatos**: Componentes de Apresentação, Hooks Customizados, Design Tokens.
- **Status**: Concluído (`completed`).

### Fase 04 · Modularização (Separation of Concerns - SoC)
- **Princípio**: Separation of Concerns (SoC) & Programação Modular.
- **Objetivo**: Divisão do sistema em unidades coesas e desacopladas, onde cada módulo resolve um único tipo de problema: Apresentação, Estado, Serviços, Dados e Navegação.
- **Responsabilidades**:
  - **Alta Coesão**: elementos dentro do módulo cooperam diretamente para o mesmo objetivo.
  - **Baixo Acoplamento**: módulos comunicam-se exclusivamente via interfaces e contratos tipados.
  - **Isolamento de Falhas**: mudanças em um módulo não propagam efeitos colaterais indesejados.
- **Artefatos**: Módulos Desacoplados, Camada de Serviços Isolada, Grafo de Dependências.
- **Status**: Ativo & Operacional (`active`).

---

## 3. Catálogo de Módulos do Sistema

| Módulo | Domínio | Responsabilidade | Coesão | Acoplamento | Arquivos Principais |
|---|---|---|---|---|---|
| **Layout & Navigation** | Navegação & Estrutura | Gerencia o cabeçalho fixo, rodapé, alternância de views e busca global. | Muito Alta | Baixo | `/src/modules/layout/Navbar.tsx`, `/src/modules/layout/Footer.tsx`, `/src/modules/layout/SearchBar.tsx` |
| **User & Profile State** | Gerenciamento de Usuário | Controla estado do perfil, cálculo de XP, status de assinatura e notificações. | Alta | Isolado | `/src/modules/profile/ProfileView.tsx`, `/src/modules/user/ProfileDropdown.tsx`, `/src/hooks/useUserProfile.ts` |
| **Accessibility Service (TTS)** | Acessibilidade & Fala | Executa leitura em voz alta via Web Speech API e monitora foco e hover. | Muito Alta | Isolado | `/src/services/accessibility.service.ts`, `/src/hooks/useAccessibility.ts` |
| **Hero Showcase** | Destaques e Apresentação | Apresenta banners interativos com transição fluida, timer autônomo e CTAs. | Alta | Baixo | `/src/modules/hero/HeroSlider.tsx`, `/src/data/heroData.ts` |
| **Catalog & Carousel Engine** | Listagem de Conteúdos | Renderiza listas com scroll horizontal contínuo, cards especiais e efeitos hover. | Muito Alta | Baixo | `/src/modules/catalog/HorizontalScroller.tsx`, `/src/modules/catalog/ContentCard.tsx` |
| **Explore & Filtering** | Descoberta & Categorias | Filtra itens dinamicamente com proporções de tela adaptativas e navegação em pills. | Alta | Baixo | `/src/modules/explore/ExploreView.tsx`, `/src/modules/explore/CategoryPills.tsx` |
| **Personal Profile Hub** | Perfil Pessoal & Estudos | Centraliza dados do aluno, fila de estudos, anotações, dossiês salvos e métricas. | Muito Alta | Baixo | `/src/modules/profile/ProfileView.tsx` |
| **Bunker Protocol** | Central de Segurança | Módulo de protocolos táticos e segurança estratégica (atualmente em reformulação). | Alta | Baixo | `/src/modules/bunker/BunkerView.tsx` |

---

## 4. Diretrizes de Design Tokens & Identidade Visual

1. **Paleta de Cores (Azul Profundo / Deep Blue)**:
   - **Light Theme**: Canvas claro cristalino `#EEF4F9` com azul marinho real `#0A3D78`, safira `#16569B`, navy profundo `#052147` e bordas precisas `#CAD8E8`.
   - **Dark Theme**: Abismo oceânico `#030816`, cartões em safira noturna `#07142E`, cobalto elétrico `#2563EB` e acentos esmeralda `#10B981`.

2. **Geometria & Bordas (Quinas Angulares de 80° & Sharp Corners)**:
   - Abandono de bordas arredondadas excessivas (`rounded-2xl` / `rounded-3xl`).
   - Adoção de cantos pontudos, quinas nítidas (`sharp-corner` / `rounded-[2px]`), cortes angulares com chanfros geométricos (`angle-cut-80`, `corner-accent-80`).
   - Visual tático e disciplinado com foco em clareza estrutural.

3. **Tipografia & Acessibilidade**:
   - Escalas tipográficas matemáticas com hierarquia estrita.
   - Conformidade WCAG AA para contrastes mínimos de 4.5:1 em textos.
   - Suporte nativo a síntese de voz (TTS) para leitura de elementos em foco.

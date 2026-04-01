const faqItems = Array.from(document.querySelectorAll(".faq-item"));
const faqToggles = Array.from(document.querySelectorAll(".faq-toggle"));
const leadForms = Array.from(document.querySelectorAll("[data-lead-form]"));
const checkoutSection = document.getElementById("checkout");
const ctaSection = document.getElementById("cta");
const languageSwitchers = Array.from(document.querySelectorAll("[data-language-switcher]"));
const planCards = Array.from(document.querySelectorAll("[data-plan-card]"));
const planButtons = Array.from(document.querySelectorAll("[data-plan-select]"));
const planSummaryNode = document.querySelector("[data-plan-summary]");
const planLinkNode = document.querySelector("[data-plan-link]");
const planLinkLabelNode = document.querySelector("[data-plan-link-label]");
const descriptionMeta = document.querySelector('meta[name="description"]');
const LANGUAGE_STORAGE_KEY = "fit90-language";
const DEFAULT_LANGUAGE = "pt-BR";
const DEFAULT_PLAN = "credit";
const VALID_PLANS = ["pix", "credit"];
const PLAN_LINKS = {
  pix: "https://mpago.la/2d4Yrj8",
  credit: "https://mpago.li/1anehxX",
};
let selectedPlan = DEFAULT_PLAN;

function normalizePortugueseText(text) {
  return String(text)
    .replace(/\bPortugues\b/g, "Português")
    .replace(/\bAlimentacao\b/g, "Alimentação")
    .replace(/\balimentacao\b/g, "alimentação")
    .replace(/\bCredito\b/g, "Crédito")
    .replace(/\bcredito\b/g, "crédito")
    .replace(/\bCartao\b/g, "Cartão")
    .replace(/\bcartao\b/g, "cartão")
    .replace(/\bOpcao\b/g, "Opção")
    .replace(/\bopcao\b/g, "opção")
    .replace(/\bOpcoes\b/g, "Opções")
    .replace(/\bopcoes\b/g, "opções")
    .replace(/\bVoce\b/g, "Você")
    .replace(/\bvoce\b/g, "você")
    .replace(/\bEstrategia\b/g, "Estratégia")
    .replace(/\bestrategia\b/g, "estratégia")
    .replace(/\bContinuos\b/g, "Contínuos")
    .replace(/\bcontinuos\b/g, "contínuos")
    .replace(/\bContinua\b/g, "Contínua")
    .replace(/\bcontinua\b/g, "contínua")
    .replace(/\bConstancia\b/g, "Constância")
    .replace(/\bconstancia\b/g, "constância")
    .replace(/\bConteudos\b/g, "Conteúdos")
    .replace(/\bconteudos\b/g, "conteúdos")
    .replace(/\bConteudo\b/g, "Conteúdo")
    .replace(/\bconteudo\b/g, "conteúdo")
    .replace(/\bEvolucao\b/g, "Evolução")
    .replace(/\bevolucao\b/g, "evolução")
    .replace(/\bDirecao\b/g, "Direção")
    .replace(/\bdirecao\b/g, "direção")
    .replace(/\bHibrido\b/g, "Híbrido")
    .replace(/\bhibrido\b/g, "híbrido")
    .replace(/\bNao\b/g, "Não")
    .replace(/\bnao\b/g, "não")
    .replace(/\bDuvidas\b/g, "Dúvidas")
    .replace(/\bduvidas\b/g, "dúvidas")
    .replace(/\bMudancas\b/g, "Mudanças")
    .replace(/\bmudancas\b/g, "mudanças")
    .replace(/\bComeca\b/g, "Começa")
    .replace(/\bcomeca\b/g, "começa")
    .replace(/\bComecar\b/g, "Começar")
    .replace(/\bcomecar\b/g, "começar")
    .replace(/\bProxima\b/g, "Próxima")
    .replace(/\bproxima\b/g, "próxima")
    .replace(/\bAvancar\b/g, "Avançar")
    .replace(/\bavancar\b/g, "avançar")
    .replace(/\bSera\b/g, "Será")
    .replace(/\bsera\b/g, "será")
    .replace(/\bApos\b/g, "Após")
    .replace(/\bapos\b/g, "após")
    .replace(/\bAprovacao\b/g, "Aprovação")
    .replace(/\baprovacao\b/g, "aprovação")
    .replace(/\bRapida\b/g, "Rápida")
    .replace(/\brapida\b/g, "rápida")
    .replace(/\bUnica\b/g, "Única")
    .replace(/\bunica\b/g, "única")
    .replace(/\bAplicavel\b/g, "Aplicável")
    .replace(/\baplicavel\b/g, "aplicável")
    .replace(/\bPossivel\b/g, "Possível")
    .replace(/\bpossivel\b/g, "possível")
    .replace(/\bVisivel\b/g, "Visível")
    .replace(/\bvisivel\b/g, "visível")
    .replace(/\bTracao\b/g, "Tração")
    .replace(/\btracao\b/g, "tração")
    .replace(/\bJa\b/g, "Já")
    .replace(/\bja\b/g, "já")
    .replace(/\bTambem\b/g, "Também")
    .replace(/\btambem\b/g, "também")
    .replace(/\bAte\b/g, "Até")
    .replace(/\bate\b/g, "até")
    .replace(/\bBeneficios\b/g, "Benefícios")
    .replace(/\bbeneficios\b/g, "benefícios")
    .replace(/\bAlimentar\b/g, "Alimentar")
    .replace(/\balimentar\b/g, "alimentar");
}

function normalizePortugueseText(text) {
  return String(text)
    .replace(/\bPortugues\b/g, "Portugu\u00EAs")
    .replace(/\bAlimentacao\b/g, "Alimenta\u00E7\u00E3o")
    .replace(/\balimentacao\b/g, "alimenta\u00E7\u00E3o")
    .replace(/\bCredito\b/g, "Cr\u00E9dito")
    .replace(/\bcredito\b/g, "cr\u00E9dito")
    .replace(/\bCartao\b/g, "Cart\u00E3o")
    .replace(/\bcartao\b/g, "cart\u00E3o")
    .replace(/\bOpcao\b/g, "Op\u00E7\u00E3o")
    .replace(/\bopcao\b/g, "op\u00E7\u00E3o")
    .replace(/\bOpcoes\b/g, "Op\u00E7\u00F5es")
    .replace(/\bopcoes\b/g, "op\u00E7\u00F5es")
    .replace(/\bVoce\b/g, "Voc\u00EA")
    .replace(/\bvoce\b/g, "voc\u00EA")
    .replace(/\bEstrategia\b/g, "Estrat\u00E9gia")
    .replace(/\bestrategia\b/g, "estrat\u00E9gia")
    .replace(/\bContinuos\b/g, "Cont\u00EDnuos")
    .replace(/\bcontinuos\b/g, "cont\u00EDnuos")
    .replace(/\bContinua\b/g, "Cont\u00EDnua")
    .replace(/\bcontinua\b/g, "cont\u00EDnua")
    .replace(/\bConstancia\b/g, "Const\u00E2ncia")
    .replace(/\bconstancia\b/g, "const\u00E2ncia")
    .replace(/\bConteudos\b/g, "Conte\u00FAdos")
    .replace(/\bconteudos\b/g, "conte\u00FAdos")
    .replace(/\bConteudo\b/g, "Conte\u00FAdo")
    .replace(/\bconteudo\b/g, "conte\u00FAdo")
    .replace(/\bEvolucao\b/g, "Evolu\u00E7\u00E3o")
    .replace(/\bevolucao\b/g, "evolu\u00E7\u00E3o")
    .replace(/\bDirecao\b/g, "Dire\u00E7\u00E3o")
    .replace(/\bdirecao\b/g, "dire\u00E7\u00E3o")
    .replace(/\bHibrido\b/g, "H\u00EDbrido")
    .replace(/\bhibrido\b/g, "h\u00EDbrido")
    .replace(/\bNao\b/g, "N\u00E3o")
    .replace(/\bnao\b/g, "n\u00E3o")
    .replace(/\bDuvidas\b/g, "D\u00FAvidas")
    .replace(/\bduvidas\b/g, "d\u00FAvidas")
    .replace(/\bMudancas\b/g, "Mudan\u00E7as")
    .replace(/\bmudancas\b/g, "mudan\u00E7as")
    .replace(/\bComeca\b/g, "Come\u00E7a")
    .replace(/\bcomeca\b/g, "come\u00E7a")
    .replace(/\bComecar\b/g, "Come\u00E7ar")
    .replace(/\bcomecar\b/g, "come\u00E7ar")
    .replace(/\bProxima\b/g, "Pr\u00F3xima")
    .replace(/\bproxima\b/g, "pr\u00F3xima")
    .replace(/\bAvancar\b/g, "Avan\u00E7ar")
    .replace(/\bavancar\b/g, "avan\u00E7ar")
    .replace(/\bSera\b/g, "Ser\u00E1")
    .replace(/\bsera\b/g, "ser\u00E1")
    .replace(/\bApos\b/g, "Ap\u00F3s")
    .replace(/\bapos\b/g, "ap\u00F3s")
    .replace(/\bAprovacao\b/g, "Aprova\u00E7\u00E3o")
    .replace(/\baprovacao\b/g, "aprova\u00E7\u00E3o")
    .replace(/\bRapida\b/g, "R\u00E1pida")
    .replace(/\brapida\b/g, "r\u00E1pida")
    .replace(/\bUnica\b/g, "\u00DAnica")
    .replace(/\bunica\b/g, "\u00FAnica")
    .replace(/\bAplicavel\b/g, "Aplic\u00E1vel")
    .replace(/\baplicavel\b/g, "aplic\u00E1vel")
    .replace(/\bPossivel\b/g, "Poss\u00EDvel")
    .replace(/\bpossivel\b/g, "poss\u00EDvel")
    .replace(/\bVisivel\b/g, "Vis\u00EDvel")
    .replace(/\bvisivel\b/g, "vis\u00EDvel")
    .replace(/\bTracao\b/g, "Tra\u00E7\u00E3o")
    .replace(/\btracao\b/g, "tra\u00E7\u00E3o")
    .replace(/\bJa\b/g, "J\u00E1")
    .replace(/\bja\b/g, "j\u00E1")
    .replace(/\bTambem\b/g, "Tamb\u00E9m")
    .replace(/\btambem\b/g, "tamb\u00E9m")
    .replace(/\bAte\b/g, "At\u00E9")
    .replace(/\bate\b/g, "at\u00E9")
    .replace(/\bBeneficios\b/g, "Benef\u00EDcios")
    .replace(/\bbeneficios\b/g, "benef\u00EDcios")
    .replace(/\bAlimentar\b/g, "Alimentar")
    .replace(/\balimentar\b/g, "alimentar");
}

const translations = {
  "pt-BR": {
    "document.title": "FIT90 | Treino, Alimentação e Acompanhamento em 90 Dias",
    "document.description": "Programa online FIT90 com treino, alimentação e acompanhamento para 90 dias de evolução real.",
    "language.label": "Selecione o idioma",
    "language.select_aria": "Selecione o idioma",
    "language.portuguese": "Português",
    "language.english": "English",
    "nav.login": "Entrar",
    "hero.kicker": "Programa online de treino, alimentacao e acompanhamento",
    "hero.title": "Resultados no corpo e na rotina, sem improviso.",
    "hero.lead": "Treino estruturado, estratégia alimentar e ajustes contínuos para você criar constância e evoluir de verdade em 90 dias.",
    "hero.subtitle": "Tudo pronto para começar? Veja as formas de pagamento e escolha a entrada ideal para você, sem precisar preencher email antes.",
    "hero.cta": "Ver formas de pagamento",
    "hero.secondary_cta": "Explorar o programa",
    "hero.note": "Checkout liberado sem cadastro previo. Escolha sua forma de entrada e avance.",
    "forms.email_label": "Email",
    "forms.email_placeholder": "Email",
    "forms.invalid_email": "Informe um email valido para continuar.",
    "forms.success": "Perfeito. Seu email foi adicionado ao resumo para voce seguir ao pagamento.",
    "program.kicker": "Em alta no FIT90",
    "program.title": "O que voce desbloqueia assim que entra",
    "program.row_aria": "Conteudos em destaque",
    "program.item_1.alt": "Treino progressivo do FIT90",
    "program.item_1.title": "Treino Progressivo",
    "program.item_1.text": "Estrutura fechada para 90 dias com clareza de execucao.",
    "program.item_2.alt": "Plano alimentar do FIT90",
    "program.item_2.title": "Plano Alimentar",
    "program.item_2.text": "Direcao simples para sustentar resultado sem dieta impossivel.",
    "program.item_3.alt": "Acompanhamento do FIT90",
    "program.item_3.title": "Acompanhamento",
    "program.item_3.text": "Ajustes constantes para voce nao sair do caminho.",
    "program.item_4.alt": "Resultados do FIT90",
    "program.item_4.title": "Leitura de Evolucao",
    "program.item_4.text": "Visao objetiva do que esta funcionando e do que ajustar.",
    "program.item_5.alt": "Execucao do FIT90",
    "program.item_5.title": "Execucao Direta",
    "program.item_5.text": "Menos tempo pensando no que fazer e mais tempo evoluindo.",
    "reasons.kicker": "Mais motivos para entrar",
    "reasons.title": "Um sistema completo para quem quer transformar a rotina",
    "reasons.lead": "O FIT90 junta as tres partes que normalmente ficam separadas: treino, alimentacao e acompanhamento.",
    "reasons.item_1.title": "Plano claro",
    "reasons.item_1.text": "Voce sabe o que fazer na semana, como seguir e quando ajustar.",
    "reasons.item_1.tag": "90 dias guiados",
    "reasons.item_2.title": "Rotina real",
    "reasons.item_2.text": "Academia, casa ou hibrido. O plano encaixa na vida real e nao o contrario.",
    "reasons.item_2.tag": "Flexivel",
    "reasons.item_3.title": "Ajuste continuo",
    "reasons.item_3.text": "Quando a rotina muda, o programa muda junto para manter constancia.",
    "reasons.item_3.tag": "Sem travar",
    "reasons.item_4.title": "Resultado visivel",
    "reasons.item_4.text": "O foco nao e apenas treinar mais, e construir mudanca real e sustentavel.",
    "reasons.item_4.tag": "Corpo e disciplina",
    "checkout.billing_caption": "Pagamento seguro",
    "checkout.trust": "Sem cadastro nesta etapa",
    "checkout.kicker": "Seu acesso começa aqui",
    "checkout.title": "Escolha como entrar no FIT90",
    "checkout.lead": "Escolha entre Pix ou cartão. As duas opções liberam o mesmo acesso completo ao FIT90 por R$ 50.",
    "checkout.product_label": "Tudo incluso no FIT90",
    "checkout.product_title": "FIT90 | Treino, alimentacao e acompanhamento por 90 dias",
    "checkout.product_text": "Em qualquer opcao, voce recebe o programa completo com treino, alimentacao e acompanhamento.",
    "checkout.meta_1.label": "Duracao",
    "checkout.meta_1.value": "90 dias",
    "checkout.meta_2.label": "Acesso",
    "checkout.meta_2.value": "Imediato",
    "checkout.meta_3.label": "Formato",
    "checkout.meta_3.value": "Online e guiado",
    "checkout.meta_4.label": "Suporte",
    "checkout.meta_4.value": "Acompanhamento continuo",
    "checkout.includes_title": "O que esta incluso",
    "checkout.item_1.title": "Treino estruturado",
    "checkout.item_1.text": "Um plano claro para 90 dias com progressao e execucao objetiva.",
    "checkout.item_2.title": "Direcao alimentar",
    "checkout.item_2.text": "Uma estrategia aplicavel para sustentar resultado sem extremismo.",
    "checkout.item_3.title": "Acompanhamento do processo",
    "checkout.item_3.text": "Ajustes e orientacao para manter consistencia ao longo da rotina.",
    "checkout.item_4.title": "Leitura de evolucao",
    "checkout.item_4.text": "Visao mais clara do seu progresso para saber o que manter e o que acelerar.",
    "checkout.payment_badge": "Pagamento",
    "checkout.payment_title": "Escolha como prefere entrar",
    "checkout.payment_lead": "As duas formas liberam o mesmo acesso e custam R$ 50. O que muda aqui é apenas como você prefere pagar.",
    "checkout.compare_kicker": "Antes de finalizar",
    "checkout.compare_aria": "Comparativo entre Pix e cartão do FIT90",
    "checkout.plan_1.badge": "Pagamento instantâneo",
    "checkout.plan_1.title": "Pix",
    "checkout.plan_1.price": "R$ 50",
    "checkout.plan_1.cycle": "pagamento imediato",
    "checkout.plan_1.desc": "Para quem quer pagar na hora com Pix e seguir direto para a etapa final.",
    "checkout.plan_1.feature_1": "Confirmacao rapida",
    "checkout.plan_1.feature_2": "Pagamento unico",
    "checkout.plan_1.feature_3": "Acesso completo ao FIT90",
    "checkout.plan_1.button": "Selecionar Pix",
    "checkout.plan_2.badge": "Pagamento no cartão",
    "checkout.plan_2.title": "Cartão de crédito",
    "checkout.plan_2.price": "R$ 50",
    "checkout.plan_2.cycle": "pagamento no cartão",
    "checkout.plan_2.desc": "Para quem prefere concluir no cartão de crédito em poucos cliques.",
    "checkout.plan_2.feature_1": "Parcelamento em ate 12x",
    "checkout.plan_2.feature_2": "Bandeiras principais",
    "checkout.plan_2.feature_3": "Acesso completo ao FIT90",
    "checkout.plan_2.button": "Selecionar cartão",
    "checkout.plan_3.badge": "Pagamento unico",
    "checkout.plan_3.title": "Cartao de debito",
    "checkout.plan_3.price": "R$ 97",
    "checkout.plan_3.cycle": "pagamento unico",
    "checkout.plan_3.desc": "Para quem prefere confirmar no cartao em uma unica cobranca e liberar o acesso sem parcelas.",
    "checkout.plan_3.feature_1": "Confirmacao imediata",
    "checkout.plan_3.feature_2": "Sem parcelas futuras",
    "checkout.plan_3.feature_3": "Acesso completo ao FIT90",
    "checkout.plan_3.button": "Escolher debito",
    "checkout.plans_note": "Ao avançar, você será direcionado para o Mercado Pago com a opção escolhida.",
    "checkout.compare_1.label": "Investimento",
    "checkout.compare_1.pix": "R$ 50",
    "checkout.compare_1.credit": "R$ 50",
    "checkout.compare_1.debit": "R$ 50",
    "checkout.compare_2.label": "Pagamento",
    "checkout.compare_2.pix": "Pix",
    "checkout.compare_2.credit": "Cartão de crédito",
    "checkout.compare_2.debit": "Cartao de credito",
    "checkout.compare_3.label": "Confirmacao",
    "checkout.compare_3.pix": "Assim que o Pix for aprovado",
    "checkout.compare_3.credit": "Após aprovação da operadora",
    "checkout.compare_3.debit": "Apos confirmacao do debito",
    "checkout.compare_4.label": "Acesso",
    "checkout.compare_4.all": "Programa completo",
    "checkout.compare_5.label": "Suporte",
    "checkout.compare_5.all": "Acompanhamento FIT90",
    "checkout.compare_6.label": "Melhor para",
    "checkout.compare_6.pix": "Quem prefere pagar por Pix",
    "checkout.compare_6.credit": "Quem prefere pagar no cartão",
    "checkout.compare_6.debit": "Quem quer resolver tudo em uma unica cobranca",
    "checkout.summary_pix": "Forma selecionada: Pix. Valor final de R$ 50. Ao avançar, você será levado ao pagamento via Mercado Pago.",
    "checkout.summary_credit": "Forma selecionada: Cartão de crédito. Valor final de R$ 50. Ao avançar, você será levado ao pagamento via Mercado Pago.",
    "checkout.summary_debit": "Forma selecionada: Cartao de debito. Na proxima etapa voce revisa o pedido e conclui a cobranca unica para liberar o acesso.",
    "checkout.pay_cta_pix": "Pagar com Pix",
    "checkout.pay_cta_credit": "Pagar com cartão",
    "feature_1.kicker": "Treine onde quiser",
    "feature_1.title": "Academia, casa ou formato hibrido com o mesmo nivel de direcao.",
    "feature_1.text": "Voce nao recebe uma lista solta de exercicios. Recebe um roteiro pensado para fazer sentido na sua realidade e caber na sua semana.",
    "feature_1.alt": "Visual do programa FIT90",
    "feature_1.chip_title": "Plano ativo",
    "feature_1.chip_text": "Semana 01 liberada",
    "feature_2.kicker": "Alimentacao aplicavel",
    "feature_2.title": "Estrategia simples para comer melhor sem viver em dieta impossivel.",
    "feature_2.text": "O plano alimentar foi pensado para sustentar o treino, melhorar a adesao e facilitar a consistencia sem depender de extremismo.",
    "feature_2.alt": "Visual de alimentacao do FIT90",
    "feature_2.card_title": "Estrutura alimentar",
    "feature_2.card_text": "Direcao pronta para aplicar no dia a dia",
    "feature_3.kicker": "Acompanhamento que segura o ritmo",
    "feature_3.title": "Voce nao fica sozinho entre uma semana e outra.",
    "feature_3.text": "O FIT90 foi desenhado para manter tracao. Quando surgem duvidas, mudancas de rotina ou necessidade de ajuste, o plano continua andando com voce.",
    "feature_3.panel_1.alt": "Painel de acompanhamento do FIT90",
    "feature_3.panel_1.title": "Ajustes prontos",
    "feature_3.panel_1.text": "Suporte para nao perder consistencia",
    "feature_3.panel_2.alt": "Painel de resultados do FIT90",
    "feature_3.panel_2.title": "Evolucao visivel",
    "feature_3.panel_2.text": "Leitura do progresso ao longo do processo",
    "faq.kicker": "Perguntas frequentes",
    "faq.title": "Tudo o que voce precisa saber antes de entrar",
    "faq.item_1.question": "O que vem dentro do FIT90?",
    "faq.item_1.answer": "Voce recebe treino estruturado para 90 dias, estrategia alimentar aplicavel, acompanhamento para ajustes e direcao continua para manter constancia e resultado.",
    "faq.item_2.question": "Serve para quem treina em casa ou na academia?",
    "faq.item_2.answer": "Sim. A estrutura foi pensada para academia, casa ou modelo hibrido, sempre mantendo uma execucao clara e coerente com a sua rotina.",
    "faq.item_3.question": "Preciso seguir uma dieta restrita?",
    "faq.item_3.answer": "Nao. A proposta do FIT90 e organizar a alimentacao de forma aplicavel, com estrategia simples e sustentavel, para que voce consiga manter o processo no longo prazo.",
    "faq.item_4.question": "Quando eu comeco depois de entrar?",
    "faq.item_4.answer": "O acesso e imediato. Assim que voce entra, ja recebe a estrutura inicial e pode comecar a seguir o plano sem depender de improviso.",
    "faq.item_5.question": "Como faco para garantir minha vaga?",
    "faq.item_5.answer": "Escolha a forma de pagamento, avance para a etapa final e conclua sua entrada. O processo foi pensado para ser direto e sem cadastro previo nesta tela.",
    "bottom_cta.note": "Pagamento seguro via Mercado Pago. Escolha a forma de pagamento e avance.",
    "footer.title": "Duvidas? Fale com o FIT90.",
    "footer.links_aria": "Links do rodape",
    "footer.link_1": "Programa",
    "footer.link_2": "Beneficios",
    "footer.link_3": "Perguntas frequentes",
    "footer.link_4": "Comecar agora",
    "footer.copy": "FIT90"
  },
  en: {
    "document.title": "FIT90 | Training, Nutrition and Coaching in 90 Days",
    "document.description": "FIT90 online program with training, nutrition and coaching for 90 days of real progress.",
    "language.label": "Select language",
    "language.select_aria": "Select language",
    "language.portuguese": "Portuguese",
    "language.english": "English",
    "nav.login": "Sign in",
    "hero.kicker": "Online training, nutrition and coaching program",
    "hero.title": "Results for your body and routine, without guesswork.",
    "hero.lead": "Structured training, nutrition strategy and ongoing adjustments so you can build consistency and truly evolve in 90 days.",
    "hero.subtitle": "Ready to start? Check the payment options and choose the ideal way to join, without filling in your email first.",
    "hero.cta": "See payment options",
    "hero.secondary_cta": "Explore the program",
    "hero.note": "Checkout is available without prior sign-up. Choose your way in and continue.",
    "forms.email_label": "Email",
    "forms.email_placeholder": "Email",
    "forms.invalid_email": "Enter a valid email to continue.",
    "forms.success": "Perfect. Your email was added to the summary so you can move to payment.",
    "program.kicker": "Trending on FIT90",
    "program.title": "What you unlock as soon as you join",
    "program.row_aria": "Featured content",
    "program.item_1.alt": "FIT90 progressive training",
    "program.item_1.title": "Progressive Training",
    "program.item_1.text": "A complete 90-day structure with clear execution.",
    "program.item_2.alt": "FIT90 nutrition plan",
    "program.item_2.title": "Nutrition Plan",
    "program.item_2.text": "A simple direction to sustain results without impossible dieting.",
    "program.item_3.alt": "FIT90 coaching support",
    "program.item_3.title": "Coaching",
    "program.item_3.text": "Ongoing adjustments so you do not lose direction.",
    "program.item_4.alt": "FIT90 results",
    "program.item_4.title": "Progress Review",
    "program.item_4.text": "An objective view of what is working and what needs to change.",
    "program.item_5.alt": "FIT90 execution",
    "program.item_5.title": "Direct Execution",
    "program.item_5.text": "Less time wondering what to do and more time evolving.",
    "reasons.kicker": "More reasons to join",
    "reasons.title": "A complete system for anyone who wants to transform their routine",
    "reasons.lead": "FIT90 brings together the three parts that usually stay disconnected: training, nutrition and coaching.",
    "reasons.item_1.title": "Clear plan",
    "reasons.item_1.text": "You know what to do each week, how to follow it and when to adjust.",
    "reasons.item_1.tag": "90 guided days",
    "reasons.item_2.title": "Real routine",
    "reasons.item_2.text": "Gym, home or hybrid. The plan fits real life, not the other way around.",
    "reasons.item_2.tag": "Flexible",
    "reasons.item_3.title": "Ongoing adjustment",
    "reasons.item_3.text": "When your routine changes, the program changes with you to keep consistency.",
    "reasons.item_3.tag": "No getting stuck",
    "reasons.item_4.title": "Visible results",
    "reasons.item_4.text": "The focus is not just training more. It is building real and sustainable change.",
    "reasons.item_4.tag": "Body and discipline",
    "checkout.billing_caption": "Secure payment",
    "checkout.trust": "No sign-up on this step",
    "checkout.kicker": "Your access starts here",
    "checkout.title": "Choose how you want to join FIT90",
    "checkout.lead": "Choose between Pix or card. Both options unlock the exact same full FIT90 access for R$ 50.",
    "checkout.product_label": "Everything included in FIT90",
    "checkout.product_title": "FIT90 | Training, nutrition and coaching for 90 days",
    "checkout.product_text": "No matter which option you choose, you get the complete program with training, nutrition and coaching.",
    "checkout.meta_1.label": "Duration",
    "checkout.meta_1.value": "90 days",
    "checkout.meta_2.label": "Access",
    "checkout.meta_2.value": "Immediate",
    "checkout.meta_3.label": "Format",
    "checkout.meta_3.value": "Online and guided",
    "checkout.meta_4.label": "Support",
    "checkout.meta_4.value": "Ongoing coaching",
    "checkout.includes_title": "What is included",
    "checkout.item_1.title": "Structured training",
    "checkout.item_1.text": "A clear 90-day plan with progression and objective execution.",
    "checkout.item_2.title": "Nutrition direction",
    "checkout.item_2.text": "A practical strategy to sustain results without extremism.",
    "checkout.item_3.title": "Process coaching",
    "checkout.item_3.text": "Adjustments and guidance to keep consistency throughout your routine.",
    "checkout.item_4.title": "Progress review",
    "checkout.item_4.text": "A clearer view of your progress so you know what to keep and what to accelerate.",
    "checkout.payment_badge": "Payment",
    "checkout.payment_title": "Choose how you want to join",
    "checkout.payment_lead": "Both payment methods unlock the same access and cost R$ 50. The only difference here is how you prefer to pay.",
    "checkout.compare_kicker": "Before you finish",
    "checkout.compare_aria": "FIT90 Pix and card comparison",
    "checkout.plan_1.badge": "Instant payment",
    "checkout.plan_1.title": "Pix",
    "checkout.plan_1.price": "R$ 50",
    "checkout.plan_1.cycle": "instant payment",
    "checkout.plan_1.desc": "For anyone who wants to pay right away with Pix and move straight to the final step.",
    "checkout.plan_1.feature_1": "Fast confirmation",
    "checkout.plan_1.feature_2": "Single payment",
    "checkout.plan_1.feature_3": "Full FIT90 access",
    "checkout.plan_1.button": "Select Pix",
    "checkout.plan_2.badge": "Card payment",
    "checkout.plan_2.title": "Credit card",
    "checkout.plan_2.price": "R$ 50",
    "checkout.plan_2.cycle": "card payment",
    "checkout.plan_2.desc": "For anyone who prefers to finish the purchase on a credit card in just a few clicks.",
    "checkout.plan_2.feature_1": "Up to 12 installments",
    "checkout.plan_2.feature_2": "Major card brands",
    "checkout.plan_2.feature_3": "Full FIT90 access",
    "checkout.plan_2.button": "Select card",
    "checkout.plan_3.badge": "Single charge",
    "checkout.plan_3.title": "Debit card",
    "checkout.plan_3.price": "R$ 97",
    "checkout.plan_3.cycle": "one-time charge",
    "checkout.plan_3.desc": "For anyone who prefers to confirm by card in a single charge and unlock access without installments.",
    "checkout.plan_3.feature_1": "Immediate confirmation",
    "checkout.plan_3.feature_2": "No future installments",
    "checkout.plan_3.feature_3": "Full FIT90 access",
    "checkout.plan_3.button": "Choose debit",
    "checkout.plans_note": "When you continue, you will be taken to Mercado Pago with the selected option.",
    "checkout.compare_1.label": "Investment",
    "checkout.compare_1.pix": "R$ 50",
    "checkout.compare_1.credit": "R$ 50",
    "checkout.compare_1.debit": "R$ 50",
    "checkout.compare_2.label": "Payment",
    "checkout.compare_2.pix": "Pix",
    "checkout.compare_2.credit": "Credit card",
    "checkout.compare_2.debit": "Credit card",
    "checkout.compare_3.label": "Confirmation",
    "checkout.compare_3.pix": "As soon as Pix is approved",
    "checkout.compare_3.credit": "After processor approval",
    "checkout.compare_3.debit": "After debit confirmation",
    "checkout.compare_4.label": "Access",
    "checkout.compare_4.all": "Full program",
    "checkout.compare_5.label": "Support",
    "checkout.compare_5.all": "FIT90 coaching",
    "checkout.compare_6.label": "Best for",
    "checkout.compare_6.pix": "Anyone who prefers paying with Pix",
    "checkout.compare_6.credit": "Anyone who prefers paying by card",
    "checkout.compare_6.debit": "Anyone who wants to solve everything in a single charge",
    "checkout.summary_pix": "Selected option: Pix. Final amount: R$ 50. When you continue, you will be taken to Mercado Pago.",
    "checkout.summary_credit": "Selected option: Credit card. Final amount: R$ 50. When you continue, you will be taken to Mercado Pago.",
    "checkout.summary_debit": "Selected option: Debit card. On the next step you review the order and complete the single charge to unlock access.",
    "checkout.pay_cta_pix": "Pay with Pix",
    "checkout.pay_cta_credit": "Pay with card",
    "feature_1.kicker": "Train anywhere",
    "feature_1.title": "Gym, home or hybrid with the same level of direction.",
    "feature_1.text": "You do not get a random list of exercises. You get a roadmap designed to fit your reality and your week.",
    "feature_1.alt": "FIT90 program preview",
    "feature_1.chip_title": "Plan active",
    "feature_1.chip_text": "Week 01 unlocked",
    "feature_2.kicker": "Practical nutrition",
    "feature_2.title": "A simple strategy to eat better without living on an impossible diet.",
    "feature_2.text": "The nutrition plan is built to support your training, improve adherence and make consistency easier without extremism.",
    "feature_2.alt": "FIT90 nutrition preview",
    "feature_2.card_title": "Nutrition structure",
    "feature_2.card_text": "Ready-to-use direction for daily life",
    "feature_3.kicker": "Coaching that keeps momentum",
    "feature_3.title": "You are not alone between one week and the next.",
    "feature_3.text": "FIT90 was designed to keep traction. When questions, routine changes or adjustments come up, the plan keeps moving with you.",
    "feature_3.panel_1.alt": "FIT90 coaching panel",
    "feature_3.panel_1.title": "Ready adjustments",
    "feature_3.panel_1.text": "Support to keep your consistency on track",
    "feature_3.panel_2.alt": "FIT90 progress panel",
    "feature_3.panel_2.title": "Visible progress",
    "feature_3.panel_2.text": "A clear reading of your progress throughout the process",
    "faq.kicker": "Frequently asked questions",
    "faq.title": "Everything you need to know before joining",
    "faq.item_1.question": "What is included in FIT90?",
    "faq.item_1.answer": "You get a structured 90-day training plan, practical nutrition strategy, coaching for adjustments and continuous direction to maintain consistency and results.",
    "faq.item_2.question": "Does it work for people training at home or in the gym?",
    "faq.item_2.answer": "Yes. The structure was designed for gym, home or hybrid training, always keeping execution clear and aligned with your routine.",
    "faq.item_3.question": "Do I need to follow a restrictive diet?",
    "faq.item_3.answer": "No. FIT90 is built to organize nutrition in a practical and sustainable way so you can maintain the process over time.",
    "faq.item_4.question": "When do I start after joining?",
    "faq.item_4.answer": "Access is immediate. As soon as you join, you receive the initial structure and can start following the plan without guesswork.",
    "faq.item_5.question": "How do I secure my spot?",
    "faq.item_5.answer": "Choose the payment method, move to the final step and complete your purchase. The flow was designed to be direct and without prior sign-up on this screen.",
    "bottom_cta.note": "Secure payment through Mercado Pago. Choose your payment method and continue.",
    "footer.title": "Questions? Talk to FIT90.",
    "footer.links_aria": "Footer links",
    "footer.link_1": "Program",
    "footer.link_2": "Benefits",
    "footer.link_3": "FAQ",
    "footer.link_4": "Start now",
    "footer.copy": "FIT90"
  }
};

function getTranslation(language, key) {
  const value = translations[language]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key] ?? "";
  return language === "pt-BR" ? normalizePortugueseText(value) : value;
}

function clearFormFeedback() {
  document.querySelectorAll("[data-form-feedback]").forEach((node) => {
    node.textContent = "";
  });
}

function getSummaryKey(plan) {
  return `checkout.summary_${plan}`;
}

function getPayCtaKey(plan) {
  return `checkout.pay_cta_${plan}`;
}

function setSelectedPlan(plan, { language = getCurrentLanguage(), scroll = false } = {}) {
  const nextPlan = VALID_PLANS.includes(plan) ? plan : DEFAULT_PLAN;
  selectedPlan = nextPlan;

  planCards.forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.planCard === nextPlan);
  });

  planButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.planSelect === nextPlan));
  });

  if (planSummaryNode) {
    planSummaryNode.textContent = getTranslation(language, getSummaryKey(nextPlan));
  }

  if (planLinkNode) {
    planLinkNode.setAttribute("href", PLAN_LINKS[nextPlan] ?? PLAN_LINKS[DEFAULT_PLAN]);
  }

  if (planLinkLabelNode) {
    planLinkLabelNode.textContent = getTranslation(language, getPayCtaKey(nextPlan));
  }

  if (scroll && ctaSection) {
    ctaSection.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

function applyTranslations(language) {
  const nextLanguage = translations[language] ? language : DEFAULT_LANGUAGE;

  document.documentElement.lang = nextLanguage;
  document.title = getTranslation(nextLanguage, "document.title");

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", getTranslation(nextLanguage, "document.description"));
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = getTranslation(nextLanguage, key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    node.setAttribute("placeholder", getTranslation(nextLanguage, key));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria-label");
    node.setAttribute("aria-label", getTranslation(nextLanguage, key));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.getAttribute("data-i18n-alt");
    node.setAttribute("alt", getTranslation(nextLanguage, key));
  });

  languageSwitchers.forEach((switcher) => {
    switcher.value = nextLanguage;
  });

  clearFormFeedback();
  setSelectedPlan(selectedPlan, { language: nextLanguage });
  localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
}

function setFaqState(item, isOpen) {
  const toggle = item.querySelector(".faq-toggle");
  const panel = item.querySelector(".faq-panel");

  if (!toggle || !panel) {
    return;
  }

  item.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    panel.removeAttribute("hidden");
    return;
  }

  panel.setAttribute("hidden", "");
}

function handleFaqToggle(clickedToggle) {
  const clickedItem = clickedToggle.closest(".faq-item");

  faqItems.forEach((item) => {
    const shouldOpen = item === clickedItem && !item.classList.contains("is-open");
    setFaqState(item, shouldOpen);
  });
}

function getFeedbackNode(form) {
  const nextElement = form.nextElementSibling;
  return nextElement?.matches("[data-form-feedback]") ? nextElement : null;
}

function showFormFeedback(form, message) {
  const feedback = getFeedbackNode(form);

  if (!feedback) {
    return;
  }

  feedback.textContent = message;
}

function getCurrentLanguage() {
  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return translations[storedLanguage] ? storedLanguage : DEFAULT_LANGUAGE;
}

function handleLeadSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const emailInput = form.querySelector("input[type='email']");

  if (emailInput instanceof HTMLInputElement) {
    emailInput.value = emailInput.value.trim();
  }

  showFormFeedback(form, getTranslation(getCurrentLanguage(), "forms.success"));

  if (!checkoutSection || checkoutSection.contains(form)) {
    return;
  }

  setTimeout(() => {
    checkoutSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 180);
}

faqToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    handleFaqToggle(toggle);
  });
});

leadForms.forEach((form) => {
  form.addEventListener("submit", handleLeadSubmit);
});

planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextPlan = VALID_PLANS.includes(button.dataset.planSelect) ? button.dataset.planSelect : DEFAULT_PLAN;
    setSelectedPlan(nextPlan);
    window.location.href = PLAN_LINKS[nextPlan] ?? PLAN_LINKS[DEFAULT_PLAN];
  });
});

languageSwitchers.forEach((switcher) => {
  switcher.addEventListener("change", (event) => {
    applyTranslations(event.currentTarget.value);
  });
});

applyTranslations(getCurrentLanguage());

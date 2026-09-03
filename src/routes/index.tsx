import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import "../styles/academia.css";
import adriana from "../assets/adriana.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Academia Grupo Elite — Formación para Asesores Inmobiliarios" },
      {
        name: "description",
        content:
          "Aprendé el sistema que construyó una cartera de resultados reales. 6 módulos, acompañamiento 1 a 1 y la posibilidad de sumarte a Grupo Elite Bienes Raíces.",
      },
      { property: "og:title", content: "Academia Grupo Elite — Formación para Asesores Inmobiliarios" },
      {
        property: "og:description",
        content:
          "6 módulos, herramientas listas para usar y mentoría 1 a 1 con Adriana. El sistema que aplica un equipo de 50 inmobiliarios en Puerto Madero.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MODULOS = [
  {
    n: 1,
    titulo: "Mentalidad del asesor elite",
    texto:
      "Identidad, disciplina, objetivos, organización y eliminación de excusas. La base de todo.",
  },
  {
    n: 2,
    titulo: "Cómo captar propiedades",
    texto:
      "ACM, prelisting, presentación de servicios, manejo de objeciones y posicionamiento. El sistema para captar más y mejor.",
  },
  {
    n: 3,
    titulo: "Cómo trabajar con compradores. Prebuying",
    texto:
      "Cómo acompañar a un comprador desde el primer contacto hasta la compra, hacer prebuying profesional y cerrar la operación.",
  },
  {
    n: 4,
    titulo: "Negociación y cierre",
    texto:
      "Cómo mostrar una propiedad, negociar, cerrar la reserva y hacer postventa para generar referidos.",
  },
  {
    n: 5,
    titulo: "Cómo prospectar y generar clientes",
    texto:
      "Cómo trabajar la base de contactos, llamadas en frío, guiones para hablar con propietarios y sistema de seguimiento.",
  },
  {
    n: 6,
    titulo: "Asesor Elite",
    texto:
      "Construcción de marca personal, contenido en redes y los hábitos que separan a un asesor común de un asesor Elite.",
  },
];

const DOLORES = [
  {
    t: "Prospectás todos los días y el propietario siempre te dice que no",
    s: "Llamás, mensajes, timbre tocado — y la puerta cerrada igual.",
  },
  {
    t: "Llegás al prelisting y las objeciones te dejan sin respuesta",
    s: '"La tasación está baja, yo pretendía mucho más", "Lo voy a pensar", "tengo otra inmobiliaria que no me cobra comisión" — y no sabés qué decir.',
  },
  {
    t: "Trabajás semanas enteras sin cobrar un peso",
    s: "Comisión que no aparece, incertidumbre constante, el mes que no cierra.",
  },
  {
    t: "No tenés cartera armada ni sabés cómo construirla bien",
    s: "Ves a otros inmobiliarios captando propiedades y no entendés por qué vos no podés captar.",
  },
  {
    t: "Tenés ganas, energía y disposición — y aun así los resultados no llegan",
    s: "Y entonces empezás a pensar que el problema sos vos. Spoiler: no lo sos.",
  },
];

const CASOS = [
  {
    ini: "V.M.",
    rol: "Maestra jardinera → Real Estate",
    pre: "De cero a ",
    num: "$1M",
    post: " en cartera operativa en un año de sumarse al sistema.",
  },
  {
    ini: "I.T.",
    rol: "Empezó con 18 años",
    pre: "Hoy tiene 21 años, ",
    num: "$4M",
    post: " en cartera y su propio equipo.",
  },
  {
    ini: "M.A.",
    rol: "Productora de seguros · 20 años",
    pre: "Hoy tiene cartera de ~$4M e ingresos de ",
    num: "$10K",
    post: " por mes en Real Estate.",
  },
  {
    ini: "G.T.",
    rol: "Relación de dependencia · 20+ años",
    pre: "Hoy vive 100% del Real Estate con una cartera de ",
    num: "$1.5M",
    post: ". Dejó la dependencia para siempre.",
  },
  {
    ini: "C.B.",
    rol: "Gerente bancario · 30 años",
    pre: "Cambió el banco por el Real Estate. Hoy genera ",
    num: "$5K",
    post: " mensuales viviendo de esto.",
  },
  {
    ini: "S.V.",
    rol: "Productora de seguros · 25 años",
    pre: "Un año y medio en Grupo Elite: ",
    num: "$2M",
    post: " en cartera, $7K de ingreso mensual.",
  },
];

const BONUS = [
  {
    icon: "📋",
    t: "+50 Scripts de WhatsApp",
    p: "Guiones listos para prospectar, hacer seguimiento y cerrar — sin improvisar.",
  },
  {
    icon: "🏠",
    t: "Manual de Captación de Grupo Elite",
    p: "El mismo manual que usa el equipo de 50 inmobiliarios en la oficina.",
  },
  {
    icon: "🤖",
    t: "Prompts de IA para inmobiliarios",
    p: "IA entrenada para responder tus dudas 24/7 y prompts específicos para el rubro.",
  },
  {
    icon: "📅",
    t: "Calendario de prospección de 90 días",
    p: "Qué hacer cada día para construir cartera de forma consistente y sin improvisación.",
  },
];

const FAQS = [
  {
    q: "¿Sirve si vengo de otro rubro y no sé nada de inmobiliaria?",
    a: "Sí. VM era maestra jardinera. MA trabajó en seguros 20 años. CB fue gerente de banco durante 30. El sistema está diseñado para que no necesites experiencia previa — necesitás disponibilidad y seguir el proceso.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados?",
    a: "Depende de cuánto trabajás el sistema. Los inmobiliarios más aplicados del equipo tuvieron sus primeras captaciones en las primeras semanas. Los que tardaron más fueron los que aplicaron de forma intermitente. El sistema funciona — el resultado depende de la consistencia.",
  },
  {
    q: "¿Cuál es la diferencia entre el curso y la mentoría?",
    a: "El curso son los 6 módulos pregrabados más todas las herramientas: para quien quiere aprender el sistema a su ritmo. La mentoría suma una clase semanal 1 a 1, soporte directo con Adriana 24/7 y la posibilidad de iniciar un proceso de admisión para sumarse al equipo de Grupo Elite con estructura y operaciones reales. Eso no es automático: quien accede a la mentoría puede aplicar, y la decisión final de ingreso es nuestra tras una reunión previa.",
  },
  {
    q: "¿Qué es Grupo Elite y para qué sirve sumarse?",
    a: "Grupo Elite Bienes Raíces es una inmobiliaria real con oficina física en Puerto Madero, Rosario Vera Peñaloza 545. Sumarse significa tener estructura, liderazgo y un equipo de 50 personas desde el día uno — sin construir todo de cero solo.",
  },
  {
    q: "¿Tengo que sumarme a Grupo Elite si compro la mentoría?",
    a: "No es automático. Quienes acceden a la mentoría 1 a 1 tienen la posibilidad de iniciar un proceso de admisión para sumarse al equipo de Grupo Elite Bienes Raíces. Esto implica una entrevista previa con el equipo, ya que buscamos perfiles que compartan nuestros valores, ética y forma de trabajar. No todos los que compran la mentoría van a ser parte del equipo — y eso es intencional: queremos mantener la calidad y la energía de Grupo Elite.",
  },
  {
    q: "¿Cómo accedo al contenido?",
    a: "Apenas confirmes tu inscripción recibís acceso a la plataforma donde están los 6 módulos, todos los materiales y la comunidad. El acceso es inmediato — no tenés que esperar para empezar.",
  },
];

const CURSO = [
  "6 módulos completos en video",
  "IA entrenada para responder tus dudas 24/7",
  "+50 scripts de WhatsApp listos para usar",
  "Manual de captación de Grupo Elite",
  "20 preguntas para prelisting y prebuying",
  "Planilla de KPIs",
  "Prompts de IA para inmobiliarios",
  "Calendario de prospección de 90 días",
  "Comunidad Skool y TikTok",
];

const MENTORIA = [
  "Todo lo del curso pregrabado",
  "Clase semanal en vivo 1 a 1 con Adriana",
  "Soporte directo 24/7 con Adriana",
  "Posibilidad de sumarte a Grupo Elite Bienes Raíces si vemos potencial en vos",
  "Acceso al proceso de admisión al equipo de Grupo Elite",
  "Casos reales, operaciones reales, equipo real",
];

const STATS = [
  { n: "12", l: "Años en el rubro" },
  { n: "50", l: "Inmobiliarios en el equipo" },
  { n: "+$10M", l: "En carteras activas" },
];

function Check() {
  return (
    <span className="check-icon">
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M6.2 11.5 3 8.3l1.1-1.1 2.1 2.1 5.7-5.7L13 4.7z" />
      </svg>
    </span>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const spark = document.createElement("div");
      spark.className = "spark";
      spark.style.left = e.clientX - 20 + "px";
      spark.style.top = e.clientY - 20 + "px";
      document.body.appendChild(spark);
      spark.addEventListener("animationend", () => spark.remove());
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="academia">
      <div className="nav-strip">
        <span className="nav-logo">Academia Grupo Elite · Bienes Raíces</span>
      </div>

      <header className="hero">
        <span className="hero-pill">Sistema de formación inmobiliaria</span>
        <h1>
          Este es el paso a paso exacto para escalar dentro de Real Estate, sistema validado en más de 50 inmobiliarios.
        </h1>
        <p className="hero-sub">
          Sistema de formación inmobiliaria para captar más, negociar mejor y cerrar más rápido.
        </p>
        <a className="btn-primary" href="#oferta">
          Quiero el sistema
        </a>
        <div className="hero-stats">
          {STATS.map((s) => (
            <div className="stat-item" key={s.l}>
              <span className="stat-num">{s.n}</span>
              <span className="stat-label">{s.l}</span>
            </div>
          ))}
        </div>
      </header>

      <section className="section-video">
        <div className="inner">
          <p className="video-label">Mirá antes de leer</p>
          <h2 className="video-title">
            Todo lo que nadie te dijo
            <br />
            cuando entraste al Real Estate
          </h2>
          <div className="video-frame">
            <div className="video-placeholder">
              <span className="play-btn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="video-placeholder-text">Insertar video del VSL aquí</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dolor">
        <div className="inner">
          <p className="section-label">Reconocerte en algo de esto</p>
          <h2 className="section-title">¿Te suena familiar?</h2>
          <div className="dolor-list">
            {DOLORES.map((d) => (
              <div className="dolor-item" key={d.t}>
                <span className="dolor-x">✗</span>
                <div>
                  <p className="dolor-text">
                    {d.t}
                    <span className="dolor-sub">{d.s}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-promesa">
        <div className="inner">
          <p className="promesa-label">La causa real</p>
          <h2 className="promesa-title">
            El problema no es el mercado.
            <br />
            <em>Es que nadie te enseñó el sistema.</em>
          </h2>
          <div className="promesa-body">
            <p>Nadie te dio los guiones correctos para hablar con un propietario sin sonar vendedor.</p>
            <p>Nadie te mostró cómo armar un ACM que realmente convenza.</p>
            <p>Nadie te explicó cómo hacer una captación profesional ni cómo cerrar una reserva.</p>
            <p>
              Nadie te dijo cómo construir tu marca personal para que los clientes vengan a buscarte a
              vos.
            </p>
            <p className="cierre">
              Eso no es un problema de actitud. Es un problema de herramientas. Y eso tiene solución.
            </p>
          </div>
          <a className="btn-secondary" href="#oferta">
            Ver las opciones de formación
          </a>
        </div>
      </section>

      <section className="section-modulos">
        <div className="inner">
          <p className="section-label">El método</p>
          <h2 className="section-title">
            6 módulos.
            <br />
            Un sistema completo.
          </h2>
          <div className="modulos-grid">
            {MODULOS.map((m) => (
              <article className="modulo-card" key={m.n}>
                <div className="modulo-num">{m.n}</div>
                <div className="modulo-info">
                  <h3>Módulo {m.n}</h3>
                  <h4>{m.titulo}</h4>
                  <p>{m.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-autoridad">
        <div className="inner">
          <div className="autoridad-text">
            <p className="section-label">Quién te enseña</p>
            <h2>
              Adriana construyó esto
              <br />
              <em>desde adentro del rubro.</em>
            </h2>
            <div className="autoridad-body">
              <p>
                Llegué al mundo inmobiliario hace 12 años. Venía de la gastronomía — nada que ver. Empecé
                sin contactos, sin red, sin saber nada del mercado. Fui asesora durante 10 años. Cometí
                todos los errores que se pueden cometer y fui construyendo, de a poco, un sistema que
                funcionaba. Un sistema que nadie me enseñó.
              </p>
              <p>
                Hace dos años fundé Grupo Elite Bienes Raíces, nuestra oficina en Puerto Madero. Hoy lidero un equipo de 50 personas.
              </p>
              <p>
                La Academia la armé con todo lo que a mí me hubiera gustado tener cuando empecé. No es
                teoría. Es el sistema que yo apliqué y que aplica cada asesor de mi equipo.
              </p>
            </div>
            <div className="autoridad-badges">
              <span className="badge">12 años en Real Estate</span>
              <span className="badge">Broker — Grupo Elite Bienes Raíces</span>
              <span className="badge">50 inmobiliarios</span>
              <span className="badge">CABA y Gran Buenos Aires</span>
            </div>
          </div>
          <div className="autoridad-photo">
            <img
              src={adriana.url}
              alt="Adriana, fundadora de Grupo Elite Bienes Raíces"
              className="autoridad-img"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      <section className="section-casos">
        <div className="inner">
          <p className="section-label">Resultados reales</p>
          <h2 className="section-title">
            Perfiles distintos.
            <br />
            El mismo sistema.
          </h2>
          <div className="casos-grid">
            {CASOS.map((c) => (
              <article className="caso-card" key={c.ini + c.rol}>
                <div className="caso-header">
                  <div className="caso-avatar">{c.ini}</div>
                  <div className="caso-meta">
                    <h4>{c.ini}</h4>
                    <span>{c.rol}</span>
                  </div>
                </div>
                <p className="caso-result">
                  {c.pre}
                  <span className="caso-num">{c.num}</span>
                  {c.post}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-oferta" id="oferta">
        <div className="inner">
          <p className="section-label">Elegí tu opción</p>
          <h2 className="section-title">
            Dos caminos.
            <br />
            Un mismo sistema.
          </h2>
          <div className="oferta-grid">
            <article className="oferta-card">
              <p className="oferta-tag">Opción 1</p>
              <h3 className="oferta-nombre">Curso Pregrabado</h3>
              <div className="oferta-precio">
                <span className="precio-cur">U$D</span>
                <span className="precio-num">397</span>
                <span className="precio-iva">+ IVA</span>
              </div>
              <ul className="oferta-includes">
                {CURSO.map((i) => (
                  <li key={i}>
                    <Check />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a
                className="btn-oferta outline"
                href="https://www.skool.com/academia-grupo-elite-3856/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiero el sistema completo
              </a>
            </article>

            <article className="oferta-card featured">
              <p className="oferta-tag">Opción 2 — La más completa</p>
              <h3 className="oferta-nombre">
                Mentoría 1 a 1
                <br />+ Grupo Elite
              </h3>
              <div className="oferta-precio">
                <span className="precio-cur">U$D</span>
                <span className="precio-num">997 + IVA</span>
              </div>
              <ul className="oferta-includes">
                {MENTORIA.map((i) => (
                  <li key={i}>
                    <Check />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a
                className="btn-oferta gold"
                href="https://wa.me/5491158007135?text=Hola%20Adri%20c%C3%B3mo%20est%C3%A1s%3F%20Me%20interesa%20aplicar%20a%20tu%20Mentoria%201%3A1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiero aplicar a la mentoría 1 a 1
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section-bonus">
        <div className="inner">
          <p className="section-label">Incluido en ambas opciones</p>
          <h2 className="section-title">
            Herramientas listas
            <br />
            para usar desde el día 1
          </h2>
          <div className="bonus-list">
            {BONUS.map((b) => (
              <div className="bonus-item" key={b.t}>
                <span className="bonus-icon">{b.icon}</span>
                <div className="bonus-info">
                  <h4>{b.t}</h4>
                  <p>{b.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-faq">
        <div className="inner">
          <p className="section-label">Preguntas frecuentes</p>
          <h2 className="section-title">
            Lo que seguro
            <br />
            estás pensando
          </h2>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div className="faq-item" key={f.q}>
                <button
                  type="button"
                  className={`faq-q${openFaq === i ? " open" : ""}`}
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {f.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className={`faq-a${openFaq === i ? " open" : ""}`}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta-final" id="cta">
        <div className="inner">
          <h2 className="cta-final-title">
            El camino que yo hice a los tropiezos,
            <br />
            <em>vos lo podés hacer con un mapa.</em>
          </h2>
          <p className="cta-final-sub">
            Cada semana que pasa sin un sistema es una semana más sin resultados. Elegí tu opción y
            empezamos.
          </p>
          <a className="btn-cta-final" href="#oferta">
            Quiero el sistema
          </a>
          <p className="cta-final-note">Curso U$D 397 + IVA · Mentoría 1 a 1 U$D 997 + IVA</p>
        </div>
      </section>

      <footer>
        <p className="footer-logo">Academia Grupo Elite</p>
        <p>
          © Grupo Elite Bienes Raíces · Puerto Madero, Buenos Aires ·{" "}
          <a href="#cta">Términos y condiciones</a>
        </p>
      </footer>

      <div className="sticky-cta">
        <a href="#oferta">Quiero el sistema</a>
      </div>
    </div>
  );
}

# Elite Real Estate System

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Academia Grupo Elite — Formación para Asesores Inmobiliarios</title>
<meta name="description" content="Aprendé el sistema que construyó una cartera de resultados reales. 5 módulos, acompañamiento 1 a 1 y la posibilidad de sumarte a Grupo Elite Bienes Raíces."/>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  --navy:#0B1C2C;
  --navy-mid:#12273A;
  --navy-light:#1A3348;
  --gold:#C9A84C;
  --gold-light:#E8C96A;
  --gold-pale:#F5E9C8;
  --white:#FFFFFF;
  --off-white:#F8F5EE;
  --text-dark:#0B1C2C;
  --text-mid:#2A3C4E;
  --red:#B23B24;
  --green:#3D6B47;
  --gold-gradient:linear-gradient(110deg,#A07830 0%,#C9A84C 25%,#F0D078 45%,#FFE9A0 50%,#F0D078 55%,#C9A84C 75%,#A07830 100%);
}

html{scroll-behavior:smooth}
body{font-family:'Montserrat',sans-serif;background:var(--white);color:var(--text-dark);line-height:1.6;overflow-x:hidden}

/* ─── SHIMMER ─── */
@keyframes shimmer{0%{background-position:200% center}100%{background-position:-200% center}}
.shimmer-text{
  background:var(--gold-gradient);
  background-size:250% auto;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
  animation:shimmer 4s linear infinite
}
.shimmer-border{
  border:2px solid transparent;
  background:linear-gradient(var(--navy),var(--navy)) padding-box,
              var(--gold-gradient) border-box;
  background-size:auto,250% auto;
  animation:shimmer 4s linear infinite
}

/* ─── CLICK SPARK ─── */
@keyframes spark-out{0%{opacity:1;transform:scale(0)}80%{opacity:.6}100%{opacity:0;transform:scale(2.5)}}
.spark{position:fixed;pointer-events:none;width:40px;height:40px;border-radius:50%;background:radial-gradient(circle,#FFE9A0 0%,var(--gold) 50%,transparent 70%);z-index:9999;transform:scale(0);animation:spark-out .45s ease-out forwards}

/* ─── NAV STRIP ─── */
.nav-strip{background:var(--navy);padding:12px 24px;display:flex;align-items:center;justify-content:center}
.nav-logo{font-family:'Cormorant Garamond',serif;font-size:clamp(1rem,3vw,1.25rem);font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--gold)}

/* ─── HERO ─── */
.hero{background:var(--navy);padding:clamp(48px,8vw,100px) clamp(20px,5vw,80px) clamp(40px,6vw,80px);text-align:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(201,168,76,.15) 0%,transparent 70%);pointer-events:none}
.hero-pill{display:inline-block;border:1px solid var(--gold);color:var(--gold);font-size:.7rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:6px 18px;border-radius:2px;margin-bottom:28px}
.hero h1{font-family:'Cormorant Garamond',serif;font-size:clamp(2.2rem,7vw,5rem);font-weight:700;line-height:1.05;color:var(--white);margin-bottom:20px;max-width:900px;margin-left:auto;margin-right:auto}
.hero h1 em{font-style:italic}
.hero-sub{font-size:clamp(.9rem,2.2vw,1.15rem);color:rgba(255,255,255,.75);max-width:640px;margin:0 auto 36px;font-weight:400;line-height:1.7}
.btn-primary{display:inline-block;background:var(--gold-gradient);background-size:250% auto;animation:shimmer 4s linear infinite;color:var(--navy);font-family:'Montserrat',sans-serif;font-size:clamp(.9rem,2vw,1.05rem);font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:18px 42px;border-radius:3px;text-decoration:none;cursor:pointer;border:none;width:100%;max-width:440px;transition:transform .15s,box-shadow .15s}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(201,168,76,.4)}
.hero-note{margin-top:16px;font-size:.75rem;color:rgba(255,255,255,.45);letter-spacing:.05em}
.hero-stats{display:flex;justify-content:center;gap:clamp(20px,5vw,60px);margin-top:48px;padding-top:40px;border-top:1px solid rgba(201,168,76,.2);flex-wrap:wrap}
.stat-item{text-align:center}
.stat-num{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,5vw,3rem);font-weight:700;color:var(--gold);display:block;line-height:1}
.stat-label{font-size:.7rem;color:rgba(255,255,255,.5);letter-spacing:.12em;text-transform:uppercase;margin-top:6px;display:block}

/* ─── VIDEO ─── */
.section-video{background:var(--off-white);padding:clamp(48px,8vw,90px) clamp(20px,5vw,80px)}
.section-video .inner{max-width:800px;margin:0 auto;text-align:center}
.video-label{font-size:.7rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:14px}
.video-title{font-family:'Cormorant Garamond',serif;font-size:clamp(1.6rem,4vw,2.6rem);color:var(--text-dark);margin-bottom:32px;line-height:1.2}
.video-frame{position:relative;padding-bottom:56.25%;background:var(--navy);border-radius:4px;overflow:hidden;box-shadow:0 20px 60px rgba(11,28,44,.2)}
.video-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.video-placeholder{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;cursor:pointer}
.play-btn{width:72px;height:72px;border-radius:50%;background:var(--gold-gradient);background-size:250% auto;animation:shimmer 4s linear infinite;display:flex;align-items:center;justify-content:center}
.play-btn svg{width:28px;height:28px;fill:var(--navy);margin-left:4px}
.video-placeholder-text{color:rgba(255,255,255,.6);font-size:.85rem;letter-spacing:.1em;text-transform:uppercase}

/* ─── DOLOR ─── */
.section-dolor{background:var(--white);padding:clamp(48px,8vw,90px) clamp(20px,5vw,80px)}
.section-dolor .inner{max-width:760px;margin:0 auto}
.section-label{font-size:.7rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:14px;text-align:center}
.section-title{font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,4.5vw,3rem);color:var(--text-dark);text-align:center;margin-bottom:48px;line-height:1.15}
.dolor-list{display:flex;flex-direction:column;gap:16px}
.dolor-item{display:flex;align-items:flex-start;gap:16px;padding:20px 24px;background:var(--off-white);border-left:3px solid var(--red);border-radius:0 3px 3px 0}
.dolor-x{color:var(--red);font-size:1.1rem;font-weight:800;line-height:1;flex-shrink:0;margin-top:2px}
.dolor-text{font-family:'Cormorant Garamond',serif;font-size:clamp(1rem,2.5vw,1.2rem);color:var(--text-dark);font-style:italic;line-height:1.5}
.dolor-sub{font-family:'Montserrat',sans-serif;font-size:.8rem;color:var(--text-mid);font-style:normal;margin-top:4px;display:block}

/* ─── PROMESA ─── */
.section-promesa{background:var(--navy);padding:clamp(48px,8vw,90px) clamp(20px,5vw,80px);text-align:center}
.section-promesa .inner{max-width:700px;margin:0 auto}
.promesa-label{font-size:.7rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:20px}
.promesa-title{font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,4.5vw,3.2rem);color:var(--white);margin-bottom:24px;line-height:1.15}
.promesa-title em{font-style:italic;color:var(--gold)}
.promesa-body{font-size:clamp(.9rem,2.2vw,1.05rem);color:rgba(255,255,255,.75);line-height:1.8;margin-bottom:36px}
.btn-secondary{display:inline-block;border:2px solid var(--gold);color:var(--gold);font-family:'Montserrat',sans-serif;font-size:.85rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:14px 36px;border-radius:3px;text-decoration:none;transition:all .2s;cursor:pointer;background:transparent}
.btn-secondary:hover{background:var(--gold);color:var(--navy)}

/* ─── MÓDULOS ─── */
.section-modulos{background:var(--off-white);padding:clamp(48px,8vw,90px) clamp(20px,5vw,80px)}
.section-modulos .inner{max-width:860px;margin:0 auto}
.modulos-grid{display:flex;flex-direction:column;gap:20px;margin-top:48px}
.modulo-card{display:grid;grid-template-columns:64px 1fr;gap:24px;align-items:start;background:var(--white);padding:28px;border-radius:4px;box-shadow:0 2px 16px rgba(11,28,44,.06)}
.modulo-num{width:64px;height:64px;border-radius:50%;background:var(--gold-gradient);background-size:250% auto;animation:shimmer 4s linear infinite;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:700;color:var(--navy);flex-shrink:0}
.modulo-info h3{font-family:'Montserrat',sans-serif;font-size:.8rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}
.modulo-info h4{font-family:'Cormorant Garamond',serif;font-size:clamp(1.1rem,2.8vw,1.45rem);color:var(--text-dark);margin-bottom:8px;line-height:1.2}
.modulo-info p{font-size:.88rem;color:var(--text-mid);line-height:1.65}

/* ─── AUTORIDAD ─── */
.section-autoridad{background:var(--navy);padding:clamp(48px,8vw,90px) clamp(20px,5vw,80px)}
.section-autoridad .inner{max-width:800px;margin:0 auto;display:grid;grid-template-columns:1fr;gap:40px;align-items:center}
.autoridad-text .section-label{text-align:left}
.autoridad-text h2{font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,4.5vw,3rem);color:var(--white);margin-bottom:20px;line-height:1.15}
.autoridad-text h2 em{font-style:italic;color:var(--gold)}
.autoridad-body{font-size:clamp(.88rem,2vw,1rem);color:rgba(255,255,255,.75);line-height:1.8;margin-bottom:24px}
.autoridad-badges{display:flex;flex-wrap:wrap;gap:12px;margin-top:8px}
.badge{background:rgba(201,168,76,.12);border:1px solid rgba(201,168,76,.3);color:var(--gold);font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:7px 14px;border-radius:2px}
.autoridad-photo{background:var(--navy-light);border-radius:4px;overflow:hidden;aspect-ratio:4/3;display:flex;align-items:center;justify-content:center}
.photo-placeholder{text-align:center;padding:40px 20px}
.photo-placeholder svg{width:80px;height:80px;fill:rgba(201,168,76,.3);margin-bottom:16px}
.photo-placeholder p{font-size:.75rem;color:rgba(255,255,255,.35);letter-spacing:.1em;text-transform:uppercase;line-height:1.6}

/* ─── CASOS ─── */
.section-casos{background:var(--white);padding:clamp(48px,8vw,90px) clamp(20px,5vw,80px)}
.section-casos .inner{max-width:860px;margin:0 auto}
.casos-grid{display:flex;flex-direction:column;gap:20px;margin-top:48px}
.caso-card{background:var(--off-white);border-radius:4px;padding:28px 28px 24px;border-bottom:3px solid var(--gold);position:relative;overflow:hidden}
.caso-card::before{content:'"';position:absolute;top:-8px;right:20px;font-family:'Cormorant Garamond',serif;font-size:8rem;color:rgba(201,168,76,.1);line-height:1;pointer-events:none}
.caso-header{display:flex;align-items:center;gap:16px;margin-bottom:16px}
.caso-avatar{width:48px;height:48px;border-radius:50%;background:var(--gold-gradient);background-size:250% auto;animation:shimmer 4s linear infinite;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:700;color:var(--navy);flex-shrink:0}
.caso-meta h4{font-size:.85rem;font-weight:700;color:var(--text-dark);margin-bottom:2px}
.caso-meta span{font-size:.72rem;color:var(--text-mid);letter-spacing:.08em;text-transform:uppercase}
.caso-result{font-family:'Cormorant Garamond',serif;font-size:clamp(1rem,2.8vw,1.2rem);color:var(--text-dark);font-style:italic;line-height:1.6}
.caso-num{display:inline-block;background:var(--gold-gradient);background-size:250% auto;animation:shimmer 4s linear infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:700;font-style:normal;font-size:1.1em}

/* ─── OFERTA ─── */
.section-oferta{background:var(--off-white);padding:clamp(48px,8vw,90px) clamp(20px,5vw,80px)}
.section-oferta .inner{max-width:860px;margin:0 auto}
.oferta-grid{display:grid;grid-template-columns:1fr;gap:24px;margin-top:48px}
.oferta-card{background:var(--white);border-radius:6px;padding:36px 32px;box-shadow:0 4px 24px rgba(11,28,44,.08)}
.oferta-card.featured{background:var(--navy);position:relative;overflow:hidden}
.oferta-card.featured::before{content:'MÁS ELEGIDA';position:absolute;top:18px;right:-28px;background:var(--gold);color:var(--navy);font-size:.6rem;font-weight:800;letter-spacing:.15em;padding:5px 40px;transform:rotate(45deg);transform-origin:center}
.oferta-tag{font-size:.65rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
.oferta-card.featured .oferta-tag{color:var(--gold-light)}
.oferta-nombre{font-family:'Cormorant Garamond',serif;font-size:clamp(1.4rem,3.5vw,2rem);color:var(--text-dark);margin-bottom:8px;font-weight:700}
.oferta-card.featured .oferta-nombre{color:var(--white)}
.oferta-precio{margin:20px 0;display:flex;align-items:baseline;gap:6px}
.precio-cur{font-size:.9rem;font-weight:700;color:var(--gold);margin-top:4px}
.precio-num{font-family:'Cormorant Garamond',serif;font-size:clamp(2.5rem,6vw,3.5rem);font-weight:700;color:var(--gold);line-height:1}
.oferta-includes{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
.oferta-includes li{display:flex;align-items:flex-start;gap:12px;font-size:.88rem;color:var(--text-mid);line-height:1.5}
.oferta-card.featured .oferta-includes li{color:rgba(255,255,255,.75)}
.check-icon{width:18px;height:18px;border-radius:50%;background:var(--green);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.check-icon svg{width:10px;height:10px;fill:white;stroke:none}
.btn-oferta{display:block;text-align:center;text-decoration:none;border-radius:3px;font-family:'Montserrat',sans-serif;font-weight:800;font-size:.9rem;letter-spacing:.05em;text-transform:uppercase;padding:16px 24px;transition:transform .15s,box-shadow .15s;cursor:pointer;border:none}
.btn-oferta:hover{transform:translateY(-2px)}
.btn-oferta.gold{background:var(--gold-gradient);background-size:250% auto;animation:shimmer 4s linear infinite;color:var(--navy);box-shadow:0 4px 20px rgba(201,168,76,.35)}
.btn-oferta.outline{border:2px solid var(--gold);color:var(--gold);background:transparent}
.btn-oferta.outline:hover{background:var(--gold);color:var(--navy)}

/* ─── BONUS ─── */
.section-bonus{background:var(--navy);padding:clamp(36px,6vw,70px) clamp(20px,5vw,80px)}
.section-bonus .inner{max-width:760px;margin:0 auto}
.bonus-list{display:flex;flex-direction:column;gap:14px;margin-top:32px}
.bonus-item{display:flex;align-items:flex-start;gap:16px;padding:18px 22px;background:rgba(255,255,255,.04);border:1px solid rgba(201,168,76,.2);border-radius:3px}
.bonus-icon{font-size:1.4rem;flex-shrink:0;line-height:1;margin-top:2px}
.bonus-info h4{font-size:.85rem;font-weight:700;color:var(--gold-light);margin-bottom:4px}
.bonus-info p{font-size:.8rem;color:rgba(255,255,255,.6);line-height:1.55}

/* ─── FAQ ─── */
.section-faq{background:var(--white);padding:clamp(48px,8vw,90px) clamp(20px,5vw,80px)}
.section-faq .inner{max-width:720px;margin:0 auto}
.faq-list{margin-top:40px;display:flex;flex-direction:column;gap:0}
.faq-item{border-bottom:1px solid rgba(11,28,44,.1)}
.faq-q{width:100%;background:none;border:none;text-align:left;padding:20px 4px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:16px;font-family:'Montserrat',sans-serif;font-size:clamp(.88rem,2vw,1rem);font-weight:600;color:var(--text-dark);transition:color .2s}
.faq-q:hover{color:var(--gold)}
.faq-q.open{color:var(--gold)}
.faq-icon{flex-shrink:0;width:22px;height:22px;border-radius:50%;border:1.5px solid currentColor;display:flex;align-items:center;justify-content:center;font-size:.9rem;transition:transform .25s}
.faq-q.open .faq-icon{transform:rotate(45deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height .35s ease,padding .25s}
.faq-a.open{max-height:300px;padding-bottom:20px}
.faq-a p{font-family:'Cormorant Garamond',serif;font-size:clamp(1rem,2.5vw,1.1rem);color:var(--text-mid);line-height:1.8;font-style:italic;padding:0 4px}

/* ─── CTA FINAL ─── */
.section-cta-final{background:var(--navy);padding:clamp(56px,9vw,100px) clamp(20px,5vw,80px);text-align:center;position:relative;overflow:hidden}
.section-cta-final::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 100%,rgba(201,168,76,.12) 0%,transparent 70%);pointer-events:none}
.section-cta-final .inner{position:relative;max-width:680px;margin:0 auto}
.cta-final-title{font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,5vw,3.5rem);color:var(--white);margin-bottom:20px;line-height:1.1}
.cta-final-title em{font-style:italic;color:var(--gold)}
.cta-final-sub{font-size:clamp(.88rem,2vw,1rem);color:rgba(255,255,255,.65);max-width:540px;margin:0 auto 40px;line-height:1.75}
.btn-cta-final{display:inline-block;background:var(--gold-gradient);background-size:250% auto;animation:shimmer 4s linear infinite;color:var(--navy);font-family:'Montserrat',sans-serif;font-size:clamp(.9rem,2vw,1.05rem);font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:20px 48px;border-radius:3px;text-decoration:none;cursor:pointer;border:none;width:100%;max-width:440px;box-shadow:0 8px 40px rgba(201,168,76,.3);transition:transform .15s}
.btn-cta-final:hover{transform:translateY(-2px)}
.cta-final-note{margin-top:18px;font-size:.75rem;color:rgba(255,255,255,.35);letter-spacing:.06em}

/* ─── FOOTER ─── */
footer{background:var(--navy-mid);border-top:1px solid rgba(201,168,76,.15);padding:28px 24px;text-align:center}
.footer-logo{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
footer p{font-size:.72rem;color:rgba(255,255,255,.3);letter-spacing:.05em}
footer a{color:rgba(255,255,255,.4);text-decoration:none}
footer a:hover{color:var(--gold)}

/* ─── STICKY CTA MOBILE ─── */
.sticky-cta{position:fixed;bottom:0;left:0;right:0;background:var(--navy);border-top:1px solid rgba(201,168,76,.25);padding:12px 16px;z-index:100;display:none;box-shadow:0 -4px 24px rgba(0,0,0,.3)}
.sticky-cta a{display:block;background:var(--gold-gradient);background-size:250% auto;animation:shimmer 4s linear infinite;color:var(--navy);font-family:'Montserrat',sans-serif;font-size:.85rem;font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:15px;border-radius:3px;text-decoration:none;text-align:center}

/* ─── SEPARADOR DORADO ─── */
.gold-rule{height:1px;background:linear-gradient(90deg,transparent,var(--gold) 30%,var(--gold-light) 50%,var(--gold) 70%,transparent);margin:0 auto;max-width:240px;border:none;opacity:.5}

/* ─── DESKTOP ─── */
@media(min-width:768px){
  .oferta-grid{grid-template-columns:1fr 1fr}
  .section-autoridad .inner{grid-template-columns:1fr 1fr}
  .casos-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
  .modulos-grid{gap:16px}
}
@media(min-width:992px){
  .oferta-grid{gap:32px}
}






Academia Grupo Elite · Bienes Raíces





Sistema de formación inmobiliaria

El problema no sos vos.
Es que nadie te enseñó el sistema.

5 módulos, acompañamiento real y los resultados que no llegaron solos — esta vez con un mapa.

Quiero el sistema — elegir mi opción

Curso desde U$D 400 · Mentoría 1 a 1 desde U$D 1000


    


      12
      Años en el rubro
    


    


      50
      Asesores en el equipo
    


    


      +$10M
      En carteras activas
    


    


      N°1
      Coldwell Banker CABA
    






    

Mirá antes de leer


    

Todo lo que nadie te dijo
cuando entraste al Real Estate


    


      
      


        


          
        


        

Insertar video del VSL aquí


      


    






    

Reconocete en algo de esto


    

¿Te suena familiar?


    


      


        ✗
        


          

Prospectás todos los días y el propietario siempre te dice que no


          Llamadas, mensajes, timbre tocado — y la puerta cerrada igual.
        


      


      


        ✗
        


          

Llegás al prelisting y las objeciones te dejan sin respuesta


          "La tasación está alta", "voy a pensar", "tengo otra inmobiliaria más barata" — y no sabés qué decir.
        


      


      


        ✗
        


          

Trabajás semanas enteras sin cobrar un peso


          Comisión que no aparece, incertidumbre constante, el mes que no cierra.
        


      


      


        ✗
        


          

No tenés cartera armada ni sabés cómo construirla


          Ves a otros asesores captando propiedades y no entendés por qué a vos no te sale.
        


      


      


        ✗
        


          

Tenés ganas, energía y disposición — y aun así los resultados no llegan


          Y entonces empezás a pensar que el problema sos vos. Spoiler: no lo sos.
        


      


    






    

La causa real


    

El problema no es el mercado.
Es que nadie te enseñó el sistema.


    


      Nadie te dio los guiones correctos para hablar con un propietario sin sonar vendedor.

      Nadie te mostró cómo armar un ACM que realmente convenza.

      Nadie te explicó cómo hacer una captación profesional ni cómo cerrar una reserva.

      Nadie te dijo cómo construir tu marca personal para que los clientes vengan a buscarte a vos.


      Eso no es un problema de actitud. Es un problema de herramientas. Y eso tiene solución.
    


    Ver las opciones de formación






    

El método


    

5 módulos.
Un sistema completo.


    


      


        

1


        


          

Módulo 1


          

La mentalidad del asesor exitoso


          

Trabajo de identidad, eliminación de excusas y construcción de disciplina. Porque si tu cabeza no está bien parada, ninguna técnica te sirve.


        


      


      


        

2


        


          

Módulo 2


          

Prospección que funciona


          

Cómo activar tu base de contactos, guiones exactos para llamar a propietarios sin sonar vendedor y sistema de seguimiento para que ningún contacto se enfríe.


        


      


      


        

3


        


          

Módulo 3


          

Captación profesional


          

Armado del ACM que convence, prelisting profesional y manejo de las objeciones típicas del propietario. De frente, sin rodeos.


        


      


      


        

4


        


          

Módulo 4


          

Marca personal


          

Por qué la gente compra personas y no inmobiliarias. Cómo grabar contenido aunque te dé vergüenza y cómo captar clientes a través de redes sociales.


        


      


      


        

5


        


          

Módulo 5


          

Ventas, negociación y cierre


          

Cómo mostrar una propiedad, cómo negociar, cómo cerrar la reserva y cómo hacer la postventa para generar referidos que te traigan más operaciones.


        


      


    






    


      

Quién te enseña


      

Adriana construyó esto
desde adentro del rubro.


      


        Llegué al mundo inmobiliario hace 12 años. Venía de la gastronomía — nada que ver.
        Empecé sin contactos, sin red, sin saber nada del mercado. Fui asesora durante 10 años.
        Cometí todos los errores que se pueden cometer y fui construyendo, de a poco, un sistema que funcionaba.
        Un sistema que nadie me enseñó.
        


        Hace dos años fundé Grupo Elite Bienes Raíces, nuestra oficina en Puerto Madero bajo el sistema Coldwell Banker.
        Hoy lidero un equipo de 50 personas.
        


        La Academia la armé con todo lo que a mí me hubiera gustado tener cuando empecé.
        No es teoría. Es el sistema que yo apliqué y que aplica cada asesor de mi equipo.
      


      


        12 años en Real Estate
        Broker Coldwell Banker
        50 asesores
        Puerto Madero
      


    


    


      
      


        
        

Insertar foto
de Adriana aquí


      


    






    

Resultados reales


    

Perfiles distintos.
El mismo sistema.


    


      


        


          

V.M.


          


            

V.M.


            Maestra jardinera → Real Estate
          


        


        

De cero a $1M en cartera operativa en un año de sumarse al sistema.


      


      


        


          

I.T.


          


            

I.T.


            Empezó con 18 años
          


        


        

Hoy tiene 21 años, $4M en cartera, su propio equipo y es N°1 Coldwell Banker CABA 2025.


      


      


        


          

M.A.


          


            

M.A.


            Productora de seguros · 20 años
          


        


        

Hoy tiene cartera de ~$4M e ingresos de $10K por mes en Real Estate.


      


      


        


          

G.T.


          


            

G.T.


            Relación de dependencia · 20+ años
          


        


        

Hoy vive 100% del Real Estate con una cartera de $1.5M. Dejó la dependencia para siempre.


      


      


        


          

C.B.


          


            

C.B.


            Gerente bancario · 30 años
          


        


        

Cambió el banco por el Real Estate. Hoy genera $5K mensuales viviendo de esto.


      


      


        


          

S.V.


          


            

S.V.


            Productora de seguros · 25 años
          


        


        

Un año y medio en Grupo Elite: $2M en cartera, $7K de ingreso mensual.


      


    






    

Elegí tu opción


    

Dos caminos.
Un mismo sistema.


    



      
      


        

Opción 1


        

Curso Pregrabado


        


          U$D
          400
        


        


          

5 módulos completos en video


          

IA entrenada para responder tus dudas 24/7


          

+50 scripts de WhatsApp listos para usar


          

Manual de captación de Grupo Elite


          

20 preguntas para prelisting y prebuying


          

Planilla de KPIs


          

Prompts de IA para asesores


          

Calendario de prospección de 90 días


          

Comunidad Skool y TikTok


        


        Quiero el curso pregrabado
      



      
      


        

Opción 2 — La más completa


        

Mentoría 1 a 1
+ Grupo Elite


        


          U$D
          1000
        


        


          

Todo lo del curso pregrabado


          

Clase semanal en vivo 1 a 1 con Adriana


          

Soporte directo 24/7 con Adriana


          

Acceso a sumarte a Grupo Elite Bienes Raíces


          

Oficina real en Puerto Madero


          

Estructura Coldwell Banker desde el día 1


          

Casos reales, operaciones reales, equipo real


        


        Quiero la mentoría + Grupo Elite
      


    






    

Incluido en ambas opciones


    

Herramientas listas
para usar desde el día 1


    


      


        📋
        


          

+50 Scripts de WhatsApp


          

Guiones listos para prospectar, hacer seguimiento y cerrar — sin improvisar.


        


      


      


        🏠
        


          

Manual de Captación de Grupo Elite


          

El mismo manual que usa el equipo de 50 asesores en la oficina.


        


      


      


        🤖
        


          

Prompts de IA para asesores


          

IA entrenada para responder tus dudas 24/7 y prompts específicos para el rubro.


        


      


      


        📅
        


          

Calendario de prospección de 90 días


          

Qué hacer cada día para construir cartera de forma consistente y sin improvisación.


        


      


    






    

Preguntas frecuentes


    

Lo que seguro
estás pensando


    


      


        
          ¿Sirve si vengo de otro rubro y no sé nada de inmobiliaria?
          +
        
        


          

Sí. VM era maestra jardinera. MA trabajó en seguros 20 años. CB fue gerente de banco durante 30. El sistema está diseñado para que no necesites experiencia previa — necesitás disposición y seguir el proceso.


        


      


      


        
          ¿Cuánto tiempo tarda en verse resultados?
          +
        
        


          

Depende de cuánto trabajás el sistema. Los asesores más aplicados del equipo tuvieron sus primeras captaciones en las primeras semanas. Los que tardaron más fueron los que aplicaron de forma intermitente. El sistema funciona — el resultado depende de la consistencia.


        


      


      


        
          ¿Cuál es la diferencia entre el curso y la mentoría?
          +
        
        


          

El curso son los 5 módulos pregrabados más todas las herramientas: para quien quiere aprender el sistema a su ritmo. La mentoría suma una clase semanal 1 a 1, soporte directo con Adriana 24/7 y la posibilidad de sumarse al equipo de Grupo Elite con estructura y operaciones reales.


        


      


      


        
          ¿Qué es Grupo Elite y para qué sirve sumarse?
          +
        
        


          

Grupo Elite Bienes Raíces es una inmobiliaria real con oficina física en Puerto Madero, Rosario Vera Peñaloza 545, trabajando bajo el sistema Coldwell Banker. Sumarse significa tener estructura, liderazgo y un equipo de 50 personas desde el día uno — sin construir todo de cero solo.


        


      


      


        
          ¿Tengo que sumarme a Grupo Elite si compro la mentoría?
          +
        
        


          

No es obligatorio. La Academia es un producto de formación independiente: podés trabajar en cualquier inmobiliaria o de forma independiente. La opción de sumarse a Grupo Elite existe si es lo que querés — es una puerta abierta, no una condición.


        


      


      


        
          ¿Cómo accedo al contenido?
          +
        
        


          

Apenas confirmes tu inscripción recibís acceso a la plataforma donde están los 5 módulos, todos los materiales y la comunidad. El acceso es inmediato — no tenés que esperar para empezar.


        


      


    






    

El camino que yo hice a los tropiezos,
vos lo podés hacer con un mapa.


    

Cada semana que pasa sin un sistema es una semana más sin resultados. Elegí tu opción y empezamos.


    Quiero el sistema — elegir mi opción
    

Curso desde U$D 400 · Mentoría + Grupo Elite desde U$D 1000





Academia Grupo Elite

© 2025 Grupo Elite Bienes Raíces · Puerto Madero, Buenos Aires · Términos y condiciones





Quiero el sistema — elegir mi opción

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://grupoelitebienesraices.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2e866d1c-d206-471f-ac2b-ff436ecf7766).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

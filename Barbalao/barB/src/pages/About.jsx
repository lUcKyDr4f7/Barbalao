import styles from '../Components/Css/styles.AboutUs.module.css';
import Footer from '../Components/Footer/Footer.jsx';
// ADICIONADO: ícones do Phosphor
import { Phone, EnvelopeSimple, MapPin, CreditCard, QrCode, Bank, WhatsappLogo } from 'phosphor-react';
import NavB from '../Components/NavBar/navB.jsx';

export default function About() {
  // Define a cor principal dos ícones
  const iconColor = "var(--primary)";
  const iconSize = 24;

  return (
    <>
    <NavB />
    <main className={styles.main}>
      <div className={styles.banner}>
          <h1 className={styles.bannerTitle}>Conheça o Barbalao</h1>
          <h2 className={styles.bannerSubtitle}>Onde cada encontro se torna uma celebração.</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <section>
            <h2 className={styles.sectionTitle}>Sobre Nós</h2>
            <p className={styles.text}>
              Bem-vindo ao Barbalao, um refúgio acolhedor onde a tradição encontra a modernidade. Nascido da paixão por boa comida, drinks excepcionais e momentos memoráveis, nosso bar é o lugar perfeito para relaxar após um longo dia, celebrar com amigos ou simplesmente desfrutar de uma noite agradável. Nossa missão é oferecer uma experiência única, com um ambiente charmoso e um serviço que faz você se sentir em casa.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Contato e Localização</h2>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  {/* <Phone size={iconSize} color={iconColor} /> */}
                  <i className="ri-phone-line"></i>
                  <a href="tel:+551938241552">+55 (19) 3824-1552</a>
                </div>
                <div className={styles.infoItem}>
                  {/* <WhatsappLogo size={iconSize} color={iconColor} /> */}
                  <i className="ri-whatsapp-line"></i>
                  <a href="https://wa.me/5519996829711">+55 (19) 99682-9711</a>
                </div>
                <div className={styles.infoItem}>
                  <i className="ri-instagram-line"></i>
                  <a href="https://www.instagram.com/bar_balao/">@bar_balao</a>
                </div>
                {/* <div className={styles.infoItem}>
                  <EnvelopeSimple size={iconSize} color={iconColor} />
                  <a href="mailto:contato@barbalao.com.br">contato@barbalao.com.br</a>
                </div> */}
                <div className={styles.infoItem}>
                  {/* <MapPin size={iconSize} color={iconColor} /> */}
                  <i className="ri-map-pin-line"></i>
                  <a href='https://maps.app.goo.gl/PCSxzWYZ3xowP3ZN8'>Praça José Luiz Leme Maciel, 8 - Centro, Águas de Lindóia - SP</a>
                </div>
              </div>
              <div className={styles.mapImage}>
                <iframe
                  title="Mapa do Bar Balão"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d548.0429202349379!2d-46.63260457876813!3d-22.474952138884916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c910534f7df6f7%3A0xe4a2e7990e117ed7!2sBar%20Bal%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1762987739029!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Formas de Pagamento</h2>
            <div className={styles.paymentMethods}>
              <div className={styles.paymentItem}>
                {/* ÍCONE SUBSTITUÍDO */}
                <CreditCard size={iconSize} color={iconColor} />
                <span>Cartões de Crédito/Débito</span>
              </div>
              <div className={styles.paymentItem}>
                {/* ÍCONE SUBSTITUÍDO */}
                <QrCode size={iconSize} color={iconColor} />
                <span>PIX</span>
              </div>
              <div className={styles.paymentItem}>
                {/* ÍCONE SUBSTITUÍDO */}
                <Bank size={iconSize} color={iconColor} />
                <span>Dinheiro</span>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar (Horários) */}
        <aside className={styles.sidebar}>
          <div className={styles.stickySidebar}>
            <h3 className={styles.sidebarTitle}>Horários de Atendimento</h3>
            <ul className={styles.scheduleList}>
              <li>
                <span>Segunda - Sábado</span>
                <span className={styles.time}>08:00 - 00:00</span>
              </li>
              <hr />
              <li>
                <span>Domingo</span>
                <span className={styles.time}>10:00 - 00:00</span>
              </li>
              <hr />
              <li>
                <span>Delivery</span>
                <span className={styles.time}>19:00 - 23:00</span>
              </li>
              {/* <li className={styles.scheduleHighlight}>
                <span>Feriados</span>
                <span className={styles.time}>Consulte-nos</span>
              </li> */}
            </ul>
          </div>
        </aside>
      </div>
      <Footer />
    </main>
    </>
  );
};

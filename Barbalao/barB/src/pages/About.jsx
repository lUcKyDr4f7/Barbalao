import styles from './styles.AboutUs.module.css';
import Footer from '../Components/Footer/Footer.jsx';
// ADICIONADO: ícones do Phosphor
import { Phone, EnvelopeSimple, MapPin, CreditCard, QrCode, Bank } from 'phosphor-react';
import NavB from '../Components/NavBar/navB.jsx';

export default function About() {
  // Define a cor principal dos ícones
  const iconColor = "var(--primary)";
  const iconSize = 24;

  return (
    <main className={styles.main}>
      <NavB />

      <div className={styles.container}>
        <section className="@container">
          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <h1 className={styles.bannerTitle}>Conheça o Barbalao</h1>
              <h2 className={styles.bannerSubtitle}>
                Onde cada encontro se torna uma celebração.
              </h2>
            </div>
          </div>
        </section>

        <div className={styles.gridContainer}>
          {/* Coluna Principal (Conteúdo) */}
          <div className={styles.mainContent}>
            <section>
              <h2 className={styles.sectionTitle}>Sobre o Bar</h2>
              <p className={styles.text}>
                Bem-vindo ao Barbalao, um refúgio acolhedor onde a tradição encontra a modernidade. Nascido da paixão por boa comida, drinks excepcionais e momentos memoráveis, nosso bar é o lugar perfeito para relaxar após um longo dia, celebrar com amigos ou simplesmente desfrutar de uma noite agradável. Nossa missão é oferecer uma experiência única, com um ambiente charmoso e um serviço que faz você se sentir em casa.
              </p>
            </section>

            <section>
              <h2 className={styles.sectionTitle}>Contato e Localização</h2>
              <div className={styles.contactGrid}>
                <div className={styles.contactInfo}>
                  <div className={styles.infoItem}>
                    {/* ÍCONE SUBSTITUÍDO */}
                    <Phone size={iconSize} color={iconColor} />
                    <a href="tel:+5511999998888">(11) 99999-8888</a>
                  </div>
                  <div className={styles.infoItem}>
                    {/* ÍCONE SUBSTITUÍDO */}
                    <EnvelopeSimple size={iconSize} color={iconColor} />
                    <a href="mailto:contato@barbalao.com.br">contato@barbalao.com.br</a>
                  </div>
                  <div className={styles.infoItem}>
                    {/* ÍCONE SUBSTITUÍDO */}
                    <MapPin size={iconSize} color={iconColor} />
                    <p>Rua Fictícia, 123 - Vila Madalena, São Paulo - SP</p>
                  </div>
                </div>
                <div className={styles.mapImage}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo7YT551DKCycADKpPgXOUWMcR6JuCT7c5h_pF9DEHSTrXgO1AVQ0OUI1NmL3aGNuYp3VbRa5RZmDV8xNagjfPSFaZQCfxOMijAbmt_CiVqVwFxORTSPirFWUl9xx0g7p48XWySQNDErtFYbgnUyJgewKDW7xF7K6kldV9gIQJdKlzp1wzO5kpZKZ5PKKFVjFjXgt3ikydaQIGC6Ov0g79O4JKk7cZ4HRf0mZbjTthZE3lxuyI-fJtsrihodoe8-f23Z3Du6u_0g"
                    alt="Mapa da localização"
                  />
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
                  <span>Segunda - Quinta</span>
                  <span className={styles.time}>18:00 - 00:00</span>
                </li>
                <li>
                  <span>Sexta</span>
                  <span className={styles.time}>18:00 - 02:00</span>
                </li>
                <li>
                  <span>Sábado</span>
                  <span className={styles.time}>12:00 - 02:00</span>
                </li>
                <li>
                  <span>Domingo</span>
                  <span className={styles.time}>12:00 - 23:00</span>
                </li>
                <li className={styles.scheduleHighlight}>
                  <span>Feriados</span>
                  <span className={styles.time}>Consulte-nos</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
};

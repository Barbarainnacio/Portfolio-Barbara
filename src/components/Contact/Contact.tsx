export function Contact() {
  return (
    <section id="contact">
      <h2>Contact.</h2>
      <p>Entre em contato!</p>

      <div className="contact-container">
        {/* Cartões de informações diretas */}
        <div className="contact-info">
          <div className="info-card">
            <p>Email</p>
            <a href="mailto:seu-email@exemplo.com">seu-email@exemplo.com</a>
          </div>
          <div className="info-card">
            <p>GitHub</p>
            <a href="https://github.com" target="_blank" rel="noreferrer">github.com/seu-usuario</a>
          </div>
        </div>

        {/* Formulário de mensagem */}
        <form className="contact-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" rows={4} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
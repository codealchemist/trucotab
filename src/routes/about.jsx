import pkg from "../../package.json"

export default function About() {
  return (
    <section>
      <p>Hola! Estás usando TrucoTab <span className="version-pill">v{pkg.version}</span>.</p>
      <p>Un marcador de truco open source por siempre gratuito y sin publicidad 💪</p>
      <p>Porque lo que importa es jugar al truco y que no te rompan las bolas!</p>
      <br />
      <p>A disfrutar con amigos! Chau!</p>
      <p>--</p>
      <p>
        Bert <a href="mailto:b3rt.js@gmail.com">b3rt.js@gmail.com</a>
      </p>
    </section>
  )
}
 

import HeaderInternal from "../HeaderInterna";
import Avatar from "../Avatar";
import SocialMedia from "../SocialMedia";
import "./styles.css";

function AboutPage() {
  return (
    <section className="about-page">
      <HeaderInternal />
      <dl className="profile">
        <Avatar />
        <dt className="name">Buck Winster</dt>
        <dd className="description">
          Migrei de tecnico de rede pleno para desenvolvedor Web
        </dd>
        <SocialMedia />
      </dl>
    </section>
  );
}

export default AboutPage;

import Avatar from "../Avatar";
import Description from "../Description";
import Header from "../Header";
import Name from "../Name";
import "./styles.css";

function ProfilePage() {
  return (
    <section className="profile-page">
      <Header active="-active" />
      <section className="profile">
        <Avatar />
        <Name>Buck Winster</Name>
        <Description>
          Migrei de tecnico de rede pleno para desenvolvedor Web
        </Description>
      </section>
    </section>
  );
}

export default ProfilePage;

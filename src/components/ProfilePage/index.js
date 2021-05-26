import Avatar from "../Avatar";
import Header from "../Header";
import "./styles.css";

function ProfilePage() {
  return (
    <section className="profile-page">
      <Header active="-active" />
      <section className="profile">
        <Avatar />
      </section>
    </section>
  );
}

export default ProfilePage;

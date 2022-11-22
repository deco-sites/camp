import Layout from "$camp/components/Layout.tsx";
import CommentsSection from "../components/comments/CommentsSection.tsx";
import Footer from "../components/footer/Footer.tsx";
import Header from "../components/header/Header.tsx";
import MentorSection from "../components/mentorSection/MentorSection.tsx";
import RegistrationFormSection from "../components/registrationForm/RegistrationFormSection.tsx";
import Steps from "../components/steps/Steps.tsx";

export default function test() {
  return (
    <div>
      <Header />
      <div class="px-10">
        <Steps />
        <MentorSection />
        <CommentsSection />
        <RegistrationFormSection />
      </div>
      <div class="mt-10">
        <Footer />
      </div>
    </div>
  );
}

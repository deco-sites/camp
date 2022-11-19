import Layout from "$camp/components/Layout.tsx";
import Header from "../components/header/Header.tsx";
import MentorSection from "../components/mentorSection/MentorSection.tsx";
import NavBar from "../components/NavBar.tsx";
import Steps from "../components/steps/Steps.tsx";

export default function test() {
  return (
    <div>
      <Header />
      <Steps />
      <MentorSection />
    </div>
  );
}

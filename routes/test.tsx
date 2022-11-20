import Layout from "$camp/components/Layout.tsx";
import CommentsSection from "../components/comments/CommentsSection.tsx";
import Header from "../components/header/Header.tsx";
import MentorSection from "../components/mentorSection/MentorSection.tsx";
import Steps from "../components/steps/Steps.tsx";

export default function test() {
  return (
    <div>
      <Header />
      <div class="px-10">
        <Steps />
        <MentorSection />
      </div>
      <CommentsSection />
    </div>
  );
}

import CommentsSection from "../components/comments/CommentsSection.tsx";
import Footer from "../components/footer/Footer.tsx";
import Header from "../components/header/Header.tsx";
import MentorSection from "../islands/test.tsx";
import RegistrationFormSection from "../components/registrationForm/RegistrationFormSection.tsx";
import Steps from "../components/steps/Steps.tsx";
import LiveAnalytics from "$live/components/LiveAnalytics.tsx";
import type { PageProps } from "$fresh/server.ts";

function Page(_props: PageProps<undefined>) {
  return (
    <>
      {/* Tracks users who enters this page */}
      <LiveAnalytics path="/" />

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
    </>
  );
}

export default Page;

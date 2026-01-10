import InterviewForm from "@/components/InterviewForm";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <section className="interview-creation-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-icon">🎯</span>
          Generate Mock Interview
        </h2>
        <div className="section-line"></div>
      </div>

      <InterviewForm userName={user.name} userId={user.id} />
    </section>
  );
};

export default Page;
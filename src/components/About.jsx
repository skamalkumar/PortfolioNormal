import aboutSvg from "../project-assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article className="py-20 mx-auto max-w-7xl px-8">
          <SectionTitle text="profile" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm S. Kamal Kumar, a seasoned professional with extensive
            experience in web development and data analysis. With postgraduation
            in investment and undergraduation in Computer Science, I've
            specialized in fintech, particularly as a web developer using
            various frontend and backend technologies as well as conducting data
            analysis with Python. Presently, I'm leveraging my expertise as a
            Technical Specialist at Lloyds Banking Group(Leeds), where I apply
            my skills to deliver innovative solutions and drive organizational
            success through continuous learning and collaboration.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;

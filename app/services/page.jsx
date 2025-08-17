import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    desc: "Building scalable, responsive websites and web applications using Django, Flask, React, and Next.js.",
    link: "/services/fullstack",
  },
  {
    num: "02",
    title: "Python Automation",
    desc: "Automating workflows, web scraping, and custom bots using Python, Selenium, and BeautifulSoup.",
    link: "/services/automation",
  },
  {
    num: "03",
    title: "Data Analysis & Visualization",
    desc: "Transforming raw data into insights with Pandas, NumPy, Matplotlib, and Plotly.",
    link: "/services/data-ml",
  },
  {
    num: "04",
    title: "Backend Development",
    desc: "Designing robust APIs, database schemas, and server-side applications with Django, Flask, Express, and PostgreSQL.",
    link: "/services/backend",
  },
  {
    num: "05",
    title: "Frontend Development",
    desc: "Creating modern, user-friendly, and responsive UIs with React, Next.js, Tailwind CSS, and TypeScript.",
    link: "/services/frontend",
  },
];

const Services = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#232329] p-8 rounded-xl relative overflow-hidden"
            >
              <div className="text-5xl text-accent font-bold mb-4">
                {service.num}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/60 mb-6">{service.desc}</p>
              <Link
                href={service.link}
                className="flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300"
              >
                <span>Learn more</span>
                <BsArrowDownRight className="text-xl" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

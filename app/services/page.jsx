import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Flask API Development",
    desc: "Building secure and scalable REST APIs using Flask, SQLAlchemy, JWT authentication, and MySQL.",
    link: "/services/fullstack",
  },
  {
    num: "02",
    title: "Full-Stack Web Applications",
    desc: "Developing end-to-end web applications with Python/Flask backend and React frontend for real use cases.",
    link: "/services/automation",
  },
  {
    num: "03",
    title: "Database Design & Optimization",
    desc: "Designing relational schemas for users, orders, reservations, complaints, and operational workflows using SQL.",
    link: "/services/data-ml",
  },
  {
    num: "04",
    title: "Dashboard & Analytics",
    desc: "Creating actionable dashboards using Power BI and Streamlit to visualize trends, KPIs, and business performance.",
    link: "/services/backend",
  },
  {
    num: "05",
    title: "Problem Solving & DSA",
    desc: "Applying strong Data Structures and Algorithms fundamentals (125+ LeetCode problems solved) to build efficient solutions.",
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

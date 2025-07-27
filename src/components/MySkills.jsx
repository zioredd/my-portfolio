import React from "react";
import Overlay from "./Overlay";
import { TranslationContext } from "../App";
import { Check } from "lucide-react";

const Skills = () => {
  const t = React.useContext(TranslationContext);

  const leftSkills = [
    { name: "HTML5, CSS3 (Flexbox, Grid, Animations)", level: 95 },
    { name: "JavaScript (ES6+, DOM Manipulation, Async/Await)", level: 90 },
    { name: "React.js (Hooks, Context API, Redux)", level: 85 },
    { name: "Next.js (SSR, Static Site Generation, API Routes)", level: 75 },
    { name: "Tailwind CSS (Utility-First, Responsive Design)", level: 90 },
  ];

  const rightSkills = [
    { name: "Node.js (Event Loop, Streams, Clusters)", level: 70 },
    { name: "Express.js (RESTful APIs, Middleware)", level: 88 },
    { name: "NestJS (Modular Architecture, Microservices)", level: 92 },
    { name: "TypeScript (Type Safety, Generics, Decorators)", level: 80 },
    { name: "MuleSoft (API Design, Integration)", level: 78 },
  ];

  return (
    <>
      <section className="flex flex-col">
        <div className="bg-[#00211B] py-20">
          <div className="flex flex-col w-[80vw] mx-auto min-h-[70vh] items-center justify-between">
            <h3 className="text-[#B0A47F] text-[3em] avenir font-bold mb-12 w-full">
              {t("skills")}
            </h3>
            <div className="w-full items-between flex flex-col">
              {/* Top row: Frontend & Backend */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 w-full mb-12">
                {[leftSkills, rightSkills].map((column, i) => (
                  <div key={i} className="space-y-4">
                    <div className="mb-4">
                      <span className="text-[#b0a47f] text-lg font-semibold tracking-wide">
                        {i === 0 ? "Frontend Development" : "Backend & APIs"}
                      </span>
                    </div>
                    {column.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-4">
                          <Check size={18} className="text-[#c1ab81] mr-1" />
                          <span className="text-[#c1ab81] font-medium">
                            {skill.name}
                          </span>
                          <div className="w-32 min-w-[80px] h-1 bg-[#c1ab81]/20 rounded-full ml-2 relative">
                            <div
                              className="h-1 bg-[#c1ab81] rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                            <span className="absolute right-0 -top-5 text-xs font-semibold text-[#c1ab81]">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {/* Bottom row: Databases & DevOps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 w-full mt-2">
                {/* Databases column */}
                <div className="space-y-4">
                  <div className="mb-4">
                    <span className="text-[#b0a47f] text-lg font-semibold tracking-wide">
                      Databases
                    </span>
                  </div>
                  {[
                    { name: "PostgreSQL (Schema Design, Indexing)", level: 85 },
                    { name: "MongoDB (Aggregation, Replication)", level: 80 },
                    { name: "MySQL (Joins, Transactions)", level: 78 },
                    { name: "Redis (Caching, Pub/Sub)", level: 75 },
                    { name: "Oracle DB (PL/SQL, Performance)", level: 65 },
                  ].map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex items-center gap-4">
                        <Check size={18} className="text-[#c1ab81] mr-1" />
                        <span className="text-[#c1ab81] font-medium">
                          {skill.name}
                        </span>
                        <div className="w-32 min-w-[80px] h-1 bg-[#c1ab81]/20 rounded-full ml-2 relative">
                          <div
                            className="h-1 bg-[#c1ab81] rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                          <span className="absolute right-0 -top-5 text-xs font-semibold text-[#c1ab81]">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* DevOps & Tools column */}
                <div className="space-y-4">
                  <div className="mb-4">
                    <span className="text-[#b0a47f] text-lg font-semibold tracking-wide">
                      DevOps & Tools
                    </span>
                  </div>
                  {[
                    { name: "Docker (Containers, Compose)", level: 80 },
                    { name: "Kubernetes (Orchestration, Helm)", level: 70 },
                    { name: "Git & GitHub (Branching, Actions)", level: 85 },
                    { name: "Jenkins (CI/CD Pipelines)", level: 75 },
                    { name: "AWS (EC2, S3, Lambda)", level: 60 },
                  ].map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex items-center gap-4">
                        <Check size={18} className="text-[#c1ab81] mr-1" />
                        <span className="text-[#c1ab81] font-medium">
                          {skill.name}
                        </span>
                        <div className="w-32 min-w-[80px] h-1 bg-[#c1ab81]/20 rounded-full ml-2 relative">
                          <div
                            className="h-1 bg-[#c1ab81] rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                          <span className="absolute right-0 -top-5 text-xs font-semibold text-[#c1ab81]">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#B0A47F] min-h-[30vh] md:min-h-0 md:h-[30vh]  w-full flex flex-col md:flex-row">
          <Overlay num="2+" text={t("years")} />
          <Overlay num="20+" text={t("developed")} />
          <Overlay num="15+" text={t("clients")} />
        </div>
      </section>
    </>
  );
};

export default Skills;

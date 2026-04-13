import { Metadata } from 'next';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Kids Web Browser — Case Study',
  description: 'Kids Web Browser case study by Andres Chacon',
};

export default function KidsBrowserPage() {
  return (
    <CaseStudyLayout
      title="Kids Web Browser"
      client="Code Catalyst"
      sector="Educational Tech"
      role="UI Designer & Tester"
      time="3 Months"
      sections={[
        {
          id: 'competitive-analysis',
          title: 'Competitive Analysis',
          content: (
            <>
              <p className="mb-6">
                By fusing strong content filtering with entertaining gamification, the Kids Web Browser aims to give kids ages 6 to 12 a safe online environment. It aims to find a balance between exploring the internet and protecting against dangerous material and online hazards. Additionally, the browser promotes digital literacy by selecting learning materials that are appropriate for the user&apos;s age. Parental controls, an intuitive user interface, and enhanced components to increase engagement are important features.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Objective</h3>
              <p className="mb-6">
                Evaluate existing child-focused web browsers, such as Kiddle and RazKids, to identify their strengths, weaknesses, and areas for improvement. By understanding the current landscape, the goal was to uncover opportunities to design a more innovative, engaging, and secure web browsing experience tailored to children aged 6–12.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Approach</h3>
              <p className="mb-6">
                Our competitive analysis involved a systematic comparison of the key features offered by existing child focused browsers, emphasizing the following areas:
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">User Interface Design</h3>
              <p className="mb-6">
                Examined the visual appeal, intuitiveness, and age appropriateness of the interface. Assessed how well these browsers cater to children&apos;s limited technical proficiency and attention spans.
              </p>
              
              <p className="mb-6">
                <strong>Parental Features:</strong> Evaluated the robustness of parental control mechanisms, including website filtering, screen time management, and activity tracking. Reviewed the ease with which parents could configure and monitor these features.
              </p>
              
              <p className="mb-6">
                <strong>Educational Value:</strong> Analyzed the quality, variety, and accessibility of educational content curated by the browsers.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Findings</h3>
              <p className="mb-6">
                Through this analysis, we identified key strengths and weaknesses in existing child focused browsers:
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Strengths of Existing Tools</h3>
              <p className="mb-6">
                <strong>Basic Content Filtering:</strong> Most tools successfully provided fundamental protection against inappropriate content through pre set filters.
              </p>
              
              <p className="mb-6">
                <strong>Child Safe Search Functionality:</strong> Search engines like KidRex integrated algorithms to deliver safe and age-appropriate results.
              </p>
              
              <p className="mb-6">
                <strong>Simplicity:</strong> Tools like Kiddle were simple to use, ensuring ease of access for children and their parents.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Weaknesses Identified</h3>
              <p className="mb-6">
                <strong>Outdated UI Designs:</strong> The interfaces of many browsers were visually uninspiring and failed to capture children&apos;s attention.
              </p>
              
              <p className="mb-6">
                <strong>Limited Customization Options for Parents:</strong> Existing browsers often lacked advanced parental controls, such as customizable filters, individualized profiles, and detailed usage reports.
              </p>
              
              <p className="mb-6">
                <strong>Content Curation Issues:</strong> Limited and repetitive curated content options often failed to encourage exploration or provide a diverse learning experience.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Impact on Design</h3>
              <p className="mb-6">
                The insights gained from this analysis directly informed the development of our Kids Web Browser:
              </p>
              
              <p className="mb-6">
                <strong>Vibrant and Engaging Design:</strong> Introduced a modern, colorful, and gamified interface to capture children&apos;s attention and maintain their engagement.
              </p>
              
              <p className="mb-6">
                <strong>Advanced Parental Controls:</strong> Provided customizable settings for filtering content, managing screen time, and tracking activity, offering parents greater control and peace of mind.
              </p>
              
              <div className="my-12">
                <Image
                  src="/images/Kids-Web-Browser-Imges/KWB_Swot.png"
                  alt="SWOT Analysis"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </>
          ),
        },
        {
          id: 'interviews-surveys',
          title: 'Interviews & Surveys',
          content: (
            <>
              <p className="mb-6">
                To ensure a user centered approach in the development of our child-safe browser, we conducted a combination of qualitative and quantitative research activities:
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Interviews</h3>
              <p className="mb-6">
                We engaged in one-on-one interviews with 10 parents and 5 educators to gain insights into their concerns about children&apos;s internet usage and their expectations for a child safe browsing solution. These interviews provided in-depth perspectives on the challenges faced by both parents and educators in managing and guiding children&apos;s online experiences.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Surveys</h3>
              <p className="mb-6">
                An online survey was distributed to 20 participants, including parents and educators, to validate the findings from the interviews and gather a broader range of opinions. This survey helped identify key trends and user preferences, ensuring our browser design aligns with the needs of our target audience.
              </p>

              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Key Questions Explored</h3>
              <ul className="list-none mb-6">
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">What are your primary concerns regarding children&apos;s internet usage?</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">What features would you find most valuable in a child-safe browser?</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">How important is it for the browser to promote educational content?</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">What design elements do you think would make the browser engaging and user-friendly for children?</li>
              </ul>

              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Goals</h3>
              <p className="mb-6">
                The insights gathered from interviews and surveys informed specific goals for our child-safe browser: a safe, engaging, and educational experience.
              </p>
              <p className="mb-6">
                <strong>Primary Goal:</strong> To provide a secure and engaging online environment that empowers children to explore safely while giving parents peace of mind through robust parental controls.
              </p>
              <p className="mb-6">
                <strong>Secondary Goals:</strong>
              </p>
              <ul className="list-none mb-6">
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>Simplify Content Filtering and Time Management:</strong> Intuitive tools so parents can set boundaries without compromising the child&apos;s browsing experience.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>Promote Educational Content:</strong> Curate interactive, age-appropriate resources that encourage critical thinking and learning.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>Enhance Engagement Through Child-Friendly Design:</strong> A visually appealing, simple interface that fosters curiosity.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>Ensure Privacy Compliance:</strong> Adhere to laws like COPPA and PIPEDA with transparency and data security.</li>
              </ul>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">User Personas</h3>
              <p className="mb-6">
                User research revealed strong demand for a child-safe browser with educational content and robust parental controls. Specifically, 80% of parents wanted content filtering, 70% of educators prioritized educational resources, and 90% of all participants desired an engaging, intuitive design. These data points shaped personas and empathy maps and informed development focused on safety, learning, and engagement.
              </p>
              
              <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 py-6 my-12">
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Kids-Web-Browser-Imges/6.png"
                    alt="User Persona 1"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Kids-Web-Browser-Imges/7.png"
                    alt="User Persona 2"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Kids-Web-Browser-Imges/8.png"
                    alt="User Persona 3"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Quantitative & Qualitative Data</h3>
              <p className="mb-6">
                To ground the design in real user needs, we collected and analyzed quantitative and qualitative data from surveys and interviews. This helped identify pain points, preferences, and opportunities for improvement.
              </p>
              
              <div className="my-12">
                <Image
                  src="/images/Kids-Web-Browser-Imges/QualitativeandQuantitativeTable_KidsBrowser.png"
                  alt="Quantitative & Qualitative Data"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Purpose & Impact</h3>
              <p className="mb-6">
                This mixed-method approach bridged the gap between user expectations and existing solutions. The data informed key design decisions so the browser delivers robust, customizable filtering; a vibrant, intuitive interface; and tools that support educational growth—combining statistical trends with qualitative insight for a strategy that resonates with parents and children.
              </p>
            </>
          ),
        },
        {
          id: 'project-structure',
          title: 'Project Structure',
          content: (
            <>
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Roadmap</h3>
              <p className="mb-6">
                The roadmap outlines the development process for the child-safe browser, from research and design to testing and deployment.
              </p>
              
              <div className="my-12">
                <Image
                  src="/images/Kids-Web-Browser-Imges/9.png"
                  alt="Roadmap"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Customer Journey Map</h3>
              <p className="mb-6">
                The customer journey map captures key interactions between parents, children, and the browser, from onboarding to daily use.
              </p>
              
              <div className="my-12">
                <Image
                  src="/images/Kids-Web-Browser-Imges/10.png"
                  alt="Customer Journey Map"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Sitemap</h3>
              <p className="mb-6">
                The sitemap defines the browser&apos;s structure, organizing content into categories for children and a parental dashboard for controls and reports.
              </p>
              
              <div className="my-12">
                <Image
                  src="/images/Kids-Web-Browser-Imges/SiteMap.png"
                  alt="Sitemap"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </>
          ),
        },
        {
          id: 'prototyping',
          title: 'Prototyping',
          content: (
            <>
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Low Fidelity Prototype</h3>
              <p className="mb-6">
                The low-fidelity prototypes served as the initial blueprint for the Kids Web Browser, focusing on information architecture, basic navigation, and core functionalities.
              </p>
              
              <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 py-6 my-12">
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Kids-Web-Browser-Imges/Low_Fidelity1.png"
                    alt="Low Fidelity 1"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Kids-Web-Browser-Imges/Low_Fidelity2.png"
                    alt="Low Fidelity 2"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Kids-Web-Browser-Imges/Low_Fidelity3.png"
                    alt="Low Fidelity 3"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">High Fidelity Prototype</h3>
              <p className="mb-6">
                The high-fidelity prototypes built upon the low-fidelity designs, incorporating refined UI elements, branding, colors, and interactivity to enhance usability.
              </p>
              
              <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 py-6 my-12">
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Kids-Web-Browser-Imges/33.png"
                    alt="High Fidelity 1"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Kids-Web-Browser-Imges/EbookLibraryImg.png"
                    alt="High Fidelity 2"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Kids-Web-Browser-Imges/35.png"
                    alt="High Fidelity 3"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">User Testing</h3>
              <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 py-6 my-12">
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Kids-Web-Browser-Imges/32.png"
                    alt="User Testing 1"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Kids-Web-Browser-Imges/38.png"
                    alt="User Testing 2"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </>
          ),
        },
        {
          id: 'conclusion',
          title: 'Conclusion',
          content: (
            <>
              <p className="mb-6">
                The Kids Web Browser is a positive step toward giving kids a fun, safe, and instructive online experience. Although current child-safe browsers offer rudimentary content filtering, they frequently fail to deliver an engaging and interactive experience that strikes a balance between entertainment and education. This project closes that gap through gamification, tailored content, and strong parental controls grounded in research, usability testing, and iteration.
              </p>
              <p className="mb-6">
                A truly kid-friendly experience requires more than protective barriers—it needs an ecosystem that respects curiosity while giving parents peace of mind, balancing security with engagement, education with enjoyment, and freedom with control.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Learning Outcomes</h3>
              <ul className="list-none mb-6">
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>#1 Designing for Children Requires Simplicity and Playfulness:</strong> Balance clarity and engagement so navigation stays intuitive while curiosity is supported through interactive, visually stimulating elements.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>#2 Parental Control Features Must Be Intuitive Yet Powerful:</strong> Oversight tools must be comprehensive without overwhelming complexity—clear flows and an accessible interface matter.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>#3 Research and Testing with Children and Parents is Essential:</strong> Children prioritize fun and ease; parents prioritize safety and control—research and usability testing help align both into one product vision.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>#4 Compliance with Privacy Laws is a Design Challenge:</strong> Regulations like COPPA and PIPEDA require transparent, secure data practices that still feel simple for families to understand and trust.</li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}


import { Metadata } from 'next';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Second Spin — Case Study',
  description: 'Second Spin case study by Andres Chacon',
};

export default function SecondSpinPage() {
  return (
    <CaseStudyLayout
      title="Second Spin"
      client="Entrepreneur Seller"
      sector="E-commerce"
      role="UX/UI Designer"
      time="3 Months"
      sections={[
        {
          id: 'competitive-analysis',
          title: 'Competitive Analysis',
          content: (
            <>
              <p className="mb-6">
                Second Spin is an eco-friendly marketplace for buying and selling secondhand clothing that is easy to use. It guarantees confidence, usability, and interesting interactions while streamlining secondhand shopping and promoting circular fashion.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Objective</h3>
              <p className="mb-6">
                Evaluate existing secondhand marketplaces such as Vinted, Depop, and Poshmark to identify their strengths, weaknesses, and areas for improvement. By understanding the competitive landscape, the goal was to uncover opportunities to design a more seamless, trustworthy, and engaging user experience for secondhand fashion enthusiasts.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Approach</h3>
              <p className="mb-6">
                Our competitive analysis involved a systematic comparison of key features offered by existing secondhand marketplaces, focusing on the following areas: User Interface & Experience, Listing & Selling Process, Search & Filtering Capabilities, and Trust & Security Features.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">User Interface & Experience</h3>
              <p className="mb-6">
                Examined the overall layout, navigation, and intuitiveness of the interfaces. Assessed how well these platforms balance aesthetics with usability for both buyers and sellers.
              </p>
              
              <p className="mb-6">
                <strong>Listing & Selling Process:</strong> Evaluated how easy or complex it is for users to list items, including photo uploads, description input, and pricing recommendations. Reviewed whether platforms provide AI-driven auto-filling, price suggestions, or other enhancements to simplify the selling process.
              </p>
              
              <p className="mb-6">
                <strong>Search & Filtering Capabilities:</strong> Analyzed the effectiveness of search algorithms and filtering options to help users find items based on size, brand, price range, or condition. Assessed how well search personalization and AI recommendations improve the shopping experience.
              </p>
              
              <p className="mb-6">
                <strong>Trust & Security Features:</strong> Reviewed customer reviews, ratings, and dispute resolution mechanisms to see how well trust is fostered within the community.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Findings</h3>
              <p className="mb-6">
                Through this analysis, we identified key strengths and weaknesses in existing secondhand marketplaces. We found strengths in their large user base and social commerce features, but identified weaknesses in their time-consuming listing processes, limited trust signals, poor search capabilities, and a lack of sustainability incentives.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Strengths of Existing Platforms</h3>
              <p className="mb-6">
                Large, established user base with an active community of buyers and sellers. Social commerce features such as follower systems, likes, and comments, increasing engagement.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Weaknesses Identified</h3>
              <p className="mb-6">
                <strong>Listing Process:</strong> Many platforms require manual data entry, making selling time-consuming and discouraging users from listing frequently.
              </p>
              
              <p className="mb-6">
                <strong>Limited trust signals:</strong> Some users hesitate to purchase due to scam risks, lack of seller verification, and weak buyer protection policies.
              </p>
              
              <p className="mb-6">
                <strong>Poor search and filtering capabilities:</strong> Users struggle to find specific brands, styles, or conditions due to limited filtering and inefficient recommendation engines.
              </p>
              
              <p className="mb-6">
                <strong>Lack of sustainability incentives:</strong> While secondhand shopping promotes sustainability, few platforms offer gamification or impact tracking to motivate eco-conscious buyers.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Impact on Design</h3>
              <p className="mb-6">
                The insights gained from this competitive analysis directly influenced the development of Second Spin, leading to:
              </p>
              
              <p className="mb-6">
                <strong>Enhanced Listing Experience:</strong> AI-powered image recognition auto-fills product details, reducing listing time. Intuitive, guided listing flow simplifies uploading and pricing items.
              </p>
              
              <p className="mb-6">
                <strong>Refined Search & Personalized Recommendations:</strong> Smart filtering options based on size, brand, condition, price range, and user preferences. AI-driven product recommendations suggest relevant items based on browsing and purchase history.
              </p>
              
              <div className="my-12">
                <Image
                  src="/images/Second-Spin-Images/SWOT_Analysis_SS.png"
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
                To ensure a user centered approach in the development of Second Spin, I conducted a combination of qualitative and quantitative research activities to uncover key pain points and preferences of secondhand shoppers and sellers. This research was essential in designing a marketplace that is intuitive, secure, and engaging.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Interviews</h3>
              <p className="mb-6">
                Engaged in one on one interviews with five active secondhand buyers and sellers to gain deeper insights into their motivations, frustrations, and experiences with existing resale platforms. These sessions provided valuable context on the barriers preventing users from engaging more frequently with secondhand marketplaces.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Surveys</h3>
              <p className="mb-6">
                An online survey was distributed to 20 participants, targeting a diverse mix of shoppers and sellers who use platforms like Vinted, Depop, and Poshmark. The survey aimed to validate findings from the interviews and gather broader data on user needs and preferences.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Key Questions Explored</h3>
              <ul className="list-none mb-6">
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">What are your primary reasons for buying or selling secondhand fashion?</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">What challenges have you encountered when listing or purchasing items?</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">How important is seller verification and buyer protection when making a purchase?</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">What features do you wish secondhand marketplaces offered to improve the experience?</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Would you be more inclined to shop secondhand if offered sustainability insights?</li>
              </ul>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Findings from Research & Pain Points</h3>
              <p className="mb-6">
                Through qualitative and quantitative analysis, we identified several core pain points and user needs:
              </p>
              
              <p className="mb-6">
                <strong>Difficult listing process:</strong> Many sellers find it time-consuming and tedious to upload photos, write descriptions, and price items competitively.
              </p>
              
              <p className="mb-6">
                <strong>Trust issues in peer to peer selling:</strong> Buyers hesitate to purchase due to concerns about item authenticity, misrepresented conditions, and scams.
              </p>
              
              <p className="mb-6">
                <strong>Limited personalization in search & recommendations:</strong> Shoppers struggle to find relevant items quickly due to poor filtering and generic recommendations.
              </p>
              
              <p className="mb-6">
                <strong>Sustainability interest but lack of engagement tools:</strong> Many users are motivated by sustainability but wish for more transparency on their environmental impact.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">User Needs</h3>
              <ul className="list-none mb-6">
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Faster, automated listing tools to simplify the selling process.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Verified seller badges & buyer protection to build trust and reduce scam risks.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">AI powered smart filters & personalized recommendations to make finding the right items easier.</li>
              </ul>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Goals</h3>
              <p className="mb-6">
                The insights gathered from user research shaped the core objectives of Second Spin, ensuring that the platform provides a seamless and engaging experience for both buyers and sellers.
              </p>
              
              <p className="mb-6">
                <strong>Primary Goal:</strong> To create a trustworthy, intuitive, and efficient secondhand marketplace that makes buying and selling seamless and rewarding.
              </p>
              
              <p className="mb-6">
                <strong>Secondary Goals:</strong>
              </p>
              
              <ul className="list-none mb-6">
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Enhance listing efficiency by introducing AI-powered tools for image recognition, auto-filled descriptions, and dynamic price suggestions.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Build user trust through verified sellers, secure in-app messaging, and buyer protection policies.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Refine search and discovery with personalized recommendations, advanced filtering, and wish list notifications.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Promote sustainability by integrating a Sustainability Impact Tracker, allowing users to visualize their environmental contributions when shopping secondhand.</li>
              </ul>
              
              <p className="mb-6">
                By aligning the design of Second Spin with user needs and expectations, the platform ensures that both buyers and sellers feel confident, engaged, and motivated to participate in the circular fashion economy.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">User Personas</h3>
              <p className="mb-6">
                Using the quantitative and qualitative data from surveys and interviews, we identified key user needs, including that 75% of sellers found listing items too tedious, while 68% of buyers hesitated due to trust concerns. Additionally, 80% of participants expressed a desire for better filtering and search tools, and 65% were interested in sustainability tracking. These insights directly shaped the priorities for Second Spin, focusing on streamlined listing tools, trust-building features, AI-enhanced search, and sustainability engagement to create a seamless and rewarding secondhand shopping experience.
              </p>
              
              <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 py-6 my-12">
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Second-Spin-Images/User_Persona1.png"
                    alt="User Persona 1"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Second-Spin-Images/User_Personas2.png"
                    alt="User Persona 2"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Second-Spin-Images/User_Personas3.png"
                    alt="User Persona 3"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Quantitative & Qualitative Data</h3>
              <p className="mb-6">
                To ensure the design of Second Spin aligned with real user needs, we conducted extensive research through both quantitative data from surveys and qualitative insights from interviews. This comprehensive approach allowed us to identify user pain points, preferences, and opportunities for improvement, ultimately shaping a platform that enhances the secondhand shopping experience.
              </p>
              
              <div className="my-12">
                <Image
                  src="/images/Second-Spin-Images/SeconsSpinData.png"
                  alt="Second Spin Data"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Purpose & Impact</h3>
              <p className="mb-6">
                This mixed method approach was instrumental in bridging the gap between user expectations and existing solutions. The collected data directly informed key design decisions, ensuring Second Spin:
              </p>
              
              <ul className="list-none mb-6">
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Delivers a seamless, AI powered listing experience that eliminates unnecessary manual entry.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Increases trust in transactions through buyer protection and secure messaging.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Enhances search and filtering capabilities to help buyers find relevant items more efficiently.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Empowers eco conscious shopping by providing clear visibility into sustainability impact.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">Fosters a sense of community through interactive features like following sellers and wish list alerts.</li>
              </ul>
              
              <p className="mb-6">
                By combining statistical trends with qualitative insights, we crafted a platform strategy that not only addresses functional requirements but also resonates emotionally with users, creating a safe, engaging, and impactful secondhand shopping experience.
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
                The roadmap outlines the structured progression of Second Spin, from user research and wireframing to prototyping, testing, and deployment. It ensures alignment with user needs and business goals while maintaining a scalable and adaptable development process.
              </p>
              
              <div className="my-12">
                <Image
                  src="/images/Second-Spin-Images/11.png"
                  alt="Roadmap"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Customer Journey Map</h3>
              <p className="mb-6">
                The customer journey map illustrates a buyer&apos;s and seller&apos;s experience within the platform, identifying key touch points such as onboarding, listing an item, making a purchase, and postsale interactions. This visualization helps refine the user experience by highlighting pain points and opportunities for improvement.
              </p>
              
              <div className="my-12">
                <Image
                  src="/images/Second-Spin-Images/10.png"
                  alt="Customer Journey Map"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Sitemap</h3>
              <p className="mb-6">
                The sitemap structures the platform&apos;s navigation and information architecture, ensuring that users can easily access core features like home, search, listings, profile management, and sustainability tracking. A streamlined structure minimizes cognitive load and improves usability, searchability, and discoverability.
              </p>
              
              <div className="my-12">
                <Image
                  src="/images/Second-Spin-Images/User Flow Second Spin.jpg"
                  alt="User Flow Second Spin"
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
                The low fidelity wireframes served as the initial blueprint for Second Spin, outlining the fundamental user journey for both buyers and sellers in a second hand marketplace. These prototypes, created in Figma, helped visualize key interactions before focusing on detailed aesthetics and micro interactions.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Key Aspects of Low-Fidelity Prototypes:</h3>
              
              <p className="mb-6">
                <strong>Basic Layout & Navigation:</strong> The early wireframes structured the app around essential sections, including Home Page, Search & Filters, Product Listings, Item Details, and User Profiles. This ensured a straightforward, intuitive browsing and shopping experience.
              </p>
              
              <p className="mb-6">
                <strong>Buyer & Seller Journey Mapping:</strong> The wireframes outlined the core actions for both buyers (browsing, adding to cart, checkout, tracking orders) and sellers (listing items, managing sales, communicating with buyers).
              </p>
              
              <p className="mb-6">
                <strong>Listing & Transaction Flow:</strong> A simplified listing creation process was mapped out, enabling sellers to upload images, set prices, and add product details with minimal friction.
              </p>
              
              <p className="mb-6">
                <strong>Category Based Marketplace:</strong> The initial structure included pre-defined categories (e.g., clothing, electronics, books, and home goods), making it easy for users to navigate the platform.
              </p>
              
              <p className="mb-6">
                <strong>Messaging & Notifications:</strong> Basic wireframes also included a chat feature to facilitate secure buyer-seller communication and real-time notifications for updates on orders, offers, and messages.
              </p>
              
              <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 py-6 my-12">
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Second-Spin-Images/21.png"
                    alt="Home Page"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Second-Spin-Images/20.png"
                    alt="Product Page"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Second-Spin-Images/19.png"
                    alt="Filters & Search Result"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">High Fidelity Prototype</h3>
              <p className="mb-6">
                After validating user flows with low fidelity prototypes, high fidelity designs were created with refined UI elements, branding, and interactive components to enhance the overall usability and visual appeal.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Key Aspects of High-Fidelity Prototypes:</h3>
              
              <p className="mb-6">
                <strong>Polished UI & Branding:</strong> The buyer dashboard featured personalized recommendations, and wish lists, while the seller dashboard displayed sales analytics, and order management.
              </p>
              
              <p className="mb-6">
                <strong>Interactive Buyer & Seller Interfaces:</strong> The wireframes outlined the core actions for both buyers (browsing, adding to cart, checkout, tracking orders) and sellers (listing items, managing sales, communicating with buyers).
              </p>
              
              <p className="mb-6">
                <strong>Advanced Search & Filtering:</strong> High-fidelity designs included a robust search bar, category based browsing, and dynamic filtering options to help users find items efficiently.
              </p>
              
              <p className="mb-6">
                <strong>Social & Community Features:</strong> Enhanced wireframes introduced features like seller ratings, buyer reviews, and a &quot;Featured Listings&quot; section to improve engagement and credibility.
              </p>
              
              <p className="mb-6">
                <strong>Optimized Notifications & Messaging:</strong> The in app messaging system was enhanced with secure chat, ensuring smooth buyer-seller communication.
              </p>
              
              <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 py-6 my-12">
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Second-Spin-Images/24.png"
                    alt="Home Page High Fidelity"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Second-Spin-Images/23.png"
                    alt="Product & Browse Page High Fidelity"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Second-Spin-Images/22.png"
                    alt="Filters & Search Pages High Fidelity"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">User Testing</h3>
              <p className="mb-6">
                Through usability testing, it became evident that buyers value intuitive browsing, seamless checkout, and personalized recommendations, while sellers prioritize ease of listing and transaction security. Aligning these different needs into a cohesive experience was a crucial design challenge.
              </p>
              
              <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 py-6 my-12">
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Second-Spin-Images/34.png"
                    alt="User Testing 1"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[85%] shrink-0 snap-center md:w-[45%]">
                  <Image
                    src="/images/Second-Spin-Images/40.png"
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
                Second Spin is a significant step toward creating a sustainable and user friendly second hand marketplace. While existing resale platforms facilitate buying and selling used goods, they often lack features that prioritize user trust and an engaging shopping experience. This project effectively addresses these gaps by integrating intuitive navigation, personalized recommendations, and secure buyer seller interactions, all guided by user centered design principles, usability testing, and iterative refinements.
              </p>
              
              <p className="mb-6">
                However, building a truly efficient and engaging platform requires more than just an intuitive interface. It demands a robust ecosystem that balances trust, transparency, and usability, ensuring that users both buyers and sellers can participate with confidence. The challenge remains in perfecting the intersection between accessibility, security, and engagement while encouraging sustainable consumption habits.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">More Time & Resources</h3>
              <p className="mb-6">
                With additional time and resources, Second Spin could be further enhanced by:
              </p>
              
              <ul className="list-none mb-6">
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>Developing advanced personalization & AI-driven recommendations:</strong> Implementing machine learning algorithms to analyze user behavior and preferences, providing tailored product suggestions.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>Enhancing trust & security features:</strong> Introducing verified seller badges and identity verification to enhance credibility.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>Expanding social & community-driven engagement:</strong> Incorporating a social selling experience with user reviews, wish lists, and seller ratings.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>Developing a seamless multi-platform experience:</strong> Introducing progressive web app (PWA) features for an app-like experience without requiring downloads.</li>
              </ul>
              
              <p className="mb-6">
                By integrating these features, Second Spin could further revolutionize second hand shopping, making it not only more accessible and engaging but also a trusted platform that fosters sustainable commerce.
              </p>
              
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Learning Outcomes</h3>
              <ul className="list-none mb-6">
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>#1 Trust & Transparency are Key to a Successful Marketplace:</strong> Building a successful resale platform requires more than just a functional transaction system, it necessitates trust between buyers and sellers. Features like user reviews, verified sellers, and secure payments are crucial for fostering confidence in second-hand transactions.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>#2 Streamlining the Selling Experience Increases Adoption:</strong> For sellers, ease of listing and transaction management directly impacts participation. Ensuring a simple, guided listing process with intuitive tools for tracking sales and communicating with buyers was a critical takeaway in optimizing engagement.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>#3 User-Centered Design is Essential for Adoption & Retention:</strong> Through usability testing, it became evident that buyers value intuitive browsing, seamless checkout, and personalized recommendations, while sellers prioritize ease of listing and transaction security. Aligning these different needs into a cohesive experience was a crucial design challenge.</li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal"><strong>#4 Scaling a Marketplace Requires Continuous Refinement:</strong> Marketplaces evolve based on user behavior, requiring ongoing iteration to stay relevant. Features like AI-driven recommendations, optimized search filters, and expanded payment options can significantly enhance user retention over time.</li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}

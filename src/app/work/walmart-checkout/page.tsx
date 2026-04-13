import CaseStudyLayout from "@/components/CaseStudyLayout";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walmart Checkout — UX Research",
  description: "Walmart website checkout UX research by Andres Chacon",
};

export default function WalmartCheckoutPage() {
  return (
    <CaseStudyLayout
      title="Walmart Website UX Research Project"
      client="Research project"
      sector="E-commerce / Retail"
      role="UX Researcher"
      time="—"
      sections={[
        {
          id: "problem",
          title: "Problem definition",
          content: (
            <>
              <p className="mb-6">
                <strong>Context.</strong> Walmart is one of the world&apos;s largest retailers, with millions of customers relying
                on its website for groceries and household essentials. A common e-commerce issue is cart abandonment at checkout:
                long, unclear, or frustrating flows increase the chance users leave without purchasing.
              </p>
              <p className="mb-6">
                <strong>Observation.</strong> In an initial review of Walmart&apos;s checkout, several friction points stood out:
              </p>
              <ul className="list-none mb-6">
                <li className="mb-3 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  Multiple forms and steps without a consistent sense of progress.
                </li>
                <li className="mb-3 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  Guest checkout can be slow, with limited autofill and repeated entry.
                </li>
                <li className="mb-3 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  Delivery estimates appear late, reducing transparency.
                </li>
                <li className="mb-3 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  Promo code entry is easy to miss and validation happens only after submission.
                </li>
              </ul>
              <p className="mb-6">
                <strong>Problem statement.</strong> Customers on Walmart&apos;s site often hit unnecessary friction at checkout,
                which can erode trust and raise abandonment.
              </p>
              <p className="mb-6">
                <strong>Research question.</strong> How might Walmart&apos;s checkout be simplified and made more transparent to
                reduce cart abandonment and improve satisfaction?
              </p>
            </>
          ),
        },
        {
          id: "heuristic-evaluation",
          title: "Heuristic evaluation",
          content: (
            <>
              <p className="mb-6">
                A heuristic evaluation using Jakob Nielsen&apos;s usability heuristics focused on principles most relevant to
                online checkout.
              </p>
              <div className="my-8 overflow-x-auto">
                <table className="case-table min-w-[640px]">
                  <thead>
                    <tr>
                      <th>Heuristic principle</th>
                      <th>Observed issue</th>
                      <th>Severity (1–5)</th>
                      <th>Notes & impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Visibility of system status</td>
                      <td>Checkout does not consistently show a clear step indicator until later stages.</td>
                      <td>3</td>
                      <td>Uncertainty about remaining steps can increase abandonment risk.</td>
                    </tr>
                    <tr>
                      <td>Error prevention</td>
                      <td>Promo codes validate only after submission, not instantly.</td>
                      <td>2</td>
                      <td>Users may repeat invalid codes; errors surface late.</td>
                    </tr>
                    <tr>
                      <td>Recognition vs recall</td>
                      <td>Delivery and pickup options appear only after the address is entered.</td>
                      <td>4</td>
                      <td>Options are not visible up front, reducing transparency.</td>
                    </tr>
                    <tr>
                      <td>Flexibility and efficiency</td>
                      <td>Guest checkout requires re-entering address and payment; little memory of frequent data.</td>
                      <td>4</td>
                      <td>Slows returning guests who avoid accounts.</td>
                    </tr>
                    <tr>
                      <td>Aesthetic and minimalist design</td>
                      <td>Promo field is minimized and hidden until expanded.</td>
                      <td>2</td>
                      <td>Coupon users may miss the option entirely.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          id: "user-survey",
          title: "User survey (simulated results)",
          content: (
            <>
              <p className="mb-6">
                A short survey design complements the heuristic review to check whether observed issues match reported pain
                points.
              </p>
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Survey questions & responses</h3>
              <p className="mb-4">
                <strong>Q1. What frustrates you most when checking out on Walmart&apos;s website?</strong>
              </p>
              <ul className="list-none mb-6">
                <li className="mb-2 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  &quot;Too many steps, I just want to pay quickly.&quot;
                </li>
                <li className="mb-2 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  &quot;I hate typing my address every single time.&quot;
                </li>
                <li className="mb-2 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  &quot;I don&apos;t see the delivery estimate until the end, which makes me nervous.&quot;
                </li>
                <li className="mb-2 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  &quot;Promo codes are hidden and don&apos;t always work right away.&quot;
                </li>
                <li className="mb-2 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  &quot;Guest checkout feels slow compared to Amazon.&quot;
                </li>
              </ul>
              <p className="mb-4">
                <strong>Q2. On a scale of 1–5, how easy is the Walmart checkout process?</strong>
              </p>
              <p className="mb-6">Average ease rating: 2.4 / 5</p>
              <p className="mb-4">
                <strong>Q3. What would improve your checkout experience the most?</strong>
              </p>
              <ul className="list-none mb-6">
                <li className="mb-2 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  &quot;Show me the delivery time earlier.&quot;
                </li>
                <li className="mb-2 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  &quot;Save my info so I don&apos;t re-enter it.&quot;
                </li>
                <li className="mb-2 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  &quot;A clear progress bar so I know how many steps are left.&quot;
                </li>
                <li className="mb-2 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  &quot;Make promo codes easier to find and apply.&quot;
                </li>
                <li className="mb-2 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  &quot;Simpler guest checkout.&quot;
                </li>
              </ul>
              <p className="mb-4">
                <strong>Q4. On a scale of 1–5, how likely are you to abandon your cart if checkout feels too long?</strong>
              </p>
              <p className="mb-6">Average abandonment likelihood: 4.2 / 5</p>
              <h3 className="text-2xl mt-12 mb-6 text-charcoal">Key insights</h3>
              <ul className="list-none mb-6">
                <li className="mb-3 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  <strong>Efficiency:</strong> Repeated manual entry (addresses, cards) is a major frustration.
                </li>
                <li className="mb-3 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  <strong>Transparency:</strong> Delivery estimates and progress are not clear early enough.
                </li>
                <li className="mb-3 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  <strong>Promotions:</strong> Promo visibility and instant validation need improvement.
                </li>
                <li className="mb-3 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  <strong>Abandonment risk:</strong> High likelihood (4.2/5) if checkout feels slow or unclear.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "synthesis",
          title: "Synthesis",
          content: (
            <>
              <p className="mb-6">
                Findings were grouped into themes: <strong>efficiency</strong> (too many fields, slow guest checkout),{" "}
                <strong>transparency</strong> (delivery estimate and steps), <strong>incentives</strong> (promo visibility and
                validation), and <strong>trust</strong> (pressure toward account creation).
              </p>
              <div className="my-10">
                <Image
                  src="/images/Walmart-Images/Affinity_Diagram.png"
                  alt="Affinity diagram"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </>
          ),
        },
        {
          id: "journey-map",
          title: "Journey map snapshot",
          content: (
            <>
              <p className="mb-6">
                A journey map captures emotional state and pain points across checkout steps, with suggested fixes aligned to
                research themes.
              </p>
              <div className="my-10">
                <Image
                  src="/images/Walmart-Images/Customer_Journey_Map.png"
                  alt="Customer journey map"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="my-8 overflow-x-auto">
                <table className="case-table min-w-[560px]">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Current feeling</th>
                      <th>Pain point</th>
                      <th>Suggested fix</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Add to cart</td>
                      <td>Excited</td>
                      <td>None</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>Checkout start</td>
                      <td>Neutral</td>
                      <td>Progress unclear</td>
                      <td>Add a step bar</td>
                    </tr>
                    <tr>
                      <td>Address entry</td>
                      <td>Frustrated</td>
                      <td>Long forms</td>
                      <td>Autofill + saved addresses</td>
                    </tr>
                    <tr>
                      <td>Payment</td>
                      <td>Annoyed</td>
                      <td>Promo code hidden</td>
                      <td>Make promo box prominent</td>
                    </tr>
                    <tr>
                      <td>Review</td>
                      <td>Unsure</td>
                      <td>Delivery time late</td>
                      <td>Show earlier</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          id: "recommendations",
          title: "Recommendations",
          content: (
            <>
              <p className="mb-6">Based on the research, the following recommendations address checkout friction:</p>
              <ul className="list-none mb-6">
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  <strong>Clear progress bar:</strong> Visually guide users through each checkout step.
                </li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  <strong>Simplify guest checkout:</strong> Use autofill and browser memory to reduce repeated data entry.
                </li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  <strong>Improve transparency:</strong> Surface delivery estimates earlier in the flow.
                </li>
                <li className="mb-4 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-charcoal">
                  <strong>Promo discoverability:</strong> Make the promo field prominent with instant validation.
                </li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}

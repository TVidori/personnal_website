import profilePicture from '../../resources/profile-picture.png';
import {
  LeftContentBlock,
  LeftEducationContentBlock,
  LeftEducationTitleBlock,
  LeftHighlight,
  LeftTitleBlock,
  RightContentBlock,
  RightHighlight,
  RightSubTitleBlock,
  RightTitleBlock
} from "./ReusableBlocks";
import {
  EnvelopeAtFillIcon,
  GeoAltFillIcon,
  GitHubIcon,
  Globe2Icon,
  LinkedInIcon,
  MediumIcon,
  PersonVcardFillIcon,
  PhoneFillIcon
} from "../../components/Icons";

export function Home() {
  const columnStyle = "h-full pt-4 ";
  const contactDivStyle = "flex my-2";
  const contactDivLinkStyle = "flex mt-2 mb-[7px]";
  const contactIconStyle = "mt-[3px] mr-[6px] ";

  const linkStyle = "border-b-[1px] border-transparent hover:border-white";

  const lightenJobDescription = true
  const onlineVersion = true

  return (
    <div className="
      basic-font font-custom grid-alternative h-screen max-w-[1000px] mx-auto
    ">
      <div
        id={"left-pane"}
        className={`${columnStyle} primary-bg `}
      >
        <div className="w-6/7 mx-auto">
          <img
            src={profilePicture}
            alt="profile-picture"
            className="
              w-2/3 mx-auto mb-1 rounded-full border-2 secondary-border
            "
          />
          <h1
            className="
              font-title text-4xl font-semibold text-center secondary-font
            "
          >
            THOMAS VIDORI
          </h1>

          <LeftTitleBlock text={"CONTACT"}/>
          <LeftContentBlock>
            <div className={contactDivStyle}>
              {PhoneFillIcon(`${contactIconStyle} mt-[5px]`)} {
              (onlineVersion) ? "+33 7 XX XX XX XX" : "+ 33 7 80 26 06 82"
              }
            </div>
            <div className={contactDivStyle}>
              {EnvelopeAtFillIcon(contactIconStyle)} thomas.vidori@protonmail.com
            </div>
            <div className={contactDivStyle}>
              {GeoAltFillIcon(contactIconStyle)} {
              (onlineVersion) ? "75018, Paris" : "150 rue Championnet, Paris"
            }
            </div>
            <div className={contactDivStyle}>
              {PersonVcardFillIcon(contactIconStyle)} French & British
            </div>
          </LeftContentBlock>

          <LeftTitleBlock text={"LINKS"}/>
          <LeftContentBlock>
            <div className={contactDivLinkStyle}>
              {Globe2Icon(`${contactIconStyle} `)} <a
              href="https://thomas.vidori.pro"
              className={linkStyle}
            >
              thomas.vidori.pro
            </a>
            </div>
            <div className={contactDivLinkStyle}>
              {GitHubIcon(contactIconStyle)} <a
              href="https://github.com/TVidori"
              className={linkStyle}
            >
              github.com/TVidori
            </a>
            </div>
            <div className={contactDivLinkStyle}>
              {LinkedInIcon(contactIconStyle)} <a
              href="https://linkedin.com/in/thomas-vidori/"
              className={linkStyle}
            >
              linkedin.com/in/thomas-vidori/
            </a>
            </div>
            <div className={contactDivLinkStyle}>
              {MediumIcon(contactIconStyle)} <a
              href="https://medium.com/@thomas.vidori"
              className={linkStyle}
            >
              medium.com/@thomas.vidori
            </a>
            </div>
          </LeftContentBlock>

          <LeftTitleBlock text={"LANGUAGES"}/>
          <LeftContentBlock>
          <div className={contactDivStyle}>
            {<LeftHighlight>
              English: bilingual
            </LeftHighlight>}<span className="ml-1"> - 7 years in the UK</span>
            </div>
            <div className={contactDivStyle}>
              French: native
            </div>

          </LeftContentBlock>

          <LeftTitleBlock text={"TECHNICAL SKILLS"}/>
          <LeftContentBlock>
            <div className={contactDivStyle}>
              <span className="mr-1">Languages: </span>
              <span className="flex flex-wrap">
                <span className="mr-1">
                  {<LeftHighlight>Python, Typescript,</LeftHighlight>}
                </span>
                Kotlin
              </span>
            </div>
            <div className={contactDivStyle}>
              <span className="mr-1">Frameworks: </span>
              <span className="flex flex-wrap">
                <span className="mr-1">
                  {<LeftHighlight>FastAPI, React,</LeftHighlight>}
                </span>
                Django
              </span>
            </div>
            <div className={contactDivStyle}>
              <span className="mr-1">Databases: </span>
              {<LeftHighlight>PostGreSQL, MongoDB</LeftHighlight>}
            </div>
            <div className={contactDivStyle}>
              <span className="mr-1">Cloud: </span>
              <span className="flex flex-wrap">
                <span className="mr-1">
                <span className="mr-1">
              {<LeftHighlight>AWS</LeftHighlight>}
                </span>
                (S3, Glue, Athena),</span> Terraform
              </span>
            </div>
            <div className={contactDivStyle}>
              Other: Ubuntu Server, Nginx, Kafka
            </div>
          </LeftContentBlock>

          <LeftTitleBlock text={"EDUCATION"}/>
          <LeftEducationTitleBlock
            school={"Newcastle University"}
            dates={"2015 - 2016"}
            diploma={"Msc in Transport Planning and Business Management"}
          />
          <LeftEducationContentBlock>
            • Distinction and the prize for {<LeftHighlight>
            the best overall student</LeftHighlight>} in this MSc
          </LeftEducationContentBlock>

          <LeftEducationTitleBlock
            school={"ESTP, Paris"}
            dates={"2013 - 2015"}
            diploma={"Engineering Degree in Civil Engineering"}
          />
          <LeftEducationContentBlock>
            • {<LeftHighlight>Congratulations</LeftHighlight>} of the jury.
          </LeftEducationContentBlock>

          <LeftEducationTitleBlock
            school={"Pierre de Fermat"}
            dates={"2011 - 2013"}
            diploma={"“Classes préparatoires” in mathematics and physics"}
          />

        </div>
      </div>
      <div
        id={"right-pane"}
        className={`${columnStyle} secondary-bg`}
      >
        <div className="w-9/10 mx-auto">
          <div className="mb-3">
            <RightTitleBlock text={"ABOUT ME"}/>
            <RightContentBlock>
              <div className="mb-2">
                I have co-founded and been CTO of Sypher, gaining expertise in
                the entire
                product lifecycle from ideation to deployment. Although the
                company
                closed, it was a transformative experience that deepened my {
                <RightHighlight header={true}>
                  passion for innovation
                </RightHighlight>
                } and strategic execution which I'm keen to bring
                to
                my next role.
              </div>
              My {<RightHighlight header={true}>
                diverse background
              </RightHighlight>}—from civil engineer
              then quantitative analyst in a professional gambling company to
              data engineer in a SaaS scale-up—gives me a unique perspective
              and agility to tackle complex challenges.
              Naturally {<RightHighlight header={true}>
                curious and a fast learner
              </RightHighlight>}, I quickly adapt to new
              technologies and problem spaces.
            </RightContentBlock>
          </div>

          <div className="my-3"></div>
          <RightTitleBlock text={"WORK EXPERIENCE"}/>

          <RightSubTitleBlock
            position={"Co-founder & CTO"}
            dates={"October 2023 - March 2025"}
            company={"Sypher"}
            location={"Paris, France | Station F - Program Essec"}
            stationF={true}
          />
          <RightContentBlock indent={true} light={lightenJobDescription}>
            <div className="mb-2">
              I co-founded Sypher, a Lead Intelligence Platform that used
              machine
              learning algorithms to analyze sales and marketing data and score
              leads for prioritization. We also built a self-serve CRM data
              cleaning and enrichment tool, both integrating seamlessly with
              client CRMs.
            </div>
            <div className="mb-2">
              As CTO, I led all technical aspects, including:
              <br/>• {<RightHighlight>
                Management of the technical team
              </RightHighlight>} (up to 4 people) and recruitment.
              <br/>• Handling customer and tester communications about technical
              matters, BCDR and SAP.
              <br/>
              <div className="flex">
                <div>•</div>
                <div className="ml-1">
                  Managing the {<RightHighlight>
                    entire product lifecycle
                  </RightHighlight>} from identifying
                  needs,
                  designing and planning the solution to implementing and
                  deploying
                  it.
                </div>
              </div>
            </div>
            The technical stack used included the following:
            <br/>• {<RightHighlight>Backend & Data</RightHighlight>}:
            Python (NumPy, Pandas, Scikit-learn, FastAPI, asyncio).
            <br/>• {<RightHighlight>Front-end</RightHighlight>}: React in
            Typescript and Nginx.
            <br/>• {<RightHighlight>Infrastructure & Databases</RightHighlight>}
            : Ubuntu VPS with PostgreSQL and MongoDB.
            <br/>• Other Tools: Slack, Kafka, Notion, Stripe, and APIs for
            HubSpot, Salesforce, Brevo...
          </RightContentBlock>

          <div className="my-3"></div>
          <RightSubTitleBlock
            position={"Senior Data Engineer"}
            dates={"May 2023 - January 2024"}
            company={"Planity"}
            location={"Paris, France"}
          />
          <RightContentBlock indent={true} light={lightenJobDescription}>
            • Redeploying the {<RightHighlight>
              cloud infrastructure with Terraform
            </RightHighlight>}
            <br/>• Implementing new data pipelines on the {<RightHighlight>
              AWS infrastructure
            </RightHighlight>} with S3, Glue and Athena.
            <br/>• Adding data collection from external sources using AWS
            Appflow and Fivetran.

            <br/>• creating reporting dashboards with Quicksight.
          </RightContentBlock>

          <div className="my-3"></div>
          <RightSubTitleBlock
            position={"Quantitative Analyst"}
            dates={"May 2020 - April 2023"}
            company={"White Swan Data Ltd"}
            location={"London, UK"}
          />
          <RightContentBlock indent={true} light={lightenJobDescription}>
            <div className="flex">
              <div>•</div>
              <div className="ml-1">
                {<RightHighlight>
                  Improving our strategies and models’ performance
                </RightHighlight>} in sports betting , to maximise our profit and limit
                competitors' available space.
              </div>
            </div>
            • Managing my team’s highest value product: £2m annual
            profits.
            <br/>• Using Python and Kotlin to implement the technical aspects
            of the gambling process.
            <div className="flex">
              <div>•</div>
              <div className="ml-1">
                {<RightHighlight>
                  Analysis and monitoring of performance
                </RightHighlight>}, reporting and
                decision-making by using data pipelines to collect, clean,
                process, visualise and output data (including time series,
                scraping, APIs, writing tests).
              </div>
            </div>
            <div className="flex">
              <div>•</div>
              <div className="ml-1">
                Coordinating and overseeing other quantitative analysts,
                developers, and
                and operators.
              </div>
            </div>
          </RightContentBlock>

          <div className="my-3"></div>
          <RightSubTitleBlock
            position={"Solution Developer"}
            dates={"May 2019 - May 2020"}
            company={"Ernst & Young LPP (EY)"}
            location={"London, UK"}
          />
          <RightContentBlock indent={true} light={lightenJobDescription}>
            • Working for the Assurance Risk team, identifiing their needs and
            planning, developing, documenting, testing and monitoring bespoke
            data science solutions.
            <br/>• Creating data pipelines for data extraction, manipulation
            and visualisation (SQL, Python, Power BI).
          </RightContentBlock>

          <div className="my-3"></div>
          <RightSubTitleBlock
            position={"Data Analyst & Transport Modeller"}
            dates={"September 2016 - May 2019"}
            company={"Systra Ltd"}
            location={"London and Woking, UK"}
          />
          <RightContentBlock indent={true} light={lightenJobDescription}>
            • Data processing, analysis and presentation with SQL, Excel,
            Python, and GIS.
            <br/>• Automation of processes and input/output creation using
            Python and VBA.
            <br/>• Project management of small and medium size projects
            ({"<"} £100k).
          </RightContentBlock>
        </div>
      </div>
    </div>
  );
}
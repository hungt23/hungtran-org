/* global React */
// Hung Tran — content data

const PROJECTS_DATA = [
  {
    slug: "covid",
    eyebrow: "Data product · Research",
    year: "2020 – 2021",
    title: "Financial / ESG / Social Hype Dashboard",
    lead: "A dashboard to judge a stock's financial performance, ESG metrics, and social-media hype — and a survey to see if ESG information actually changes how people invest.",
    tags: ["Finance", "ESG", "Python"],
    body: (
      <>
        <h4>Phase 1 — The dashboard</h4>
        <p>Three concurrent signal streams merged into one surface so a retail investor could see, in one glance, whether a stock is <strong>fundamentally sound</strong>, <strong>environmentally responsible</strong>, and <strong>currently hyped</strong>.</p>
        <ul>
          <li><strong>Financial:</strong> EPS, P/E, operating income, assets, debts, Beta — summarised with the Piotroski F-Score (1–9). Active-trading indicators (50/200-day MA crossovers, MACD, RSI) planned for v2.</li>
          <li><strong>ESG:</strong> climate targets, product lifecycle, waste management, and disclosure transparency. Large-cap companies are graded harder — more resources, more responsibility.</li>
          <li><strong>Social-media hype:</strong> web-scraped Reddit, Twitter, and search/YouTube volumes to see where retail attention was concentrating.</li>
        </ul>
        <blockquote>The pandemic has shown that retail investors can influence a stock's price despite being relatively few in volume.</blockquote>
        <h4>Phase 2 — Survey</h4>
        <p>A 10-minute instrument: demographics and ESG knowledge first, then participants explored the dashboard, then an exit survey. The question: does putting ESG context next to financial context actually move how people invest?</p>
      </>
    ),
  },
  {
    slug: "community",
    eyebrow: "Civic tool · In progress",
    year: "2024 – Ongoing",
    title: "Community Dashboard",
    lead: "A lightweight \"local home page\" for a neighborhood — a curated directory of small businesses, services, and events with search, filters, and a card-based layout.",
    tags: ["Civic", "Web", "Product"],
    body: (
      <>
        <p>Most neighborhood information is scattered across Yelp, Google Maps, Nextdoor, and Instagram. Each of those is built for a different purpose and leaves out most of what actually matters for day-to-day life: <strong>who just opened, what's happening this weekend, who's hiring, where can I drop off compost</strong>.</p>
        <p>Community Dashboard is a prototype of the alternative — a single, opinionated page per neighborhood that tries to replace six tabs with one.</p>
        <h4>What I'm trying to figure out</h4>
        <ul>
          <li>What's the smallest set of cards that makes the page feel useful on day one?</li>
          <li>Who maintains the content, and at what cost?</li>
          <li>Can the same template work for a dense city block and a coastal main street?</li>
        </ul>
      </>
    ),
  },
  {
    slug: "flood-maps",
    eyebrow: "GIS · Coastal resilience",
    year: "2019",
    title: "Flood maps of Boston at rising sea levels",
    lead: "GIS flood maps of Boston at varying degrees of sea-level rise and storm surge, with neighborhood-level suggestions for avoiding damage without sacrificing visual character.",
    tags: ["GIS", "Climate", "Urban"],
    body: (
      <>
        <p>For Geographic Information Systems class I modeled Boston's coastline under three scenarios — current, 1m, and 2.5m sea-level rise, each layered with a 100-year storm surge. The maps are less interesting than the <strong>who-owns-the-first-block-back-from-the-water</strong> question they surface.</p>
        <ul>
          <li><strong>Method:</strong> QGIS, MassGIS LiDAR DEM, NOAA SLR scenarios, Boston parcels.</li>
          <li><strong>Output:</strong> per-neighborhood briefs with specific recommendations — elevated sidewalks in the Seaport, tide gates in East Boston, dune restoration along Revere Beach.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "seaweed-memo",
    eyebrow: "Policy · Memo",
    year: "2021",
    title: "Seaweed aquaculture — a Senate memo",
    lead: "A mock-memo to the US Senate advocating for offshore seaweed aquaculture as a nitrogen-sequestering, habitat-creating, low-input climate tool.",
    tags: ["Policy", "Ocean"],
    body: (
      <>
        <p>Written for International Environmental Science & Policy. The argument, in one paragraph: seaweed grows fast without fertilizer or irrigation, sequesters carbon, absorbs excess nitrogen from agricultural runoff (the driver of most US coastal algal blooms), and creates reef-like habitat that revives local fisheries. It's one of the lowest-input, highest-leverage climate plays available to coastal states — and the federal permitting pathway is still ambiguous enough to be worth fixing.</p>
        <p>Paired with a mock-resolution to the UN FAO, drafted as the Netherlands delegate, arguing for agriculture reform from a country with unusual moral authority on intensification-vs-sustainability.</p>
      </>
    ),
  },
  {
    slug: "coral-microbiome",
    eyebrow: "Research · Blog",
    year: "2018",
    title: "Coral microbiomes & climate resilience",
    lead: "A research blog exploring how the microbial communities around coral reefs influence their resilience to warming, acidification, and disease pressure.",
    tags: ["Ocean", "Research"],
    body: (
      <>
        <p>Coral bleaching gets most of the coverage, but the microbiome — the slick of bacteria, archaea, and protists that live on and inside coral tissue — is where a lot of the resilience story happens. Some bacterial communities buffer pH; others produce compounds that suppress pathogens; some <em>become</em> the pathogens when conditions shift.</p>
        <p>I compiled the landscape of current research, wrote up the three most promising intervention avenues (probiotic inoculation, assisted evolution of symbionts, microbiome-informed reef siting), and tried to communicate all of it without losing a reader who'd never heard the word "Symbiodinium".</p>
      </>
    ),
  },
  {
    slug: "aquaponic",
    eyebrow: "Business plan",
    year: "2020",
    title: "Indoor aquaponic farms in Dorchester elementary schools",
    lead: "A 30-page business plan for indoor aquaponic farms in Dorchester elementary schools — tackling food deserts and turning the lunchroom into a learning surface.",
    tags: ["Food", "Community"],
    body: (
      <>
        <p>Target customers: schools purchasing pre-packaged meals. Secondary: a small parent-facing produce stand at pickup. Primary impact: fresh, local greens in a food desert, with the farm doubling as a hands-on biology and systems-thinking classroom.</p>
        <p>The plan modeled unit economics, a staggered rollout across three schools, and a partnership structure with Boston Public Schools' food-services team. Profitability is thin — this is a philanthropy-adjacent vehicle, not a venture — but the <strong>cost-per-meal-improved</strong> compares favorably to most food-access interventions.</p>
      </>
    ),
  },
];

const BLOG_POSTS = [];

const BOOKS = [
  {
    title: "The Deluge",
    author: "Stephen Markley",
    rating: "★★★★☆",
    status: "Finished",
    note: "A decade-spanning novel of American climate politics. The policy accuracy is unsettling — Markley clearly read a lot of mitigation pathway literature. Drags in the middle but the last 200 pages are the best fiction I've read on what the 2030s might feel like."
  },
  {
    title: "Bewilderment",
    author: "Richard Powers",
    rating: "★★★★☆",
    status: "Finished",
    note: "A father, a neurodivergent son, and a backyard full of extinction. Quieter than The Overstory but the grief is sharper. Read it on a train to Boston and cried twice."
  },
  {
    title: "The Blue Economy",
    author: "Gunter Pauli",
    rating: "★★★☆☆",
    status: "Finished",
    note: "Ambitious biomimicry framing — the 100 innovations premise is a marketing gimmick but a handful of the case studies (seaweed, mycelium, cascading aquaculture) are genuinely useful to have in your head."
  },
  {
    title: "Ministry for the Future",
    author: "Kim Stanley Robinson",
    rating: "★★★★★",
    status: "Finished",
    note: "Still the best fictional treatment of climate policy we have. The carbon coin section alone is worth the cover price. I cite this in professional settings, which tells you something."
  },
  {
    title: "Braiding Sweetgrass",
    author: "Robin Wall Kimmerer",
    rating: "★★★★★",
    status: "Re-reading",
    note: "My reference text for how to write about the natural world without either sentimentality or false detachment. I come back to the \"Allegiance to Gratitude\" chapter roughly once a year."
  },
  {
    title: "The Water Will Come",
    author: "Jeff Goodell",
    rating: "★★★★☆",
    status: "Finished",
    note: "Miami, Venice, Lagos, Norfolk. Goodell does the reporting trip so you don't have to. Three years old now and already undersells the timeline; read it with that in mind."
  },
  {
    title: "Drawdown",
    author: "Paul Hawken (ed.)",
    rating: "★★★☆☆",
    status: "Reference",
    note: "More useful as a desk reference than a cover-to-cover read. The per-solution gigaton estimates are contested but having an opinionated ranked list to argue with is the point."
  },
  {
    title: "All We Can Save",
    author: "Ayana Elizabeth Johnson & Katharine K. Wilkinson",
    rating: "★★★★☆",
    status: "Currently reading",
    note: "Essay collection — uneven by the nature of the form, but the strong pieces are very strong. Johnson's own contributions on ocean policy are required reading in my corner of the field."
  },
];

const QUICK_FACTS = [
  { label: "Role", value: "Product Manager, CDP" },
  { label: "Based", value: "New York City" },
  { label: "Focus", value: "Ocean finance & climate risk" },
];

window.PROJECTS_DATA = PROJECTS_DATA;
window.BLOG_POSTS = BLOG_POSTS;
window.BOOKS = BOOKS;
window.QUICK_FACTS = QUICK_FACTS;

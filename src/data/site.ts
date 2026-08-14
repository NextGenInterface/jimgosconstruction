export const COMPANY = {
   name: "Jimgos Construction",
   tagline: "Responsive Property Maintenance & Construction",
   phone: "07543 470151",
   phoneHref: "tel:+447543470151",
   whatsapp: "https://wa.me/447543470151",
   email: "info@jimgosconstruction.co.uk",
   areas: "London, Essex and the South East",
};

export const CLIENT_TYPES = [
   "Housing Associations",
   "Local Authorities",
   "Estate Agents",
   "Commercial Property Managers",
   "Schools",
   "Healthcare Providers",
   "Residential Clients",
];

export const TRUST_STATS = [
   { value: "24/7", label: "Emergency call-out cover" },
   { value: "15+", label: "Years in construction & maintenance" },
   { value: "5,000+", label: "Jobs completed" },
   { value: "98%", label: "Customer satisfaction" },
];

export const TRUST_BADGES = [
   "Gas Safe Registered",
   "Public Liability Insured",
   "Employers Liability Insured",
   "DBS Checked Engineers",
   "RAMS Provided",
   "Photographic Reporting",
];

export type MaintenanceService = {
   slug: string;
   title: string;
   short: string;
   seoTitle: string;
   seoDescription: string;
   heading: string;
   intro: string;
   bullets: string[];
   standards: string[];
};

export const SERVICES: MaintenanceService[] = [
   {
      slug: "responsive-repairs",
      title: "Responsive Repairs",
      short: "Day-to-day reactive repairs across occupied housing stock, delivered to SLA.",
      seoTitle: "Reactive Maintenance Contractor London | Responsive Repairs",
      seoDescription:
         "Responsive repairs contractor for housing associations and councils across London and the South East. SLA-driven reactive maintenance with photographic reporting.",
      heading: "Responsive Repairs",
      intro: "A single point of contact for day-to-day reactive repairs across tenanted housing stock, with appointment slots, first-time-fix focus and full digital evidence on every job.",
      bullets: [
         "Emergency, urgent and routine priority streams",
         "Appointed slots agreed directly with tenants",
         "Multi-trade operatives carrying common-fault van stock",
         "Before-and-after photographs on every order",
         "Follow-on works raised and reported the same day",
         "KPI and SLA performance reporting by period",
      ],
      standards: [
         "Emergency attendance target: within 4 hours",
         "Urgent repairs: within 24 hours",
         "Routine repairs: within 28 days or by agreed appointment",
      ],
   },
   {
      slug: "void-property-repairs",
      title: "Void Property Works",
      short: "Fast void turnaround to lettable standard, clear, clean, repair and certify.",
      seoTitle: "Void Property Repairs London | Void Turnaround Contractor",
      seoDescription:
         "Void property repairs and turnaround for housing providers in London. Clearance, cleaning, compliance certification and repairs to lettable standard.",
      heading: "Void Property Works",
      intro: "Void turnaround packages that get properties back into letting quickly, with compliance certification bundled in so there are no delays at handover.",
      bullets: [
         "Void survey with priced schedule and photographs",
         "Clearance, deep clean and pest treatment",
         "Kitchen and bathroom renewals where required",
         "Gas, electrical and smoke alarm certification",
         "Decoration, flooring and making good",
         "Handover pack with certificates and photo evidence",
      ],
      standards: [
         "Void survey returned within 24 hours of access",
         "Standard voids completed in 5-10 working days",
         "Full certification pack issued at handover",
      ],
   },
   {
      slug: "planned-preventative-maintenance",
      title: "Planned Preventative Maintenance (PPM)",
      short: "Scheduled cyclical maintenance programmes that reduce reactive spend.",
      seoTitle: "Planned Preventative Maintenance London | PPM Contractor",
      seoDescription:
         "PPM contractor delivering planned preventative maintenance schedules for housing, commercial and public sector property across London and the South East.",
      heading: "Planned Preventative Maintenance",
      intro: "Structured PPM schedules built around your asset data, designed to cut reactive spend, extend component life and keep compliance evidence current.",
      bullets: [
         "Asset-based annual and cyclical schedules",
         "Boiler and heating servicing programmes",
         "Communal area and estate inspections",
         "Gutter, roof and external fabric cycles",
         "Water hygiene and legionella support",
         "Condition reporting to inform capital planning",
      ],
      standards: [
         "Annual programme agreed and calendared in advance",
         "Monthly completion and exception reporting",
         "Digital certificate storage for audit",
      ],
   },
   {
      slug: "gas-safety-certificates",
      title: "Gas Safety",
      short: "Landlord gas safety checks (CP12), servicing and breakdown cover.",
      seoTitle: "Gas Safety Certificates London | Landlord CP12 & Gas Safe Engineers",
      seoDescription:
         "Gas Safe registered engineers issuing landlord gas safety certificates (CP12), servicing and boiler repairs across London and the South East.",
      heading: "Gas Safety & Landlord Certificates",
      intro: "Gas Safe registered engineers delivering LGSR (CP12) programmes, annual servicing and breakdown response, with no-access escalation procedures built in.",
      bullets: [
         "Landlord Gas Safety Records (CP12)",
         "Annual boiler service and commissioning",
         "Boiler repair and replacement",
         "Unvented cylinder and heating system checks",
         "No-access process with tracked escalation letters",
         "Certificates uploaded digitally within 24 hours",
      ],
      standards: [
         "Gas Safe registered engineers only",
         "Certificates issued within 24 hours of test",
         "Unsafe appliances capped and reported immediately",
      ],
   },
   {
      slug: "eicr-electrical-testing",
      title: "Electrical Testing (EICR)",
      short: "EICR inspections, remedials and full rewires by qualified electricians.",
      seoTitle: "EICR London | Electrical Installation Condition Reports & Remedials",
      seoDescription:
         "EICR electrical testing, remedial works and rewires for landlords, housing associations and commercial clients across London and the South East.",
      heading: "Electrical Testing & EICR",
      intro: "Electrical Installation Condition Reports to BS 7671, with C1 and C2 remedials priced and completed by the same team so nothing sits open.",
      bullets: [
         "EICR inspection and testing to BS 7671",
         "C1 faults made safe on the same visit",
         "C2 and C3 remedials priced and scheduled",
         "Consumer unit upgrades and rewires",
         "Emergency lighting and communal testing",
         "PAT testing and smoke/heat alarm installation",
      ],
      standards: [
         "EICR certificate issued within 48 hours",
         "C1 danger present made safe immediately",
         "Remedial quotes returned within 5 working days",
      ],
   },
   {
      slug: "emergency-plumber-london",
      title: "Plumbing",
      short: "Leaks, burst pipes, blockages, tanks, cylinders and full installations.",
      seoTitle: "Emergency Plumber London | 24/7 Leaks, Burst Pipes & Repairs",
      seoDescription:
         "24/7 emergency plumber in London. Burst pipes, water leaks, blockages and heating faults attended fast by insured, DBS checked engineers.",
      heading: "Plumbing & Emergency Plumbing",
      intro: "From a dripping tap to a burst riser flooding three flats, our plumbers carry the stock and tools to stop damage first and repair properly second.",
      bullets: [
         "Burst pipes, leaks and leak detection",
         "Tap, WC, cistern and waste repairs",
         "Cylinder, tank and pump works",
         "Blockage clearance and pipework renewal",
         "Bathroom and wet room installation",
         "Insurance-grade damage reports with photographs",
      ],
      standards: [
         "Emergency plumbing attendance within 4 hours",
         "Made safe or repaired on first visit wherever possible",
         "Same-day repairs where parts are available",
      ],
   },
   {
      slug: "roofing",
      title: "Roofing",
      short: "Pitched and flat roof repairs, leak tracing, gutters and full renewals.",
      seoTitle: "Roof Repairs London | Pitched, Flat Roof & Emergency Roofing",
      seoDescription:
         "Roof repair contractor in London. Emergency storm damage, leak tracing, flat roof renewal, gutters and scaffold-supported works for housing and commercial clients.",
      heading: "Roofing",
      intro: "Roofing teams for reactive leak chasing and planned renewals, working safely at height with the right access every time.",
      bullets: [
         "Emergency storm and wind damage repairs",
         "Leak investigation and reporting",
         "Slate, tile and lead work",
         "Flat roof felt, GRP and single ply renewal",
         "Gutter, fascia and soffit works",
         "Scaffold, tower and MEWP access arranged",
      ],
      standards: [
         "Made safe within 4 hours in an emergency",
         "Access solution confirmed before works start",
         "Photographic evidence from roof level",
      ],
   },
   {
      slug: "carpentry",
      title: "Carpentry",
      short: "Doors, frames, windows, kitchens, floors and second fix joinery.",
      seoTitle: "Carpentry & Joinery London | Doors, Frames and Second Fix",
      seoDescription:
         "Carpentry and joinery for housing and commercial maintenance in London: doors, frames, windows, floors, kitchens and secure boarding up.",
      heading: "Carpentry & Joinery",
      intro: "Time-served carpenters covering everything from a sticking door to full communal joinery replacement programmes.",
      bullets: [
         "Door, frame and ironmongery replacement",
         "Window repairs and draught proofing",
         "Kitchen unit and worktop installation",
         "Flooring, skirting and architrave",
         "Stair, handrail and balustrade repairs",
         "Boarding up and secure make-safe",
      ],
      standards: [
         "Secure make-safe within 4 hours",
         "Permanent repair appointment booked at make-safe",
         "Fire-rated components installed to specification",
      ],
   },
   {
      slug: "drainage",
      title: "Drainage",
      short: "Blockages, CCTV surveys, jetting, repairs and drain relining.",
      seoTitle: "Drainage Contractor London | Blocked Drains, CCTV & Jetting",
      seoDescription:
         "Drainage contractor in London: emergency blockage clearance, high pressure jetting, CCTV drain surveys and repairs for housing and commercial property.",
      heading: "Drainage",
      intro: "Blocked drains dealt with quickly, then surveyed properly so the same stack does not fail again next month.",
      bullets: [
         "Emergency blockage clearance",
         "High pressure jetting",
         "CCTV drain surveys with video reports",
         "Soil stack and gully repairs",
         "Root cutting and descaling",
         "Patch lining and excavation repairs",
      ],
      standards: [
         "Emergency drainage attendance within 4 hours",
         "CCTV report issued within 48 hours",
         "Recommendations priced with the survey",
      ],
   },
   {
      slug: "fire-door-repairs",
      title: "Fire Door Repairs",
      short: "FD30/FD60 inspection, remedial repair and compliant replacement.",
      seoTitle: "Fire Door Repairs & Inspection London | FD30 / FD60 Compliance",
      seoDescription:
         "Fire door inspection, repair and replacement in London. FD30 and FD60 compliance works, intumescent strips, closers and photographic audit records.",
      heading: "Fire Door Repairs & Inspections",
      intro: "Fire door compliance work under the Fire Safety (England) Regulations, with per-door records that stand up to audit.",
      bullets: [
         "Flat entrance and communal door inspections",
         "Intumescent strip and smoke seal renewal",
         "Self-closer replacement and adjustment",
         "Gap, hinge and ironmongery remedials",
         "FD30 and FD60 certified door set replacement",
         "Per-door photographic compliance records",
      ],
      standards: [
         "Quarterly communal / annual flat entrance inspection cycles",
         "Critical defects reported within 24 hours",
         "Individual door register maintained digitally",
      ],
   },
   {
      slug: "kitchen-refurbishment",
      title: "Kitchen Refurbishment",
      short: "Full kitchen renewals for voids, tenanted homes and commercial units.",
      seoTitle: "Kitchen Refurbishment London | Kitchen Renewals for Landlords",
      seoDescription:
         "Kitchen refurbishment and renewal programmes in London for housing associations, landlords and homeowners. Strip out, first fix, install and make good.",
      heading: "Kitchen Refurbishment",
      intro: "Complete kitchen renewals delivered on a fixed programme, from strip out to snag-free handover, in voids or around residents in occupation.",
      bullets: [
         "Survey, design and priced schedule",
         "Strip out and waste recycling",
         "Electrical and plumbing first fix",
         "Units, worktops, appliances and splashbacks",
         "Flooring, tiling and decoration",
         "Post-completion inspection and photo pack",
      ],
      standards: [
         "Typical kitchen completed in 5 working days",
         "Working kitchen facilities maintained where occupied",
         "Snags closed within 5 working days",
      ],
   },
   {
      slug: "bathroom-refurbishment",
      title: "Bathroom Refurbishment",
      short: "Bathroom and wet room renewals, including adaptations for residents.",
      seoTitle: "Bathroom Refurbishment London | Bathroom & Wet Room Renewals",
      seoDescription:
         "Bathroom refurbishment and wet room installation in London for housing providers and homeowners, including level access adaptations.",
      heading: "Bathroom Refurbishment",
      intro: "Bathroom renewals and level access adaptations, completed quickly and cleanly with residents kept informed at every stage.",
      bullets: [
         "Full bathroom strip out and renewal",
         "Wet rooms and level access showers",
         "Grab rails and mobility adaptations",
         "Full height tiling and waterproofing",
         "Extract ventilation and damp control",
         "Making good and decoration",
      ],
      standards: [
         "Typical bathroom completed in 5 working days",
         "Alternative facilities agreed before works start",
         "Adaptations delivered to OT specification",
      ],
   },
   {
      slug: "general-building-repairs",
      title: "General Building Repairs",
      short: "Brickwork, plastering, damp, decoration and structural make-good.",
      seoTitle: "General Building Repairs London | Fabric & Structural Maintenance",
      seoDescription:
         "General building repairs across London: brickwork, plastering, damp and mould works, rendering, decoration and structural make good.",
      heading: "General Building Repairs",
      intro: "The fabric works that hold a maintenance contract together, delivered by multi-trade teams so one visit closes the job.",
      bullets: [
         "Brickwork, repointing and rendering",
         "Plastering and dry lining",
         "Damp and mould investigation and treatment",
         "Ceiling, floor and structural make-good",
         "Fencing, paths and external works",
         "Painting and decorating",
      ],
      standards: [
         "Damp and mould inspected within 5 working days",
         "Treatment plan issued with photographs",
         "Post-works follow-up inspection offered",
      ],
   },
   {
      slug: "emergency-electrician-london",
      title: "Emergency Electrician",
      short: "Loss of power, electrical faults and made-safe works, day or night.",
      seoTitle: "Emergency Electrician London | 24/7 Power Loss & Electrical Faults",
      seoDescription:
         "24/7 emergency electrician in London. Loss of power, tripping circuits, burning smells and unsafe installations made safe by qualified electricians.",
      heading: "Emergency Electrician",
      intro: "Qualified electricians on call around the clock for total loss of power, repeated tripping, burning smells and exposed live parts.",
      bullets: [
         "Total or partial loss of power",
         "Repeatedly tripping circuits and RCDs",
         "Burning smells and scorched accessories",
         "Water ingress into electrics",
         "Emergency lighting failure",
         "Make safe, isolate and certify",
      ],
      standards: [
         "Attendance within 4 hours, 24/7",
         "Danger isolated and made safe on arrival",
         "Minor works certificate issued after repair",
      ],
   },
   {
      slug: "property-maintenance-london",
      title: "Property Maintenance",
      short: "Full-service property maintenance for managed residential portfolios.",
      seoTitle: "Property Maintenance London | Managed Portfolio Maintenance",
      seoDescription:
         "Property maintenance in London for managing agents and landlords: reactive repairs, compliance, voids and planned works under one contract.",
      heading: "Property Maintenance",
      intro: "One contractor for a whole managed portfolio: reactive repairs, compliance testing, voids and planned works, reported through a single account manager.",
      bullets: [
         "Reactive repairs across all trades",
         "Compliance testing and certification",
         "Void turnarounds between tenancies",
         "Planned and cyclical works",
         "Estate and communal area maintenance",
         "Consolidated monthly reporting and invoicing",
      ],
      standards: [
         "Named account manager and direct line",
         "Jobs acknowledged within 1 hour in working time",
         "Monthly performance pack issued",
      ],
   },
   {
      slug: "commercial-maintenance-london",
      title: "Commercial Maintenance",
      short: "Hard FM support for offices, schools, retail and healthcare premises.",
      seoTitle: "Commercial Maintenance London | Hard FM & Reactive Building Services",
      seoDescription:
         "Commercial maintenance in London for offices, schools, retail and healthcare: reactive callouts, PPM, compliance and out-of-hours cover.",
      heading: "Commercial Maintenance",
      intro: "Hard FM support for commercial and public buildings, scheduled around trading hours and delivered by DBS checked, site-inducted operatives.",
      bullets: [
         "Reactive callouts within business SLAs",
         "PPM schedules and statutory compliance",
         "Out-of-hours and weekend working",
         "Fit out, partitioning and refurbishment",
         "Washroom, kitchen and welfare works",
         "Site-specific RAMS for every visit",
      ],
      standards: [
         "Out-of-hours cover 24/7, 365 days",
         "RAMS submitted before mobilisation",
         "Works phased around occupancy and trading",
      ],
   },
   {
      slug: "housing-maintenance-contractor",
      title: "Housing Maintenance",
      short: "Contract-ready housing maintenance delivery for social landlords.",
      seoTitle: "Housing Maintenance Contractor London | Social Housing Repairs",
      seoDescription:
         "Housing maintenance contractor supporting housing associations and local authorities in London with responsive repairs, voids, compliance and planned works.",
      heading: "Housing Maintenance",
      intro: "A housing maintenance partner set up the way social landlords actually work: priority codes, appointment slots, tenant liaison and evidence for every order.",
      bullets: [
         "Priority-coded responsive repairs",
         "Void turnaround programmes",
         "Statutory compliance: gas, electrical, fire",
         "Damp and mould response",
         "Planned component renewals",
         "KPI reporting and audit-ready records",
      ],
      standards: [
         "Emergency 4 hours / urgent 24 hours / routine 28 days",
         "First-time fix tracked and reported",
         "Tenant satisfaction captured per job",
      ],
   },
];

export const EMERGENCIES = [
   { title: "Burst pipes", note: "Isolate, contain and repair" },
   { title: "Water leaks", note: "Trace, stop and dry down" },
   { title: "No heating", note: "Fault find and temporary heating" },
   { title: "Boiler breakdowns", note: "Gas Safe engineer attendance" },
   { title: "Gas leaks", note: "Isolate and make safe" },
   { title: "Electrical faults", note: "Isolate, test and certify" },
   { title: "Loss of power", note: "Restore supply or make safe" },
   { title: "Flooding", note: "Extraction and make safe" },
   { title: "Roof damage", note: "Temporary weatherproofing" },
   { title: "Broken doors", note: "Secure and re-hang" },
   { title: "Boarding up", note: "Secure the property" },
   { title: "Lock changes", note: "Re-secure access" },
   { title: "Emergency glazing", note: "Board then reglaze" },
];

export const EMERGENCY_PROCESS = [
   {
      step: "Emergency call received",
      detail: "Answered 24/7 by a real person, with property, access and hazard details logged.",
   },
   {
      step: "Engineer allocated immediately",
      detail: "The nearest qualified engineer is dispatched from our on-call rota.",
   },
   {
      step: "ETA confirmed",
      detail: "You and the resident receive a confirmed arrival window by call or message.",
   },
   {
      step: "Repairs completed or made safe",
      detail: "We repair first time where possible, or isolate and make safe.",
   },
   {
      step: "Digital report with photographs",
      detail: "Before-and-after photos, works description and materials, issued same day.",
   },
   {
      step: "Follow-on works arranged",
      detail: "Any permanent repair is priced and booked with the resident.",
   },
];

export const RESPONSE_COMMITMENTS = [
   { label: "Emergency attendance", value: "Within 4 hours, 24/7" },
   { label: "Urgent repairs", value: "Within 24 hours" },
   { label: "Routine repairs", value: "By appointment, within 28 days" },
   { label: "Same-day repairs", value: "Wherever parts and access allow" },
   { label: "Digital reports", value: "Issued same day" },
   { label: "Before-and-after photographs", value: "Every job, every time" },
   { label: "Appointment confirmations", value: "By call and SMS" },
   { label: "Follow-up communication", value: "Within 48 hours of completion" },
];

export const CASE_STUDIES = [
   {
      slug: "kitchen-refurbishment",
      title: "Kitchen refurbishment, two-bed flat",
      sector: "Housing association void",
      problem:
         "A void flat failed lettable standard with a water-damaged kitchen, failed worktops and an unsafe cooker connection.",
      solution:
         "Full strip out, plumbing and electrical first fix, new units, worktops, splashback, flooring and cooker point, with the kitchen recertified before handover.",
      duration: "5 working days",
      outcome: "Property re-let the week following handover with zero defects at inspection.",
   },
   {
      slug: "bathroom-replacement",
      title: "Bathroom replacement with level access shower",
      sector: "Local authority adaptation",
      problem:
         "An elderly resident could no longer access the bath safely and an OT recommended a level access shower.",
      solution:
         "Bath removed, floor tanked, level access shower, grab rails, non-slip flooring, new extract fan and full redecoration, delivered with the resident in occupation.",
      duration: "6 working days",
      outcome: "Adaptation signed off by the OT first time; resident remained at home throughout.",
   },
   {
      slug: "leak-investigation",
      title: "Persistent leak affecting three flats",
      sector: "Managing agent, converted block",
      problem:
         "Water damage was appearing in two flats below with three previous contractors unable to find the source.",
      solution:
         "Thermal and acoustic leak detection traced a failed concealed feed in a riser; pipework renewed, ceilings made good and drying monitored.",
      duration: "48 hours to trace and stop, 7 days to complete",
      outcome: "Leak resolved permanently; insurance-grade photo report supported the agent's claim.",
   },
   {
      slug: "boiler-replacement",
      title: "Emergency boiler replacement in winter",
      sector: "Housing association, occupied home",
      problem:
         "A family with young children lost heating and hot water during a cold snap; the appliance was beyond economic repair.",
      solution:
         "Temporary heaters supplied same day, new system boiler, filter and controls installed the next morning, system flushed and commissioned.",
      duration: "Made safe day 1, replaced day 2",
      outcome: "Heating restored within 24 hours with no complaint and full commissioning records.",
   },
   {
      slug: "roof-repair",
      title: "Storm damage roof repair",
      sector: "Local authority estate",
      problem:
         "Overnight storm winds stripped tiles from a pitched roof, leaving a top-floor flat exposed to water ingress.",
      solution:
         "Temporary sheeting fitted within 4 hours, scaffold erected the next day, tiles, battens and felt renewed and internal ceiling made good.",
      duration: "Made safe in 4 hours, completed in 4 days",
      outcome: "No further ingress; resident decanted for zero nights.",
   },
   {
      slug: "commercial-maintenance",
      title: "Reactive maintenance for a multi-site office portfolio",
      sector: "Commercial property manager",
      problem: "Six sites were using different local contractors with inconsistent reporting and slow response times.",
      solution:
         "Single contract with one account manager, agreed SLAs, out-of-hours cover and a consolidated monthly report across all sites.",
      duration: "Mobilised in 3 weeks",
      outcome: "Average response time cut from 3 days to under 24 hours; invoicing consolidated.",
   },
   {
      slug: "fire-door-repair",
      title: "Fire door remedial programme, 84 doors",
      sector: "Housing association block",
      problem:
         "A fire risk assessment identified excessive gaps, failed closers and missing intumescent strips across communal and flat entrance doors.",
      solution:
         "Door-by-door survey, strip and seal renewal, closer replacement, hinge and gap remedials, with 11 doors replaced with certified FD30S sets.",
      duration: "6 weeks",
      outcome: "All FRA actions closed with a per-door photographic compliance register.",
   },
];

export const SOCIAL_VALUE = [
   {
      title: "Apprenticeships",
      body: "We create apprenticeship placements on maintenance contracts, mentored by time-served trades, with a route into permanent employment.",
   },
   {
      title: "Local employment",
      body: "We recruit engineers and office staff from the boroughs we work in, keeping travel down and local wages in the area.",
   },
   {
      title: "Supporting small suppliers",
      body: "Materials are bought from independent local merchants and SME suppliers wherever price and availability allow.",
   },
   {
      title: "Recycling waste",
      body: "Strip-out waste is segregated for recycling, with metals, timber, plasterboard and packaging separated on site.",
   },
   {
      title: "Reducing landfill",
      body: "We track diversion-from-landfill rates by contract and report them alongside our KPI pack.",
   },
   {
      title: "Fuel-efficient vehicles",
      body: "Our fleet is being transitioned to low-emission and ULEZ-compliant vehicles, with routing planned to cut mileage.",
   },
   {
      title: "Supporting vulnerable residents",
      body: "Vulnerability flags are respected on every job: extra time, clear explanation, no-access welfare checks and safe working around residents.",
   },
   {
      title: "DBS checked engineers",
      body: "Every operative entering a home is DBS checked, uniformed and carries photo ID.",
   },
   {
      title: "Safeguarding awareness",
      body: "Operatives are trained to recognise and report safeguarding concerns through a defined escalation route.",
   },
   {
      title: "Equality & Diversity",
      body: "We operate an Equality & Diversity policy covering recruitment, contract delivery and resident interaction.",
   },
   {
      title: "Prompt communication",
      body: "Appointments confirmed, arrival windows shared and completion reported, so residents are never left waiting blind.",
   },
   {
      title: "Community volunteering",
      body: "We contribute labour and materials to community spaces, schools and residents' associations in the areas we serve.",
   },
];

export const HEALTH_SAFETY = [
   {
      title: "Health & Safety Policy",
      body: "A written policy reviewed annually, signed at director level and issued to every operative at induction.",
   },
   {
      title: "Risk Assessments",
      body: "Task and site-specific risk assessments completed before mobilisation and reviewed when conditions change.",
   },
   {
      title: "Method Statements (RAMS)",
      body: "Full RAMS packs produced per contract or per site and submitted to clients before works begin.",
   },
   {
      title: "PPE",
      body: "Company-issued PPE for all operatives, with task-specific equipment for hot works, height and confined spaces.",
   },
   {
      title: "Toolbox Talks",
      body: "Regular recorded toolbox talks covering seasonal risks, incidents and refresher topics.",
   },
   {
      title: "Incident Reporting",
      body: "All accidents recorded and investigated, with RIDDOR reporting where required.",
   },
   {
      title: "Near Miss Reporting",
      body: "A no-blame near miss process feeding directly into risk assessment reviews.",
   },
   {
      title: "Working at Height",
      body: "Access assessed for every task, with towers, MEWPs or scaffold used in preference to ladders.",
   },
   {
      title: "Asbestos Awareness",
      body: "Asbestos awareness trained operatives, register checks before intrusive works and a stop-work procedure on suspected ACMs.",
   },
   {
      title: "COSHH",
      body: "COSHH assessments held for all substances used, with data sheets available on site.",
   },
   {
      title: "Lone Working",
      body: "Lone working procedure with check-in, escalation and abandonment triggers for hostile situations.",
   },
   {
      title: "Manual Handling",
      body: "Manual handling training and mechanical aids for kitchen units, boilers, cylinders and doors.",
   },
   {
      title: "Gas Safe compliance",
      body: "Gas work carried out only by Gas Safe registered engineers, with ID and scope checked on renewal.",
   },
   {
      title: "Electrical safety",
      body: "Electrical work to BS 7671, with certification issued and test equipment calibrated.",
   },
   {
      title: "Environmental management",
      body: "Waste transfer documentation, spill control, segregation on site and emissions reduction across the fleet.",
   },
];

export const ACCREDITATIONS_CURRENT = [
   { name: "Gas Safe Registered", note: "All gas work carried out by registered engineers." },
   { name: "Public Liability Insurance", note: "Certificate available on request for tender submissions." },
   { name: "Employers Liability Insurance", note: "Statutory cover in place for all employees." },
   { name: "DBS Checked Engineers", note: "Every operative entering a home is DBS checked." },
   { name: "Enhanced DBS", note: "Enhanced checks where contracts involve vulnerable residents." },
   { name: "Professional Indemnity", note: "Held where design or specification responsibility applies." },
];

export const ACCREDITATIONS_PROGRESS = [
   { name: "NICEIC", note: "Application in progress." },
   { name: "CHAS", note: "Assessment underway." },
];

export const ACCREDITATIONS_ROADMAP = [
   "Constructionline",
   "SafeContractor",
   "ISO 9001 Quality Management",
   "ISO 14001 Environmental Management",
   "ISO 45001 Health & Safety Management",
];

export const WHY_US = [
   {
      title: "Responsive maintenance",
      body: "Priority-coded reactive repairs across every trade, delivered to agreed SLAs.",
   },
   {
      title: "Dedicated office staff",
      body: "A back office that answers the phone, books appointments and chases jobs to completion.",
   },
   {
      title: "Job tracking",
      body: "Every order tracked from raise to completion with a live status you can query at any time.",
   },
   { title: "Photographic reports", body: "Before-and-after photographs attached to every completed job." },
   {
      title: "Tenant communication",
      body: "Appointment confirmations, arrival windows and clear explanations for residents.",
   },
   {
      title: "First-time fix focus",
      body: "Van stock, multi-trade operatives and proper diagnosis to avoid repeat visits.",
   },
   {
      title: "KPI reporting",
      body: "Monthly performance reporting on attendance, completion, first-time fix and satisfaction.",
   },
   { title: "Emergency response", body: "24/7 on-call rota with 4-hour attendance for genuine emergencies." },
   { title: "Planned maintenance", body: "Cyclical and planned programmes that reduce reactive demand over time." },
   {
      title: "Fully insured engineers",
      body: "Public and employers liability in place, certificates supplied with any tender.",
   },
   { title: "Clear communication", body: "One point of contact, plain language updates and no surprises on cost." },
];

export const PROCUREMENT = [
   {
      title: "Tender-ready",
      body: "Policies, insurances, references and method statements packaged and ready to submit.",
   },
   {
      title: "Compliance focused",
      body: "Gas, electrical and fire safety works delivered with certification recorded digitally.",
   },
   {
      title: "RAMS provided",
      body: "Site or contract-specific risk assessments and method statements issued before mobilisation.",
   },
   {
      title: "Insurance certificates available",
      body: "Public liability, employers liability and professional indemnity certificates on request.",
   },
   { title: "Responsive repairs", body: "Priority-coded reactive repairs across all trades with SLA reporting." },
   {
      title: "Planned works",
      body: "Component renewals, cyclical programmes and refurbishment delivered to programme.",
   },
   {
      title: "Commercial maintenance",
      body: "Hard FM for offices, schools, healthcare and retail, including out-of-hours.",
   },
   { title: "Single point of contact", body: "A named account manager owning performance, escalation and reporting." },
   { title: "Digital job reporting", body: "Photographic evidence, timestamps and certificates against every order." },
   {
      title: "Supply chain",
      body: "Vetted subcontract partners extending capacity for peak demand and specialist works.",
   },
];

export const COMPLIANCE_DOCS = [
   { name: "Health & Safety Policy", detail: "Director-signed policy, reviewed annually." },
   { name: "Social Value Statement", detail: "Our commitments on employment, environment and community." },
   { name: "Equality & Diversity Policy", detail: "Recruitment, delivery and resident interaction standards." },
   { name: "Environmental Policy", detail: "Waste, recycling, emissions and pollution control." },
   { name: "Modern Slavery Statement", detail: "Supply chain due diligence and reporting route." },
   { name: "Public Liability Certificate", detail: "Current certificate of insurance." },
   { name: "Employers Liability Certificate", detail: "Current certificate of insurance." },
   { name: "Sample RAMS Pack", detail: "Example risk assessment and method statement." },
];

export const TESTIMONIALS = [
   {
      quote: "They attended a burst pipe at 2am, made the flat safe and had photographs with us before the office opened. That is exactly what we need from a maintenance partner.",
      author: "Property Manager, London managing agent",
   },
   {
      quote: "Void turnaround times dropped noticeably after we moved the work across. The certification pack arriving with handover saves us chasing for weeks.",
      author: "Voids Coordinator, housing association",
   },
   {
      quote: "Residents comment on how tidy and polite the engineers are. Complaints on repairs have gone right down.",
      author: "Housing Officer, South East London",
   },
];

export const COMMUNITY = [
   {
      title: "Local people, local jobs",
      body: "Our engineers live in the boroughs they work in. Shorter journeys, familiar faces at the door and wages that stay in the area.",
   },
   {
      title: "Apprentices from the estates we maintain",
      body: "We take on apprentices from the same communities we serve and mentor them into a trade with time-served engineers.",
   },
   {
      title: "Time for residents who need it",
      body: "Extra time, plain explanations and welfare checks for older and vulnerable residents. Nobody is rushed in their own home.",
   },
   {
      title: "Backing neighbourhood suppliers",
      body: "Materials come from independent merchants near the job wherever we can, keeping small local businesses busy.",
   },
   {
      title: "Volunteering days",
      body: "Our teams give days to community centres, resident gardens and estate clean-ups alongside the people who live there.",
   },
   {
      title: "Respect on every doorstep",
      body: "DBS checked, uniformed, ID shown, dust sheets down and the place left clean. Standard, every visit.",
   },
];

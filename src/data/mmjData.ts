export interface StateInfo {
  id: string;
  name: string;
  code: string;
  region: 'West' | 'East' | 'Midwest' | 'South';
  price: number;
  renewalPrice: number;
  consultationTime: string;
  validity: string;
  homeCultivation: string;
  possessionLimit: string;
  reciprocity: boolean;
  reciprocityNotes: string;
  popularConditions: string[];
  stateRegistryFee: string;
  stateRegistryUrl: string;
  summary: string;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: number;
  timeframe: string;
  icon: string;
  features: string[];
  popular?: boolean;
}

export interface ConditionItem {
  id: string;
  name: string;
  category: 'Pain & Inflammation' | 'Mental Health' | 'Neurological' | 'Chronic Illness' | 'Other';
  description: string;
  cannabisBenefit: string;
  recommendedType: string;
  prevalence: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  stateCode: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
  avatarInitials: string;
}

export interface DoctorProfile {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  npi: string;
  licensedStates: string[];
  yearsExperience: number;
  rating: number;
  reviewsCount: number;
  bio: string;
  imageInitial: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Eligibility' | 'Process' | 'Legal & Privacy' | 'Pricing & Guarantee';
}

export const STATES_DATA: StateInfo[] = [
  {
    id: 'california',
    name: 'California',
    code: 'CA',
    region: 'West',
    price: 39.99,
    renewalPrice: 34.99,
    consultationTime: '10-15 mins',
    validity: '1 Year',
    homeCultivation: '6 mature plants (or up to 99 with grower rec)',
    possessionLimit: '8 oz of dried flower, 8g concentrates',
    reciprocity: true,
    reciprocityNotes: 'Recognized in NV, HI, ME, and several reciprocal states',
    popularConditions: ['Chronic Pain', 'Anxiety', 'Insomnia', 'Arthritis', 'Migraines'],
    stateRegistryFee: 'Optional ($100 county fee for tax exemption)',
    stateRegistryUrl: 'https://www.cdph.ca.gov/Programs/CHSI/Pages/MMICP.aspx',
    summary: 'California is one of the easiest states to get certified online. Same-day digital recommendation issued immediately after your video evaluation.',
    isPopular: true,
  },
  {
    id: 'new-york',
    name: 'New York',
    code: 'NY',
    region: 'East',
    price: 139.0,
    renewalPrice: 119.0,
    consultationTime: '15 mins',
    validity: '1 Year',
    homeCultivation: '3 mature + 3 immature plants per adult',
    possessionLimit: 'Up to 3 oz cannabis, 24g concentrate',
    reciprocity: false,
    reciprocityNotes: 'Does not accept out-of-state cards, but NY cards accepted in DC, NV, ME',
    popularConditions: ['Chronic Pain', 'PTSD', 'Neuropathy', 'Cancer', 'Epilepsy'],
    stateRegistryFee: '$0 (State fee waived by OCM)',
    stateRegistryUrl: 'https://cannabis.ny.gov/medical-cannabis',
    summary: 'New York allows doctors to recommend medical cannabis for any condition where clinical benefit is found. Fast registry auto-activation.',
    isPopular: true,
  },
  {
    id: 'florida',
    name: 'Florida',
    code: 'FL',
    region: 'South',
    price: 149.0,
    renewalPrice: 99.0,
    consultationTime: '15 mins',
    validity: '7 Months (210 days state max)',
    homeCultivation: 'Not permitted for patients',
    possessionLimit: '2.5 oz per 35-day rolling period',
    reciprocity: false,
    reciprocityNotes: 'FL does not accept other cards, but FL patients can use cards in Puerto Rico, NV, ME',
    popularConditions: ['Chronic Nonmalignant Pain', 'PTSD', 'Cancer', 'Glaucoma', 'Multiple Sclerosis'],
    stateRegistryFee: '$75 annually to FL OMMU',
    stateRegistryUrl: 'https://knowthefactsmmj.com/',
    summary: 'Florida requires an initial telehealth or in-person evaluation with an active qualified physician registered with the OMMU.',
    isPopular: true,
  },
  {
    id: 'pennsylvania',
    name: 'Pennsylvania',
    code: 'PA',
    region: 'East',
    price: 129.0,
    renewalPrice: 89.0,
    consultationTime: '10-15 mins',
    validity: '1 Year',
    homeCultivation: 'Not currently permitted',
    possessionLimit: 'Up to a 90-day medical supply',
    reciprocity: false,
    reciprocityNotes: 'PA does not recognize outside cards; PA cards valid in reciprocal states',
    popularConditions: ['Anxiety Disorders', 'Chronic Pain', 'PTSD', 'IBD / Crohn\'s', 'Neuropathy'],
    stateRegistryFee: '$50 to PA Dept of Health (discounted for Medicaid/SNAP)',
    stateRegistryUrl: 'https://www.health.pa.gov/topics/programs/Medical%20Marijuana/Pages/Medical%20Marijuana.aspx',
    summary: 'Pennsylvania requires a quick consultation with our state-approved DOH certifying physician. Fast state patient portal approval.',
    isPopular: true,
  },
  {
    id: 'ohio',
    name: 'Ohio',
    code: 'OH',
    region: 'Midwest',
    price: 119.0,
    renewalPrice: 79.0,
    consultationTime: '10 mins',
    validity: '1 Year',
    homeCultivation: 'Up to 6 plants per individual',
    possessionLimit: '90-day supply (tier-based fill unit)',
    reciprocity: false,
    reciprocityNotes: 'Ohio patients can travel with card to Michigan, Nevada, and Puerto Rico',
    popularConditions: ['Chronic & Severe Pain', 'PTSD', 'Fibromyalgia', 'Multiple Sclerosis', 'Ulcerative Colitis'],
    stateRegistryFee: '$0.01 (State fee practically eliminated)',
    stateRegistryUrl: 'https://medicalmarijuana.ohio.gov/',
    summary: 'Ohio medical cardholders save substantial local taxes over adult-use, enjoy dedicated medical lines, and access higher dosing tiers.',
    isPopular: true,
  },
  {
    id: 'oklahoma',
    name: 'Oklahoma',
    code: 'OK',
    region: 'South',
    price: 99.0,
    renewalPrice: 79.0,
    consultationTime: '10 mins',
    validity: '2 Years',
    homeCultivation: '6 mature plants + 6 seedling plants',
    possessionLimit: '3 oz on person, 8 oz in residence, 1 oz concentrates',
    reciprocity: true,
    reciprocityNotes: 'Offers 30-day temporary visitor licenses for out-of-state patients',
    popularConditions: ['Doctor\'s Discretion - No Qualifying List Required'],
    stateRegistryFee: '$100 to OMMA ($20 with Soonercare/Medicaid)',
    stateRegistryUrl: 'https://oklahoma.gov/omma.html',
    summary: 'Oklahoma has no restrictive condition list; physicians evaluate patients at their professional discretion for 2-year licenses.',
    isPopular: true,
  },
  {
    id: 'missouri',
    name: 'Missouri',
    code: 'MO',
    region: 'Midwest',
    price: 99.0,
    renewalPrice: 89.0,
    consultationTime: '10-15 mins',
    validity: '3 Years (Highest in US)',
    homeCultivation: 'Up to 6 flowering plants with patient cultivation license',
    possessionLimit: '6 oz per 30-day window',
    reciprocity: true,
    reciprocityNotes: 'Allows out-of-state medical cardholders to purchase in MO',
    popularConditions: ['Chronic Pain', 'Debilitating Psychiatric Disorders', 'Migraines', 'Neuropathy'],
    stateRegistryFee: '$25 state application fee for 3 years',
    stateRegistryUrl: 'https://health.mo.gov/safety/cannabis/',
    summary: 'Missouri cards are valid for 3 full years! Medical cardholders enjoy 4% tax vs 6%+ adult use and higher possession limits.',
    isPopular: true,
  },
  {
    id: 'connecticut',
    name: 'Connecticut',
    code: 'CT',
    region: 'East',
    price: 149.0,
    renewalPrice: 129.0,
    consultationTime: '15 mins',
    validity: '1 Year',
    homeCultivation: '3 mature + 3 immature plants',
    possessionLimit: '5.0 oz per month',
    reciprocity: false,
    reciprocityNotes: 'CT patients can use cards in ME, RI, and NV',
    popularConditions: ['Chronic Pain', 'PTSD', 'Severe Psoriasis', 'Intractable Headache', 'Neuropathic Facial Pain'],
    stateRegistryFee: '$0 (State fee eliminated)',
    stateRegistryUrl: 'https://portal.ct.gov/dcp/medical-marijuana-program',
    summary: 'Quick telehealth certification with state-licensed APRN or MD. Immediate digital certificate for dispensary purchases.',
  },
  {
    id: 'texas',
    name: 'Texas (CUP)',
    code: 'TX',
    region: 'South',
    price: 169.0,
    renewalPrice: 139.0,
    consultationTime: '15 mins',
    validity: '1 Year',
    homeCultivation: 'Not permitted',
    possessionLimit: 'Prescribed as measured low-THC medical cannabis',
    reciprocity: false,
    reciprocityNotes: 'Texas CUP patients can be verified on the CURT registry',
    popularConditions: ['PTSD', 'Neuropathy', 'Cancer', 'Multiple Sclerosis', 'Epilepsy & Seizures', 'Autism Spectrum'],
    stateRegistryFee: '$0 (No state fee, registered directly into CURT)',
    stateRegistryUrl: 'https://www.dps.texas.gov/section/compassionate-use-program',
    summary: 'Texas Compassionate Use Program (CUP) allows telehealth evaluations by CURT-registered certified physicians.',
  },
  {
    id: 'georgia',
    name: 'Georgia',
    code: 'GA',
    region: 'South',
    price: 149.0,
    renewalPrice: 119.0,
    consultationTime: '15 mins',
    validity: '2 Years',
    homeCultivation: 'Not permitted',
    possessionLimit: 'Up to 20 fluid oz of low-THC oil (<5% THC)',
    reciprocity: false,
    reciprocityNotes: 'Provides legal defense for possession of compliant oil',
    popularConditions: ['Intractable Pain', 'PTSD', 'Peripheral Neuropathy', 'Cancer', 'Parkinson\'s', 'Seizure Disorders'],
    stateRegistryFee: '$25 to Department of Public Health',
    stateRegistryUrl: 'https://dph.georgia.gov/low-thc-oil-registry',
    summary: 'Georgia Low-THC Oil Registry card evaluation online. Doctor certifies and submits directly to your local Public Health office.',
  },
  {
    id: 'illinois',
    name: 'Illinois',
    code: 'IL',
    region: 'Midwest',
    price: 159.0,
    renewalPrice: 129.0,
    consultationTime: '15 mins',
    validity: '1 to 3 Years',
    homeCultivation: '5 plants for medical patients only',
    possessionLimit: '2.5 oz per 14-day period',
    reciprocity: false,
    reciprocityNotes: 'Illinois patients save up to 35% in recreational cannabis sales taxes',
    popularConditions: ['Chronic Pain', 'Osteoarthritis', 'Migraines', 'PTSD', 'Crohn\'s', 'Autism'],
    stateRegistryFee: '$50 (1 year) / $100 (2 years) / $125 (3 years)',
    stateRegistryUrl: 'https://dph.illinois.gov/topics-services/prevention-wellness/medical-cannabis.html',
    summary: 'Huge tax savings! Recreational buyers pay up to 41% tax in IL, whereas medical cardholders pay just 1% state tax.',
  },
  {
    id: 'maryland',
    name: 'Maryland',
    code: 'MD',
    region: 'East',
    price: 139.0,
    renewalPrice: 99.0,
    consultationTime: '10-15 mins',
    validity: '1 Year',
    homeCultivation: '4 plants per medical household (vs 2 recreational)',
    possessionLimit: '120g of flower or 36g of THC concentrates',
    reciprocity: false,
    reciprocityNotes: 'MD medical patients exempt from 9% adult use sales tax',
    popularConditions: ['Cachexia', 'Anorexia', 'Wasting', 'Severe Pain', 'Persistent Muscle Spasms', 'PTSD'],
    stateRegistryFee: '$25 state registration',
    stateRegistryUrl: 'https://cannabis.maryland.gov/',
    summary: 'Certified providers submit your written certification directly to the MCA portal for immediate dispensary purchasing.',
  },
  {
    id: 'virginia',
    name: 'Virginia',
    code: 'VA',
    region: 'East',
    price: 129.0,
    renewalPrice: 89.0,
    consultationTime: '10-15 mins',
    validity: '1 Year',
    homeCultivation: '4 plants per household',
    possessionLimit: '4 oz botanical cannabis per 30-day period',
    reciprocity: false,
    reciprocityNotes: 'No formal state card needed; physician certificate is directly accepted at dispensaries',
    popularConditions: ['Any diagnosed condition that doctor determines can be treated safely'],
    stateRegistryFee: '$0 (Registration with BOP is now optional)',
    stateRegistryUrl: 'https://www.cca.virginia.gov/',
    summary: 'In Virginia, you simply need your doctor\'s written certification in hand—no waiting for state approval to shop at medical dispensaries.',
  },
  {
    id: 'massachusetts',
    name: 'Massachusetts',
    code: 'MA',
    region: 'East',
    price: 149.0,
    renewalPrice: 119.0,
    consultationTime: '15 mins',
    validity: '1 Year',
    homeCultivation: 'Up to 12 plants per household',
    possessionLimit: '10 oz every 60-day period',
    reciprocity: false,
    reciprocityNotes: 'MA patients save 20% in adult-use excise and sales taxes',
    popularConditions: ['Cancer', 'Glaucoma', 'HIV/AIDS', 'Hepatitis C', 'Crohn\'s', 'Parkinson\'s', 'Chronic Pain'],
    stateRegistryFee: '$0 (State fee eliminated)',
    stateRegistryUrl: 'https://masscannabiscontrol.com/patients-caregivers/',
    summary: 'Medical patients in Massachusetts skip dispensary lines, pay 0% tax (saving ~20%), and have higher 60-day purchasing quotas.',
  },
  {
    id: 'michigan',
    name: 'Michigan',
    code: 'MI',
    region: 'Midwest',
    price: 89.0,
    renewalPrice: 69.0,
    consultationTime: '10 mins',
    validity: '2 Years',
    homeCultivation: '12 plants per patient',
    possessionLimit: '2.5 oz on person, 10 oz at home',
    reciprocity: true,
    reciprocityNotes: 'Michigan accepts valid medical cards from any US state',
    popularConditions: ['Chronic Pain', 'Arthritis', 'PTSD', 'Colitis', 'Nail-Patella Syndrome', 'Spinal Cord Injury'],
    stateRegistryFee: '$40 for 2-year MMMP registration',
    stateRegistryUrl: 'https://www.michigan.gov/cra/sections/mmp',
    summary: 'Michigan offers 2-year medical cards with reciprocal rights and high 12-plant home cultivation allowances.',
  },
  {
    id: 'minnesota',
    name: 'Minnesota',
    code: 'MN',
    region: 'Midwest',
    price: 139.0,
    renewalPrice: 99.0,
    consultationTime: '15 mins',
    validity: '1 Year',
    homeCultivation: '8 plants (up to 4 flowering)',
    possessionLimit: '2 oz in public, 2 lbs at home',
    reciprocity: false,
    reciprocityNotes: 'MN cards accepted in neighboring reciprocal states',
    popularConditions: ['Chronic or Intractable Pain', 'PTSD', 'Sleep Apnea', 'Autism', 'Irritable Bowel Syndrome'],
    stateRegistryFee: '$0 (Annual fee completely removed)',
    stateRegistryUrl: 'https://www.health.state.mn.us/people/cannabis/',
    summary: 'Medical cannabis patients in Minnesota can obtain flower, edibles, and concentrates with zero state application fees.',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'new-patient',
    title: 'New Medical Marijuana Card',
    shortDesc: '15-min 420 evaluation with a licensed MMJ doctor via telehealth.',
    fullDesc: 'Complete online medical marijuana evaluations with a state-certified medical cannabis doctor. Includes your 420 evaluation, official digital recommendation letter, state portal assistance, and full dispensary access.',
    startingPrice: 39.99,
    timeframe: '10-15 min call',
    icon: 'FileCheck',
    features: [
      '15-minute 420 evaluation with licensed MMJ doctor',
      'Official Doctor Recommendation PDF sent same day',
      '100% Money-back guarantee if not approved',
      'HIPAA compliant, confidential video/phone consult',
      'Step-by-step guidance for state registry',
      'Dispensary discounts across licensed dispensaries'
    ],
    popular: true,
  },
  {
    id: 'renewal',
    title: 'MMJ Card Renewal',
    shortDesc: 'Quick annual 420 re-evaluation to keep your medical cannabis card active.',
    fullDesc: 'Renew your medical marijuana card in under 10 minutes. Our licensed MMJ doctors provide fast 420 renewal evaluations for patients from ANY prior clinic, protecting your sales tax exemptions and legal possession limits.',
    startingPrice: 34.99,
    timeframe: '5-10 min call',
    icon: 'RefreshCw',
    features: [
      'Fast-track expedited MMJ card renewal consultation',
      'Accepted for patients from ANY prior clinic or doctor',
      'Instant digital renewal certificate emailed to you',
      'State portal re-certification upload',
      'Exclusive renewal discount pricing'
    ],
  },
  {
    id: 'cultivation',
    title: '99-Plant Cultivation Recommendation',
    shortDesc: 'Extended medical grower certification for personal therapeutic cultivation.',
    fullDesc: 'Grow your own medicine legally. Qualified patients with chronic conditions requiring higher dosing can obtain a physician-approved extended cultivation recommendation (e.g. California Health & Safety Code 11362.775) to grow up to 99 plants.',
    startingPrice: 149.0,
    timeframe: '15-20 min call',
    icon: 'Sprout',
    features: [
      'Medical necessity evaluation for high-dose patients',
      'Official 99-plant doctor exemption letter',
      'Embossed paper certificate with security seal',
      'Legal verification 24/7 online & phone verification line',
      'Covers both indoor and outdoor medical gardens'
    ],
  },
  {
    id: 'esa-letter',
    title: 'Emotional Support Animal (ESA) Letter',
    shortDesc: 'Official housing & flight accommodation letter from licensed mental health clinician.',
    fullDesc: 'Live with your emotional support companion without breed restrictions, weight limits, or pet rent. 100% compliant with the Fair Housing Act (FHA) and signed by a licensed mental health professional in your state.',
    startingPrice: 129.0,
    timeframe: 'Same-day turnaround',
    icon: 'HeartHandshake',
    features: [
      'FHA compliant housing letter for apartments/HOAs',
      'Waives pet deposits, monthly pet fees, & pet rent',
      'Protects against pet size and breed restrictions',
      'Signed by licensed psychologist, therapist, or MD',
      'Annual renewal check-in included'
    ],
  },
];

export const QUALIFYING_CONDITIONS: ConditionItem[] = [
  {
    id: 'chronic-pain',
    name: 'Chronic & Neuropathic Pain',
    category: 'Pain & Inflammation',
    description: 'Persistent physical discomfort lasting 3+ months, including back pain, sciatica, fibromyalgia, and spinal stenosis.',
    cannabisBenefit: 'THC and CBD bind with CB1 and CB2 receptors in the central nervous system to dampen pain signals and suppress inflammatory cytokine production.',
    recommendedType: '1:1 THC:CBD tinctures, full-spectrum indicas, topical salves',
    prevalence: 'Primary reason for ~65% of medical cannabis patients',
  },
  {
    id: 'anxiety-ptsd',
    name: 'Anxiety, PTSD & Panic Disorders',
    category: 'Mental Health',
    description: 'Post-Traumatic Stress Disorder, generalized anxiety, hyper-arousal, trauma-related flashbacks, and severe social anxiety.',
    cannabisBenefit: 'Low to moderate doses of cannabinoids modulate amygdala hyperactivity, promote neurogenesis in the hippocampus, and assist with emotional memory extinction.',
    recommendedType: 'High-CBD strains, low-THC daytime formulations, calming terpenes (Linalool, Myrcene)',
    prevalence: 'Fastest-growing qualification category across all US states',
  },
  {
    id: 'insomnia',
    name: 'Insomnia & Sleep Disturbances',
    category: 'Mental Health',
    description: 'Difficulty falling asleep, frequent night awakenings, restless leg syndrome, and disrupted circadian rhythm.',
    cannabisBenefit: 'Cannabinoids like CBN and THC help shorten sleep onset latency, lengthen deep slow-wave restorative sleep, and decrease nightly awakenings.',
    recommendedType: 'Indica concentrates, CBN-infused nighttime gummies, full spectrum tinctures',
    prevalence: 'Affects over 70% of chronic health sufferers',
  },
  {
    id: 'cancer-chemo',
    name: 'Cancer & Chemotherapy Relief',
    category: 'Chronic Illness',
    description: 'Managing severe nausea, loss of appetite (cachexia), neuropathy, and systemic pain associated with oncology treatments.',
    cannabisBenefit: 'Strong antiemetic action via 5-HT3 receptor inhibition, stimulates ghrelin release to safely restore appetite and caloric intake.',
    recommendedType: 'Full-spectrum RSO, high-potency THC/CBD extracts, vaporization for rapid nausea relief',
    prevalence: 'Approved in 100% of US medical marijuana programs',
  },
  {
    id: 'migraines',
    name: 'Migraines & Severe Headaches',
    category: 'Pain & Inflammation',
    description: 'Debilitating vascular headaches, visual auras, photophobia, and nausea resistant to standard OTC pain relievers.',
    cannabisBenefit: 'Reduces neurogenic inflammation in the trigeminovascular system, regulates serotonin release, and alleviates throbbing vascular pain.',
    recommendedType: 'Fast-acting inhaled flower/vaporizer, sublingual drops with beta-caryophyllene',
    prevalence: 'Qualifies in CA, NY, OH, PA, MO, and most discretionary states',
  },
  {
    id: 'arthritis',
    name: 'Arthritis & Joint Inflammation',
    category: 'Pain & Inflammation',
    description: 'Osteoarthritis, rheumatoid arthritis, gout, and systemic joint stiffness causing mobility limitations.',
    cannabisBenefit: 'Suppresses synovial inflammation and cellular degradation through CB2 receptor stimulation in joint tissues without gastrointestinal bleeding risks of NSAIDs.',
    recommendedType: 'Transdermal patches, high-CBD balms, 2:1 CBD:THC daily ingestibles',
    prevalence: 'Common among patients aged 40+',
  },
  {
    id: 'epilepsy-seizures',
    name: 'Epilepsy & Seizure Disorders',
    category: 'Neurological',
    description: 'Dravet syndrome, Lennox-Gastaut syndrome, focal seizures, and intractable seizure disorders.',
    cannabisBenefit: 'Cannabidiol (CBD) antagonism of GPR55 receptors and modulation of intracellular calcium levels significantly reduces seizure frequency and severity.',
    recommendedType: 'High-ratio CBD oil (20:1 or 25:1 CBD:THC), purified pharmaceutical grade tinctures',
    prevalence: 'Historic cornerstone for pediatric & adult medical cannabis legislation',
  },
  {
    id: 'multiple-sclerosis',
    name: 'Multiple Sclerosis & Muscle Spasms',
    category: 'Neurological',
    description: 'Severe spasticity, involuntary muscle cramps, tremors, and stiffness related to demyelination.',
    cannabisBenefit: 'Reduces excessive motor neuron excitability, easing painful involuntary spastic contractures and restoring mobility.',
    recommendedType: 'Balanced 1:1 THC:CBD oromucosal spray, indica tinctures',
    prevalence: 'Extensively clinically studied in peer-reviewed trials',
  },
  {
    id: 'crohns-ibd',
    name: 'Crohn’s Disease, IBS & Colitis',
    category: 'Chronic Illness',
    description: 'Inflammatory bowel disease, cramping, chronic diarrhea, abdominal pain, and intestinal barrier compromise.',
    cannabisBenefit: 'The gut has one of the highest concentrations of endocannabinoid receptors. Cannabis reduces gut motility cramping and mucosal inflammation.',
    recommendedType: 'Oral capsules, full-spectrum CBG/CBD/THC combinations',
    prevalence: 'Approved in almost all state qualifying lists',
  },
  {
    id: 'glaucoma',
    name: 'Glaucoma & Ocular Hypertension',
    category: 'Chronic Illness',
    description: 'Elevated intraocular pressure (IOP) that can cause progressive optic nerve damage and vision loss.',
    cannabisBenefit: 'Cannabinoids temporarily lower intraocular pressure by 25-30% by increasing aqueous humor outflow facility.',
    recommendedType: 'Low-dose sublingual drops or oral capsules under physician guidance',
    prevalence: 'Recognized under state medical codes since 1996',
  },
  {
    id: 'fibromyalgia',
    name: 'Fibromyalgia',
    category: 'Pain & Inflammation',
    description: 'Widespread musculoskeletal pain accompanied by fatigue, sleep disturbances, memory fog, and mood changes.',
    cannabisBenefit: 'Addresses the clinical endocannabinoid deficiency hypothesis (CECD), raising central pain thresholds and alleviating tender points.',
    recommendedType: 'Daily balanced CBD/THC tincture + nighttime high-myrcene flower',
    prevalence: 'Over 80% of fibromyalgia cannabis patients report substantial relief',
  },
  {
    id: 'doctor-discretion',
    name: 'Any Debilitating Symptom',
    category: 'Other',
    description: 'Depression, nausea, Lyme disease, Parkinson\'s, ADHD, chronic stress, or any condition where traditional therapies have caused adverse side effects.',
    cannabisBenefit: 'In states like CA, NY, OK, VA, and ME, doctors have legal statutory authority to recommend cannabis for any medical condition they determine will benefit.',
    recommendedType: 'Personalized dosing regimen determined during your 1-on-1 telehealth visit',
    prevalence: 'Open to patients with any chronic discomfort or symptom',
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'David K.',
    location: 'San Diego, CA',
    stateCode: 'CA',
    rating: 5,
    date: '2 days ago',
    service: 'New Patient MMJ Card',
    comment: 'The whole process took literally 12 minutes on my phone. The doctor was so kind, knowledgeable about my sciatica, and explained which terpene profiles would help my lower back without making me drowsy. Had my PDF recommendation before I even got off the call!',
    verified: true,
    avatarInitials: 'DK',
  },
  {
    id: 'rev-2',
    name: 'Samantha M.',
    location: 'Tampa, FL',
    stateCode: 'FL',
    rating: 5,
    date: '3 days ago',
    service: 'Florida MMJ Telehealth',
    comment: 'I was hesitant about doing a telehealth consultation, but Online MMJ Card made it so easy. The doctor walked me through the Florida OMMU registry step by step. Saved me $200 compared to local clinic offices!',
    verified: true,
    avatarInitials: 'SM',
  },
  {
    id: 'rev-3',
    name: 'Marcus B.',
    location: 'Brooklyn, NY',
    stateCode: 'NY',
    rating: 5,
    date: '1 week ago',
    service: 'New York MMJ Card',
    comment: 'Renewing my NY medical certification took 5 minutes flat. Plus, having a medical card in NY saves me so much on dispensary taxes compared to the crazy 13% adult-use taxes. 10/10 recommend!',
    verified: true,
    avatarInitials: 'MB',
  },
  {
    id: 'rev-4',
    name: 'Rachel L.',
    location: 'Columbus, OH',
    stateCode: 'OH',
    rating: 5,
    date: '1 week ago',
    service: 'Ohio MMJ Recommendation',
    comment: 'Dr. Vance answered all my questions regarding fibromyalgia. I love that there is zero risk with their 100% money back guarantee. Approved immediately and got my dispensary medicine the very same afternoon.',
    verified: true,
    avatarInitials: 'RL',
  },
  {
    id: 'rev-5',
    name: 'Brian H.',
    location: 'Philadelphia, PA',
    stateCode: 'PA',
    rating: 5,
    date: '2 weeks ago',
    service: 'PA Patient Certification',
    comment: 'Very professional, secure HIPAA portal. No waiting in crowded waiting rooms. Received my DOH certification number and was verified in the PA portal right away. Customer support via phone was also super responsive.',
    verified: true,
    avatarInitials: 'BH',
  },
  {
    id: 'rev-6',
    name: 'Emily W.',
    location: 'Oklahoma City, OK',
    stateCode: 'OK',
    rating: 5,
    date: '2 weeks ago',
    service: 'Oklahoma 2-Year Card',
    comment: 'Got my 2-year Oklahoma recommendation for $99. Clean interface, clear intake questions, and the physical plastic card arrived in the mail within 4 days. Exceptional service!',
    verified: true,
    avatarInitials: 'EW',
  },
];

export const DOCTORS_DATA: DoctorProfile[] = [
  {
    id: 'dr-vance',
    name: 'Dr. Marcus Vance, M.D.',
    credentials: 'Board Certified Internal Medicine',
    specialty: 'Cannabinoid Medicine & Chronic Pain Management',
    npi: '1841398201',
    licensedStates: ['CA', 'NY', 'FL', 'OH', 'PA'],
    yearsExperience: 18,
    rating: 4.98,
    reviewsCount: 4210,
    bio: 'Graduate of Johns Hopkins School of Medicine. Dr. Vance has spent over a decade researching the endocannabinoid system and guiding thousands of patients away from addictive opioids toward natural plant medicine.',
    imageInitial: 'MV',
  },
  {
    id: 'dr-rostova',
    name: 'Dr. Elena Rostova, M.D.',
    credentials: 'Board Certified Neurologist & Pain Specialist',
    specialty: 'Neuropathy, Migraines & Movement Disorders',
    npi: '1922384712',
    licensedStates: ['CA', 'NY', 'IL', 'MO', 'OK'],
    yearsExperience: 14,
    rating: 4.96,
    reviewsCount: 3820,
    bio: 'Dr. Rostova specializes in neuropathic discomfort and migraine management. She emphasizes evidence-based dosing schedules that integrate smoothly with existing prescription therapies.',
    imageInitial: 'ER',
  },
  {
    id: 'dr-campbell',
    name: 'Dr. Arthur Campbell, D.O.',
    credentials: 'Board Certified Family & Osteopathic Medicine',
    specialty: 'PTSD, Anxiety, Insomnia & Geriatric Care',
    npi: '1730294819',
    licensedStates: ['FL', 'PA', 'TX', 'GA', 'VA'],
    yearsExperience: 22,
    rating: 4.99,
    reviewsCount: 5190,
    bio: 'Veteran medical advocate focused on holistic wellness. Dr. Campbell provides a compassionate, judgment-free environment for first-time medical cannabis patients.',
    imageInitial: 'AC',
  },
  {
    id: 'dr-patel',
    name: 'Dr. Priya Patel, M.D.',
    credentials: 'Board Certified Physical Medicine & Rehabilitation',
    specialty: 'Sports Injuries, Arthritis & Cultivation Guidance',
    npi: '1487291038',
    licensedStates: ['CA', 'OK', 'MI', 'CT', 'MD'],
    yearsExperience: 12,
    rating: 4.95,
    reviewsCount: 2940,
    bio: 'Passionate about patient self-reliance, non-invasive therapeutic options, and extended cultivation recommendations for patients who juice or cultivate raw cannabis.',
    imageInitial: 'PP',
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Process',
    question: 'How fast can I get my Medical Marijuana Card online?',
    answer: 'The entire process typically takes 10 to 15 minutes. First, fill out our secure HIPAA-compliant medical questionnaire (3-5 minutes). Next, enter our virtual waiting room to connect with a licensed doctor via video or phone (5-10 minutes). Once approved, your official digital recommendation PDF is emailed to you instantly. If you ordered a physical embossed plastic card, it will arrive in discreet packaging within 3 to 5 business days.',
  },
  {
    id: 'faq-2',
    category: 'Pricing & Guarantee',
    question: 'What happens if the doctor does not approve me? (100% Money-Back Guarantee)',
    answer: 'We have a 99% patient approval rate. However, if our physician evaluates you and determines you do not qualify for a medical marijuana recommendation under state law, you will receive a 100% full refund immediately. No hidden processing fees, no questions asked.',
  },
  {
    id: 'faq-3',
    category: 'Legal & Privacy',
    question: 'Is online telehealth certification 100% legal?',
    answer: 'Yes! State laws and emergency telehealth provisions explicitly permit certified medical doctors to conduct patient evaluations and issue medical cannabis recommendations remotely. Our physicians are fully licensed, board-certified, and registered with their respective state medical boards and cannabis regulatory commissions.',
  },
  {
    id: 'faq-4',
    category: 'Legal & Privacy',
    question: 'Will my employer, insurance, or landlord find out about my MMJ Card?',
    answer: 'No. All patient evaluations and records are strictly protected under federal HIPAA privacy laws (Health Insurance Portability and Accountability Act) and state doctor-patient confidentiality statutes. We never report your medical record to employers, health insurance companies, law enforcement, or public databases.',
  },
  {
    id: 'faq-5',
    category: 'Eligibility',
    question: 'Do I need prior medical records or doctor notes to qualify?',
    answer: 'In most states (including California, New York, Oklahoma, Virginia, and Missouri), prior medical records are helpful but not mandatory. Our physician will evaluate your current symptoms, medical history, and quality of life during your consultation. If your state specifically requires diagnostic documentation, our intake coordinator will notify you and help you gather it with zero stress.',
  },
  {
    id: 'faq-6',
    category: 'Process',
    question: 'Why should I get an MMJ card if my state has legal recreational cannabis?',
    answer: 'Medical cardholders receive huge advantages: 1) Save 15% to 35% in state and local sales/excise taxes at dispensaries (saving hundreds to thousands of dollars per year); 2) Higher legal possession and purchasing limits (e.g., up to 8 oz instead of 1 oz); 3) Access to higher-potency medical grade tinctures, extracts, and topicals; 4) Legal age requirement is 18+ for medical patients instead of 21+ for recreational; 5) Right to cultivate more plants at home; 6) Dedicated dispensary medical lines with priority service.',
  },
  {
    id: 'faq-7',
    category: 'Process',
    question: 'Can I renew my card with Online MMJ Card if I got my first card from another doctor?',
    answer: 'Yes, absolutely! We accept renewals for any valid or expired medical marijuana card issued by any clinic or physician in your state. Simply select "MMJ Card Renewal", provide your basic details, and enjoy our discounted renewal rates.',
  },
  {
    id: 'faq-8',
    category: 'Legal & Privacy',
    question: 'Can I use my MMJ Card when traveling to other states (Reciprocity)?',
    answer: 'Yes, many states practice medical cannabis reciprocity. States like Nevada, Michigan, Oklahoma (temporary visitor permit), Maine, Puerto Rico, Rhode Island, and Washington D.C. allow out-of-state patients with a valid medical card to purchase at their dispensaries. Check our interactive State Reciprocity Checker tool below to see real-time rules for your destination.',
  },
  {
    id: 'faq-9',
    category: 'Process',
    question: 'What is a 99-Plant Cultivation Recommendation?',
    answer: 'Under medical cannabis laws such as California Health & Safety Code 11362.775, patients with chronic conditions requiring high daily doses (such as juicing raw cannabis, making high-potency RSO, or maintaining continuous organic harvests) can obtain an extended medical necessity grower recommendation. This legal documentation protects qualified patients cultivating up to 99 plants for personal medical use.',
  },
  {
    id: 'faq-10',
    category: 'Pricing & Guarantee',
    question: 'Are there any recurring subscription charges or hidden fees?',
    answer: 'No! We believe in 100% transparent pricing. You only pay a one-time evaluation fee for your certification period (usually 1, 2, or 3 years depending on state law). There are never recurring monthly subscriptions, hidden consultation fees, or unexpected cancellation penalties.',
  },
];

/**
 * Returns states data merged with any live custom overrides set in WordPress backend
 */
export function getMergedStatesData(): StateInfo[] {
  if (typeof window === 'undefined') return STATES_DATA;
  const wpCustom = (window as unknown as { onlineMMJCardSettings?: { customStates?: Record<string, Record<string, unknown>> } })?.onlineMMJCardSettings?.customStates;
  if (!wpCustom || typeof wpCustom !== 'object') return STATES_DATA;

  return STATES_DATA.map((st) => {
    const override = wpCustom[st.id] || wpCustom[st.code.toLowerCase()];
    if (override) {
      return {
        ...st,
        price: typeof override.price === 'number' ? override.price : (parseFloat(override.price as string) || st.price),
        renewalPrice: typeof override.renewalPrice === 'number' ? override.renewalPrice : (parseFloat(override.renewalPrice as string) || st.renewalPrice),
        validity: (override.validity as string) || st.validity,
        possessionLimit: (override.possessionLimit as string) || st.possessionLimit,
        homeCultivation: (override.cultivation as string) || st.homeCultivation,
        stateRegistryUrl: (override.registryUrl as string) || st.stateRegistryUrl,
        summary: (override.summary as string) || st.summary,
      };
    }
    return st;
  });
}


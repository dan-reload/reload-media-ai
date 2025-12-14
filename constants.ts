import { Tool, Prompt } from './types';

export const BRAND_COLOR = '#3B82F6'; // Vibrant Blue pop
export const BRAND_COLOR_HOVER = '#2563EB'; // Darker Blue for hover

export const TOOLS_DATA: Tool[] = [
  {
    name: "Pomelli",
    category: "Image Generation",
    description: "AI experiment from Google Labs that helps small-to-medium-sized businesses easily generate scalable, on-brand social media campaigns.",
    link: "https://labs.google.com/pomelli/about/",
    pricing: "Free (Google Labs)",
    owner: "Google Labs",
    useCases: "Social media campaigns, on-brand content generation, SMB marketing, campaign scaling"
  },
  {
    name: "CraigBot",
    category: "Proposal/Strategy",
    description: "Use CraigBot to review briefs before proposals, stress-test proposals before submission, and analyse wins/losses afterwards.",
    link: "https://gemini.google.com/gem/152z4ty7siFETikV3_kKEfWvrD-TvlpBp?usp=sharing",
    pricing: "Internal Tool",
    owner: "Agency",
    useCases: "Brief review, proposal validation, win/loss analysis, strategy refinement"
  },
  {
    name: "So What Bot",
    category: "Campaign Management",
    description: "A constructive coach to help you to produce insights that are strategic, not just stats.",
    link: "https://gemini.google.com/gem/12F3cWA1EOkKbh2IJLLiyXr3TPAo9vYNd?usp=sharing",
    pricing: "Internal Tool",
    owner: "Agency",
    useCases: "Insight generation, strategic analysis, reporting coaching, data interpretation"
  },
  {
    name: "SPOEbot 2.0",
    category: "Campaign Management",
    description: "Can help you SPOE both Google Ads and Meta builds for streamlined campaign setup and optimization.",
    link: "https://gemini.google.com/gem/1L4Y_AKfJSCEJ6uolhrOAd5JUmaaIwYAe?usp=sharing",
    pricing: "Internal Tool",
    owner: "Agency",
    useCases: "Google Ads setup, Meta campaign builds, SPOE implementation, campaign structure"
  },
  {
    name: "Claude Meta MCP",
    category: "Analytics",
    description: "Advanced Meta analytics integration through Claude. Login via your Pod Leader's Claude account for access.",
    link: "https://claude.ai/login",
    pricing: "Pod Leader Access",
    owner: "Anthropic/Agency",
    useCases: "Meta performance analysis, campaign insights, ad data review, reporting automation"
  },
  {
    name: "Claude AHREFS MCP",
    category: "Analytics",
    description: "SEO and backlink analysis powered by AHREFS through Claude. Login via your Pod Leader's Claude account for access.",
    link: "https://claude.ai/login",
    pricing: "Pod Leader Access",
    owner: "Anthropic/Agency",
    useCases: "SEO research, backlink analysis, keyword tracking, competitor monitoring"
  },
  {
    name: "Claude Klaviyo MCP",
    category: "Analytics",
    description: "Email marketing analytics and automation through Klaviyo integration. Login via your Pod Leader's Claude account for access.",
    link: "https://claude.ai/login",
    pricing: "Pod Leader Access",
    owner: "Anthropic/Agency",
    useCases: "Email campaign analysis, automation workflows, subscriber insights, performance tracking"
  },
  {
    name: "What AI Sees",
    category: "SEO",
    description: "Discover how artificial intelligence systems perceive and access your website content. Analyze your site through the lens of AI crawlers.",
    link: "https://whataisees.com/",
    pricing: "Free",
    owner: "What AI Sees",
    useCases: "AI crawler analysis, website content audit, SEO optimization, AI accessibility testing"
  },
  {
    name: "AI Training - Prompt Party",
    category: "Training",
    description: "Tips and tricks to getting the most out of your LLM.",
    link: "https://drive.google.com/file/d/1hmTOlRAgE4t8Lq3oZeUSmxAeY2TTgbCh/view?usp=drive_link",
    pricing: "Internal Tool",
    owner: "Reload Media",
    useCases: "Prompt engineering, LLM optimization, AI best practices, productivity tips"
  },
  {
    name: "AI Training - RODES Prompting Framework",
    category: "Training",
    description: "Learn the RODES framework for structured and effective AI prompting.",
    link: "https://drive.google.com/file/d/1Jxzk7fn2SaMbXmwvNM3ujH5kB_0HlAZ6/view?usp=drive_link",
    pricing: "Internal Tool",
    owner: "Reload Media",
    useCases: "Prompt structure, framework training, consistent results, advanced prompting"
  },
  {
    name: "AI Training - Talk Nerdy To Me (AI Jargon)",
    category: "Training",
    description: "Analogies for all those AI buzz words. Demystify AI terminology in plain English.",
    link: "https://drive.google.com/file/d/1a4_HhghpcSUWBUcHk0H1U6FALKMUDKc9/view?usp=drive_link",
    pricing: "Internal Tool",
    owner: "Reload Media",
    useCases: "AI terminology, jargon translation, team education, foundational knowledge"
  },
  {
    name: "Share of Search Report",
    category: "Analytics",
    description: "Comprehensive share of search analysis and competitive intelligence reporting tool.",
    link: "https://claude.ai/public/artifacts/018c9ecf-c2bd-458d-b066-b4a892ecf9ce",
    pricing: "Internal Tool",
    owner: "Agency",
    useCases: "Competitive analysis, brand monitoring, search trend analysis, market share insights"
  }
];

export const PROMPTS_DATA: Prompt[] = [
  {
    title: "Black Friday / Week Performance Review",
    description: "A comprehensive framework for analysing account performance during Black Friday week to identify immediate optimisation opportunities. Can be adapted for any sale activity",
    category: "Campaign Management",
    tags: ["Meta Ads", "Black Friday", "Audit", "Performance"],
    content: `You are an expert performance marketing analyst conducting a critical Black Friday week review. Using the Meta Ads MCP tools, analyse [INSERT ACCOUNT_ID] for the last 7 days to identify immediate optimisation opportunities for the next 7 days of BFCM.

**Analysis Framework:**

1. **Campaign Performance Audit**
   - Pull campaign-level insights for the last 7 days with key metrics: spend, ROAS, conversions, CPA, CTR, conversion rate
   - Identify top performers (by ROAS or strong conversion volume) and underperformers
   - Flag any campaigns with significant budget but poor efficiency

2. **Ad Set Deep Dive**
   - Get ad set-level data to find specific targeting/audience winners and losers
   - Look for ad sets with high spend but low ROAS that are dragging down campaign performance
   - Identify ad sets showing strong early signals but constrained by low budget

3. **Creative & Ad Analysis**
   - Review ad-level performance to spot creative fatigue (declining CTR/CVR despite spend)
   - Find winning ad creatives that could be scaled or duplicated into new ad sets
   - Identify ads that should be paused immediately

**Deliver Specific Recommendations:**

- **Scale Opportunities**: Which campaigns/ad sets should receive immediate budget increases? By how much? (suggest specific daily budget changes)
- **Pause Recommendations**: Which campaigns/ad sets/ads should be paused now to stop budget waste? (provide specific IDs and rationale)
- **Budget Reallocation**: Exact budget moves - where to pull from, where to push to, with dollar amounts
- **Quick Wins**: Any other tactical optimisations (bid adjustments, creative swaps, etc.)

**Output Format:**
Provide a prioritised action plan with:
- Immediate actions (pause these now)
- Scale actions (increase budgets here)
- Budget reallocation table (from → to, with amounts)
- Expected impact estimation

Focus on actions that can be executed in the next 2 hours to maximise the remaining BFCM period. Be specific with budget numbers, and clear rationale for each recommendation.`
  },
  {
    title: "The \"7 Day Creative\" Analysis",
    description: "Deep-dive analysis on top-performing assets to identify winners to scale or iterate on for the coming week. Focuses heavily on visuals and copy.",
    category: "Campaign Management",
    tags: ["Meta Ads", "Creative Strategy", "Scaling", "Analysis"],
    content: `You are a Lead Creative Strategist analysing Meta Ads performance. Using the MCP tools, analyse **[INSERT ACCOUNT_ID]** for the designated 7-day period (Monday to Sunday) to conduct a deep-dive on Top Performing Assets.

**Analysis Framework:**

1.  **Creative Win Identification**
    * Pull ad-level data sorted by highest ROAS and Conversion Volume (min. spend threshold: $100).
    * Identify the top 5 "Power Ads" that drove the majority of results this week.
    * Compare the CPA of these top ads against the account average.

2.  **Format & Hook Analysis**
    * Categorise the winners: Are they Statics, UGC, Carousels, or Reels?
    * Analyse the *Why*: Based on the performance data, what specific hook, angle, or offer is resonating? (e.g., high CTR indicates strong hook, high CVR indicates strong offer match).

3.  **Fatigue Check**
    * Check the frequency and CPM trend for these top 5 ads over the last 7 days. Are they becoming more expensive to deliver?

**Deliver Specific Recommendations:**

* **The "Scale List"**: Which specific Ad IDs are stable enough to handle a 20% budget increase immediately?
* **Iteration Brief**: Based on the winners, define 2 specific concepts we should brief the design team to create for next week (e.g., "Create 3 variations of the 'Us vs Them' static using the winning headline from Ad ID [X]").
* **Cross-Pollination**: Recommend winning ads that should be duplicated into other Ad Sets (e.g., take the winner from Broad and test in Retargeting).

**Output Format:**
* Table of Top 5 Ads (Ad Name | ROAS | CPA | CTR | Action)
* Brief for Creative Iteration
* Scale vs. Sustain Recommendations`
  },
  {
    title: "The \"Monday Morning Efficiency Sweep\"",
    description: "A strict 'trim the fat' optimisation prompt designed to cut waste from the weekend and spot immediate bleeders for a strict Monday audit.",
    category: "Campaign Management",
    tags: ["Meta Ads", "Optimization", "Budget", "Efficiency"],
    content: `You are a Senior Media Buyer performing a strict "Monday Morning Efficiency Audit." Using the MCP tools, analyse **[INSERT ACCOUNT_ID]** data from the last 7 days (Mon-Sun). Your goal is to spot immediate bleeders and quick optimisation fixes.

**Analysis Framework:**

1.  **The "Zero-Conversion" Hunt**
    * Identify all ads and ad sets that have spent >1.5x target CPA with ZERO conversions.
    * Identify ads with high spend but ROAS < [INSERT BREAK-EVEN ROAS].

2.  **Traffic Quality Check**
    * Flag ads with high CTR (Link Click-Through Rate) but abnormally low Conversion Rates (landing page mismatch or low-intent clicks).
    * Spot CPM spikes: Identify any ad sets where CPM has increased by >30% week-over-week.

3.  **Budget Distribution Audit**
    * Locate ad sets currently capping out their daily budget early in the day (high potential constrained).
    * Locate ad sets struggling to spend their full budget.

**Deliver Specific Recommendations:**

* **The "Kill List"**: Immediate pause recommendations for assets wasting spend (Provide ID, Spend Amount, and "Reason for Kill").
* **Bid Adjustments**: Recommend manual bid changes for ad sets that are delivering but slightly above target CPA.
* **Budget Shifts**: Specific instructions to move budget from "Bleeders" (poor performers) to "starved" winners.

**Output Format:**
* **Immediate Actions Checklist** (Pause [ID], Lower Budget [ID])
* **Wasted Spend Calculation** (Total spend saved by taking these actions)
* **Budget Reallocation Table**`
  }
];
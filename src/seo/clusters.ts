/**
 * SEO page cluster definitions for the programmatic batch.
 * Each entry produces one static HTML file at public/seo/<slug>/index.html.
 *
 * Exam pricing sources (accessed May 2026):
 *   Microsoft exams:  https://learn.microsoft.com/en-us/credentials/certifications/
 *                     AZ-900: $99 USD, AZ-104 / AZ-305: $165 USD (Pearson VUE)
 *   AWS SAA-C03:      https://aws.amazon.com/certification/ -- $150 USD
 *   CKA:              https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/ -- $445 USD
 *   FOCP:             https://learn.finops.org/finops-certified-practitioner-certification-exam -- $300 USD
 *   Google PCA:       https://cloud.google.com/learn/certification/cloud-architect -- $200 USD
 */

export type SchemaType = "Article" | "Course" | "ItemList" | "FAQPage";

export interface FaqItem {
  q: string;
  a: string;
}

export interface InternalLink {
  slug: string;
  label: string;
}

export interface SeoCluster {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  cluster: "comparison" | "study-guide" | "best-x" | "roadmap" | "free-tools";
  schemaType: SchemaType;
  targetKeyword: string;
  content: string;
  faq: FaqItem[];
  internalLinks: InternalLink[];
  publishedDate: string;
  modifiedDate: string;
}

export const seoClusters: SeoCluster[] = [
  // -------------------------------------------------------------------------
  // 1. AZ-900 vs AZ-104
  // -------------------------------------------------------------------------
  {
    slug: "az-900-vs-az-104-which-first",
    title: "AZ-900 vs AZ-104: Which Azure Cert Should You Take First? (2026)",
    metaDescription:
      "AZ-900 is not a prerequisite for AZ-104. Here is when to skip it and when skipping costs you an exam attempt. Honest comparison for working engineers.",
    h1: "AZ-900 vs AZ-104: the honest comparison for working engineers",
    cluster: "comparison",
    schemaType: "Article",
    targetKeyword: "az-900 vs az-104 which first",
    publishedDate: "2026-05-07",
    modifiedDate: "2026-05-07",
    internalLinks: [
      { slug: "best-az-104-course-2026", label: "Best AZ-104 courses in 2026" },
      { slug: "az-305-vs-az-104-exam-difficulty", label: "AZ-305 vs AZ-104: exam difficulty compared" },
      { slug: "aws-vs-azure-certification-which-better", label: "AWS vs Azure certification" },
      { slug: "cloud-engineer-roadmap-2026", label: "Cloud engineer roadmap 2026" },
    ],
    content: `
<p>If you have ever Googled "do I need AZ-900 before AZ-104," you already know the answer the forums give you: "it depends." That answer is not useful. Here is the direct version.</p>

<h2>The short answer</h2>
<p>AZ-900 is not a formal prerequisite for AZ-104. Microsoft does not block you from scheduling AZ-104 without passing AZ-900 first. If you have hands-on Azure experience already, you can, and probably should, skip AZ-900 and go straight to AZ-104.</p>

<h2>What each exam actually tests</h2>
<p>AZ-900 (Azure Fundamentals) is a 45-minute exam with three skill domains: cloud concepts, Azure architecture and services, and Azure management and governance. It costs <strong>$99 USD</strong> via <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" target="_blank" rel="noopener">Pearson VUE</a>. The questions are conceptual. There are no labs, no CLI tasks, nothing requiring hands-on time in the portal.</p>

<p>AZ-104 (Azure Administrator) is a 100-minute exam with five skill domains: identities and governance, storage, compute, virtual networking, and monitoring. It costs <strong>$165 USD</strong> via <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/" target="_blank" rel="noopener">Pearson VUE</a>. Questions mix multiple-choice with interactive drag-and-drop and case-study scenarios. Expect PowerShell and Azure CLI syntax to appear.</p>

<h2>The overlap is real but limited</h2>
<p>AZ-900 covers Azure services at a surface level: what is a virtual machine, what is Azure Blob Storage, what is role-based access control. AZ-104 assumes you know those things and tests whether you can actually configure them. There is roughly a 10-15% content overlap. Studying for AZ-900 does not meaningfully prepare you for AZ-104 beyond that overlap.</p>

<h2>Who should skip AZ-900</h2>
<p>Skip AZ-900 if any of the following apply to you:</p>
<ul>
  <li>You have worked with Azure for six months or more in any capacity.</li>
  <li>You come from a sysadmin or network engineering background and are pivoting to cloud.</li>
  <li>You are preparing for AZ-104 as your target cert and have a study plan that includes hands-on lab time.</li>
  <li>Your employer is paying for the exam and does not require the fundamentals cert for internal reasons.</li>
</ul>

<h2>Who should take AZ-900 first</h2>
<p>Take AZ-900 first if:</p>
<ul>
  <li>You have never worked in IT and want a low-stakes way to confirm that cloud concepts click for you before investing $165 in AZ-104.</li>
  <li>Your organisation requires the fundamentals badge as part of an internal learning programme.</li>
  <li>You are supporting a Microsoft sales or licensing role and the fundamentals cert is the endpoint, not a stepping stone.</li>
  <li>You want a confidence boost on exam mechanics before sitting a harder proctored exam.</li>
</ul>

<h2>Study time estimates</h2>
<p>AZ-900: Most people with some IT background pass in 10-15 hours of study using <a href="https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-cloud-concepts/" target="_blank" rel="noopener">the free Microsoft Learn paths</a>. The free practice assessment on Microsoft Learn is genuinely representative of the real exam.</p>

<p>AZ-104: Expect 60-80 hours of combined study and lab time. The <a href="https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/" target="_blank" rel="noopener">Microsoft Learning GitHub repo</a> has all 11 official lab exercises. Do them. The exam will test you on tasks, not definitions.</p>

<h2>Salary and employer signal</h2>
<p>AZ-900 alone does not move the needle on job descriptions. Employers list AZ-104 (Azure Administrator Associate) as a hiring criterion; AZ-900 shows up mostly as "nice to have" on non-technical roles. If a pay raise or a new job is the goal, AZ-104 is the cert that counts.</p>

<h2>The recommendation</h2>
<p>If you are reading this to make a decision: skip AZ-900, book AZ-104, and give yourself 8-10 weeks of study with consistent lab time. The $99 saved covers a cloud sandbox subscription for two months. Use <a href="https://cloudevolvers.com/training" target="_blank" rel="noopener">an MCT-led course</a> if you want structured lab guidance; use Microsoft Learn and John Savill's YouTube series if you prefer self-paced.</p>

<h2>CLI check: verify your Azure CLI version before exam prep</h2>
<pre><code># Confirm az CLI is installed and authenticated
az --version
az login
az account show --output table
</code></pre>
<p>AZ-104 lab exercises assume Azure CLI 2.50 or later. The command above confirms you are authenticated to the right subscription before starting lab work.</p>
    `,
    faq: [
      {
        q: "Is AZ-900 required before AZ-104?",
        a: "No. AZ-900 is not a formal prerequisite for AZ-104. Microsoft does not require you to hold AZ-900 before scheduling AZ-104. If you have prior IT or Azure experience, you can book AZ-104 directly.",
      },
      {
        q: "How much does AZ-900 cost?",
        a: "AZ-900 costs $99 USD when booked through Pearson VUE. Pricing may vary by country.",
      },
      {
        q: "How much does AZ-104 cost?",
        a: "AZ-104 costs $165 USD when booked through Pearson VUE. Pricing may vary by country.",
      },
      {
        q: "How long should I study for AZ-104?",
        a: "Most candidates with some IT background pass AZ-104 in 60-80 hours of combined study and hands-on lab time over 8-10 weeks.",
      },
      {
        q: "Can I use Microsoft Learn for free to study for both exams?",
        a: "Yes. Microsoft Learn has free learning paths for both AZ-900 and AZ-104, including free practice assessments for each exam.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 2. AWS vs Azure Certification
  // -------------------------------------------------------------------------
  {
    slug: "aws-vs-azure-certification-which-better",
    title: "AWS vs Azure Certification: Which Is Better for Your Career? (2026)",
    metaDescription:
      "AWS vs Azure certification compared by job market, exam cost, study time, and career path. Practical breakdown for cloud engineers choosing a cert track in 2026.",
    h1: "AWS vs Azure certification: which track makes sense for you",
    cluster: "comparison",
    schemaType: "Article",
    targetKeyword: "aws vs azure certification which is better",
    publishedDate: "2026-05-07",
    modifiedDate: "2026-05-07",
    internalLinks: [
      { slug: "az-900-vs-az-104-which-first", label: "AZ-900 vs AZ-104: which to take first" },
      { slug: "aws-saa-c03-vs-azure-az-104", label: "AWS SAA-C03 vs AZ-104: side by side" },
      { slug: "cloud-engineer-roadmap-2026", label: "Cloud engineer roadmap 2026" },
      { slug: "best-az-104-course-2026", label: "Best AZ-104 courses in 2026" },
    ],
    content: `
<p>The question is not which cloud is better. It is which certification track gets you to your next job or your next pay band faster. That depends on where you work, where you want to work, and which cloud your employer runs. Here is how to figure it out.</p>

<h2>Market share and job volume</h2>
<p>AWS has the largest cloud market share globally, around 30-32% as of early 2026 per Synergy Research Group. Azure sits at roughly 21-23%. For raw job count, AWS certifications appear more frequently in job postings across the US and Asia-Pacific. In Europe, especially Germany, the Netherlands, and the Nordics, the gap is narrower: Azure is well-represented in enterprise and public sector roles because of Microsoft's existing ELA relationships.</p>

<p>If you are job-hunting in Europe and you come from a Microsoft stack background (Windows Server, Active Directory, Microsoft 365), Azure certification will directly translate to job requirements you will see. If you are in the US and targeting startups or tech companies, AWS has more volume.</p>

<h2>Cert track comparison</h2>
<table>
  <thead>
    <tr>
      <th>Dimension</th>
      <th>AWS track</th>
      <th>Azure track</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entry cert</td>
      <td>AWS Cloud Practitioner ($100)</td>
      <td>AZ-900 Azure Fundamentals ($99)</td>
    </tr>
    <tr>
      <td>Associate cert</td>
      <td>SAA-C03 Solutions Architect ($150)</td>
      <td>AZ-104 Administrator ($165)</td>
    </tr>
    <tr>
      <td>Professional cert</td>
      <td>AWS SAP-C02 ($300)</td>
      <td>AZ-305 Solutions Architect ($165)</td>
    </tr>
    <tr>
      <td>Renewal</td>
      <td>Every 3 years via recertification exam</td>
      <td>Every 12 months via free online assessment</td>
    </tr>
    <tr>
      <td>Study resources</td>
      <td>Stephane Maarek (Udemy), A Cloud Guru, Adrian Cantrill</td>
      <td>Microsoft Learn (free), John Savill (YouTube), Cloud Evolvers</td>
    </tr>
  </tbody>
</table>

<h2>Exam style and difficulty</h2>
<p>AWS associate exams tend to ask scenario-heavy questions that require selecting the most cost-effective or most resilient architecture from four options. The AWS exam environment heavily tests your knowledge of specific service capabilities and limits (S3 storage classes, EC2 instance families, RDS Multi-AZ vs read replicas). Studying for AWS requires memorising service specifics.</p>

<p>Azure exams mix scenario questions with interactive components: drag-and-drop, build-list, case studies, and active labs in some certifications. AZ-104 in particular has portal-based questions where you configure resources during the exam. Azure rewards hands-on familiarity over rote memorisation of service details.</p>

<h2>Cost to certify at the associate level</h2>
<ul>
  <li>AWS SAA-C03: $150 USD per attempt via <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" target="_blank" rel="noopener">Pearson VUE or PSI</a></li>
  <li>AZ-104: $165 USD per attempt via <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/" target="_blank" rel="noopener">Pearson VUE</a></li>
</ul>
<p>The cost difference is small. What matters more is pass rate on the first attempt. AZ-104 has a reputation for a higher first-attempt pass rate among candidates who complete the official lab exercises. AWS SAA-C03 has a 65-70% first-attempt pass rate based on community-reported data on r/AWSCertifications.</p>

<h2>Which to pick based on your situation</h2>
<p>Pick Azure if: you already work in a Microsoft-heavy environment, your employer uses Azure, you want a cert that transfers to architectural and governance roles quickly (AZ-305 builds directly on AZ-104), or you are in the Netherlands, Belgium, or Germany where Azure is dominant in enterprise.</p>

<p>Pick AWS if: you are targeting US job markets, you work at a company running AWS, you want broader market optionality globally, or you prefer the AWS service ecosystem.</p>

<p>Pick both eventually: in practice, cloud engineers with both AWS and Azure certs at the associate level are more hireable than those with only one. Budget 12-18 months to get both associate certs if you are serious about a cloud engineering career.</p>

<h2>CLI example: cross-cloud identity check</h2>
<pre><code># Azure: confirm current subscription context
az account show --output table

# AWS: confirm current identity and region
aws sts get-caller-identity
aws configure get region
</code></pre>
<p>If you are studying for both cloud tracks, running both clouds side by side on your local machine forces the muscle memory that makes the exams easier. Most engineers who hold both certs say that studying the second cloud was faster because the concepts transfer.</p>
    `,
    faq: [
      {
        q: "Is AWS or Azure certification more valuable?",
        a: "Neither is universally more valuable. AWS certs have more volume in the US and Asia-Pacific job markets. Azure certs are strong in European enterprise environments, especially in organizations already running Microsoft 365 and Windows Server workloads.",
      },
      {
        q: "Which is easier: AWS SAA-C03 or AZ-104?",
        a: "Most candidates find AZ-104 requires more hands-on lab practice, while AWS SAA-C03 requires more service-specific memorization. Both are associate-level and take 60-80 hours of preparation for most candidates.",
      },
      {
        q: "Do AWS certifications expire?",
        a: "Yes. AWS certifications expire after 3 years and require recertification. Azure role-based certifications renew annually via a free online assessment on Microsoft Learn.",
      },
      {
        q: "Should I get both AWS and Azure certs?",
        a: "Yes, if you have the time. Engineers with both associate-level certs at AWS and Azure are more hireable and command higher salaries than those with a single certification track.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 3. FinOps Certified Practitioner Study Guide
  // -------------------------------------------------------------------------
  {
    slug: "finops-certified-practitioner-study-guide-2026",
    title: "FinOps Certified Practitioner (FOCP) Study Guide 2026",
    metaDescription:
      "FOCP study guide for 2026: exam cost $300, 50 questions, 1 hour. Covers Inform, Optimize, Operate lifecycle phases. What to study, what to skip, and how to pass.",
    h1: "FinOps Certified Practitioner (FOCP) study guide for 2026",
    cluster: "study-guide",
    schemaType: "Course",
    targetKeyword: "finops certified practitioner study guide 2026",
    publishedDate: "2026-05-07",
    modifiedDate: "2026-05-07",
    internalLinks: [
      { slug: "finops-foundation-vs-google-cloud-cert", label: "FinOps Foundation vs Google Cloud certifications" },
      { slug: "cloud-engineer-roadmap-2026", label: "Cloud engineer roadmap 2026" },
      { slug: "aws-vs-azure-certification-which-better", label: "AWS vs Azure certification" },
      { slug: "cka-prep-for-ops-engineers", label: "CKA prep for ops engineers" },
    ],
    content: `
<p>The FinOps Certified Practitioner (FOCP) is the entry-level certification from the FinOps Foundation. It tests your understanding of the FinOps Framework, the lifecycle, key personas, and the principles that govern cloud financial management. It is not a technical exam. You will not write code, configure billing alerts, or answer questions about AWS Cost Explorer UI specifics. You will answer conceptual questions about how FinOps works as a practice.</p>

<h2>Exam facts</h2>
<ul>
  <li>Cost: <strong>$300 USD</strong> for the exam only, via <a href="https://learn.finops.org/finops-certified-practitioner-certification-exam" target="_blank" rel="noopener">learn.finops.org</a>. A self-paced course bundle is $599.</li>
  <li>Format: 50 multiple-choice questions, 1 hour, unproctored, online</li>
  <li>Passing score: 75% (37 of 50 correct)</li>
  <li>Attempts: 3 total (1 initial + 2 retakes)</li>
  <li>Validity: 2 years, then renewal required</li>
</ul>

<h2>What the exam covers</h2>
<p>The FOCP is built around the FinOps Framework, which organises cloud financial management into three lifecycle phases:</p>

<h3>Inform</h3>
<p>The Inform phase is about visibility. FinOps practitioners in this phase focus on tagging and allocation strategies, showback and chargeback, unit economics, and cloud cost data pipelines. Exam questions here test whether you understand what "shared cost allocation" means, how tagging hierarchies support chargeback, and what a unit cost metric represents (cost per transaction, cost per user, etc.).</p>

<h3>Optimize</h3>
<p>The Optimize phase is about reducing waste and right-sizing. Questions cover Reserved Instances vs Savings Plans, commitment-based discounts, rightsizing compute, identifying idle resources, and the trade-offs between flexibility and commitment. You are expected to know the general mechanics of each discount type, not the exact percentages for a specific EC2 instance family.</p>

<h3>Operate</h3>
<p>The Operate phase is about embedding FinOps into workflows and governance. Questions cover FinOps personas (practitioner, finance, engineering, leadership), the principles of FinOps (teams need to collaborate, everyone takes ownership), policy enforcement, and how FinOps integrates with product and engineering planning cycles.</p>

<h2>Study resources that actually work</h2>
<p>The primary free resource is the <a href="https://www.finops.org/framework/" target="_blank" rel="noopener">FinOps Foundation Framework documentation</a> at finops.org. Read the framework, the principles, and the personas sections. The exam draws questions directly from this content.</p>

<p>The free course materials on learn.finops.org are available without purchasing the exam bundle. Work through them. They map directly to the exam domain structure.</p>

<p>For practice questions: Udemy has multiple FOCP practice exam sets from community instructors. They are not officially endorsed by the FinOps Foundation but the question style is representative. Use them for timing practice, not for content discovery.</p>

<h2>Study plan: 3 weeks, self-paced</h2>
<ul>
  <li><strong>Week 1:</strong> Read the full FinOps Framework on finops.org. Focus on Principles, Personas, and the Lifecycle overview. Make flashcards for the six FinOps principles.</li>
  <li><strong>Week 2:</strong> Work through the Inform and Optimize domain content on learn.finops.org. Do one practice exam set and review every wrong answer against the framework docs.</li>
  <li><strong>Week 3:</strong> Operate domain, second practice exam set, and a final pass through anything you got wrong. Book the exam for the end of the week.</li>
</ul>

<h2>Who should take this cert</h2>
<p>The FOCP makes sense for: cloud architects who work with finance teams, finance analysts entering cloud cost management roles, platform engineers who own cloud spend dashboards, and anyone preparing for the FinOps Certified Professional (FOCP-P) which requires the practitioner cert as a prerequisite.</p>

<p>It does not make sense for: pure DevOps engineers with no cloud finance responsibility, or anyone who wants a cert that validates hands-on cloud configuration skills. This is a conceptual cert.</p>

<h2>FinOps tagging check: a practical example</h2>
<pre><code># Azure: list all resource groups and check for Cost Center tag
az group list --query "[].{name:name, costCenter:tags.CostCenter}" --output table

# AWS: find untagged EC2 instances
aws resourcegroupstaggingapi get-resources \
  --resource-type-filters ec2:instance \
  --tag-filters Key=CostCenter,Values="" \
  --output table
</code></pre>
<p>The Inform phase of the FinOps lifecycle starts with tagging hygiene. The commands above surface untagged resources, which is the first thing a real FinOps practitioner audits in a new environment.</p>
    `,
    faq: [
      {
        q: "How much does the FinOps Certified Practitioner exam cost?",
        a: "The FOCP exam costs $300 USD when purchased as an exam-only option from learn.finops.org. A self-paced course bundle that includes the exam costs $599.",
      },
      {
        q: "Is the FinOps Certified Practitioner exam hard?",
        a: "It is not technically difficult. The exam tests conceptual knowledge of the FinOps Framework, not hands-on cloud configuration. Most candidates with 2-3 weeks of focused study on the framework documentation pass on the first attempt.",
      },
      {
        q: "How long is the FOCP exam?",
        a: "The exam is 1 hour with 50 multiple-choice questions. It is unproctored and taken online.",
      },
      {
        q: "What resources does the FinOps Foundation provide for free?",
        a: "The FinOps Framework documentation at finops.org is free and covers all exam domains. The course materials on learn.finops.org are also available without purchasing the exam bundle.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 4. CKA Prep for Ops Engineers
  // -------------------------------------------------------------------------
  {
    slug: "cka-prep-for-ops-engineers",
    title: "CKA Exam Prep for Ops Engineers: What to Study and How (2026)",
    metaDescription:
      "CKA prep guide for ops engineers in 2026. Exam costs $445, covers 5 domains, 2 hours hands-on. What to study, what trips people up, and how to build speed under pressure.",
    h1: "CKA exam prep for ops engineers: the practical study guide",
    cluster: "study-guide",
    schemaType: "Course",
    targetKeyword: "kubernetes for ops engineers cka prep",
    publishedDate: "2026-05-07",
    modifiedDate: "2026-05-07",
    internalLinks: [
      { slug: "cloud-engineer-roadmap-2026", label: "Cloud engineer roadmap 2026" },
      { slug: "finops-certified-practitioner-study-guide-2026", label: "FinOps Certified Practitioner study guide" },
      { slug: "aws-vs-azure-certification-which-better", label: "AWS vs Azure certification" },
      { slug: "az-900-vs-az-104-which-first", label: "AZ-900 vs AZ-104 comparison" },
    ],
    content: `
<p>The CKA is a hands-on exam. You get a terminal, a set of Kubernetes clusters, and 17 tasks to complete in 2 hours. There are no multiple-choice questions. If you cannot type <code>kubectl</code> commands without looking them up, you will not pass.</p>

<h2>Exam facts</h2>
<ul>
  <li>Cost: <strong>$445 USD</strong>, includes one free retake. Via <a href="https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" target="_blank" rel="noopener">Linux Foundation / CNCF</a>.</li>
  <li>Format: Performance-based, 2 hours, remotely proctored browser-based terminal</li>
  <li>Kubernetes version: v1.34 (as of 2026)</li>
  <li>Open book: You can use kubernetes.io/docs during the exam. Nothing else.</li>
  <li>Passing score: 66%</li>
</ul>

<h2>The five domains and their weightings</h2>
<table>
  <thead>
    <tr>
      <th>Domain</th>
      <th>Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cluster Architecture, Installation and Configuration</td>
      <td>25%</td>
    </tr>
    <tr>
      <td>Services and Networking</td>
      <td>20%</td>
    </tr>
    <tr>
      <td>Troubleshooting</td>
      <td>30%</td>
    </tr>
    <tr>
      <td>Workloads and Scheduling</td>
      <td>15%</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>10%</td>
    </tr>
  </tbody>
</table>
<p>Troubleshooting is the biggest domain at 30%. Most candidates under-prepare for it. You need to be fast at diagnosing cluster issues: broken kubelet configs, crashlooping pods, misconfigured network policies, and storage mount failures.</p>

<h2>Study approach for ops engineers</h2>
<p>Ops engineers (sysadmin, SRE, platform engineering background) have an advantage on the troubleshooting domain because they already know how to read logs, diagnose service failures, and work methodically under time pressure. The disadvantage is that most ops engineers are less familiar with Kubernetes-specific objects like NetworkPolicy, PodDisruptionBudget, and CustomResourceDefinitions.</p>

<p>Recommended study path:</p>
<ul>
  <li><strong>Weeks 1-2:</strong> Killer.sh CKA simulator (included free with exam purchase). Do every task, read every explanation. This is the closest thing to the real exam environment.</li>
  <li><strong>Weeks 3-4:</strong> Mumshad Mannambeth's CKA course on Udemy is the most complete structured course available. Do the mock exams at the end of each section.</li>
  <li><strong>Week 5-6:</strong> Daily practice on a local <code>kind</code> or <code>minikube</code> cluster. Focus on speed: aim to complete any single task in under 4 minutes.</li>
</ul>

<h2>What trips ops engineers up</h2>
<p>The most common failure points for ops engineers taking the CKA:</p>
<ol>
  <li><strong>NetworkPolicy syntax.</strong> The YAML spec for NetworkPolicy is not intuitive. Practice writing NetworkPolicy manifests from scratch, not from copy-paste.</li>
  <li><strong>etcd backup and restore.</strong> This appears consistently. Know the <code>etcdctl snapshot save</code> and <code>etcdctl snapshot restore</code> commands with all required flags.</li>
  <li><strong>RBAC.</strong> ClusterRole vs Role, ClusterRoleBinding vs RoleBinding. The exam will ask you to create both and test them with <code>kubectl auth can-i</code>.</li>
  <li><strong>Node troubleshooting.</strong> You will get a broken node. Know how to SSH to it, check <code>kubelet</code> status with <code>systemctl</code>, and fix common config errors.</li>
</ol>

<h2>Essential kubectl commands to have at muscle memory</h2>
<pre><code># Create a pod imperatively (faster than writing YAML from scratch)
kubectl run nginx --image=nginx --dry-run=client -o yaml > pod.yaml

# Check what is wrong with a node
kubectl describe node &lt;node-name&gt;
kubectl get events --sort-by='.lastTimestamp'

# RBAC: create a role and bind it
kubectl create role reader --verb=get,list --resource=pods -n default
kubectl create rolebinding reader-binding --role=reader --user=jane -n default

# Verify RBAC
kubectl auth can-i get pods --as=jane -n default

# etcd backup
ETCDCTL_API=3 etcdctl snapshot save /tmp/backup.db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key

# Get all nodes and their status
kubectl get nodes -o wide
</code></pre>

<h2>The open-book strategy</h2>
<p>You can use kubernetes.io/docs during the exam. This is not a lifeline for topics you do not know; it is a reference for exact YAML syntax when you need it. If you are spending more than 90 seconds looking something up, you have not studied enough. Use the docs for: PersistentVolume/PersistentVolumeClaim YAML structure, NetworkPolicy examples, and StorageClass spec fields.</p>

<h2>Time management</h2>
<p>17 tasks, 120 minutes, means roughly 7 minutes per task. Higher-weighted tasks are worth more points. If a task is taking more than 10 minutes, flag it and move on. Come back at the end. Leaving a partially completed high-weight task is worse than leaving it blank and finishing three easier tasks.</p>
    `,
    faq: [
      {
        q: "How much does the CKA exam cost in 2026?",
        a: "The CKA exam costs $445 USD through the Linux Foundation and includes one free retake. A bundle with the THRIVE subscription is available for $625.",
      },
      {
        q: "How long does it take to prepare for the CKA?",
        a: "Most candidates with ops or sysadmin experience need 6-8 weeks of focused preparation. Plan for daily practice on a real Kubernetes cluster, not just reading.",
      },
      {
        q: "Can you use documentation during the CKA exam?",
        a: "Yes. You can access kubernetes.io/docs during the exam. You cannot use any other resources, and the time cost of looking things up is significant, so strong hands-on preparation is still required.",
      },
      {
        q: "What is the CKA passing score?",
        a: "The CKA passing score is 66%. The exam is performance-based with 17 tasks across 5 domains.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 5. Best AZ-104 Course 2026
  // -------------------------------------------------------------------------
  {
    slug: "best-az-104-course-2026",
    title: "Best AZ-104 Course in 2026: Ranked by What Actually Helps You Pass",
    metaDescription:
      "Best AZ-104 Azure Administrator courses in 2026 ranked by content quality, lab coverage, and pass rate. Includes free options and MCT-led courses for teams.",
    h1: "Best AZ-104 courses in 2026: ranked by what helps you pass",
    cluster: "best-x",
    schemaType: "ItemList",
    targetKeyword: "best az-104 course 2026",
    publishedDate: "2026-05-07",
    modifiedDate: "2026-05-07",
    internalLinks: [
      { slug: "az-900-vs-az-104-which-first", label: "AZ-900 vs AZ-104: which to take first" },
      { slug: "az-305-vs-az-104-exam-difficulty", label: "AZ-305 vs AZ-104: exam difficulty" },
      { slug: "aws-saa-c03-vs-azure-az-104", label: "AWS SAA-C03 vs AZ-104 compared" },
      { slug: "cloud-engineer-roadmap-2026", label: "Cloud engineer roadmap 2026" },
    ],
    content: `
<p>AZ-104 (Microsoft Azure Administrator) is the most popular Azure certification at the associate level. The exam costs $165 USD, tests five domains across 100 minutes, and includes interactive case-study questions. Getting the content delivery right matters: a course that is mostly video theory without labs will leave you unprepared for the question types you will actually see.</p>

<p>Here are the courses worth your time, ranked by real-world utility.</p>

<h2>1. Microsoft Learn (free)</h2>
<p>The official Microsoft Learn paths for AZ-104 are free and map directly to the exam objectives. There are 11 learning paths covering every domain. The built-in sandbox environments let you practice without a paid Azure subscription for many exercises.</p>
<p><strong>Best for:</strong> People who prefer reading over video and want to confirm they are studying exactly what the exam tests. The free practice assessment on Microsoft Learn is the best indicator of your readiness.</p>
<p><strong>Gap:</strong> No structured lab sequence. You have to assemble the lab exercises yourself from the <a href="https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/" target="_blank" rel="noopener">Microsoft Learning GitHub repo</a>.</p>

<h2>2. John Savill's AZ-104 Study Cram (free, YouTube)</h2>
<p>John Savill is a Microsoft employee and one of the most credible Azure educators on YouTube. His AZ-104 study cram is a single long-form video (4-5 hours) that covers every exam domain with clear visual explanations. It is not a full course, but it is the best exam-focused overview available for free.</p>
<p><strong>Best for:</strong> Final week review after you have done the structured study. Do not use this as your only study resource.</p>

<h2>3. Pluralsight AZ-104 path</h2>
<p>Pluralsight's AZ-104 learning path is well-structured, regularly updated, and includes skill assessments that tell you which domains you are weakest on before you sit the exam. The lab integration with Azure sandbox environments is better than most competitors.</p>
<p><strong>Best for:</strong> Teams with an existing Pluralsight subscription who want a structured track with measurable progress.</p>
<p><strong>Cost:</strong> Pluralsight subscription required (from $29/month).</p>

<h2>4. A Cloud Guru AZ-104</h2>
<p>A Cloud Guru (now part of Pluralsight) offers a dedicated AZ-104 course with hands-on labs in a real Azure environment. The course content is thorough and includes practice exams. Quality has improved since the Pluralsight acquisition.</p>
<p><strong>Best for:</strong> Candidates who want video instruction plus live lab environments without managing their own Azure subscription.</p>

<h2>5. MCT-led instructor course (Cloud Evolvers)</h2>
<p>An MCT-led course (Microsoft Certified Trainer) is the fastest way to prepare if you are training a team, have a deadline, or want structured feedback on lab exercises. The official Microsoft curriculum is delivered by a trainer who has passed the exam and works with Azure daily.</p>
<p><strong>Best for:</strong> Corporate teams, individuals with exam dates already booked, and anyone who does better with a live instructor than self-paced video.</p>
<p><a href="https://cloudevolvers.com/training" target="_blank" rel="noopener">Browse the Cloud Evolvers AZ-104 training catalog</a> for upcoming course dates and in-company options.</p>

<h2>What the best courses have in common</h2>
<p>Every course that reliably produces passing candidates covers these four things in depth:</p>
<ol>
  <li>Identity and governance (Entra ID, RBAC, policy, management groups)</li>
  <li>Storage (accounts, replication types, lifecycle management, access tiers)</li>
  <li>Compute (VMs, availability sets, scale sets, Azure Kubernetes Service basics)</li>
  <li>Networking (VNets, NSGs, peering, load balancers, Application Gateway)</li>
</ol>
<p>If a course you are evaluating does not include hands-on labs for all four of these, look elsewhere.</p>

<h2>Quick lab check: verify your understanding</h2>
<pre><code># Create a resource group (basic AZ-104 task)
az group create --name rg-exam-prep --location westeurope

# Assign a built-in role (identity domain)
az role assignment create \
  --assignee user@domain.com \
  --role "Contributor" \
  --scope /subscriptions/&lt;subscription-id&gt;/resourceGroups/rg-exam-prep

# List storage accounts (storage domain)
az storage account list --resource-group rg-exam-prep --output table
</code></pre>
<p>If these commands feel unfamiliar, your lab practice time is not yet sufficient. AZ-104 questions will assume you can do tasks like these without looking up the syntax.</p>
    `,
    faq: [
      {
        q: "Is Microsoft Learn enough to pass AZ-104?",
        a: "Microsoft Learn provides all the content you need to pass AZ-104, and it is free. The gap is hands-on lab practice. You need to complete the official lab exercises, ideally with a real Azure subscription or the GitHub-hosted lab guides.",
      },
      {
        q: "How long does the AZ-104 course take?",
        a: "Self-paced study typically takes 60-80 hours over 8-10 weeks. An instructor-led course condenses this to 4-5 days of intensive delivery.",
      },
      {
        q: "Does AZ-104 require a paid Azure subscription to study?",
        a: "You can complete many exercises using Microsoft Learn sandboxes without a paid subscription. For the full lab set, a free Azure account ($200 credit) or a paid subscription is recommended.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 6. Cloud Engineer Roadmap 2026
  // -------------------------------------------------------------------------
  {
    slug: "cloud-engineer-roadmap-2026",
    title: "Cloud Engineer Roadmap 2026: Skills, Certs, and Career Path",
    metaDescription:
      "Cloud engineer roadmap for 2026: which skills to build first, which certifications to get and in what order, and what the job market actually wants. No fluff.",
    h1: "Cloud engineer roadmap 2026: skills, certs, and where to start",
    cluster: "roadmap",
    schemaType: "Article",
    targetKeyword: "cloud engineer roadmap 2026",
    publishedDate: "2026-05-07",
    modifiedDate: "2026-05-07",
    internalLinks: [
      { slug: "az-900-vs-az-104-which-first", label: "AZ-900 vs AZ-104: which to take first" },
      { slug: "aws-vs-azure-certification-which-better", label: "AWS vs Azure certification compared" },
      { slug: "cka-prep-for-ops-engineers", label: "CKA prep for ops engineers" },
      { slug: "finops-certified-practitioner-study-guide-2026", label: "FinOps Certified Practitioner study guide" },
      { slug: "best-az-104-course-2026", label: "Best AZ-104 courses in 2026" },
    ],
    content: `
<p>Cloud engineering is not a single job. It spans infrastructure ops, security engineering, platform engineering, DevOps, and FinOps. The roadmap below is structured for someone starting from a sysadmin or on-premises networking background who wants to move into cloud roles in 2026. Adjust the entry point based on where you already are.</p>

<h2>Stage 1: foundation (0-3 months)</h2>
<p>The goal at stage 1 is to get comfortable with cloud fundamentals and pass a first cert to signal intent to employers.</p>

<ul>
  <li><strong>Pick one cloud first.</strong> Azure if you are in Europe or a Microsoft-heavy org. AWS if you are in the US or targeting startups. Do not try to learn both simultaneously at this stage.</li>
  <li><strong>Core skills:</strong> Networking basics (TCP/IP, subnetting, DNS, firewalls), Linux command line, scripting basics (Bash or PowerShell), and an understanding of virtualisation.</li>
  <li><strong>First cert:</strong> AZ-900 (if Azure) or AWS Cloud Practitioner (if AWS). These are 2-4 week commitments and cost under $100. They are not career-defining, but they confirm you know the vocabulary and signal commitment to a hiring manager.</li>
</ul>

<h2>Stage 2: associate level (3-9 months)</h2>
<p>This is the most important stage. The associate cert is what most job descriptions list as a requirement for cloud engineering roles.</p>

<ul>
  <li><strong>Azure track:</strong> AZ-104 (Azure Administrator). Cost $165. Tests identity, storage, compute, networking, and monitoring. Hands-on labs are required preparation.</li>
  <li><strong>AWS track:</strong> AWS SAA-C03 (Solutions Architect Associate). Cost $150. Tests secure, resilient, high-performing, and cost-optimised architectures.</li>
  <li><strong>Hands-on time:</strong> Budget at least 100 hours of real work in the cloud. Build a home lab, contribute to an employer project, or use free-tier accounts. Reading without building does not produce exam-ready skills.</li>
</ul>

<h2>Stage 3: specialisation (9-18 months)</h2>
<p>After the associate cert, the roadmap forks based on the role you are targeting.</p>

<h3>Infrastructure and platform engineering</h3>
<ul>
  <li>AZ-305 (Azure Solutions Architect Expert) or AWS SAP-C02 for architecture breadth</li>
  <li>Terraform Associate certification for Infrastructure as Code credibility</li>
  <li>CKA (Certified Kubernetes Administrator) if your target role involves container platforms</li>
</ul>

<h3>Security engineering</h3>
<ul>
  <li>AZ-500 (Azure Security Engineer) or AWS Security Specialty</li>
  <li>CompTIA Security+ as a baseline if coming from a non-security background</li>
</ul>

<h3>FinOps and cloud financial management</h3>
<ul>
  <li>FinOps Certified Practitioner (FOCP) from the FinOps Foundation. Cost $300. Conceptual, 50 questions, 1 hour.</li>
  <li>Relevant for roles that own cloud spend, operate cost dashboards, or present cloud cost data to finance teams.</li>
</ul>

<h3>DevOps and automation</h3>
<ul>
  <li>AZ-400 (DevOps Engineer Expert) for Azure-specific CI/CD pipelines</li>
  <li>GitHub Actions, Terraform, and Ansible skills are expected in most platform roles regardless of cert</li>
</ul>

<h2>Skills that matter more than certs (but need certs to signal them)</h2>
<p>The cert gets you the interview. These skills get you the job:</p>
<ul>
  <li>Infrastructure as Code: Terraform or Bicep, not just portal clicking</li>
  <li>Monitoring and observability: Azure Monitor / CloudWatch, log querying with KQL or Athena</li>
  <li>Networking: VPN gateways, peering, network security groups, DNS resolution across VNets</li>
  <li>Identity and access management: RBAC, Entra ID (Azure AD), service principals, managed identities</li>
  <li>Scripting: Bash and PowerShell, enough to automate deployments and parse JSON output from CLI tools</li>
</ul>

<h2>Salary benchmarks (Netherlands market, 2026)</h2>
<table>
  <thead>
    <tr>
      <th>Role</th>
      <th>Typical annual salary (EUR)</th>
      <th>Common certs required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Junior cloud engineer</td>
      <td>€45,000 - €60,000</td>
      <td>AZ-900 or AZ-104</td>
    </tr>
    <tr>
      <td>Cloud engineer (mid)</td>
      <td>€65,000 - €85,000</td>
      <td>AZ-104, AZ-305 or equivalent</td>
    </tr>
    <tr>
      <td>Senior cloud engineer</td>
      <td>€85,000 - €110,000</td>
      <td>AZ-305, AZ-500 or specialisation</td>
    </tr>
    <tr>
      <td>Cloud architect</td>
      <td>€100,000 - €130,000</td>
      <td>Expert-level certs, multi-cloud experience</td>
    </tr>
  </tbody>
</table>

<h2>Infrastructure as Code: start here</h2>
<pre><code># Terraform: initialise a new Azure project
terraform init

# Preview what will be created
terraform plan

# Deploy
terraform apply

# Bicep: deploy a resource group via Azure CLI
az deployment sub create \
  --location westeurope \
  --template-file main.bicep \
  --parameters @main.parameters.json
</code></pre>
<p>Every cloud engineering job description in 2026 lists Terraform or Bicep. If you can write a working module that deploys a VNet with subnets and NSGs, you are ahead of most candidates who only know the portal.</p>

<h2>How to structure 12 months</h2>
<ul>
  <li>Months 1-2: Foundation cert + core skills setup (Linux, networking, CLI tools)</li>
  <li>Months 3-6: Associate cert study + 100+ hours hands-on time</li>
  <li>Months 7-9: First job or role change using associate cert</li>
  <li>Months 10-12: Specialisation cert based on role (architecture, security, containers, or FinOps)</li>
</ul>
<p>This is aggressive but achievable. The engineers who compress this timeline do daily lab work and treat cert prep as a second job for 6-9 months. Consistency beats cramming every time.</p>
    `,
    faq: [
      {
        q: "What is the best first certification for cloud engineering?",
        a: "For Azure: start with AZ-104 (Azure Administrator) if you have IT experience, or AZ-900 if you are new to cloud. For AWS: start with SAA-C03. Skip entry-level fundamentals certs if you already work in IT.",
      },
      {
        q: "How long does it take to become a cloud engineer?",
        a: "With consistent daily study and hands-on lab work, most people with an IT background can reach a hireable cloud engineering level in 6-12 months. Without prior IT experience, plan for 12-18 months.",
      },
      {
        q: "Is Kubernetes required for cloud engineering?",
        a: "Not for all cloud engineering roles. Kubernetes is expected in platform engineering, SRE, and DevOps roles. It is less required for pure infrastructure or security engineering positions.",
      },
      {
        q: "Do I need both AWS and Azure certifications?",
        a: "Not immediately. Get one cloud's associate cert first, get a job, then add the second cloud. Engineers with both associate-level certs are more hireable and earn more, but chasing both simultaneously slows your progress.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 7. AWS SAA-C03 vs AZ-104
  // -------------------------------------------------------------------------
  {
    slug: "aws-saa-c03-vs-azure-az-104",
    title: "AWS SAA-C03 vs AZ-104: Which Associate Cert Should You Take? (2026)",
    metaDescription:
      "AWS SAA-C03 vs AZ-104 compared side by side: exam cost, domains, study time, question style, and job market value. Which associate cert is right for your situation.",
    h1: "AWS SAA-C03 vs AZ-104: direct comparison for 2026",
    cluster: "comparison",
    schemaType: "Article",
    targetKeyword: "aws saa-c03 vs azure az-104",
    publishedDate: "2026-05-07",
    modifiedDate: "2026-05-07",
    internalLinks: [
      { slug: "aws-vs-azure-certification-which-better", label: "AWS vs Azure certification overall" },
      { slug: "az-900-vs-az-104-which-first", label: "AZ-900 vs AZ-104: which to take first" },
      { slug: "best-az-104-course-2026", label: "Best AZ-104 courses in 2026" },
      { slug: "cloud-engineer-roadmap-2026", label: "Cloud engineer roadmap 2026" },
    ],
    content: `
<p>Both are associate-level certifications from their respective clouds. Both are legitimate career credentials that hiring managers recognise. The question is which one to prioritise given your current situation. Here is a direct comparison.</p>

<h2>Exam basics</h2>
<table>
  <thead>
    <tr>
      <th>Dimension</th>
      <th>AWS SAA-C03</th>
      <th>AZ-104</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cost</td>
      <td><a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" target="_blank" rel="noopener">$150 USD</a></td>
      <td><a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/" target="_blank" rel="noopener">$165 USD</a></td>
    </tr>
    <tr>
      <td>Duration</td>
      <td>130 minutes</td>
      <td>100 minutes</td>
    </tr>
    <tr>
      <td>Questions</td>
      <td>65 (50 scored)</td>
      <td>40-60 (varies)</td>
    </tr>
    <tr>
      <td>Format</td>
      <td>Multiple choice + multiple response</td>
      <td>Multiple choice, case study, interactive</td>
    </tr>
    <tr>
      <td>Passing score</td>
      <td>720/1000</td>
      <td>700/1000</td>
    </tr>
    <tr>
      <td>Renewal</td>
      <td>Every 3 years</td>
      <td>Every 12 months (free online)</td>
    </tr>
  </tbody>
</table>

<h2>Domain coverage</h2>
<p><strong>AWS SAA-C03</strong> covers four domains:</p>
<ul>
  <li>Design Secure Architectures (30%)</li>
  <li>Design Resilient Architectures (26%)</li>
  <li>Design High-Performing Architectures (24%)</li>
  <li>Design Cost-Optimised Architectures (20%)</li>
</ul>
<p>The exam is architecture-focused. Questions present a business scenario and ask you to choose the most appropriate AWS services and configuration. You need to know the nuances between EC2 instance types, S3 storage classes, RDS configurations, VPC design patterns, and IAM policies.</p>

<p><strong>AZ-104</strong> covers five domains:</p>
<ul>
  <li>Manage Azure Identities and Governance (15-20%)</li>
  <li>Implement and Manage Storage (15-20%)</li>
  <li>Deploy and Manage Azure Compute Resources (20-25%)</li>
  <li>Implement and Manage Virtual Networking (15-20%)</li>
  <li>Monitor and Maintain Azure Resources (10-15%)</li>
</ul>
<p>AZ-104 is administrator-focused. Questions test whether you can configure and manage specific Azure resources. You get interactive lab-style questions where you perform tasks in a simulated Azure portal.</p>

<h2>The key difference: architect vs administrator</h2>
<p>AWS SAA-C03 tests your ability to design solutions using AWS services. You are selecting the right tool for a given scenario. AZ-104 tests your ability to configure and manage Azure resources operationally. Both require hands-on familiarity, but the emphasis is different.</p>

<p>If your job involves deciding which cloud services to use, SAA-C03 maps better to your work. If your job involves deploying, configuring, and operating Azure resources daily, AZ-104 maps better.</p>

<h2>Study time and pass rates</h2>
<p>SAA-C03: Most candidates need 50-80 hours. Community-reported pass rates on first attempt are around 65-70%. Stephane Maarek's Udemy course is the most recommended resource by a significant margin based on r/AWSCertifications community data.</p>

<p>AZ-104: Most candidates need 60-80 hours including lab time. Candidates who complete all 11 official Microsoft lab exercises pass at higher rates than those who only study video courses. The interactive exam format rewards hands-on practice more than SAA-C03 does.</p>

<h2>Job market value</h2>
<p>In the Netherlands: AZ-104 is listed in more enterprise job descriptions than SAA-C03. The Netherlands is an Azure-heavy market due to Microsoft's strong enterprise presence and data centre availability in West Europe.</p>

<p>Globally: SAA-C03 is listed more frequently overall. AWS's larger market share means more raw job volume. SAA-C03 is listed as a requirement or preference in more job postings across the US and Asia-Pacific than AZ-104.</p>

<h2>Can you study for both at once?</h2>
<p>You can, but it is slower. The concepts overlap at about 40-50% (networking, identity, storage, compute fundamentals transfer between clouds). The service-specific knowledge is different and can confuse you during exam prep if you are switching between the two simultaneously. The standard recommendation is to get one cert, use it to get or advance in a job, then prepare for the second cert.</p>

<h2>Cross-cloud CLI comparison</h2>
<pre><code># AWS: list EC2 instances in a region
aws ec2 describe-instances \
  --query 'Reservations[].Instances[].{ID:InstanceId,State:State.Name,Type:InstanceType}' \
  --output table

# Azure: list VMs in a resource group
az vm list \
  --resource-group my-rg \
  --query "[].{name:name, size:hardwareProfile.vmSize, state:powerState}" \
  --output table
</code></pre>
<p>Running both CLIs side by side when you start your second cloud study is the fastest way to map familiar concepts to new syntax. The mental model transfers; the commands do not.</p>
    `,
    faq: [
      {
        q: "Is AWS SAA-C03 or AZ-104 harder?",
        a: "They are roughly equivalent in difficulty, but different in style. SAA-C03 requires more architectural decision-making and service memorization. AZ-104 requires more hands-on configuration practice and tests you through interactive questions.",
      },
      {
        q: "Which cert pays more: AWS SAA-C03 or AZ-104?",
        a: "Salary depends on the job market and role, not the specific cert. In the US, AWS-certified engineers often command higher salaries due to job volume. In Europe, Azure-certified engineers are competitive in the enterprise market.",
      },
      {
        q: "How long does AWS SAA-C03 take to study for?",
        a: "Most candidates need 50-80 hours of study. Stephane Maarek's Udemy course (around 27 hours of video) combined with practice exams from Tutorials Dojo is the most common and effective study combination.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 8. FinOps Foundation vs Google Cloud Cert
  // -------------------------------------------------------------------------
  {
    slug: "finops-foundation-vs-google-cloud-cert",
    title: "FinOps Foundation vs Google Cloud Certifications: Which to Choose? (2026)",
    metaDescription:
      "FinOps Foundation FOCP vs Google Cloud Professional certifications compared: cost, career use cases, domains, and which one makes more sense for your role in 2026.",
    h1: "FinOps Foundation vs Google Cloud certifications: what each one actually does for your career",
    cluster: "comparison",
    schemaType: "Article",
    targetKeyword: "finops foundation vs google cloud certifications",
    publishedDate: "2026-05-07",
    modifiedDate: "2026-05-07",
    internalLinks: [
      { slug: "finops-certified-practitioner-study-guide-2026", label: "FinOps Certified Practitioner study guide" },
      { slug: "aws-vs-azure-certification-which-better", label: "AWS vs Azure certification" },
      { slug: "cloud-engineer-roadmap-2026", label: "Cloud engineer roadmap 2026" },
      { slug: "cka-prep-for-ops-engineers", label: "CKA prep for ops engineers" },
    ],
    content: `
<p>These are not competing certs. A FinOps Foundation certification and a Google Cloud certification test different skills, target different roles, and serve different career purposes. Comparing them makes sense only if you are deciding where to invest your study time next.</p>

<h2>What each cert actually tests</h2>
<p>The FinOps Certified Practitioner (FOCP) tests your understanding of cloud financial management as a practice. It is vendor-neutral. The exam covers the FinOps lifecycle (Inform, Optimize, Operate), the principles of FinOps, and the personas who operate within a FinOps practice (finance, engineering, leadership). Cost: <strong>$300 USD</strong> via <a href="https://learn.finops.org/finops-certified-practitioner-certification-exam" target="_blank" rel="noopener">learn.finops.org</a>. 50 questions, 1 hour, unproctored.</p>

<p>Google Cloud Professional certifications test hands-on technical skills on Google Cloud Platform. The Professional Cloud Architect is the most recognised. Cost: <strong>$200 USD</strong> via <a href="https://cloud.google.com/learn/certification/cloud-architect" target="_blank" rel="noopener">Google Cloud</a>. It is a 2-hour exam with scenario-based questions and two case studies. You need 3+ years of industry experience and 1+ year managing Google Cloud solutions.</p>

<h2>Role fit</h2>
<table>
  <thead>
    <tr>
      <th>If your role is...</th>
      <th>Consider...</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cloud finance analyst</td>
      <td>FOCP</td>
      <td>Direct match to cloud cost visibility and allocation work</td>
    </tr>
    <tr>
      <td>GCP platform engineer</td>
      <td>Google Cloud Professional</td>
      <td>Validates the hands-on technical skills used daily</td>
    </tr>
    <tr>
      <td>Multi-cloud architect</td>
      <td>FOCP first, then GCP</td>
      <td>FinOps applies across all clouds; GCP cert adds technical depth</td>
    </tr>
    <tr>
      <td>FinOps team lead</td>
      <td>FOCP Practitioner + Professional</td>
      <td>FOCP-P is the advanced FinOps cert requiring the practitioner as prerequisite</td>
    </tr>
    <tr>
      <td>Cloud engineer switching to GCP</td>
      <td>Google Cloud Associate then Professional</td>
      <td>Associate Cloud Engineer at $200 is the right entry point before Professional</td>
    </tr>
  </tbody>
</table>

<h2>Career trajectories</h2>
<p>The FOCP opens doors to cloud financial management roles: FinOps analyst, cloud cost optimisation engineer, cloud economics lead. These roles are growing as organisations realise they are spending more on cloud than budgeted. The FinOps Foundation reports significant growth in FinOps practice adoption; the FOCP signals to employers that you understand the practice, not just the tooling.</p>

<p>Google Cloud Professional certifications signal technical depth on GCP specifically. Google Cloud's market share is around 10-12% globally, which means GCP-specific roles are less numerous than AWS or Azure roles. However, GCP dominates in specific sectors: data and analytics (BigQuery, Vertex AI), media and gaming, and some government deployments. If your target employer or sector is GCP-heavy, the Professional Cloud Architect is worth the study investment.</p>

<h2>Study time comparison</h2>
<p>FOCP: 2-3 weeks of part-time study reading the FinOps Framework documentation and completing the course materials on learn.finops.org. No hands-on lab required.</p>

<p>Google Cloud Professional Cloud Architect: 3-6 months for candidates new to GCP, assuming 10-15 hours of study per week. The exam includes two case studies (Mountkirk Games and Dress4Win are the published examples) that require deep scenario analysis. Hands-on time on GCP is required.</p>

<h2>Which one first?</h2>
<p>If you work across multiple cloud providers and finance is a significant part of your responsibilities: FOCP first. It applies to all clouds and requires less study time.</p>

<p>If you work primarily on GCP and want to advance technically: Google Cloud Professional Cloud Architect, starting with the Associate Cloud Engineer if you are not already familiar with GCP.</p>

<p>If neither cloud is your primary platform and you want a cert for a new job: look at the job descriptions for roles you are targeting and match your cert to what those descriptions ask for. Do not study for a cert that no job you want actually mentions.</p>

<h2>GCP cost visibility check</h2>
<pre><code># List GCP projects and their billing accounts
gcloud projects list --format="table(projectId, name, projectNumber)"

# Check current billing for a project
gcloud billing projects describe PROJECT_ID

# List resource usage in a BigQuery billing export (standard FinOps task)
# Run in BigQuery console:
-- SELECT service.description, SUM(cost) as total_cost
-- FROM \`billing_dataset.gcp_billing_export\`
-- WHERE DATE(usage_start_time) >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
-- GROUP BY service.description
-- ORDER BY total_cost DESC;
</code></pre>
<p>A real FinOps practitioner working with GCP uses BigQuery exports for cost analysis. This is the kind of task the FOCP assumes you understand conceptually, and the GCP Professional cert assumes you can execute technically.</p>
    `,
    faq: [
      {
        q: "Is the FinOps Certified Practitioner vendor-neutral?",
        a: "Yes. The FOCP is vendor-neutral and applies to cloud cost management practices on AWS, Azure, GCP, and any other cloud provider. It tests the FinOps Framework, not platform-specific tooling.",
      },
      {
        q: "How much does the Google Cloud Professional Cloud Architect exam cost?",
        a: "The Google Cloud Professional Cloud Architect exam costs $200 USD. All professional-level Google Cloud certifications are priced at $200.",
      },
      {
        q: "Can I take the FinOps cert without cloud engineering experience?",
        a: "Yes. The FOCP is a conceptual exam. Finance analysts, procurement managers, and business stakeholders with cloud cost responsibilities often take it without a technical cloud engineering background.",
      },
      {
        q: "Do FinOps certifications expire?",
        a: "The FOCP is valid for 2 years and requires renewal. The Google Cloud Professional certifications are valid for 2 years and require recertification by re-sitting the exam.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 9. AZ-305 vs AZ-104 Exam Difficulty
  // -------------------------------------------------------------------------
  {
    slug: "az-305-vs-az-104-exam-difficulty",
    title: "AZ-305 vs AZ-104: Exam Difficulty, Cost, and What You Actually Need to Know",
    metaDescription:
      "AZ-305 vs AZ-104 compared on difficulty, domains, cost, study time, and prerequisites. Honest breakdown for engineers deciding which Azure cert to pursue next.",
    h1: "AZ-305 vs AZ-104: difficulty, domains, and what each exam actually tests",
    cluster: "comparison",
    schemaType: "Article",
    targetKeyword: "az-305 vs az-104 exam difficulty",
    publishedDate: "2026-05-07",
    modifiedDate: "2026-05-07",
    internalLinks: [
      { slug: "az-900-vs-az-104-which-first", label: "AZ-900 vs AZ-104: which to take first" },
      { slug: "best-az-104-course-2026", label: "Best AZ-104 courses in 2026" },
      { slug: "aws-saa-c03-vs-azure-az-104", label: "AWS SAA-C03 vs AZ-104" },
      { slug: "cloud-engineer-roadmap-2026", label: "Cloud engineer roadmap 2026" },
    ],
    content: `
<p>AZ-305 is harder than AZ-104. That is the honest answer. The question is by how much, and whether the difficulty is the kind that rewards the study you have already done or requires a different approach entirely.</p>

<h2>The prerequisite relationship</h2>
<p>AZ-305 has a formal prerequisite: you must hold the Microsoft Certified: Azure Administrator Associate certification (earned by passing AZ-104) before you can earn the Azure Solutions Architect Expert credential. You can sit the AZ-305 exam without holding AZ-104, but you cannot claim the Expert certification until you have passed both.</p>
<p>Cost: Both exams cost <strong>$165 USD</strong> each via <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/" target="_blank" rel="noopener">Pearson VUE</a>. Earning the Expert certification requires passing AZ-104 + AZ-305, so budget $330 in exam fees at minimum.</p>

<h2>Domain comparison</h2>
<p><strong>AZ-104</strong> tests operational configuration across five domains:</p>
<ul>
  <li>Manage Azure Identities and Governance (15-20%)</li>
  <li>Implement and Manage Storage (15-20%)</li>
  <li>Deploy and Manage Azure Compute Resources (20-25%)</li>
  <li>Implement and Manage Virtual Networking (15-20%)</li>
  <li>Monitor and Maintain Azure Resources (10-15%)</li>
</ul>

<p><strong>AZ-305</strong> tests architectural design across four domains:</p>
<ul>
  <li>Design Identity, Governance, and Monitoring Solutions (25-30%)</li>
  <li>Design Data Storage Solutions (25-30%)</li>
  <li>Design Business Continuity Solutions (10-15%)</li>
  <li>Design Infrastructure Solutions (25-30%)</li>
</ul>

<h2>The fundamental difference in what each exam tests</h2>
<p>AZ-104 asks: "How do you configure this?" You get a task and you need to know the correct CLI command, the portal setting, or the correct policy assignment. Questions have a right answer and a wrong answer.</p>

<p>AZ-305 asks: "Given these constraints, which design is best and why?" Questions present a scenario with business requirements (cost target, compliance obligation, availability SLA) and ask you to select the most appropriate architecture. The challenge is that multiple options are plausible, and you need to identify which trade-offs the question is actually testing.</p>

<p>This is a fundamentally different cognitive skill. Many people who score well on AZ-104 underestimate AZ-305 because they expect the same kind of "do I know the right command" pattern. AZ-305 requires you to reason about trade-offs, not recall configuration details.</p>

<h2>Difficulty by the numbers</h2>
<p>Community-reported data from r/AzureCertifications suggests first-attempt pass rates of 70-75% for AZ-104 and 60-65% for AZ-305 among candidates who have done structured preparation. The gap widens for candidates who do not complete case study practice before sitting AZ-305.</p>

<h2>What you need to know for AZ-305 that AZ-104 does not prepare you for</h2>
<ul>
  <li><strong>Azure Well-Architected Framework.</strong> AZ-305 questions reference the five pillars (Reliability, Security, Cost Optimization, Operational Excellence, Performance Efficiency) and expect you to apply them to design choices.</li>
  <li><strong>Data storage design.</strong> Cosmos DB consistency levels, Azure SQL vs Synapse Analytics vs Azure Data Lake trade-offs, storage redundancy patterns for compliance requirements.</li>
  <li><strong>Business continuity architecture.</strong> RTO/RPO requirements mapped to specific Azure backup and disaster recovery configurations (Azure Site Recovery, backup vaults, geo-redundant storage).</li>
  <li><strong>Hybrid and multi-region design.</strong> ExpressRoute vs VPN Gateway trade-offs, Azure Front Door vs Traffic Manager, designing for latency vs cost vs availability.</li>
</ul>

<h2>Study resources for AZ-305</h2>
<p>The <a href="https://learn.microsoft.com/en-us/training/paths/microsoft-azure-architect-design-prerequisites/" target="_blank" rel="noopener">Microsoft Learn paths for AZ-305</a> are the starting point. John Savill's Azure Master Class on YouTube provides architecture-level explanations that map well to the AZ-305 question style. Case study practice is non-negotiable: download the official exam case studies from Microsoft Learn and practice structuring your reasoning before you sit the exam.</p>

<h2>Study time estimate</h2>
<p>Candidates who passed AZ-104 within the last 6 months typically need 40-60 hours of dedicated AZ-305 preparation. Candidates who earned AZ-104 more than a year ago and have not been doing hands-on architecture work should budget 80+ hours and refresh their AZ-104 knowledge before starting.</p>

<h2>Architecture decision example</h2>
<pre><code># AZ-305 tests decisions like this one:
# Bicep snippet for a geo-redundant storage account
# (Understanding when to choose this over LRS or ZRS is an AZ-305 topic)

resource storageAccount 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: 'stproddatawe001'
  location: 'westeurope'
  kind: 'StorageV2'
  sku: {
    name: 'Standard_RAGRS'  // Read-access geo-redundant. AZ-305 tests WHY you choose RAGRS vs GRS vs ZRS
  }
  properties: {
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    supportsHttpsTrafficOnly: true
  }
}
</code></pre>
<p>AZ-104 tests whether you can deploy a storage account. AZ-305 tests whether you know when to use <code>Standard_RAGRS</code> vs <code>Standard_ZRS</code> vs <code>Standard_GRS</code> given a specific RPO and compliance requirement. Study the trade-offs, not just the syntax.</p>
    `,
    faq: [
      {
        q: "Is AZ-305 harder than AZ-104?",
        a: "Yes. AZ-305 tests architectural design and trade-off reasoning, while AZ-104 tests operational configuration knowledge. Most candidates find AZ-305 harder, with lower first-attempt pass rates.",
      },
      {
        q: "Do I need AZ-104 before AZ-305?",
        a: "You need to hold the Azure Administrator Associate certification (by passing AZ-104) to earn the Azure Solutions Architect Expert certification. You can sit the AZ-305 exam without AZ-104 but cannot claim the Expert credential without both.",
      },
      {
        q: "How much does AZ-305 cost?",
        a: "AZ-305 costs $165 USD per attempt via Pearson VUE. Earning the Azure Solutions Architect Expert certification requires passing both AZ-104 and AZ-305, totaling $330 in exam fees.",
      },
      {
        q: "How long does it take to prepare for AZ-305?",
        a: "Candidates who recently passed AZ-104 typically need 40-60 hours of preparation for AZ-305. Allow more time if your AZ-104 knowledge is not recent or if you have limited hands-on architecture experience.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 10. Free AWS Practice Exams 2026
  // -------------------------------------------------------------------------
  {
    slug: "free-aws-practice-exams-2026",
    title: "Free AWS Practice Exams in 2026: What Is Actually Free and What Is Not",
    metaDescription:
      "Free AWS practice exams in 2026: official resources, community options, and which paid options are worth buying. Covers SAA-C03, CLF-C02, and other popular exams.",
    h1: "Free AWS practice exams in 2026: the honest list",
    cluster: "free-tools",
    schemaType: "ItemList",
    targetKeyword: "free aws practice exams 2026",
    publishedDate: "2026-05-07",
    modifiedDate: "2026-05-07",
    internalLinks: [
      { slug: "aws-vs-azure-certification-which-better", label: "AWS vs Azure certification" },
      { slug: "aws-saa-c03-vs-azure-az-104", label: "AWS SAA-C03 vs AZ-104" },
      { slug: "cloud-engineer-roadmap-2026", label: "Cloud engineer roadmap 2026" },
      { slug: "free-aws-practice-exams-2026", label: "Free AWS practice exams 2026" },
    ],
    content: `
<p>Most sites that appear at the top of search results for "free AWS practice exams" are not actually free. They give you 10-15 questions at no cost, then require a purchase. This list covers what is genuinely free, what is partially free, and what the paid options are worth.</p>

<h2>Genuinely free resources</h2>

<h3>AWS Skill Builder (official, free tier)</h3>
<p>AWS offers a free tier on <a href="https://explore.skillbuilder.aws/" target="_blank" rel="noopener">AWS Skill Builder</a> that includes official practice question sets for most certifications. The free Official Practice Question Sets are short (20-30 questions) but are authored by the same team that writes the real exam. The question style, difficulty, and explanation quality are the most reliable free resource available.</p>
<p>What is free: Official Practice Question Sets, digital courses, and learning plans for most certifications.</p>
<p>What requires the paid subscription ($29/month): Official Practice Exams (full-length, 65 questions, timed) and the Exam Prep Enhanced courses.</p>

<h3>ExamTopics community questions</h3>
<p>ExamTopics has community-contributed questions for most AWS certifications. These are not official, and some answers are disputed in the comments. However, the volume of questions is large and the community discussions often clarify the reasoning behind correct answers. For SAA-C03, the question bank is extensive.</p>
<p>Caution: Some questions are outdated or incorrect. Always verify answers against the <a href="https://docs.aws.amazon.com/" target="_blank" rel="noopener">AWS documentation</a> when in doubt. Do not treat ExamTopics as your primary study source.</p>

<h3>AWS free practice assessments</h3>
<p>For some certifications, AWS provides a free 20-question practice assessment directly on the certification page at aws.amazon.com. Check the specific certification page for the exam you are targeting.</p>

<h3>r/AWSCertifications community resources</h3>
<p>The AWSCertifications subreddit maintains a wiki with links to free study resources, including community-contributed practice questions and study guides. The "passed today" posts often include the specific resources that worked for that candidate.</p>

<h2>Partially free (limited without account)</h2>

<h3>Tutorials Dojo (Jon Bonso)</h3>
<p>Tutorials Dojo practice exams are considered the gold standard by the AWS certification community. They are not free, but they offer a limited number of free questions. The full practice exam sets cost around $15-20 each and are widely recommended. The explanations are thorough and include references to official AWS documentation.</p>
<p>For SAA-C03: the Tutorials Dojo practice exam set is the most commonly recommended purchase among candidates who passed on their first attempt.</p>

<h3>Whizlabs</h3>
<p>Whizlabs offers 15-20 free questions per exam and paid full practice exams. The quality is acceptable but below Tutorials Dojo for most AWS exams based on community feedback.</p>

<h2>How to use practice exams effectively</h2>
<ol>
  <li>Do not start practice exams until you have covered the exam content. Practice exams reveal gaps; they do not fill them.</li>
  <li>Review every wrong answer against the official AWS documentation. Not against other practice exam explanations, against the source docs.</li>
  <li>If you are getting below 65% on practice exams after studying, you need more content coverage, not more practice exams.</li>
  <li>If you are consistently getting 80%+ on practice exams, book your real exam. Over-preparing with practice questions creates false confidence in specific questions rather than real understanding.</li>
</ol>

<h2>The free study plan for AWS SAA-C03</h2>
<p>This is achievable at zero cost beyond the $150 exam fee:</p>
<ol>
  <li><strong>Week 1-2:</strong> Stephane Maarek's SAA-C03 course on Udemy (frequently on sale for $10-15). Not free, but the most recommended paid course.</li>
  <li><strong>Week 3-4:</strong> Adrian Cantrill's free SAA-C03 demos on GitHub/YouTube for hands-on context.</li>
  <li><strong>Week 5:</strong> Official Practice Question Sets on AWS Skill Builder (free tier). All incorrect answers reviewed against AWS docs.</li>
  <li><strong>Week 6:</strong> ExamTopics community questions, cross-referencing disputed answers with AWS documentation.</li>
</ol>

<h2>Check your AWS exam readiness</h2>
<pre><code># Confirm your AWS CLI is configured correctly before labs
aws sts get-caller-identity

# List available practice exams on Skill Builder (requires browser)
# Direct URL: https://explore.skillbuilder.aws/learn/catalog?ct=ft&amp;search=practice+exam

# Check your current certification status
aws certification get-candidate-summary
# Note: this command requires the AWS Certification CLI, not standard AWS CLI
</code></pre>

<h2>Is paying for practice exams worth it?</h2>
<p>For SAA-C03: yes. The Tutorials Dojo set at $15-20 is the most cost-effective exam prep investment after your study course. The pass rate correlation is strong enough that the community consistently recommends it. A $20 purchase on a practice exam is cheaper than a $150 retake.</p>
<p>For simpler exams like AWS Cloud Practitioner (CLF-C02): the free official practice question set from AWS Skill Builder is probably sufficient if you have done a full course.</p>
    `,
    faq: [
      {
        q: "Are there truly free AWS practice exams?",
        a: "Yes. AWS Skill Builder offers official Practice Question Sets (20-30 questions) for free for most certifications. ExamTopics has a large community-contributed question bank that is also free. Neither is equivalent to a full practice exam, but both are legitimate free resources.",
      },
      {
        q: "What is the best free resource for AWS SAA-C03 practice?",
        a: "The official AWS Skill Builder free Practice Question Sets are the most reliable free resource. For volume of questions, ExamTopics has more, but verify answers against AWS documentation since community answers are sometimes incorrect.",
      },
      {
        q: "How many practice exams should I do before the real AWS exam?",
        a: "Two to three full-length practice exams is the standard recommendation. Focus on reviewing every wrong answer against official documentation. More practice exams without deep review of wrong answers is less effective than fewer exams with thorough follow-up.",
      },
      {
        q: "Is Tutorials Dojo worth buying for AWS practice exams?",
        a: "Yes, for SAA-C03 and other associate-level exams. The Tutorials Dojo practice exam sets cost $15-20 each and are consistently recommended by candidates who passed on their first attempt. The explanations reference official AWS documentation and are well-maintained.",
      },
    ],
  },
];

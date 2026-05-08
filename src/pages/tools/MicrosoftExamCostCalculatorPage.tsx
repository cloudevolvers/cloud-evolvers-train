import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ChalkboardTeacher } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, Lede } from '@/components/editorial';
import { SEO } from '@/components/SEO';
import { CostResultCard, type CostBreakdown } from '@/components/tools/CostResultCard';
import { RelatedTools } from '@/components/tools/RelatedTools';
import {
  CERT_PATHS,
  COURSE_HOURS_PER_DAY,
  expectedExamFee,
  renewalsCost,
  type CertPath,
} from '@/data/tools/microsoft-cert-paths';

function fmtUsd(n: number): string {
  return `$${Math.round(n).toLocaleString('en-US')}`;
}

function selfStudyBreakdown(cert: CertPath, hourlyRate: number, years: number): CostBreakdown {
  const baseFee = cert.examFeeUsd;
  const expected = expectedExamFee(cert.examFeeUsd, cert.passRateSelfStudy);
  const retake = expected - baseFee;
  const time = cert.selfStudyHours * hourlyRate;
  const renewals = renewalsCost(years, cert.renewalYears);
  return {
    label: 'Self-study path',
    examFees: baseFee,
    retakeRisk: retake,
    timeCost: time,
    materialsOrCourse: cert.studyMaterialsUsd,
    renewals,
    total: baseFee + retake + time + cert.studyMaterialsUsd + renewals,
    hours: cert.selfStudyHours,
  };
}

function courseBreakdown(cert: CertPath, hourlyRate: number, years: number): CostBreakdown {
  const baseFee = cert.examFeeUsd;
  const expected = expectedExamFee(cert.examFeeUsd, cert.passRateCourse);
  const retake = expected - baseFee;
  const courseHours = cert.courseDurationDays * COURSE_HOURS_PER_DAY;
  const time = courseHours * hourlyRate;
  const renewals = renewalsCost(years, cert.renewalYears);
  return {
    label: 'Structured course path',
    examFees: baseFee,
    retakeRisk: retake,
    timeCost: time,
    materialsOrCourse: cert.courseFeeUsd,
    renewals,
    total: baseFee + retake + time + cert.courseFeeUsd + renewals,
    hours: courseHours,
  };
}

export function MicrosoftExamCostCalculatorPage() {
  const [certId, setCertId] = useState<string>(CERT_PATHS[0].id);
  const [hourlyRate, setHourlyRate] = useState<number>(50);
  const [years, setYears] = useState<number>(3);

  const cert = useMemo(() => CERT_PATHS.find((c) => c.id === certId) ?? CERT_PATHS[0], [certId]);
  const self = useMemo(() => selfStudyBreakdown(cert, hourlyRate, years), [cert, hourlyRate, years]);
  const course = useMemo(() => courseBreakdown(cert, hourlyRate, years), [cert, hourlyRate, years]);

  const delta = course.total - self.total;
  const deltaPct = self.total > 0 ? Math.round((delta / self.total) * 100) : 0;
  const yearsLabel = `${years}-year`;
  const verdict = delta > 0
    ? `Self-study saves ${fmtUsd(Math.abs(delta))} on paper but costs ${self.hours} hours of your time. The course passes faster and costs ${Math.abs(deltaPct)}% more all-in.`
    : `The structured course is cheaper than self-study at this hourly rate by ${fmtUsd(Math.abs(delta))}.`;

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO
        title="Microsoft Exam Cost Calculator - Self-study vs Course Total Cost"
        description="Free calculator for the 3-year total cost of any Microsoft certification path. Includes exam vouchers, retake risk, training spend, time value, and renewal cycle."
        canonical="/tools/microsoft-exam-cost-calculator"
      />

      <Wrap narrow>
        <section className="pt-20 sm:pt-28 pb-12">
          <nav className="text-sm text-black/60 mb-6">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/tools" className="hover:text-black">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-black">Microsoft exam cost calculator</span>
          </nav>

          <Eyebrow>Free tool · 3-year TCO</Eyebrow>
          <Display as="h1" size="md" className="mt-3 mb-4">
            Microsoft exam cost calculator
          </Display>
          <Lede className="mb-10">
            The honest 3-year cost of any Microsoft certification path. Vouchers, retake risk, training spend, time value, and renewals, side by side.
          </Lede>

          <section className="rounded-2xl border border-black/[0.08] bg-white p-6 mb-10">
            <h2 className="text-lg font-semibold mb-5">Your inputs</h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cert" className="block text-sm font-medium mb-2">
                  Certification path
                </label>
                <select
                  id="cert"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  className="w-full rounded-lg border border-black/[0.15] bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[color:var(--ed-accent)]"
                >
                  {CERT_PATHS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.examCode} · {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block text-sm font-medium mb-2">Years to project</span>
                <div className="flex gap-2">
                  {[1, 2, 3].map((y) => (
                    <label
                      key={y}
                      className={`flex-1 cursor-pointer rounded-lg border px-3 py-2 text-center text-sm font-medium transition-colors ${
                        years === y
                          ? 'border-[color:var(--ed-accent)] bg-[color:var(--ed-accent)]/[0.08] text-[color:var(--ed-accent)]'
                          : 'border-black/[0.15] bg-white text-black/70 hover:border-black/[0.3]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="years"
                        value={y}
                        checked={years === y}
                        onChange={() => setYears(y)}
                        className="sr-only"
                      />
                      {y} {y === 1 ? 'year' : 'years'}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="rate" className="flex items-center justify-between text-sm font-medium mb-2">
                <span>Hourly value of your time</span>
                <span className="font-mono text-[color:var(--ed-accent)]">${hourlyRate}/hr</span>
              </label>
              <input
                id="rate"
                type="range"
                min={25}
                max={200}
                step={5}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-[color:var(--ed-accent)]"
              />
              <div className="flex justify-between text-xs text-black/50 mt-1 font-mono">
                <span>$25</span>
                <span>$200</span>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-1">
              {cert.examCode} · {cert.name}
            </h2>
            <p className="text-sm text-black/70 mb-5">{verdict}</p>

            <div className="grid gap-4 md:grid-cols-2">
              <CostResultCard
                breakdown={self}
                passRate={cert.passRateSelfStudy}
                icon={<BookOpen size={20} weight="duotone" />}
                materialsLabel="Books and practice tests"
                yearsLabel={yearsLabel}
              />
              <CostResultCard
                breakdown={course}
                passRate={cert.passRateCourse}
                highlight
                icon={<ChalkboardTeacher size={20} weight="duotone" />}
                materialsLabel="Course fee"
                yearsLabel={yearsLabel}
              />
            </div>

            <div className="mt-5 rounded-xl bg-black/[0.03] p-4 text-sm">
              <span className="text-black/70">Difference: </span>
              <span className="font-mono font-medium">
                {delta >= 0 ? '+' : ''}{fmtUsd(delta)} ({deltaPct >= 0 ? '+' : ''}{deltaPct}%)
              </span>
              <span className="text-black/60"> on the course path</span>
            </div>
          </section>

          <section className="mb-10 rounded-2xl border border-black/[0.08] bg-white p-6">
            <h2 className="text-lg font-semibold mb-3">Why courses look more expensive but often are not</h2>
            <ul className="space-y-2.5 text-sm text-black/80">
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--ed-accent)] mt-1">·</span>
                Self-study assumes you find the right materials. In practice, candidates buy two or three books before landing on one that maps to the current exam.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--ed-accent)] mt-1">·</span>
                Around 55% of cold first attempts at AZ-104 fail. Microsoft does not publish this, but exam prep providers consistently report it.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--ed-accent)] mt-1">·</span>
                Time cost compounds. Every hour spent self-studying is an hour not earning, billing, or with family.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[color:var(--ed-accent)] mt-1">·</span>
                Most enterprise candidates need verified skills, not a paper pass. Labs are where that verification happens, and they come with structured courses.
              </li>
            </ul>
          </section>

          <RelatedTools currentSlug="microsoft-exam-cost-calculator" />

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/training"
              className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--ed-accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              See our training catalogue
              <ArrowRight size={14} weight="bold" />
            </Link>
            <Link
              to="/tools"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.15] bg-white px-5 py-2.5 text-sm font-medium hover:border-black/[0.3]"
            >
              More tools
            </Link>
          </div>
        </section>
      </Wrap>
    </div>
  );
}

export default MicrosoftExamCostCalculatorPage;

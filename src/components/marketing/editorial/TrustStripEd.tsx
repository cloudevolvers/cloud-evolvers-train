import { Wrap } from '@/components/editorial';
import { useTranslations } from '@/hooks/use-translations';

export function TrustStripEd() {
  const { isDutch } = useTranslations();

  const items = isDutch
    ? [
        { k: 'MCT', v: 'Microsoft Certified Trainer' },
        { k: 'Partner', v: 'Microsoft Solutions Partner via Spot Cloud' },
        { k: 'Levering', v: 'Live, door de trainer zelf' },
        { k: 'Hertest', v: 'Examen-hertest meegenomen' },
      ]
    : [
        { k: 'MCT', v: 'Microsoft Certified Trainer' },
        { k: 'Partner', v: 'Microsoft Solutions Partner via Spot Cloud' },
        { k: 'Delivery', v: 'Live, taught by the trainer' },
        { k: 'Retake', v: 'Certification retake included' },
      ];

  return (
    <section className="bg-[color:var(--ed-bg-2)] border-y border-[color:var(--ed-rule)]">
      <Wrap>
        <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[color:var(--ed-rule)]">
          {items.map((it, i) => (
            <div
              key={it.k}
              className={`py-8 ${i > 0 ? 'pl-6' : ''} ${i < items.length - 1 ? 'pr-6' : ''}`}
            >
              <dt className="ed-eyebrow text-[color:var(--ed-ink-3)]">{it.k}</dt>
              <dd className="mt-2 text-[15px] text-[color:var(--ed-ink)] leading-snug">
                {it.v}
              </dd>
            </div>
          ))}
        </dl>
      </Wrap>
    </section>
  );
}

import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { getTranslations } from '@/utils/i18n';

interface CloudEvolversGeographicFocusProps {
  t: ReturnType<typeof getTranslations>;
}

export function CloudEvolversGeographicFocus({ t }: CloudEvolversGeographicFocusProps) {
  return (
    <section className="bg-emerald-50/5 backdrop-blur-sm border-b border-emerald-500/20 py-8">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            {t.geographic?.servingCustomers || "Primarily serving customers in Netherlands, Belgium and UK"}
          </p>
          <div className="flex justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <ReactCountryFlag
                countryCode="NL"
                svg
                style={{
                  width: '2rem',
                  height: '2rem'
                }}
                title={t.geographic?.netherlands || "Netherlands"}
              />
              <span className="text-sm font-medium">{t.geographic?.netherlands || "Netherlands"}</span>
            </div>
            <div className="flex items-center gap-2">
              <ReactCountryFlag
                countryCode="BE"
                svg
                style={{
                  width: '2rem',
                  height: '2rem'
                }}
                title={t.geographic?.belgium || "Belgium"}
              />
              <span className="text-sm font-medium">{t.geographic?.belgium || "Belgium"}</span>
            </div>
            <div className="flex items-center gap-2">
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{
                  width: '2rem',
                  height: '2rem'
                }}
                title={t.geographic?.uk || "United Kingdom"}
              />
              <span className="text-sm font-medium">{t.geographic?.uk || "UK"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

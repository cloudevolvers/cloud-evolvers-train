import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllServices } from '@/data/services';
import { useNavigate } from 'react-router-dom';
import { useTranslations } from '@/hooks/use-translations';
import {
  ArrowRight,
  CheckCircle,
  EnvelopeSimple,
  GraduationCap
} from '@phosphor-icons/react';
import { getServiceIcon } from '@/utils/service-icons';
import { SEO, PAGE_SEO } from '@/components/SEO';
import { PageHeroBg } from '@/components/PageHeroBg';

export default function ServicesPage() {
  const { t, language } = useTranslations();
  const sp = t.servicesPage;
  const services = getAllServices(language);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pt-28 md:pt-32 bg-background">
      <SEO {...PAGE_SEO.services} />
      <PageHeroBg />
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-[120rem] mx-auto">
            <div className="text-center mb-14 lg:mb-18">
              <h1 className="text-foreground font-bold mb-6 leading-tight text-3xl md:text-4xl lg:text-5xl">
                {sp?.title || 'Our Services'}
              </h1>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
                {sp?.subtitle || 'Comprehensive cloud engineering and consulting services to help your organization succeed in the digital transformation journey.'}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service) => {
                const IconComponent = getServiceIcon(service.icon);
                return (
                  <Card
                    key={service.id}
                    className="bg-card border-border h-full transition-all duration-200 cursor-pointer hover:border-foreground/20 hover:shadow-md group overflow-hidden"
                    onClick={() => navigate(`/services/${service.id}`)}
                  >
                    {/* Service Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="p-2.5 bg-card/90 backdrop-blur-sm rounded-xl border border-border">
                          <IconComponent size={20} className="text-foreground/70" weight="regular" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-4 pb-5 space-y-3">
                      <h3 className="text-foreground font-semibold text-lg leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <Badge
                            key={featureIndex}
                            variant="secondary"
                            className="text-xs py-1 px-2.5 bg-muted/60 text-muted-foreground border-0 font-normal"
                          >
                            <CheckCircle size={10} className="mr-1 text-emerald-500" weight="fill" />
                            {feature}
                          </Badge>
                        ))}
                        {service.features.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs py-1 px-2.5 bg-background/50 text-muted-foreground border-border"
                          >
                            +{service.features.length - 3} {language === 'nl' ? 'meer' : 'more'}
                          </Badge>
                        )}
                      </div>

                      <div className="pt-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-foreground p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-300"
                        >
                          {language === 'nl' ? 'Meer informatie' : 'Learn more'}
                          <ArrowRight size={14} className="ml-1.5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-10 lg:p-14 text-center">
                <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-4">
                  {sp?.contact?.title || 'Ready to Get Started?'}
                </h2>

                <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  {sp?.contact?.description || 'Contact us today to discuss how our services can help your organization achieve its cloud transformation goals.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-black hover:bg-black/90 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black"
                    onClick={() => navigate('/contact')}
                  >
                    <EnvelopeSimple size={18} className="mr-2" />
                    {sp?.contact?.contactUs || 'Contact Us'}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border text-foreground hover:bg-muted/50"
                    onClick={() => navigate('/training')}
                  >
                    <GraduationCap size={18} className="mr-2" />
                    {sp?.contact?.viewTraining || 'View Training Courses'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

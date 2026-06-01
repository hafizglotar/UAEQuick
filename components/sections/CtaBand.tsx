import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { company, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';

export function CtaBand({
  title = 'Need Help in Dubai Today?',
  subtitle = 'One call. Same-day visit. Fixed price. 30-day guarantee.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-brand to-brand-dark py-14 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-white/90">{subtitle}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href={`tel:${PHONE_E164}`} variant="white" size="lg" external>
              📞 Call {PHONE_DISPLAY}
            </Button>
            <Button href={company.whatsappUrl} variant="green" size="lg" external>
              💬 WhatsApp
            </Button>
            <Button href="/quote" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

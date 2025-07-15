
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '1',
    title: 'Sign Up',
    description: 'Freelancers and clients create accounts in minutes.',
  },
  {
    number: '2',
    title: 'Post or Browse Jobs',
    description: 'Freelancers post services; clients search for talent.',
  },
  {
    number: '3',
    title: 'Collaborate & Pay',
    description: 'Chat, submit work, confirm completion, and pay securely.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">How It Works</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Getting started with Freelance Flow is simple. Follow these three easy steps.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-12 mt-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-400/20 text-teal-600 dark:text-teal-400 border-2 border-teal-500/30">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                <p className="text-foreground/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="h-12 text-base px-6">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}

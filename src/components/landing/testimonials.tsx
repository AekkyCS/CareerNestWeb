
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: 'This app made it so easy to find clients and get paid on time!',
    name: 'Jane Doe',
    role: 'Freelancer',
    avatar: 'JD',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'woman portrait',
  },
  {
    quote: 'The best platform for hiring skilled professionals. Highly recommended!',
    name: 'John Smith',
    role: 'Client',
    avatar: 'JS',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'man portrait',
  },
  {
    quote: 'A seamless experience from start to finish. The secure payment system is a game-changer.',
    name: 'Sarah Lee',
    role: 'Freelancer',
    avatar: 'SL',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'person smiling',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">What Our Users Say</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Real stories from real freelancers and clients who have found success on our platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 lg:gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-primary/20 bg-transparent shadow-sm">
              <CardContent className="p-6">
                <blockquote className="text-lg font-semibold leading-snug">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-4 flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-accent">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-foreground/80">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

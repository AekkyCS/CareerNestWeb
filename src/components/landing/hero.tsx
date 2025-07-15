
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Apple, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                Connect, Work, Succeed: Your Freelance Journey Starts Here
              </h1>
              <p className="max-w-[600px] text-foreground/80 md:text-xl">
                A platform for freelancers to showcase their skills and for clients to hire top talent.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="h-12 text-base px-6">
                <Apple className="mr-2 h-5 w-5" />
                Download on iOS
              </Button>
              <Button size="lg" variant="outline" className="h-12 text-base px-6 border-primary/50 hover:bg-primary/5">
                <Smartphone className="mr-2 h-5 w-5" />
                Download on Android
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x600.png"
            width="600"
            height="600"
            alt="App Mockup"
            data-ai-hint="app phone"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}

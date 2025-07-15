
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Apple, Smartphone } from 'lucide-react';

export default function Download() {
  return (
    <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-primary/5 to-transparent">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">
            Download the App Now
          </h2>
          <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Take your freelance career to the next level. Get started today!
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
                 <Button size="lg" className="w-full h-12 text-base px-6">
                    <Apple className="mr-2 h-5 w-5" />
                    Download on iOS
                </Button>
                <Button size="lg" variant="outline" className="w-full h-12 text-base px-6 border-primary/50 hover:bg-primary/5">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Download on Android
                </Button>
            </div>
            <div className="flex justify-center pt-4">
                 <Image
                    src="https://placehold.co/200x200.png"
                    width="200"
                    height="200"
                    alt="QR Code for app download"
                    data-ai-hint="qr code"
                    className="rounded-lg"
                 />
            </div>
        </div>
      </div>
    </section>
  );
}


import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LayoutDashboard, MessageSquare, Lock, FileText, Search } from 'lucide-react';

const features = [
  {
    icon: <LayoutDashboard className="h-8 w-8 text-teal-500" />,
    title: 'Freelancer Dashboard',
    description: 'Track earnings, projects, and notifications in one place.',
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-accent" />,
    title: 'Messages with Job Delivery',
    description: 'Chat, submit work, confirm completion, and pay directly in-app.',
  },
  {
    icon: <Lock className="h-8 w-8 text-teal-500" />,
    title: 'Secure Payments',
    description: 'Pay freelancers securely with multiple options.',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Job Posting',
    description: 'Freelancers can post services easily with detailed portfolios.',
  },
  {
    icon: <Search className="h-8 w-8 text-teal-500" />,
    title: 'Search & Hire',
    description: 'Clients can browse and hire freelancers with advanced filters.',
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Why Choose Our App?</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the features that make TalentHub the ultimate tool for your freelance career.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader className="flex flex-col items-center text-center gap-4">
                {feature.icon}
                <div className="space-y-1">
                    <CardTitle className="text-primary">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

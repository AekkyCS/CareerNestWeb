
import Link from 'next/link';
import { Briefcase, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="#" className="flex items-center space-x-2" prefetch={false}>
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-white font-headline">Freelance Flow</span>
            </Link>
            <p className="text-sm">
              Connect, work, and succeed with the ultimate platform for freelancers and clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-white" prefetch={false}>About</Link></li>
                <li><Link href="#" className="hover:text-white" prefetch={false}>Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Legal</h4>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-white" prefetch={false}>Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white" prefetch={false}>Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <Link href="#" className="hover:text-white" aria-label="Twitter" prefetch={false}><Twitter className="h-6 w-6" /></Link>
            <Link href="#" className="hover:text-white" aria-label="Facebook" prefetch={false}><Facebook className="h-6 w-6" /></Link>
            <Link href="#" className="hover:text-white" aria-label="Instagram" prefetch={false}><Instagram className="h-6 w-6" /></Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Freelance Flow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

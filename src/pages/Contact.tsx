
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-center text-gray-700 mb-10 max-w-2xl mx-auto">
            Have a question about our books, submissions, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    className="min-h-[150px]" 
                  />
                </div>
                
                <Button className="bg-charcoal hover:bg-charcoal/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cream p-3 rounded-md mr-4">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Book Lane<br />
                      Brooklyn, NY 11201<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cream p-3 rounded-md mr-4">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      +1 (212) 456-7890<br />
                      Monday to Friday, 9am to 5pm EST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cream p-3 rounded-md mr-4">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@quillandpage.com<br />
                      Submissions: submissions@quillandpage.com<br />
                      Press: press@quillandpage.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cream p-3 rounded-md mr-4">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday to Friday: 9am - 5pm EST<br />
                      Saturday: 10am - 3pm EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-cream p-3 rounded-full hover:bg-gold hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-cream p-3 rounded-full hover:bg-gold hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-cream p-3 rounded-full hover:bg-gold hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-cream p-3 rounded-full hover:bg-gold hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-2xl font-semibold mb-6 text-center">Visit Our Bookstore</h2>
          <div className="bg-white p-2 rounded-md shadow-md">
            <div className="h-[400px] w-full bg-gray-200 rounded">
              {/* Replace with actual map - Using placeholder for now */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

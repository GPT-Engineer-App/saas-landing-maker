import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle2, Star, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <img src="/placeholder.svg" alt="Hero background" className="absolute inset-0 object-cover w-full h-full" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Revolutionize Your Workflow</h1>
          <p className="text-xl mb-8">Streamline processes, boost productivity, and drive growth with our SaaS solution.</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">Get Started Free</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <Carousel className="max-w-xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center text-center pt-6">
                      <img src="/placeholder.svg" alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
                      <p className="mb-4 italic">"{testimonial.quote}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
          <p className="text-xl mb-8">Join thousands of satisfied users and transform your workflow.</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">Sign Up Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: <Star className="h-8 w-8 text-blue-600" />,
    title: "Intuitive Interface",
    description: "User-friendly design for seamless navigation and efficient task management."
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful data analysis tools."
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-blue-600" />,
    title: "Seamless Integration",
    description: "Easily connect with your favorite tools and platforms."
  }
];

const testimonials = [
  {
    quote: "This SaaS solution has revolutionized our workflow. It's intuitive, powerful, and incredibly efficient.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators"
  },
  {
    quote: "The customer support is outstanding, and the product keeps getting better with each update.",
    name: "John Smith",
    title: "CTO, Future Systems"
  },
  {
    quote: "We've seen a significant boost in productivity since implementing this solution. Highly recommended!",
    name: "Emily Johnson",
    title: "Operations Manager, Global Enterprises"
  }
];

export default Index;
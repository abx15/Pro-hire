import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Users, 
  Zap, 
  TrendingUp, 
  Shield, 
  Target, 
  Clock,
  CheckCircle,
  Building2,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Target,
    title: "AI-Powered Matching",
    description: "Our intelligent algorithms match your job posts with the most qualified candidates automatically.",
  },
  {
    icon: Users,
    title: "Quality Talent Pool",
    description: "Access over 2 million verified professionals actively seeking new opportunities.",
  },
  {
    icon: Clock,
    title: "Faster Time-to-Hire",
    description: "Reduce your hiring time by 60% with streamlined workflows and automated screening.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track job performance, applicant sources, and hiring metrics in real-time.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data is protected with enterprise-grade security and compliance standards.",
  },
  {
    icon: Zap,
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing HR tools and applicant tracking systems.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create Company Profile",
    description: "Set up your company profile to showcase your culture and attract top talent.",
  },
  {
    step: "02",
    title: "Post Your Jobs",
    description: "Create detailed job listings with our easy-to-use job posting wizard.",
  },
  {
    step: "03",
    title: "Review Candidates",
    description: "Get matched with qualified candidates and review applications in one place.",
  },
  {
    step: "04",
    title: "Hire the Best",
    description: "Schedule interviews, send offers, and onboard your new team members.",
  },
];

const Recruiters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge variant="gradient" className="mb-6">For Recruiters</Badge>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hire <span className="text-gradient">Exceptional Talent</span>
                <br />Faster Than Ever
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                ProHire gives you access to millions of qualified candidates with AI-powered 
                matching that finds the perfect fit for your team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/register">
                    Start Hiring Free
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10K+", label: "Companies Hiring" },
                { value: "2M+", label: "Active Candidates" },
                { value: "500K+", label: "Hires Made" },
                { value: "95%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why Recruiters Choose <span className="text-gradient">ProHire</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to build your dream team, all in one platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg">
                Get started in minutes and make your first hire within weeks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero text-primary-foreground font-display text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <Building2 className="h-16 w-16 text-primary-foreground/80 mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Ready to Build Your Dream Team?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  Join thousands of companies that trust ProHire to find exceptional talent.
                </p>
                <Button 
                  size="xl" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <Link to="/register">
                    Get Started Free
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Recruiters;

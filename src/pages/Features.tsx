import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileCheck, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Target,
  Clock,
  BarChart3,
  Globe,
  Smartphone,
  BellRing
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Search,
    title: "Smart Job Matching",
    description: "AI-powered algorithms match candidates with the perfect opportunities based on skills, experience, and preferences.",
    category: "AI & Automation",
  },
  {
    icon: FileCheck,
    title: "Easy Applications",
    description: "Apply to multiple jobs with one click using your saved profile and resume. Track all applications in one place.",
    category: "Job Seekers",
  },
  {
    icon: Users,
    title: "Talent Pool Access",
    description: "Recruiters get access to a curated pool of verified candidates ready to join your team.",
    category: "Recruiters",
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Track job posting performance, application rates, and hiring metrics with detailed analytics.",
    category: "Insights",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security ensures your data and applications are protected at all times.",
    category: "Security",
  },
  {
    icon: Zap,
    title: "Fast Hiring",
    description: "Reduce time-to-hire by 60% with streamlined workflows and automated screening.",
    category: "Efficiency",
  },
  {
    icon: Target,
    title: "Targeted Reach",
    description: "Feature your jobs to reach qualified candidates actively looking in your industry.",
    category: "Recruiters",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help you succeed in your hiring journey.",
    category: "Support",
  },
  {
    icon: BarChart3,
    title: "Advanced Reporting",
    description: "Generate detailed reports on hiring trends, candidate sources, and recruitment ROI.",
    category: "Insights",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with talent and opportunities from around the world with multi-language support.",
    category: "Scale",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Manage your job search or hiring process on the go with our mobile applications.",
    category: "Accessibility",
  },
  {
    icon: BellRing,
    title: "Smart Notifications",
    description: "Get real-time alerts for new applications, job matches, and important updates.",
    category: "Communication",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Badge variant="gradient" className="mb-4">Features</Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Everything You Need to{" "}
                <span className="text-gradient">Hire</span> or{" "}
                <span className="text-gradient">Get Hired</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Powerful features designed to make the hiring process seamless 
                for both job seekers and recruiters.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {feature.category}
                        </Badge>
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl font-bold mb-4">
                Ready to Experience These Features?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of companies and professionals using ProHire today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/register">Get Started Free</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/pricing">View Pricing</Link>
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

export default Features;

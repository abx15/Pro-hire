import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  FileCheck, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Target,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Job Matching",
    description: "AI-powered algorithms match candidates with the perfect opportunities based on skills, experience, and preferences.",
  },
  {
    icon: FileCheck,
    title: "Easy Applications",
    description: "Apply to multiple jobs with one click using your saved profile and resume. Track all applications in one place.",
  },
  {
    icon: Users,
    title: "Talent Pool Access",
    description: "Recruiters get access to a curated pool of verified candidates ready to join your team.",
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Track job posting performance, application rates, and hiring metrics with detailed analytics.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security ensures your data and applications are protected at all times.",
  },
  {
    icon: Zap,
    title: "Fast Hiring",
    description: "Reduce time-to-hire by 60% with streamlined workflows and automated screening.",
  },
  {
    icon: Target,
    title: "Targeted Reach",
    description: "Feature your jobs to reach qualified candidates actively looking in your industry.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help you succeed in your hiring journey.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose ProHire
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
              Everything You Need to{" "}
              <span className="text-gradient">Hire or Get Hired</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Powerful features designed to make the hiring process seamless for both 
              job seekers and recruiters.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full border-transparent hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
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
  );
};

export default FeaturesSection;

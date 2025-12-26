import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Building2, Users, TrendingUp, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started",
    price: "Free",
    period: "",
    features: [
      "Post up to 3 jobs",
      "Basic applicant tracking",
      "Email support",
      "Company profile",
      "7-day job visibility",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing companies with active hiring needs",
    price: "₹4,999",
    period: "/month",
    features: [
      "Unlimited job posts",
      "Advanced applicant tracking",
      "Priority support",
      "Featured job listings",
      "30-day job visibility",
      "Analytics dashboard",
      "Candidate search",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex hiring needs",
    price: "Custom",
    period: "",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "API access",
      "White-label options",
      "Bulk hiring tools",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const features = [
  {
    icon: Building2,
    title: "Company Branding",
    description: "Showcase your company culture with a branded profile page",
  },
  {
    icon: Users,
    title: "Unlimited Candidates",
    description: "No limits on the number of applications you can receive",
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Track job performance and hiring metrics in real-time",
  },
  {
    icon: Zap,
    title: "AI Matching",
    description: "Our AI matches you with the most qualified candidates",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security for all your hiring data",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support for all your hiring needs",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge variant="gradient" className="mb-4">Pricing</Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent <span className="text-gradient">Pricing</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose the perfect plan for your hiring needs. No hidden fees, cancel anytime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={plan.popular ? "md:-mt-4 md:mb-4" : ""}
                >
                  <Card 
                    className={`h-full relative ${
                      plan.popular 
                        ? "border-primary shadow-glow" 
                        : "border-border"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge variant="gradient" className="px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="pt-8">
                      <CardTitle className="flex flex-col">
                        <span className="text-lg font-medium text-muted-foreground mb-2">
                          {plan.name}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-4xl font-bold">
                            {plan.price}
                          </span>
                          {plan.period && (
                            <span className="text-muted-foreground">{plan.period}</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 font-normal">
                          {plan.description}
                        </p>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-accent" />
                            </div>
                            <span className="text-sm text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant={plan.popular ? "hero" : "outline"} 
                        className="w-full"
                        asChild
                      >
                        <Link to="/register">
                          {plan.cta}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to Hire
              </h2>
              <p className="text-muted-foreground text-lg">
                All plans include these powerful features to streamline your hiring process
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {[
                {
                  q: "Can I switch plans at any time?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, debit cards, and UPI payments through Razorpay.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, the Professional plan comes with a 14-day free trial. No credit card required.",
                },
                {
                  q: "Can I cancel my subscription?",
                  a: "Absolutely. You can cancel your subscription at any time with no questions asked.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;

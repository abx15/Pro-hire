import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
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

const PricingSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="gradient" className="mb-4">Pricing Plans</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the plan that fits your hiring needs. No hidden fees, cancel anytime.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
  );
};

export default PricingSection;

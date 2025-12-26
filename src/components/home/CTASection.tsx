import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Hiring Journey?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies and professionals who trust ProHire 
              to connect them with the perfect match.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl"
                asChild
              >
                <Link to="/register">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Start Hiring Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link to="/jobs">
                  <Users className="h-5 w-5 mr-2" />
                  Find Your Next Role
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

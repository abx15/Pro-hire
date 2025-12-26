import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "HR Director",
    company: "TechVentures",
    avatar: "SM",
    content: "ProHire transformed our hiring process. We reduced our time-to-hire by 50% and found amazing talent we couldn't reach before.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "Hired via ProHire",
    avatar: "MC",
    content: "I landed my dream job within 2 weeks of signing up. The platform made it easy to showcase my skills and connect with great companies.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Talent Acquisition Lead",
    company: "GrowthScale",
    avatar: "ER",
    content: "The quality of candidates on HireZen is exceptional. Their AI matching saves us hours of screening time every week.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
              Loved by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              See what our users have to say about their experience with ProHire
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

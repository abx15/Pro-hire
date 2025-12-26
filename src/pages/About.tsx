import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Heart, Users, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're on a mission to make hiring accessible, efficient, and fair for everyone.",
  },
  {
    icon: Heart,
    title: "People First",
    description: "We believe great companies are built by great people, and we help them find each other.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We're building a community of professionals who support and elevate each other.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We connect talent across borders, creating opportunities worldwide.",
  },
];

const team = [
  { name: "Alex Johnson", role: "CEO & Co-Founder", avatar: "AJ" },
  { name: "Sarah Chen", role: "CTO & Co-Founder", avatar: "SC" },
  { name: "Michael Park", role: "Head of Product", avatar: "MP" },
  { name: "Emily Davis", role: "Head of Growth", avatar: "ED" },
  { name: "David Kim", role: "Head of Engineering", avatar: "DK" },
  { name: "Lisa Wang", role: "Head of Design", avatar: "LW" },
];

const About = () => {
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
              <Badge variant="gradient" className="mb-4">About Us</Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Connecting <span className="text-gradient">Talent</span> with{" "}
                <span className="text-gradient">Opportunity</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                ProHire was founded with a simple mission: make the hiring process 
                better for everyone. We believe that finding the right job or the 
                right candidate shouldn't be complicated.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      ProHire started in 2020 when our founders experienced firsthand 
                      the frustrations of traditional hiring. Long application processes, 
                      poor candidate matching, and lack of transparency were the norm.
                    </p>
                    <p>
                      We set out to build something better. Using AI and modern technology, 
                      we created a platform that makes hiring faster, fairer, and more 
                      effective for both companies and job seekers.
                    </p>
                    <p>
                      Today, we serve over 10,000 companies and have helped millions of 
                      professionals find their dream jobs. But we're just getting started.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="text-center p-6">
                    <div className="font-display text-3xl font-bold text-primary">2020</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </Card>
                  <Card className="text-center p-6">
                    <div className="font-display text-3xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </Card>
                  <Card className="text-center p-6">
                    <div className="font-display text-3xl font-bold text-primary">2M+</div>
                    <div className="text-sm text-muted-foreground">Users</div>
                  </Card>
                  <Card className="text-center p-6">
                    <div className="font-display text-3xl font-bold text-primary">150+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">Our Leadership</h2>
              <p className="text-muted-foreground">
                Meet the team behind ProHire
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                        {member.avatar}
                      </div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We're always looking for talented people to join our team. 
              Check out our open positions.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/jobs">
                View Open Positions
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

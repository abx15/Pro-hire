import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, MessageCircle, Mail, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics of using ProHire",
    articles: 12,
  },
  {
    icon: Users,
    title: "For Job Seekers",
    description: "Tips for finding and applying to jobs",
    articles: 18,
  },
  {
    icon: FileText,
    title: "For Recruiters",
    description: "Posting jobs and managing candidates",
    articles: 15,
  },
  {
    icon: MessageCircle,
    title: "Account & Billing",
    description: "Manage your account and subscriptions",
    articles: 10,
  },
];

const popularArticles = [
  "How to create a compelling profile",
  "Understanding our pricing plans",
  "Tips for writing job descriptions",
  "How to apply to jobs effectively",
  "Managing your job applications",
  "Setting up your company profile",
];

const Help = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center"
            >
              <Badge variant="gradient" className="mb-4">Help Center</Badge>
              <h1 className="font-display text-4xl font-bold mb-4">
                How can we <span className="text-gradient">help</span>?
              </h1>
              <p className="text-muted-foreground mb-8">
                Search our knowledge base or browse categories below
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search for help articles..." 
                  className="pl-12 h-12"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full cursor-pointer hover:shadow-lg transition-all hover:border-primary/30">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{category.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                      <Badge variant="secondary">{category.articles} articles</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-center mb-8">
                Popular Articles
              </h2>
              <div className="space-y-3">
                {popularArticles.map((article, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-all">
                    <CardContent className="p-4 flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{article}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl font-bold mb-4">Still need help?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              <Mail className="h-4 w-4" />
              Contact Support
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Help;

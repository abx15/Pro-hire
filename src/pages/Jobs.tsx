import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  Filter, 
  Briefcase, 
  Clock, 
  DollarSign, 
  Building2, 
  Bookmark,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  tags: string[];
  featured: boolean;
  postedAt: string;
  description: string;
}

const allJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    logo: "TC",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150K - $200K",
    experience: "5+ years",
    tags: ["React", "TypeScript", "Node.js"],
    featured: true,
    postedAt: "2 days ago",
    description: "We're looking for a senior frontend developer to lead our web applications team...",
  },
  {
    id: "2",
    title: "Product Designer",
    company: "DesignHub",
    logo: "DH",
    location: "Remote",
    type: "Full-time",
    salary: "$120K - $160K",
    experience: "3+ years",
    tags: ["Figma", "UI/UX", "Design Systems"],
    featured: true,
    postedAt: "3 days ago",
    description: "Join our design team to create beautiful user experiences...",
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "DataFlow AI",
    logo: "DF",
    location: "New York, NY",
    type: "Full-time",
    salary: "$140K - $180K",
    experience: "4+ years",
    tags: ["Python", "Machine Learning", "SQL"],
    featured: false,
    postedAt: "1 week ago",
    description: "Help us build the next generation of AI-powered analytics...",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudScale",
    logo: "CS",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$130K - $170K",
    experience: "3+ years",
    tags: ["AWS", "Kubernetes", "Docker"],
    featured: false,
    postedAt: "5 days ago",
    description: "Build and maintain our cloud infrastructure...",
  },
  {
    id: "5",
    title: "Marketing Manager",
    company: "GrowthLabs",
    logo: "GL",
    location: "Remote",
    type: "Full-time",
    salary: "$100K - $140K",
    experience: "5+ years",
    tags: ["SEO", "Content", "Analytics"],
    featured: true,
    postedAt: "1 day ago",
    description: "Lead our marketing initiatives and growth strategy...",
  },
  {
    id: "6",
    title: "Backend Engineer",
    company: "ServerStack",
    logo: "SS",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$145K - $190K",
    experience: "4+ years",
    tags: ["Go", "PostgreSQL", "Microservices"],
    featured: false,
    postedAt: "4 days ago",
    description: "Design and build scalable backend services...",
  },
  {
    id: "7",
    title: "Mobile Developer",
    company: "AppWorks",
    logo: "AW",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$130K - $170K",
    experience: "3+ years",
    tags: ["React Native", "iOS", "Android"],
    featured: false,
    postedAt: "6 days ago",
    description: "Build cross-platform mobile applications...",
  },
  {
    id: "8",
    title: "Engineering Manager",
    company: "TechGiant",
    logo: "TG",
    location: "Remote",
    type: "Full-time",
    salary: "$180K - $250K",
    experience: "7+ years",
    tags: ["Leadership", "Agile", "Strategy"],
    featured: true,
    postedAt: "2 days ago",
    description: "Lead a team of talented engineers...",
  },
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="bg-muted/30 py-12 mb-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="font-display text-3xl md:text-4xl font-bold text-center mb-6">
                Find Your <span className="text-gradient">Perfect Job</span>
              </h1>
              
              {/* Search Bar */}
              <div className="glass rounded-2xl p-2 shadow-glow">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-background">
                    <Search className="h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Job title, keywords, or company"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border-0 p-0 h-auto focus-visible:ring-0 bg-transparent"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-background">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Location or remote"
                      value={locationTerm}
                      onChange={(e) => setLocationTerm(e.target.value)}
                      className="border-0 p-0 h-auto focus-visible:ring-0 bg-transparent"
                    />
                  </div>
                  <Button variant="hero" size="lg" className="md:px-8">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Jobs List */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Filters</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-sm mb-3">Job Type</h4>
                      <div className="space-y-2">
                        {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-border" />
                            <span className="text-sm text-muted-foreground">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-3">Experience Level</h4>
                      <div className="space-y-2">
                        {["Entry Level", "Mid Level", "Senior", "Lead"].map((level) => (
                          <label key={level} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-border" />
                            <span className="text-sm text-muted-foreground">{level}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-3">Salary Range</h4>
                      <div className="space-y-2">
                        {["$50K - $80K", "$80K - $120K", "$120K - $160K", "$160K+"].map((range) => (
                          <label key={range} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-border" />
                            <span className="text-sm text-muted-foreground">{range}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Jobs Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{allJobs.length}</span> jobs
                </p>
                <Button variant="outline" size="sm">
                  Sort by: Relevance
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </div>

              <div className="space-y-4">
                {allJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className={`hover:shadow-lg transition-all ${job.featured ? "border-primary/30" : ""}`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          {/* Logo */}
                          <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                            {job.logo}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <div>
                                <h3 className="font-semibold text-lg text-foreground">
                                  {job.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Building2 className="h-4 w-4" />
                                  {job.company}
                                  {job.featured && (
                                    <Badge variant="gradient" className="ml-2">Featured</Badge>
                                  )}
                                </div>
                              </div>
                              <button className="p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0">
                                <Bookmark className="h-5 w-5 text-muted-foreground" />
                              </button>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                {job.experience}
                              </div>
                              <div className="flex items-center gap-1 text-accent font-medium">
                                <DollarSign className="h-4 w-4" />
                                {job.salary}
                              </div>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                              <div className="flex flex-wrap gap-2">
                                {job.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center gap-3 flex-shrink-0">
                                <span className="text-xs text-muted-foreground">{job.postedAt}</span>
                                <Button variant="default" size="sm" asChild>
                                  <Link to={`/jobs/${job.id}`}>
                                    Apply Now
                                    <ArrowRight className="h-3 w-3 ml-1" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;

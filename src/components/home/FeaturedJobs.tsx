import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Building2, Bookmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  salary: string;
  tags: string[];
  featured: boolean;
  postedAt: string;
}

const featuredJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    logo: "TC",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150K - $200K",
    tags: ["React", "TypeScript", "Node.js"],
    featured: true,
    postedAt: "2 days ago",
  },
  {
    id: "2",
    title: "Product Designer",
    company: "DesignHub",
    logo: "DH",
    location: "Remote",
    type: "Full-time",
    salary: "$120K - $160K",
    tags: ["Figma", "UI/UX", "Design Systems"],
    featured: true,
    postedAt: "3 days ago",
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "DataFlow AI",
    logo: "DF",
    location: "New York, NY",
    type: "Full-time",
    salary: "$140K - $180K",
    tags: ["Python", "Machine Learning", "SQL"],
    featured: false,
    postedAt: "1 week ago",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudScale",
    logo: "CS",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$130K - $170K",
    tags: ["AWS", "Kubernetes", "Docker"],
    featured: false,
    postedAt: "5 days ago",
  },
  {
    id: "5",
    title: "Marketing Manager",
    company: "GrowthLabs",
    logo: "GL",
    location: "Remote",
    type: "Full-time",
    salary: "$100K - $140K",
    tags: ["SEO", "Content", "Analytics"],
    featured: true,
    postedAt: "1 day ago",
  },
  {
    id: "6",
    title: "Backend Engineer",
    company: "ServerStack",
    logo: "SS",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$145K - $190K",
    tags: ["Go", "PostgreSQL", "Microservices"],
    featured: false,
    postedAt: "4 days ago",
  },
];

const FeaturedJobs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <Badge variant="outline" className="mb-4">Featured Opportunities</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Latest Job Openings
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Explore hand-picked opportunities from top companies actively hiring
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/jobs">
              View All Jobs
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={`h-full ${job.featured ? "border-primary/30 shadow-glow" : ""}`}>
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground line-clamp-1">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Building2 className="h-3 w-3" />
                          {job.company}
                        </div>
                      </div>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                      <Bookmark className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-accent">
                        <DollarSign className="h-4 w-4" />
                        {job.salary}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{job.postedAt}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/jobs/${job.id}`}>
                        View Details
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
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

export default FeaturedJobs;

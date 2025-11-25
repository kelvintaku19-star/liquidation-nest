import { TrendingUp, Users, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "3,200+",
    label: "Pallets Sold",
    color: "text-accent",
  },
  {
    icon: Users,
    value: "1,800+",
    label: "Satisfied Clients",
    color: "text-primary",
  },
  {
    icon: Award,
    value: "98%",
    label: "Client Satisfaction",
    color: "text-accent",
  },
  {
    icon: Calendar,
    value: "4 Years",
    label: "Reliable Service",
    color: "text-primary",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Numbers that showcase our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

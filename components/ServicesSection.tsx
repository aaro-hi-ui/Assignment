import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: "Anxiety & Stress Management",
    description: "Learn to navigate stress, panic, and overthinking through proven strategies like CBT and mindfulness. Dr. Blake provides tools to help you feel more in control and grounded in your daily life.",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    title: "Relationship Counseling",
    description: "Improve communication, rebuild trust, or manage transitions in your relationship. Serena helps couples and individuals foster healthier, more connected bonds.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    title: "Trauma Recovery",
    description: "Whether you've experienced loss, abuse, or childhood trauma, Dr. Blake offers a safe, non-judgmental space to heal and build emotional resilience.",
    image: "https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Services
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive, evidence-based therapy tailored to your unique needs and goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
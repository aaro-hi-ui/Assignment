import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-6">
          Compassionate Care for a Calmer Mind
        </h1>
        <h2 className="text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-3xl mx-auto">
          Personalized therapy for anxiety, relationships, and healing from trauma
        </h2>
        <Button 
          size="lg"
          className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 px-8 py-4 text-lg font-medium rounded-none border-0"
        >
          Book a Free Consult
        </Button>
      </div>
    </section>
  );
}
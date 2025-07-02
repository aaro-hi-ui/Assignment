import { Phone, Mail, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Doctor Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Dr. Serena Blake"
                className="w-full h-[600px] object-cover shadow-2xl"
              />
            </div>
          </div>
          
          {/* Doctor Info */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
                Dr. Serena Blake, PsyD
              </h2>
              <div className="w-16 h-0.5 bg-gray-300 mb-8"></div>
            </div>
            
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-gray-500" />
                <span>(323) 555-0192</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>serena@blakepsychology.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
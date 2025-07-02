'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  preferredTime?: string;
  agreeToContact?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      preferredTime: '',
      agreeToContact: false
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message. Dr. Blake will contact you soon.');
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Contact
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to begin your journey? Send a message and Dr. Blake will respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="font-serif text-2xl text-gray-900 mb-8">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`h-12 border-gray-300 rounded-none focus:border-gray-500 ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`h-12 border-gray-300 rounded-none focus:border-gray-500 ${
                      errors.phone ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`h-12 border-gray-300 rounded-none focus:border-gray-500 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Textarea
                  placeholder="What brings you here? *"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`min-h-32 border-gray-300 rounded-none focus:border-gray-500 resize-none ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div>
                <Input
                  placeholder="Preferred time to reach you *"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                  className={`h-12 border-gray-300 rounded-none focus:border-gray-500 ${
                    errors.preferredTime ? 'border-red-500' : ''
                  }`}
                />
                {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agree"
                  checked={formData.agreeToContact}
                  onCheckedChange={(checked) => handleInputChange('agreeToContact', !!checked)}
                  className="mt-1"
                />
                <label htmlFor="agree" className="text-gray-700 leading-relaxed">
                  I agree to be contacted via phone or email to discuss my therapy needs *
                </label>
              </div>
              {errors.agreeToContact && <p className="text-red-500 text-sm">{errors.agreeToContact}</p>}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 text-lg font-medium rounded-none transition-colors duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-2xl text-gray-900 mb-8">Contact Information</h3>
            <div className="bg-white p-8 shadow-lg space-y-8">
              <div>
                <h4 className="font-serif text-xl text-gray-900 mb-6">Dr. Serena Blake, PsyD</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Licensed clinical psychologist with eight years of experience, providing compassionate, 
                  evidence-based therapy for anxiety, relationships, and trauma recovery.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Office Location</p>
                    <p className="text-gray-600">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">(323) 555-0192</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">serena@blakepsychology.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h5 className="font-medium text-gray-900 mb-3">Office Hours</h5>
                <div className="text-gray-600 space-y-1">
                  <p>Monday - Thursday: 9:00 AM - 6:00 PM</p>
                  <p>Friday: 9:00 AM - 4:00 PM</p>
                  <p>Weekend: By appointment only</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Virtual sessions available via Zoom for your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
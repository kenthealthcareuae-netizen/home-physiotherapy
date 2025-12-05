import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Activity, Home, Users, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Home className="w-10 h-10 text-primary" />,
    title: 'العلاج الطبيعي المنزلي المتخصص',
    description:
      'جلسات علاج طبيعي مخصصة في راحة منزلك، مع التركيز على كبار السن وذوي الاحتياجات الخاصة، مع ضمان الراحة والخصوصية.',
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: 'خطط التعافي المنزلية',
    description:
      'برامج علاج مصممة خصيصاً للبيئة المنزلية، مع التركيز على تحسين الحركة والاستقلالية اليومية.',
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'رعاية كبار السن في المنزل',
    description:
      'خدمات متخصصة لكبار السن مع التركيز على الوقاية من السقوط، وتحسين التوازن، وتعزيز الاستقلالية.',
  },
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: 'إعادة التأهيل العصبي المنزلي',
    description:
      'برامج متقدمة لإعادة التأهيل بعد السكتة الدماغية، ومرض باركنسون، والاضطرابات العصبية في البيئة المنزلية.',
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: 'التقييمات المنزلية الشاملة',
    description:
      'تقييمات متعمقة في المنزل مع متابعة مستمرة لتتبع التقدم وتحسين النتائج في البيئة الطبيعية للمريض.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'الراحة والخصوصية',
    description:
      'خدمات عالية الجودة في منزلك مع ضمان الراحة والخصوصية، ومعالجون معتمدون وبروتوكولات مثبتة.',
  },
];

const SectionTitle = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
  >
    {children}
  </motion.h2>
);

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-background" dir="rtl">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle dir="rtl">لماذا تختارنا؟</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm border border-primary/20">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-primary" dir="rtl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground" dir="rtl">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 p-8 bg-gradient-to-r from-primary/80 to-accent/80 rounded-lg text-center text-white shadow-lg"
      >
        <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-white" />
        <h3 className="text-2xl font-semibold mb-2" dir="rtl">العلاج الطبيعي في منزلك - راحة ونتائج مضمونة</h3>
        <p className="text-lg" dir="rtl">
          احصل على أفضل خدمات العلاج الطبيعي في راحة منزلك - رعاية مخصصة لكبار السن وذوي الاحتياجات الخاصة، مع ضمان الراحة والخصوصية والنتائج الفعالة.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;

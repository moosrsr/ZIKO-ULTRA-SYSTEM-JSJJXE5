// src/hooks/useAnimation.ts

import { useEffect, useRef } from 'react';

// تعريف نوع الحركات المعقدة
type AnimationOptions = {
  duration?: number; // مدة الحركة
  delay?: number; // تأخير قبل بدء الحركة
  easing?: string; // نوع التسهيل
};

// هوك لإدارة الحركات المعقدة
const useAnimation = (options: AnimationOptions) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      // إعدادات الحركة
      const { duration = 300, delay = 0, easing = 'ease-in-out' } = options;

      // تطبيق الحركات باستخدام CSS
      element.style.transition = `all ${duration}ms ${easing}`;
      element.style.opacity = '1'; // مثال لتغيير الشفافية

      // تأخير الحركة إذا كان هناك تأخير محدد
      if (delay) {
        setTimeout(() => {
          element.style.transform = 'translateY(0)'; // مثال لتحريك العنصر
        }, delay);
      } else {
        element.style.transform = 'translateY(0)'; // مثال لتحريك العنصر
      }
    }

    // تنظيف التأثير عند فك التركيب
    return () => {
      if (element) {
        element.style.transition = ''; // إعادة تعيين الانتقال
        element.style.opacity = ''; // إعادة تعيين الشفافية
        element.style.transform = ''; // إعادة تعيين الحركة
      }
    };
  }, [options]);

  return elementRef; // إرجاع المرجع لاستخدامه في المكونات
};

export default useAnimation;

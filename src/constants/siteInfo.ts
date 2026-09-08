/* Single source of truth for brand name, address, phone numbers, email and
   opening hours, so these can no longer drift between the footer, Contact
   page and anywhere else they appear. */

export const BRAND_NAME = 'LEOZ Cucine';

export const EMAIL = 'info@leozcucine.com';
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const PHONE_SALES_DISPLAY = '+91 93131 51559';
export const PHONE_SALES_HREF = 'tel:+919313151559';
export const PHONE_SALES_WHATSAPP_NUMBER = '919313151559';

export const PHONE_CARE_DISPLAY = '+91 87585 51552';
export const PHONE_CARE_HREF = 'tel:+918758551552';

export const ADDRESS_LINE =
  'Sankalp Square 3B, 509, Sindhu Bhavan Marg, beside Taj Skyline, PRL Colony, Thaltej, Ahmedabad, Gujarat 380059';

export const HOURS_SHORT = 'Mon–Sat 10 AM–7 PM, Sun by appointment';
export const HOURS_LONG_WEEKDAY = 'Monday – Saturday: 10:00 AM – 7:00 PM';
export const HOURS_LONG_SUNDAY = 'Sunday: By appointment only';

export function buildWhatsAppHref(message: string): string {
  return `https://wa.me/${PHONE_SALES_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

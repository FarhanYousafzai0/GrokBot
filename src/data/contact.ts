export const contact = {
  name: "Muhammad Farhan",
  email: "coderwithferry@gmail.com",
  phone: "03197421574",
  phoneHref: "tel:+923197421574",
  whatsappNumber: "923197421574",
  github: "https://github.com/FarhanYousafzai0",
  linkedin: "https://www.linkedin.com/in/muhammad-farhan-8a1363352/",
  whatsappHref: `https://wa.me/923197421574?text=${encodeURIComponent("Hi Muhammad Farhan, I'd like to get a quote.")}`,
};

export function whatsappInquiryUrl(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

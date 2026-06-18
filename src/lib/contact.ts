export const PHONES = [
  {
    label: "Primary",
    display: "+91 844 811 1011",
    tel: "+918448111011",
    whatsapp: "918448111011",
  },
  {
    label: "Secondary",
    display: "+91 981 888 3697",
    tel: "+919818883697",
    whatsapp: "919818883697",
  },
] as const;

export const PRIMARY_PHONE = PHONES[0];
export const EMAIL = "anuj@scaleview.ai";
export const WHATSAPP_URL = `https://wa.me/${PRIMARY_PHONE.whatsapp}`;

export const PHONE_DISPLAY_LIST = PHONES.map((p) => p.display).join(" · ");

export const ADDRESS = {
  line1: "3rd Floor, Suncity Success Tower",
  line2: "Unit No. 320-321, Golf Course Ext Rd",
  line3: "Sector 65, Gurugram, Haryana 122101",
  full: "3rd Floor, Suncity Success Tower, Unit No. 320-321, Golf Course Ext Rd, Sector 65, Gurugram, Haryana 122101",
} as const;

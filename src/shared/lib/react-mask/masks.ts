export const dateMask = {
  mask: 'dd.mm.yyyy',
  replacement: { d: /\d/, m: /\d/, y: /\d/ },
};

export const phoneNumberMask = {
  mask: '+7 (___) ___-____',
  replacement: { _: /\d/ },
  showMask: true,
};

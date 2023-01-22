export const shadows: Record<string, { color: string[]; offset: string[] }> = {
  shadow1: {
    color: ['rgba(0,0,0,0.16)'],
    offset: ['0px 1px 4px'],
  },
  shadow2: {
    color: ['rgba(149, 157, 165, 0.2)'],
    offset: ['0px 8px 24px'],
  },

  shadow3: {
    color: [
      'rgba(0, 0, 0, 0.25)',
      'rgba(0, 0, 0, 0.12)',
      'rgba(0, 0, 0, 0.12)',
      'rgba(0, 0, 0, 0.17)',
      'rgba(0, 0, 0, 0.09)',
    ],
    offset: ['0px 54px 55px', '0px -12px 30px', '0px 4px 6px', '0px 12px 13px', '0px -3px 5px'],
  },
}

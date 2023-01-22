// export const shadows: Record<string, string> = {
//   shadow1: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
//   shadow2: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
// }

export const shadows: Record<string, { color: string; set: string }> = {
  shadow1: {
    color: 'rgba(0,0,0,0.16)',
    set: '0px 1px 4px',
  },
  shadow2: {
    color: 'rgba(149, 157, 165, 0.2)',
    set: '0px 8px 24px',
  },
}

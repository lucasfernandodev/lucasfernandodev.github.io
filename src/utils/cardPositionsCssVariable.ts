export const cardPositionsCssVariable = {
  set: (variableName: string, elements: HTMLElement[], positions: number[]): void => {
    elements.forEach((el, index: number) => {
      el.style.setProperty(variableName, `${positions[index]}px`)
    })
  },
  get: (variableName: string, el: HTMLElement): number => {
    return parseInt((window.getComputedStyle(el).getPropertyValue(variableName)).replace("px", ""))
  }
}
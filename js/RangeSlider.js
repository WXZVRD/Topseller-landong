

export class RangeSlider{
    constructor(goal, progressBar, resItem, resCost) {
        this.slider = document.getElementById(goal)
        this.progressBar = document.getElementById(progressBar)
        this.resItem = document.getElementById(resItem)
        this.resCost = document.getElementById(resCost)
        this.maxValue = 1000000
        this.minValue = 1000

        this.slider.addEventListener("input", (e) => {
            this.progressBar.style.width = `${((e.target.value - this.minValue) / (this.maxValue - this.minValue)) * 100}%`
            this.resCost.innerHTML = `${e.target.value * 5} р`
            this.resItem.innerHTML = parseInt(e.target.value)
        })
    }
}
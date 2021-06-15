import { getPaintColor, setPaintColor } from "./database.js"

const color = getPaintColor()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            //window.alert(`User chose color ${event.target.value}`)
            setPaintColor(parseInt(event.target.value))
        }
    }
)

export const paintColor = () => {
    let html = "<ul>"

    const listItems = color.map(paintColor => {
        return `<li>
            <input type="radio" name="color" value="${paintColor.id}" /> ${paintColor.color}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"

    return html
}
 
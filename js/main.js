// code for collapsible my projects tab

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible')
  var instances = M.Collapsible.init(elems)
})

// code for color scheme switch button

const colorSchemes = [
  {
    primarycolor: '#FAFAFA', // base scheme, love it
    secondarycolor: '#424242'
  },
  {
    primarycolor: '#424242', //  love it inverted base color scheme
    secondarycolor: '#FAFAFA'
  },
  {
    primarycolor: '#A4CABC', // love this one, coral color scheme
    secondarycolor: '#B2473E'
  }, {
    primarycolor: '#021C1E', // love this color scheme, deep ocean
    secondarycolor: '#6FB98F'
  }, {
    primarycolor: '#F1F1F2', // love this color scheme, icy blue
    secondarycolor: '#1995AD'
  },
  {
    primarycolor: '#F1DCC9', // love this one, mahogany book feel
    secondarycolor: '#42313A'
  }
]

let currentScheme

function changeColor (e) {
  if (e) {
    e.preventDefault()
  }

  let index = Math.floor(Math.random() * Math.floor(6)) // generate a number between 0 and 5
  let newScheme = colorSchemes[index] // save number as an index in the colorSchemes array.

  if (index !== currentScheme) { // if number just generated does not equal the number generated last time, then proceed and choose the new color scheme
    const html = document.getElementsByTagName('html')[0]
    html.style.cssText = `--primary-color: ${newScheme.primarycolor}; --secondary-color: ${newScheme.secondarycolor};`

    currentScheme = index // assign number generated so we can compare color schemes
  } else {
    changeColor()
  }
}

const button = document.querySelector('#change-color')
button.addEventListener('click', changeColor)

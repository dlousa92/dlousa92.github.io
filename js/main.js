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
    primarycolor: '#F0EFEA', // love this color scheme, burgundy white, luxorious look
    secondarycolor: '#662225'
  },
  {
    primarycolor: '#A4CABC', // love this one, coral color scheme
    secondarycolor: '#B2473E'
  }, {
    primarycolor: '#EBDCB2', // love this color scheme, cream color scheme
    secondarycolor: '#662E1C'
  }, {
    primarycolor: '#F1F1F2', // love this color scheme, icy blue
    secondarycolor: '#1995AD'
  },
  {
    primarycolor: '#F1DCC9', // love this one, mahogany book feel
    secondarycolor: '#42313A'
  }
]

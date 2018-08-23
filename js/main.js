// code for collapsible my projects tab

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible')
  var instances = M.Collapsible.init(elems)
})

// code for color scheme switch button

const colorSchemes = [
  {
    primarycolor: '#FAFAFA',
    secondarycolor: '#424242'
  },
  {
    primarycolor: '#F98866',
    secondarycolor: '#80BD9E'
  },
  {
    primarycolor: '#2A3132',
    secondarycolor: '#763626'
  }, {
    primarycolor: '#66A5AD',
    secondarycolor: '003B46'
  }, {
    primarycolor: '#F1F1F2',
    secondarycolor: '#1995AD'
  }
]

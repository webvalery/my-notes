const svgResources = new Map()

function loadIcons () {
  const svgModules = require.context('../assets/icons', true, /\.svg$/)
  svgModules.keys().forEach((fileName) => {
    const name = fileName.replace(/^.*[\\/]/, '').replace('.svg', '')
    svgResources.set(name, svgModules(fileName))
  })
}

function getSvgIcon (name) {
  return svgResources.get(name).default || null
}

loadIcons()

export { getSvgIcon }

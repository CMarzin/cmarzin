#!/usr/bin/env node

var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: '#a1bdd2'
}

// Text + chalk definitions
let data = {
  'name': chalk.white('Corentin Marzin /'),
  'handle': chalk.hex('#f5c316')('marz_coco'),
  'work': chalk.white('Web Developper at Allegro Musique'),
  'twitter': chalk.hex('#f5c316')('https://twitter.com/marz_coco'),
  'github': chalk.hex('#f5c316')('https://github.com/CMarzin'),
  'linkedin': chalk.hex('#f5c316')('https://linkedin.com/in/corentin-marzin'),
  'web': chalk.hex('#f5c316')('https://corentinmarzin.fr'),
  'npx': chalk.white('npx cmarzin'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))

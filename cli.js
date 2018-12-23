#!/usr/bin/env node

var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'classic',
  borderColor: '#f5c316'
  // borderColor: '#a1bdd2'
}

// Text + chalk definitions
let data = {
  'name': chalk.hex('#f5c316')('Corentin Marzin /'),
  'handle': chalk.white.bold('CMarzin'),
  'work': chalk.hex('#f5c316')('Web Developper at Allegro Musique'),
  'twitter': chalk.hex('#a1bdd2')('https://twitter.com/marz_coco'),
  'github': chalk.hex('#a1bdd2')('https://github.com/CMarzin'),
  'linkedin': chalk.hex('#a1bdd2')('https://linkedin.com/in/corentin-marzin'),
  'web': chalk.hex('#a1bdd2')('https://corentinmarzin.fr'),
  'npx': chalk.white('npx cmarzin'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.hex('#f5c316').bold('      Card:')
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

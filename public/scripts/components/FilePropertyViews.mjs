/**
 * @module components/FilePropertyViews
 */

import { Text, Tag, capitalizeFirstLetter } from '../libs/markup.mjs'
import { IconWithTextViews } from './IconWithTextViews.mjs'

/**
 * @typedef {import('../libs/markup.mjs').Node} Node
 */

/**
 * @typedef {Object} FilePropertyViewsAttributes
 * @property {string} name
 * @property {string} valueIconName
 * @property {string|Node|Array.<Node>} valueText
 * @property {boolean} [isLast]
 */

/**
 * @function
 * @param {FilePropertyViewsAttributes} attributes
 * @returns {Array.<Node>}
 */
export function FilePropertyViews(attributes) {
  return [
    // @ts-ignore
    new Tag('dt', [new Text(formatName(attributes.name))]),
    new Tag('dd', attributes.isLast ? { class: 'mb-0' } : undefined, [
      ...IconWithTextViews({ iconName: attributes.valueIconName, text: attributes.valueText }),
    ]),
  ]
}

function formatName(/** @type {string} */ name) {
  return capitalizeFirstLetter(name) + ':'
}

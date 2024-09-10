/**
 * @typedef {Object} ReelSymbols
 * @property {HTMLImageElement} 1xBAR - 1xBAR symbol source
 * @property {HTMLImageElement} 2xBAR - 2xBAR symbol source
 * @property {HTMLImageElement} 3xBAR - 3xBAR symbol source
 * @property {HTMLImageElement} Cherry - Cherry symbol source
 * @property {HTMLImageElement} Seven - Seven symbol source
 */

/**
 * @typedef {'1xBAR' | '2xBAR' | '3xBAR' | 'Seven' | 'Cherry'} ReelSymbol
 */

/**
 * @typedef {Object} BlockType - Reel block type
 * @property {ReelSymbol} symbol - Symbol to draw
 * @property {Object} coords - Block coordinates
 * @property {number} coords.yOffset - Y offset from the top to position
 * @property {BlockOptions} block - Block options
 */

/**
 * @typedef {Object} BlockOptions - Reel block type
 * @property {number} width - Slot block width
 * @property {number} height - Slot block height
 * @property {number} lineWidth - Slot block line width
 * @property {number} padding - Slot block padding (Both sides)
 * @property {Object} [color] - Slot block color options
 * @property {number} color.r - Red color value
 * @property {number} color.g - Green color value
 * @property {number} color.b - Blue color value
 * @property {number} [rotate = 0] - Slot block rotation
 */

/**
 * @typedef {Object} ColorOptions - Reel block color options
 * @property {string} background - Background color
 * @property {string} border - Border color
 */

/**
 * @typedef {Object} PaddingOptions - Reel padding options
 * @property {number} x - Slot left/right padding
 */

/**
 * @typedef {Object} ReelOptions - Slot reel options
 * @property {number} rows - Slot reels rows
 * @property {number} cols - Slot reels columns
 * @property {number} animationTime - Slot reels animation time in milliseconds
 * @property {PaddingOptions} padding - Slot padding
 */

/**
 * @typedef {Object} Group - Group of animations
 * @property {Function} add - Add animation to the group
 * @property {Function} start - Start all animations in the group
 * @property {Function} update - Update all animations in the group
 * @property {Function} remove - Remove animation from the group
 * @property {Function} removeAll - Remove all animations from the group
 */

/**
 * @typedef {Object} Tween - Tween animation
 * @property {Function} start - Start tween animation
 * @property {Function} update - Update tween animation
 * @property {Function} remove - Remove tween animation
 * @property {Function} stop - Stop tween animation
 * @property {Function} to - Set tween target
 * @property {Function} from - Set tween start
 * @property {Function} easing - Set tween easing function
 * @property {Function} duration - Set tween duration
 * @property {Function} yoyo - Set tween yoyo
 * @property {Function} delay - Set tween delay
 * @property {Function} onStart - Set tween start callback
 * @property {Function} onUpdate - Set tween update callback
 * @property {Function} onComplete - Set tween complete callback
 */

/**
 * @typedef {Object} Easing - Tween easing functions
 * @property {Object} Easing.Back - Back easing functions
 * @property {Function} Easing.Back.In - Back easing in function
 * @property {Function} Easing.Back.Out - Back easing out function
 * @property {Function} Easing.Back.InOut - Back easing in-out function
 * @property {Object} Easing.Bounce - Bounce easing functions
 * @property {Function} Easing.Bounce.In - Bounce easing in function
 * @property {Function} Easing.Bounce.Out - Bounce easing out function
 * @property {Function} EasingBounce.InOut - Bounce easing in-out function
 * @property {Object} Easing.Circular - Circular easing functions
 * @property {Function} Easing.Circular.In - Circular easing in function
 * @property {Function} Easing.Circular.Out - Circular easing out function
 * @property {Function} Easing.Circular.InOut - Circular easing in-out function
 * @property {Object} Easing.Cubic - Cubic easing functions
 * @property {Function} Easing.Cubic.In - Cubic easing in function
 * @property {Function} Easing.Cubic.Out - Cubic easing out function
 * @property {Function} Easing.Cubic.InOut - Cubic easing in-out function
 * @property {Object} Easing.Elastic - Elastic easing functions
 * @property {Function} Easing.Elastic.In - Elastic easing in function
 * @property {Function} Easing.Elastic.Out - Elastic easing out function
 * @property {Function} Easing.Elastic.InOut - Elastic easing in-out function
 * @property {Object} Easing.Expo - Expo easing functions
 * @property {Function} Easing.Expo.In - Expo easing in function
 * @property {Function} Easing.Expo.Out - Expo easing out function
 * @property {Function} Easing.Expo.InOut - Expo easing in-out function
 * @property {Object} Easing.Linear - Linear easing functions
 * @property {Function} Easing.Linear.None - Linear easing none function
 * @property {Object} Easing.Quad - Quad easing functions
 * @property {Function} Easing.Quad.In - Quad easing in function
 * @property {Function} Easing.Quad.Out - Quad easing out function
 * @property {Function} Easing.Quad.InOut - Quad easing in-out function
 */

/**
 * @typedef {Function} ModeStrategy - Slot mode strategy
 * @param {Object} options - Mode options
 * @param {Reel} options.reel - Reel instance
 *
 * @method genReelSymbols - Generate reel symbols
 * @returns {void}
 *
 * @constructor
 */

/**
 * @typedef {'fixed'|'random'} Mode - Slot mode
 */

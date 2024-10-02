import { Reel } from './reel.mjs';
import { createEmptyArray, waitFor } from './utils.mjs';
import { Calculator } from './calculator.mjs';
import { VisualEffects } from './visual-effects.mjs';
import { Player } from './player.mjs';
import { SoundEffects } from './sound-effects.mjs';
import { BackgroundMusic } from './background-music.mjs';

/**
 * import { ReelOptions, ReelSymbols, ColorOptions, BlockOptions, PaddingOptions, Mode, SlotOptions } from './types.mjs';
 */

/**
 * Slot class. It's responsible for the slot game
 * @param {SlotOptions} options - Slot options
 * @constructor
 */
export function Slot(options) {
  options.fixedSymbols ||= [];

  /**
   * @public
   * @readonly
   * @type {SlotOptions}
   */
  this.options = options;

  /**
   * @public
   * @readonly
   * @type {Player}
   */
  this.player = new Player(options.player);

  /**
   * @public
   * @readonly
   * @type {SoundEffects}
   */
  this.soundEffects = new SoundEffects({ animationTime: options.reel.animationTime });

  /**
   * @public
   * @readonly
   * @type {BackgroundMusic}
   */
  this.backgroundMusic = new BackgroundMusic();

  /**
   * @private
   * @type {CanvasRenderingContext2D}
   */
  this.ctx = options.canvas.getContext('2d');

  /**
   * @private
   * @readonly
   * @type {Reel[]}
   */
  this.reels = [];

  /**
   * @private
   * @readonly
   * @type {VisualEffects}
   */
  this.visualEffects = new VisualEffects(this.reels);

  /**
   * @private
   * @readonly
   * @type {Calculator}
   */
  this.calculator = new Calculator(this.reels);

  /**
   * @private
   * @type {boolean}
   */
  this.isSpinning = false;

  /**
   * @private
   * @type {boolean}
   */
  this.checking = false;

  /**
   * @private
   * @type {boolean}
   */
  this.autoSpin = false;

  /**
   * @private
   * @readonly
   * @return {number}
   */
  this.getWidth = () =>
    options.block.width * options.reel.cols +
    options.reel.padding.x * 2 +
    options.block.lineWidth * (options.reel.cols - 1);

  /**
   * @private
   * @readonly
   * @return {number}
   */
  this.getHeight = () => options.block.height * options.reel.rows;

  /**
   * @private
   * @description Paint slot background
   * @returns {void}
   * @readonly
   */
  this.paintBackground = () => {
    this.ctx.fillStyle = options.color.background;
    this.ctx.fillRect(0, 0, this.getWidth(), this.getHeight());
  };

  /**
   * @public
   * @readonly
   */
  this.start = () => {
    this.reset();
  };

  /**
   * @public
   * @readonly
   */
  this.spin = () => {
    console.info(this.isSpinning, this.checking);
    if (!this.player.hasEnoughCredits()) return;
    if (this.isSpinning || this.checking) return;

    this.soundEffects.spin.play();
    this.player.subtractSpinCost();
    this.reels.forEach((reel) => reel.spin());

    waitFor(options.reel.animationTime)
      .then(this.evaluateWin)
      .then(() => {
        if (this.autoSpin) {
          this.spin(); // FIXME: not triggered when delay is low
        }
      });
  };

  /**
   * @public
   * @readonly
   * @param {DOMHighResTimeStamp} time - Time in milliseconds
   */
  this.update = (time) => {
    this.isSpinning = this.reels.some((reel) => reel.isSpinning);

    for (const reel of this.reels) {
      reel.update(time);
    }
  };

  /**
   * @private
   * @readonly
   */
  this.evaluateWin = () => {
    this.checking = true;

    const winners = this.calculator.calculate();

    if (!winners.length) {
      // FIXME this delay
      return waitFor(100).then(() => {
        this.checking = false;
      });
    }

    this.soundEffects.win.play();
    console.group('Winners');
    const totalWin = winners.reduce((acc, { money }) => acc + money, 0);
    for (const winner of winners) {
      // We have a winner, let's highlight the blocks
      this.visualEffects.highlight(winner.blocks);
      console.info(`Winner: ${winner.type}, line: ${winner.rowIndex}, money: ${winner.money}`);
    }

    this.player.addWin(totalWin);

    console.info(`Total win: ${totalWin}`);
    console.groupEnd();

    // Let's keep user from spinning again while we are highlighting the blocks
    // We add a short delay to make the animation more visible and clear that the user won
    return waitFor(options.reel.animationTime / 2).then(() => {
      this.checking = false;
    });
  };

  /**
   * @public
   * @readonly
   */
  this.reset = () => {
    this.reels.length = 0; // Clear the reels without creating a new array
    this.paintBackground();

    createEmptyArray(options.reel.cols).forEach((index) => {
      this.reels.push(
        new Reel({
          ctx: this.ctx,
          height: this.getHeight(),
          padding: options.reel.padding,
          animationTime: options.reel.animationTime,
          animationFunction: options.reel.animationFunction,
          rows: options.reel.rows,
          block: options.block,
          mode: options.mode,
          color: options.color,
          symbols: options.symbols,
          fixedSymbols: options.fixedSymbols,
          index,
        }),
      );
    });

    this.reels.forEach((reel) => reel.reset());
    this.updateCanvasSize();
  };

  /**
   * @public
   * @readonly
   */
  this.updateCanvasSize = () => {
    options.canvas.setAttribute('width', this.getWidth().toString());
    options.canvas.setAttribute('height', this.getHeight().toString());
  };
}
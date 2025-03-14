/*!
 * Adventurer (@dicebear/adventurer)
 *
 * Code licensed under MIT License.
 * Copyright (c) 2021 Florian Körner
 *
 * Design "Adventurer" by Lisa Wischofsky licensed under CC BY 4.0.
 * Source: https://www.instagram.com/lischi_art/
 * License: https://creativecommons.org/licenses/by/4.0/
 */

import { utils } from '@dicebear/avatars';
import { style } from './core';

let { create, meta, schema } = style;

export { create, meta, schema };
export { Options } from './options';

/** @deprecated will be removed in Version 5.0 */
export default utils.style.createLegacyWrapper(style);

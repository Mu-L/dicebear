import * as avatars from '@dicebear/avatars';
import { StyleOptions } from '@dicebear/avatars';
import * as style from '../dist';
import * as fs from 'fs';
import * as path from 'path';

const seed = 'test';
const data: Array<StyleOptions<style.Options>> = [
  { seed },
  { seed, backgroundColor: '#FF0000' },
  { seed, backgroundColor: '#FF0000', margin: 10 },
  { seed, radius: 25 },
  { seed, width: 100 },
  { seed, height: 100 },
  { seed, clothes: ['graphicShirt'], clotheGraphics: ['skullOutline'] },
];

data.forEach((options, key) => {
  test(`Create avatar #${key}`, async () => {
    const svgPath = path.resolve(__dirname, 'svg', `${key}.svg`);

    if (false === fs.existsSync(svgPath)) {
      if (false === fs.existsSync(path.dirname(svgPath))) {
        fs.mkdirSync(path.dirname(svgPath));
      }

      fs.writeFileSync(svgPath, avatars.createAvatar(style, options), { encoding: 'utf-8' });
    }

    const svg = fs.readFileSync(svgPath, { encoding: 'utf-8' });

    expect(avatars.createAvatar(style, options)).toEqual(svg);
    expect(new avatars.default(style.default, options).create(seed)).toEqual(svg);
  });
});

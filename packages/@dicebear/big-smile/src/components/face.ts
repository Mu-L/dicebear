import type {
  ComponentGroup,
  ComponentPickCollection,
  ColorPickCollection,
} from '../static-types';

export const face: ComponentGroup = {
  base: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M263.989 38.62s131.387 20.593 121.424 208.128c-.036.695 15.192 10.822 16.384 11.904 10.619 9.62 19.527 21.94 23.423 36.351 13.872 51.319-35.724 104.196-75.83 118.231-14.981 5.242-30.815 7.787-46.681 8.249-103.139 3.009-239.69-62.655-246.703-190.893a172.056 172.056 0 0 1-.195-13.802c.621-24.349 6.488-48.063 15.33-70.082-.004.001 57.398-142.617 192.848-108.085Z" fill="${colors.skin.value}"/>
  <path d="M388.739 248.727c-1.423 3.492-2.844 7.955-3.241 10.507-1.694 10.947 2.045 22.252 8.54 30.378 6.168 7.716 14.976 12.72 23.506 14.607 2.88.637 6.367.964 9.416 1.067-3.204-31.703-28.973-50.725-38.221-56.559ZM203.534 332.051c24.406-5.26 39.558-31.017 33.844-57.531-5.714-26.514-30.13-43.744-54.535-38.484-24.405 5.259-39.558 31.016-33.844 57.53 5.714 26.514 30.13 43.744 54.535 38.485Z" fill="#DC2400" style="mix-blend-mode:multiply" opacity=".1"/>
  <path opacity=".1" d="M323.014 257.889s20.842-19.864 36.977-1.188Z" fill="#000"/>
  <path d="M128.679 356.869c-69.38 34.83-132.35-52.512-112.18-101.609 12.866-31.317 50.38-33.752 72.118-5.146 12.829 16.883 23.209 38.464 29.103 59.108" fill="${colors.skin.value}"/>
  <path opacity=".1" d="M71.534 278.927c8.927 9.099 16.103 22.593 24.923 30.12-1.63-12.595-4.232-26.045-10.34-37.396-6.201-11.528-17.479-21.025-28.962-20.242-14.23.971-25.947 17.573-27.454 32.626.9-9.008 18.99-15.104 25.894-14.251 10.812 20.413 14.998 60.644 14.998 60.644 9.007-22.775 5.36-40.689.941-51.501Z" fill="#000"/>
`,
};

export enum ComponentSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum ComponentVariant {
  primary = 'primary',
  secondary = 'secondary',
}

export type ComponentVariantStyleMapping = Record<ComponentVariant, string>;

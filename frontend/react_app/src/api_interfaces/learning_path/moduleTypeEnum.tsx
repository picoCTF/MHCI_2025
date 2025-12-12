//This is the type of the LPModuleItem, not the type of the LPModule

/**
 * `C` - Challenge
 * `G` - Game
 * `H` - HTML
 * `M` - Markdown Text
 * 'R' - ResourceGroup
 */
export type ModuleTypeEnum = (typeof ModuleTypeEnum)[keyof typeof ModuleTypeEnum];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ModuleTypeEnum = {
  C: 'C',
  G: 'G',
  H: 'H',
  M: 'M',
  R: 'R',
} as const;
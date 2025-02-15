import { CustomPropsTreeOptions } from "@atrilabs/app-design-forest/lib/customPropsTree";
import {
  ColorPickerDialogProps,
  OpenAssetManagerCallabck,
} from "@atrilabs/shared-layer-lib";

export type TabBodyProps = {
  patchCb: (slice: any) => void;
  customProps: any;
  treeOptions: CustomPropsTreeOptions;
  openAssetManager: OpenAssetManagerCallabck;
  openColorPicker: (
    colorPickerProps: Omit<ColorPickerDialogProps, "onCrossClick">
  ) => void;
};

export type ComponentProps = TabBodyProps & {
  propName: string;
  openAssetManager: OpenAssetManagerCallabck;
  openColorPicker: (
    colorPickerProps: Omit<ColorPickerDialogProps, "onCrossClick">
  ) => void;
  routes: string[];
};

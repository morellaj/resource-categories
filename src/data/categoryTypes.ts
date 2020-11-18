import { resourceLabelList } from './resourceLabels';

type keys = typeof resourceLabelList[number];

export type categoryStructureType = {
  [k in keys]?: {
    [k in keys]?: {
      [k in keys]?: {
        [k in keys]?: {
          [k in keys]?: {
            [k in keys]?: {};
          };
        };
      };
    };
  };
};

export type principleStringsObject = {
  [k in keys]?: string;
};

export type principleArraysObject = {
  [k in keys]?: string[];
};

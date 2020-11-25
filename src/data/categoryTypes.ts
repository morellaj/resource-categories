import { principleDescriptions } from './principleDescriptions';

type keys = keyof typeof principleDescriptions;

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

export type principleAnyObject = {
  [k in keys]?: {
    [name: string]: {
      [name: string]: {
        [name: string]: {};
      };
    };
  };
};

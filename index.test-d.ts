/// <reference path="./index.d.ts" />

// import the other tests
import "./types/core.test-d";
import "./types/normal.test-d";
import "./types/studentt.test-d";

import jStat, * as jStatCtx from "jstat";
import { expectType, expectError } from "tsd";

const aVector = [0, 1, 2];
const aMatrix = [aVector, aVector];

// shortcut to the JStat type as we need the jStatCtx
// for static functional tests
type JStat = jStatCtx.JStat;

// jStat constructor function should return a JStat instance
expectType<InstanceType<JStat>>(jStat());

// Vector initialization
expectType<InstanceType<JStat>>(jStat([0, 1, 2]));
// Vector initialization with transform callback
expectType<InstanceType<JStat>>(
  jStat([0, 1, 2], (x) => {
    expectType<number>(x);
    return x * 2; // to prevent editor warning we respect return requirements
  })
);

// Matrix initialization
expectType<InstanceType<JStat>>(
  jStat([
    [0, 1],
    [0, 1],
  ])
);
// Matrix initialization with transform callback
expectType<InstanceType<JStat>>(
  jStat(
    [
      [0, 1],
      [0, 1],
    ],
    (x) => {
      expectType<number>(x);
      return x * 2; // to prevent editor warning we respect return requirements
    }
  )
);

// start-stop initialization
expectType<InstanceType<JStat>>(jStat(0, 4, 2));
// start-stop initialization with optional transform callback
expectType<InstanceType<JStat>>(
  jStat(0, 4, 2, (x) => {
    expectType<number>(x);
    return x * 2; // to prevent editor warning we respect return requirements
  })
);
// start-stop initialization with optional transform callback and count param
expectType<InstanceType<JStat>>(
  jStat(0, 4, 2, (x, cnt) => {
    expectType<number>(x);
    expectType<number>(cnt);
    return x * 2; // to prevent editor warning we respect return requirements
  })
);

/**
 * jStat instance methods
 */
const stat = jStat([1, 2, 3]);

// jStat vector length of matrix width
expectType<number>(stat.length);

// array index access
expectType<number | number[]>(stat[0]);

// jStat(...).rows()
expectType<number>(stat.rows());
expectType<number>(stat.rows((count) => expectType<number>(count)));

// jStat(...).cols()
expectType<number>(stat.cols());
expectType<number>(stat.cols((count) => expectType<number>(count)));

// jStat(...).dimensions()
expectType<jStatCtx.MatrixDimension>(stat.dimensions());

// jStat(...).col()
expectType<InstanceType<JStat>>(stat.col(0));
expectType<InstanceType<JStat>>(
  stat.col(0, (inst) => expectType<InstanceType<JStat>>(inst))
);

// jStat(...).row()
expectType<InstanceType<JStat>>(stat.row(0));
expectType<InstanceType<JStat>>(
  stat.row(0, (inst) => expectType<InstanceType<JStat>>(inst))
);

// jStat(...).diag()
expectType<InstanceType<JStat>>(stat.diag());
expectType<InstanceType<JStat>>(
  stat.diag((diagonal) => expectType<InstanceType<JStat>>(diagonal))
);

// jStat(...).antidiag()
expectType<InstanceType<JStat>>(stat.antidiag());
expectType<InstanceType<JStat>>(
  stat.antidiag((diagonal) => expectType<InstanceType<JStat>>(diagonal))
);

// jStat(...).transpose()
expectType<InstanceType<JStat>>(stat.transpose());
expectType<InstanceType<JStat>>(
  stat.transpose((matrix) => expectType<InstanceType<JStat>>(matrix))
);

/**
 * jStat functions
 */

// jStat.rows()
expectType<number>(jStatCtx.rows(aMatrix));
expectType<number>(jStatCtx.rows(aVector));

// jStat.cols()
expectType<number>(jStatCtx.cols(aMatrix));
expectType<number>(jStatCtx.cols(aVector));

// jStat.dimensions()
expectType<jStatCtx.MatrixDimension>(jStatCtx.dimensions(aMatrix));
expectType<jStatCtx.MatrixDimension>(jStatCtx.dimensions(aVector));

// jStat.row()
expectType<number | undefined>(jStatCtx.row(aVector, 1));
expectType<Array<number | undefined>>(jStatCtx.row(aVector, [0, 2]));
expectType<Array<number | undefined>>(jStatCtx.row(aMatrix, 1));
expectType<Array<Array<number | undefined>>>(jStatCtx.row(aMatrix, [0, 2]));

// jStat.col()
expectError(jStatCtx.col(aVector, 1));
expectError(jStatCtx.col(aVector, [0, 2]));
expectType<number[][]>(jStatCtx.col(aMatrix, 1));
expectType<number[][]>(jStatCtx.col(aMatrix, [0, 2]));

// jStat.diag()
expectError(jStatCtx.diag(aVector));
expectType<number[]>(jStatCtx.diag(aMatrix));

// jStat.antidiag()
expectError(jStatCtx.antidiag(aVector));
expectType<number[]>(jStatCtx.antidiag(aMatrix));

// jStat.diagonal()
expectType<number[][]>(jStatCtx.diagonal(aVector));

// jStat.transpose()
expectError(jStatCtx.transpose(aVector));
expectType<number[][]>(jStatCtx.transpose(aMatrix));

import * as Blockly from 'blockly';

const style = 'loop_blocks';
const baseHelpUrl = '';

Blockly.defineBlocksWithJsonArray([
  {
    type: 'base_more_enum',
    message0: '枚举 %1 并获取索引',
    args0: [{ type: 'input_value', name: 'SEQUENCE', check: 'Array' }],
    inputsInline: true,
    output: 'Array',
    style: style,
    tooltip: '遍历可迭代对象并获取索引',
    helpUrl: baseHelpUrl + '',
  },
  {
    type: 'base_more_enum_from',
    message0: '从 %2 枚举 %1 并获取索引',
    args0: [
      { type: 'input_value', name: 'SEQUENCE', check: 'Array' },
      { type: 'input_value', name: 'START', check: 'Number' },
    ],
    inputsInline: true,
    output: 'Array',
    style: style,
    tooltip: '从指定索引处，开始遍历可迭代对象，并获取索引',
    helpUrl: baseHelpUrl + '',
  },
]);


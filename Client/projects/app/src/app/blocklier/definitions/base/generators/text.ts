import { JavaScript, Python } from '../../_common';

JavaScript['text_to_int'] = function (block: any) {
  const str_value = JavaScript.valueToCode(
    block,
    'STR',
    JavaScript.ORDER_ATOMIC,
    true,
  );
  const code = 'parseInt(' + str_value + ',10)';
  return [code, JavaScript.ORDER_ATOMIC];
};

JavaScript['text_to_float'] = function (block: any) {
  const str_value = JavaScript.valueToCode(
    block,
    'STR',
    JavaScript.ORDER_ATOMIC,
    true,
  );
  const code = 'parseFloat(' + str_value + ')';
  return [code, JavaScript.ORDER_ATOMIC];
};

JavaScript['number_to_text'] = function (block: any) {
  const str_value = JavaScript.valueToCode(
    block,
    'NUM',
    JavaScript.ORDER_ATOMIC,
    true,
  );
  const code = 'String(' + str_value + ')';
  return [code, JavaScript.ORDER_ATOMIC];
};

Python['text_to_int'] = function (block: any) {
  const str_value = Python.valueToCode(
    block,
    'STR',
    Python.ORDER_ATOMIC,
    true,
  );
  const code = 'int(' + str_value + ',10)';
  return [code, Python.ORDER_ATOMIC];
};

Python['text_to_float'] = function (block: any) {
  const str_value = Python.valueToCode(
    block,
    'STR',
    Python.ORDER_ATOMIC,
    true,
  );
  const code = 'float(' + str_value + ')';
  return [code, Python.ORDER_ATOMIC];
};

Python['number_to_text'] = function (block: any) {
  const str_value = Python.valueToCode(
    block,
    'NUM',
    Python.ORDER_ATOMIC,
    true,
  );
  const code = 'str(' + str_value + ')';
  return [code, Python.ORDER_ATOMIC];
};

JavaScript['text_output_more'] = function (block: any) {
  const elements = new Array(block.itemCount_);
  for (let i = 0; i < block.itemCount_; i++) {
    elements[i] =
      JavaScript.valueToCode(block, 'ADD' + i, Python.ORDER_NONE) || '\'\'';
  }
  let code = elements.join(' + ');
  code = 'log(' + code + ')\n';
  return code;
};

Python['text_output_more'] = function (block: any) {
  const elements = new Array(block.itemCount_);
  for (let i = 0; i < block.itemCount_; i++) {
    elements[i] =
      Python.valueToCode(block, 'ADD' + i, Python.ORDER_NONE) || '\'\'';
  }
  let code = elements.join(', ');
  code = 'print(' + code + ')\n';
  return code;
};

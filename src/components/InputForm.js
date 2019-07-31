import React from 'react';

const InputForm = ({ addRequest }) => {
  // form state
  const [values, setValues] = React.useState({
    equation: '',
    operation: 'simplify',
  });

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    setValues({ ...values, [name]: value });
  };

  // submission
  const handleSubmit = e => {
    e.preventDefault();

    const { equation, operation } = values;

    // validation
    if (equation && operation) {
      addRequest({ equation, operation });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="equation" value={values.equation} onChange={handleChange} />
      <select name="operation" value={values.operation} onChange={handleChange}>
        <option value="simplify">Simplify</option>
        <option value="factor">Factor</option>
        <option value="derive">Derive</option>
        <option value="integrate">Integrate</option>
        <option value="zeroes">Find 0's</option>
        <option value="tangent">Tangent</option>
        <option value="area">Area Under Curve</option>
        <option value="cos">Cosine</option>
        <option value="sin">Sine</option>
        <option value="tan">Tangent</option>
        <option value="arccos">Inverse Cosine</option>
        <option value="arcsin">Inverse Sine</option>
        <option value="arctan">Inverse Tangent</option>
        <option value="abs">Absolute Value</option>
        <option value="log">Logarithm</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;

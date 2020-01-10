import React, { type, ElementConfig } from 'react'; 
import Select, { components } from 'react-select';
import './size-list.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      {children}
    </components.SingleValue>
  );
  const colourOptions = [
    { label: "S", value: 1 },
    { label: "M", value: 2 },
    { label: "L", value: 3 },
    { label: "XL", value: 4 },
  ];
  
  class SizeList extends React.Component {
    state = {};
    state = {
      selectedOption: null,
    }
    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(selectedOption);
    }
    render() {
      return (
        <Select
            className="mt-4 col-md-2 col-offset-2"
            onChange={this.handleChange}
            styles={{ singleValue: (base) => ({ ...base, padding: 5, borderRadius: 5, background: this.state.selectedOption.value, color: 'black', display: 'flex' }) }}
            components={{ SingleValue }}
            options={colourOptions}
          />
      );
    }
  }
  export default SizeList;
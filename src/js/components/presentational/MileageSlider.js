import React from 'react';

// slider will have containers that scrolls side ways
// Will have "Min Mileage" & "Max Mileage"
// containers will be buttons

class MileageSlider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 0,
    };
  }

  render() {
    const { vehicles } = this.props.otherData;
    const { current } = this.props;
    const { handleSelectMileageOption } = this.props;
    return (
      <div className="scrolling-wrapper">
        {console.log('other data mileage: ', vehicles)}
        {console.log('current vehicle at other mileage', current)}
        {
          vehicles.map((elem, i) => {
            if (elem.model === current.model && elem.trim === current.trim && elem.model === current.model) {
              return (
                <button 
                  className="btn-mileage otherMileage"
                  type="submit"
                  onClick={() => handleSelectMileageOption(elem.id)}
                >
                  {elem.mileage}
                  Mi
                </button>
              );
            }
          })
        }
      </div>
    );
  }
}

export default MileageSlider;

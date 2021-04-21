import React, {PureComponent} from "react";
import {Map, Placemark} from "react-yandex-maps";

const MAP_PLACEMARKS = [
  [55.755814, 37.617635],
  [59.938951, 30.315635],
  [51.533557, 46.034257],
  [55.796127, 49.106405],
  [57.152985, 65.541227],
  [54.989342, 73.368212],
  [58.010450, 56.229434],
  [61.254035, 73.396221],
  [55.030199, 82.920430],
];

class BankDepartmentsMap extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      iconLayoutTemplate: null,
    };
  }

  render() {
    return (
      <Map
        modules={[
          `templateLayoutFactory`,
        ]}
        width="100%"
        height="462px"
        defaultState={{center: [56.838011, 60.597465], zoom: 5}}
        onLoad={(ymaps) => {
          this.setState({
            iconLayoutTemplate: ymaps.templateLayoutFactory.createClass(`<div class="bank-departments__map-blip"></div>`)
          });
        }}
      >
        {MAP_PLACEMARKS.map((placemark, i) => (
          <Placemark
            key={`placemark-${i}`}
            geometry={placemark}
            options={{
              iconLayout: this.state.iconLayoutTemplate,
            }}
          />
        ))}
      </Map>
    );
  }
}

export default BankDepartmentsMap;

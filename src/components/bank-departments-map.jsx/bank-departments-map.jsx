import React, {PureComponent} from "react";
import {Map, Placemark} from "react-yandex-maps";
import {MapCoordinate, MAP_PLACEMARKS} from "../../const";

const MAP_STATE = {center: MapCoordinate.EKATERINBURG, zoom: 5};
const blipLayout = `<div class="bank-departments__map-blip"></div>`;

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
        defaultState={MAP_STATE}
        onLoad={(ymaps) => {
          this.setState({
            iconLayoutTemplate: ymaps.templateLayoutFactory.createClass(blipLayout)
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

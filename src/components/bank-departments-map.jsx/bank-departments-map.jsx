import React, {PureComponent} from "react";
import {Map, Placemark} from "react-yandex-maps";
import {MAP_PLACEMARKS} from "../../const";

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

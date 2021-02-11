import React, {} from 'react';
import { MapboxScene, PointLayer } from '@antv/l7-react';

const fetchData = async () => {
    const data = await fetch(
      'https://gw.alipayobjects.com/os/basement_prod/32e1f3ab-8588-46cb-8a47-75afb692117d.json',
    )
    .then(res => res.json())
    .then(data => {
        data.features = data.features.filter(item => {
        return item.properties.capacity > 800;
      })});
    
    return data;
};

const mapCfg = {
    center: [-4.28922,55.87189],
    pitch: 0,
    style: 'dark',
    zoom: 1,
    maxZoom: 15
}

const MapInfo = () => {
    const [data, setData] = React.useState();
    React.useEffect(() => {
        const data = fetchData();
        setData(data);
    }, []);

    return(
        <div>
            <MapboxScene
             map={mapCfg}
            >
                {data && (
                    <PointLayer
                    key={'2'}
                    source={{
                      data: data,
                    }}
                    size={{
                      field: 'capacity',
                      values: [0, 16]
                    }}
                    color={{
                      field: 'capacity',
                      values: [
                        '#34B6B7',
                        '#4AC5AF',
                        '#5FD3A6',
                        '#7BE39E',
                        '#A1EDB8',
                        '#CEF8D6'
                      ],
                    }}
                    shape={{
                      values: 'circle',
                    }}
                    style={{
                      opacity: 1,
                    }}
                  />
                )}
            </MapboxScene>
        </div>
    );
};

export default MapInfo;
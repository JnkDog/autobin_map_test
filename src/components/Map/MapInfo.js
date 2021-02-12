import React from 'react';
import { MapboxScene, PointLayer } from '@antv/l7-react';

// const fetchData = async () => {
//     const data = await fetch(
//       'https://gw.alipayobjects.com/os/basement_prod/32e1f3ab-8588-46cb-8a47-75afb692117d.json',
//     )
//     .then(res => res.json())
//     .then(data => {
//         data.features = data.features.filter(item => {
//         return item.properties.capacity > 800;
//       })});
    
//     return data;
// };

const mapCfg = {
    // center: [55.86812581416994, -4.2447524327457895],
    // it needs to change order when get the value
    // from Google
    center: [-4.2447524327457895, 55.86812581416994],
    pitch: 0,
    style: 'dark',
    zoom: 8.6,
    maxZoom: 15
}

const MapInfo = () => {
    const [data, setData] = React.useState();
    // promise....
    // React.useEffect(() => {
    //     const data = fetchData();
    //     setData(data);
    // }, []);

    React.useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            'https://gw.alipayobjects.com/os/basement_prod/337ddbb7-aa3f-4679-ab60-d64359241955.json',
          );
          const data = await response.json().then(data => {
                        data.features = data.features.filter(item => {
                            return item.properties.capacity > 800;
                        });
          setData(data);
        })};
    
    
        fetchData();
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
import React, { useState, useEffect } from "react";
import { Pack } from "@potion/layout";
import { Svg, Circle, Text} from "@potion/element";


const Trucks = ({ trucks }) => {
  const [truckData, setTruckData] = useState([]);
  useEffect(() => {
    const generateTruckData = trucks.map((_, i) => ({
      value: Math.floor(Math.random() * (trucks.length * 2)) + 1,
      key: `${i + 1}`
    }));
    setTruckData(generateTruckData);
  }, [trucks]);

  return (
    <div className="bubble-wrap">
      <h1>My Favorite Trucks</h1>
      <Svg width={400} height={400}>
        <Pack
          data={{
            children: truckData
          }}
          sum={datum => datum.value}
          size={[400, 400]}
          includeRoot={false}
          nodeEnter={d => ({ ...d, r: 0 })}
          animate
        >
          {nodes =>
            nodes
              .map(({ x, y, r, key }, i) => {
                if (i < trucks.length) {
                  return (
                   
                    <Circle
                      key={key}
                      cx={x}
                      cy={y}
                      r={r}
                fill={"red"}
                    />
                      

                  );
                }
                return null;
              })
              .filter(v => v)
          }
        </Pack>
      </Svg>
    </div>
  );
};

export default Trucks;

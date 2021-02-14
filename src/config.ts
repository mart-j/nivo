const config = {
  margin: {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  },
  defs: [
    {
      id: 'dots',
      type: 'patternDots',
      background: 'inherit',
      color: '#38bcb2',
      size: 4,
      padding: 1,
      stagger: false,
    },
    {
      id: 'lines',
      type: 'patternLines',
      background: 'inherit',
      color: '#eed312',
      rotation: -45,
      lineWidth: 6,
      spacing: 10,
    },
  ],
  fill: [
    {
      match: {
        id: 'fries',
      },
      id: 'dots',
    },
    {
      match: {
        id: 'sandwich',
      },
      id: 'lines',
    },
  ],
  axisBottom: {
    tickSize: 3,
    tickPadding: 2,
    tickRotation: 0,
    legendPosition: 'middle',
    legendOffset: 32,
    tickValues: [0, 0.5, 1],
  },
  axisLeft: {
    tickSize: 0,
    tickPadding: 5,
    tickRotation: 0,
    legendPosition: 'middle',
    legendOffset: -40,
  },
  legends: [
    {
      dataFrom: 'keys',
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: 'left-to-right',
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [
        {
          on: 'hover',
          style: {
            itemOpacity: 1,
          },
        },
      ],
    },
  ],
};

export default config;

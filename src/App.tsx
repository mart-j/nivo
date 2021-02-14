import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { AxisProps } from '@nivo/axes';
import FeatureImportance from './feature_importance.json';
import config from './config';

const App = () => {
  const [width, setWidth] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const formatData = () => {
    const { metrics } = FeatureImportance.data.featureImportance;
    const [importance, names]: Array<unknown[]> = Object.values(metrics);
    const formatedData = names.map((name, i) => {
      const newName = name as string;
      const newImportance = importance[i] as number;
      return { name: newName, importance: newImportance };
    });
    return formatedData;
  };

  const filteredData = formatData().filter((item, i) => {
    if (!isExpanded) {
      return i < 20;
    }
    return item;
  });

  const ax = config.axisBottom as AxisProps;
  const axl = config.axisLeft as AxisProps;

  const getLabelWidth = () => {
    const newData = [...filteredData];
    const [{ name: longestWord }] = newData.sort((a, b) => {
      return b.name.length - a.name.length;
    });
    const body = document.querySelector('body');
    const el = document.createElement('text');
    el.innerText = longestWord;
    el.classList.add('mockLabelWidth');
    body!.appendChild(el);
    setWidth(el.getBoundingClientRect().width);
  };

  useEffect(() => {
    getLabelWidth();
  }, []);
  return (
    <div style={{ height: `${filteredData.length * 20}px` }}>
      <ResponsiveBar
        data={filteredData.reverse()}
        keys={['importance']}
        indexBy="name"
        margin={{ ...config.margin, left: config.margin.left + width }}
        padding={0.5}
        // @ts-ignore
        colorBy="index"
        colors={['blue']}
        defs={config.defs}
        fill={config.fill}
        borderColor="inherit:darker(1.6)"
        axisBottom={ax}
        axisLeft={axl}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        layout={'horizontal'}
        label={''}
        tooltip={(igem) => (
          <div style={{ color: igem.color, fontSize: '11px' }}>
            {Math.round(igem.value * 100) / 100}
          </div>
        )}
      />
      <button onClick={() => setIsExpanded(!isExpanded)}>read more</button>
    </div>
  );
};
export default App;

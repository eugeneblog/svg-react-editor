import { Tabs } from 'antd';
import { TabsProps } from 'antd/lib/tabs/index';
import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import { ZoomBehavior } from 'd3';
import { GraphConfig, EditorChildrenFunComponent } from '@/common/interface';
import Drawing from '../Drawing/index';
import { EditorContext } from '../EditorContext';
import styles from './index.less';

const { TabPane } = Tabs;

interface FlowProps {
  id: string;
  style?: React.CSSProperties;
  className?: string;
  graphConfig?: Partial<GraphConfig>;
}

const Flow: EditorChildrenFunComponent<FlowProps> = () => {
  const ctx = useContext(EditorContext);

  const onEditHand: TabsProps['onEdit'] = (targetKey, action) => {
    ctx.tabUtil[action](targetKey);
  };

  return (
    <>
      {ctx.tabs.length ? (
        <Tabs
          type="editable-card"
          animated={false}
          className={styles.tabs}
          activeKey={ctx.activeKey}
          onChange={activeKey => {
            ctx.tabUtil.setActive(activeKey);
          }}
          onEdit={onEditHand}
        >
          {ctx.tabs.map(pane => (
            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
              <Drawing attrs={pane.attrs} />
            </TabPane>
          ))}
        </Tabs>
      ) : null}
    </>
  );
};

Flow.typename = 'FLOW';

function useRenderDataToSvg() {
  useEffect(() => {
    const svg = d3.select('svg');
    const g = svg.append('g');
    const zoom: ZoomBehavior<any, any> = d3.zoom().scaleExtent([1, 40]);
    g.selectAll('circle').data([]);
    svg.call(zoom);
  }, []);
}

export default Flow;

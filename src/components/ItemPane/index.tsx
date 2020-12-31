import React from 'react';
import { EditorChildrenClassComponent } from '../../common/interface';

interface ItemPaneProps {}

class ItemPane extends React.Component<ItemPaneProps>
  implements EditorChildrenClassComponent {
  readonly typename = 'NODEPANE';
  render() {
    return <div>aa</div>;
  }
}

export default ItemPane;

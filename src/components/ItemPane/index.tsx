import React from 'react';
import {
  EditorChildrenClassComponent,
  editorComponentTname,
} from '../../common/interface';

interface ItemPaneProps {}

export default class ItemPane extends React.Component<ItemPaneProps>
  implements EditorChildrenClassComponent {
  static typename: editorComponentTname = 'NODEPANE';
  render() {
    return <div>aa</div>;
  }
}

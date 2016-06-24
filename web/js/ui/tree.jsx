import {Component} from 'vidom';

class TreeLeaf extends Component {
  shouldUpdate(newAttrs, prevAttrs) {
    return newAttrs.data !== prevAttrs.data;
  }

  onRender(attrs) {
    return (<li class="TreeLeaf">{attrs.data.id}</li>);
  }
}

class TreeNode extends Component {
  shouldUpdate(newAttrs, prevAttrs) {
    return newAttrs.data !== prevAttrs.data;
  }

  onRender(attrs) {
    var data = attrs.data;
    var children = [];

    for (var i = 0; i < data.children.length; i++) {
      var n = data.children[i];
      if (n.container) {
        children.push((<TreeNode key={n.id} data={n} />));
      } else {
        children.push((<TreeLeaf key={n.id} data={n} />));
      }
    }

    return (<ul class="TreeNode">{children}</ul>);
  }
}

export class Tree extends Component {
  shouldUpdate(newAttrs, prevAttrs) {
    return newAttrs.data !== prevAttrs.data;
  }

  onRender(attrs) {
    return (<div class="Tree"><TreeNode data={attrs.data.root} /></div>);
  }
}

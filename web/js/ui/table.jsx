import {Component} from 'vidom';

class TableCell extends Component {
  onInit() {
    this.onClick = this.onClick.bind(this);
  }

  shouldUpdate(newAttrs, prevAttrs) {
    return newAttrs.text !== prevAttrs.text;
  }

  onClick(e) {
    console.log('Clicked' + this.getAttrs().text);
    e.stopPropagation();
  }

  onRender(attrs) {
    return (<td class="TableCell" onClick={this.onClick}>{attrs.text}</td>);
  }
}

class TableRow extends Component {
  shouldUpdate(newAttrs, prevAttrs) {
    return newAttrs.data !== prevAttrs.data;
  }

  onRender(attrs) {
    var data = attrs.data;
    var classes = 'TableRow';
    if (data.active) {
      classes = 'TableRow active';
    }
    var cells = data.props;

    var children = [(<TableCell key="-1" text={'#' + data.id}></TableCell>)];
    for (var i = 0; i < cells.length; i++) {
      children.push((<TableCell key={i} text={cells[i]}></TableCell>));
    }

    return (<tr class={classes} data-id={data.id}>{children}</tr>);
  }
}

export class Table extends Component {
  shouldUpdate(newAttrs, prevAttrs) {
    return newAttrs.data !== prevAttrs.data;
  }

  onRender(attrs) {
    var items = attrs.data.items;

    var children = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      children.push((<TableRow key={item.id} data={item} />));
    }

    return (<table class="Table"><tbody>{children}</tbody></table>);
  }
}

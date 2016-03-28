import { PropTypes, Component, Children } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';

class ContextHolder extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      setTitle: PropTypes.func,
      setDescription: PropTypes.func,
      setMarkup: PropTypes.object,
      set404: PropTypes.func,
      getAmpHtml: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = {
    insertCss: PropTypes.func,
    setTitle: PropTypes.func,
    setDescription: PropTypes.func,
    setMarkup: PropTypes.object,
    set404: PropTypes.func,
    getAmpHtml: PropTypes.func,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setDescription: context.setDescription || emptyFunction,
      setMarkup: context.setMarkup || {},
      set404: context.set404 || emptyFunction,
      getAmpHtml: context.getAmpHtml || emptyFunction,
    };
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}

export default ContextHolder;

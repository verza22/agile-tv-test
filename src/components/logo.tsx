import React from 'react';

interface LogoProps {
    className?: string,
    height: number|string,
    width: number|string
}

class Logo extends React.Component<LogoProps> {
  static defaultProps = {
    className: ''
  };
  
  render() {
    return <img 
        src="/src/assets/logo.svg" 
        className={"flex "+this.props.className}
        style={{
            height: this.props.height,
            width: this.props.width
        }}
    />;
  }
}

export default Logo;

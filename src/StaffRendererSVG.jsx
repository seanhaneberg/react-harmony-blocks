import React, { Component } from 'react';
import Vex from 'vexflow';

const VF = Vex.Flow;

class StaffRendererSVG extends Component {
  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
  }
  componentDidMount() {
    const { chord } = this.props;
    const svgContainer = this.svgRef.current;
    const renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
    const ctx = renderer.getContext();
    const stave = new VF.Stave(0, 0, 100);
    stave.addClef('treble').setContext(ctx).draw();
    const bb = VF.Formatter.FormatAndDraw(ctx, stave, chord);
    this.setState({ bb });
  }

  render() {

    let svg = this.state ? this.state.svg : null;
    const bb = this.state ? this.state.bb : null;
    const x = bb ? bb.x : 0;
    const y = bb ? bb.y : 0;
    const top = y;
    const height = bb ? Math.max(100, bb.h) : 0;
    const left = "0px";
    const width = 100 + "px";

    const title = this.props.title;
    return (
      <svg
        x={x}
        y={y}
        top={top}
        left={left}
        width={width}
        height={height}
        ref={this.svgRef}
      >
        <text>{title}</text>
        {svg}
      </svg>
    );
  }
}

export default StaffRendererSVG;

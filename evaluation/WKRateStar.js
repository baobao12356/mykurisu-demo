/**
 * Created by mykurisu on 2018/2/7.
 */
/*
那个啥  这里是SCSS
.rate {
  letter-spacing: 4px;
  color: #FF9C00;
  position: relative;
  font-family: sans-serif;
  display: inline-flex;
  line-height: 1;
  font-size: 20px;
  .rate__bg {
    position: relative;
  }
  .bg__realrate {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    white-space: nowrap;
    overflow: hidden;
    transition: width .5s;
  }
}
*/
import React from 'react'


class WKRateStar extends React.Component {
    static defaultProps = {
        canClick: true,
        rateNum: 5,
        handleSelectRate: null,
        rateValue: 0
    }

    constructor (props) {
        super(props)
        this.state = {
            rateValue: 0,
            rateArray: new Array(Number(props.rateNum)).fill('')
        }
    }

    handleSelectRate (value) {
        if (!this.props.canClick) {
            return
        }
        this.setState({
            rateValue: value
        })
        this.props.handleSelectRate && this.props.handleSelectRate(value)
    }

    render () {
        const {rateArray, rateValue} = this.state
        const {rateNum} = this.props
        return (
            <div className="rate">
                <div className="rate__bg">
                    {rateArray.map((item, index) => <span onClick={() => this.handleSelectRate(index+1)} key={`rate_${index}`}>☆</span>)}
                    <div className="bg__realrate" style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                        {rateArray.map((item, index) => <span onClick={() => this.handleSelectRate(index+1)} key={`rate_selected_${index}`}>★</span>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default WKRateStar

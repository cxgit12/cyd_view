import React from 'react'
import { Spin, Layout, Pagination } from 'antd'
import './Commodities.scss'
import QueueAnim from 'rc-queue-anim'
import Commodity from '../../components/Commodity'
const Content = Layout.Content

export default class Commodities extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      response: null,
      loading: true,
    }
  }
  componentWillMount(){
    this.setState( {
      response: null,
      loading: true
    } )
    fetch( '/api/pub/commodity/index', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    } ).then( response => response.json() ).then( data => this.setState( {
      response: data,
      loading: false,
    } ) )
  }
  onPageChange( pageNum ) {
    scrollTo(0,0)
    this.setState( {
      response: null,
      loading: true
    } )
    fetch( '/api/pub/commodity/index?p=' + pageNum, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    } ).then( response => response.json() ).then( data => this.setState( {
      response: data,
      loading: false,
    } ) )
  }
  render() {

    const list = []
    const {response} = this.state
    if ( response !== null ) {
      const {content} = response.data
      for (let i = 0;i < content.length;i++) {
        let element = content[ i ]
        let dom = (<li style={{ display: 'inline-block' }} key={'card' + i}>
                     <Commodity title={element.title} description={element.description} images={element.images} url={element.url} price={element.price}/>
                   </li>)
        list.push( dom )
      }
    }
    return (
      <Content style={{ padding: '10px' }}  className="coms-bg">
        <Spin spinning={this.state.loading}>
          <div style={{ width: 1000, margin: '0 auto', minHeight:600 }}>
              <div className="com-title"><img src="http://oow7renvm.bkt.clouddn.com/jptj.jpg"/></div>
              {list.length > 0 ? 
                <QueueAnim component="ul">
                                    {list}
                                  </QueueAnim>:null
              }
          </div>
        </Spin>
        <div className="clear-fix">
                <div className="item-page">{response !== null ? <Pagination showQuickJumper defaultCurrent={response.data.number + 1} total={response.data.totalElements} onChange={this.onPageChange.bind( this )}/> : null}</div>
              </div>
      </Content>
    )
  }
}

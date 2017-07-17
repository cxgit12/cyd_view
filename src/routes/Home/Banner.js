import React, {PropTypes} from 'react'
import {Button, Icon, Anchor} from 'antd'
import QueueAnim from 'rc-queue-anim'
import TweenOne, {TweenOneGroup} from 'rc-tween-one'
import BannerAnim, {Element} from 'rc-banner-anim'
import 'rc-banner-anim/assets/index.css'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import './Content0.scss'

const BgElement = Element.BgElement
const Link = Anchor.Link
class Banner extends React.Component {
  render() {
    const props = {...this.props}
    delete props.isMode
    let temp = 60
    const childrenData = [
      {
        title: '<span style="font-size: 65px;color:white;line-height: 350px;">&nbsp;</span>',
        content: <span
        style={{color: 'white'}}></span>,
        button: null,
      },
      {
        title: '<span style="font-size: 65px;color:white;line-height: 350px;">&nbsp;</span>',
        content: <span
         style={{color: 'white'}}>&nbsp;&nbsp;</span>,
        button: [<a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-16086531040.27.3jc4D9&id=546334109345" key="href1">了解详情</a>,<a href="http://www.chuangyuandi.net.cn/news/23" key="href2">了解更多</a>]
      },
      /*{
        title: '<span style="font-size: 65px;color:white;line-height: 350px;">&nbsp;</span>',
        content: <span
          style={{color: 'white'}}></span>,
        button: [<a href="http://www.chuangyuandi.net.cn/news/32" key="href3" className="learnmore">了解更多</a>,<a href="http://www.chuangyuandi.net.cn/news/35" key="href4" className="learnmore">关于乐游</a>],
      },*/
      {
        title: null,
        content: <QueueAnim type={['bottom','top']} className="word-vertical banner-text pull-right" style={{position:'relative',left:200,top:60}}>
        {[
          <div key="text-1" style={{marginTop:temp}}></div>,
          <div key="text-2" style={{marginTop:temp-30}}></div>,
          <div key="text-3" style={{marginTop:temp-60}}></div>
        ]}
        </QueueAnim>,
        button: null,
      },
    ]
    const childrenToRender = childrenData.map((item, i) => {
      const title = item.title
      const content = item.content
      const button = item.button
      return (<Element
        key={i}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className={`bg bg${i}`}
          key="bg"
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock${i}`}
        >{title == null ? null : <span
          className="logo"
          key="logo"
          id={`${props.id}-titleBlock${i}`}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />}
          {content == null ? null : <div
            key="content"
            id={`${props.id}-contentBlock${i}`}
          >{content}</div>}
          {(typeof button == 'string' || React.isValidElement(button)) && button != null?
            <Link href="#content_9_0" key="button"
              title={<Button type="ghost" id={`${props.id}-buttonBlock${i}`}>{button}</Button>}
            />:button
          }
        </QueueAnim>
      </Element>)
    })
    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{opacity: 0, type: 'from'}}
          leave={{opacity: 0}}
          component=""
        >
          <BannerAnim
            key="banner"
            autoPlay
            autoPlaySpeed={3000}
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
        <TweenOne
          animation={{y: '-=20', yoyo: true, repeat: -1, duration: 1000}}
          className={`${props.className}-icon`}
          style={{bottom: 40}}
          key="icon"
        >
          <Icon type="down"/>
        </TweenOne>
      </OverPack>
    )
  }
}
Banner.propTypes = {
  className: PropTypes.string
}
Banner.defaultProps = {
  className: 'banner1',
}
export default Banner
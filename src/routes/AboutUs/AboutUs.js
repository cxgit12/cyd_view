/**
 * Created by zido on 2017/5/23 0023.
 */

import React from 'react'
import {Layout, Col, Row, Card } from 'antd'
import BannerAnim, { Element } from 'rc-banner-anim'
const Content = Layout.Content
import AbItem from 'Components/AbItem'
import './AboutUs.scss'
export default class AboutUs extends React.Component{

  render(){
    return (
      <Content style={{ padding: '10px 200px',background:'#eee' }}>
        <AbItem info="01" title="关于我们" desc="ABOUT US">
          <div>
            <Row>
              <Col span={14}>
                <BannerAnim prefixCls="banner-user" type="across" autoPlaySpeed={3000} dragPlay={true}>
                  <Element
                    prefixCls="about-banner"
                    key="0"
                  >
                    {/*图片写在这*/}
                    <img src="http://oow7renvm.bkt.clouddn.com/gsdl.jpg"/></Element>
                  <Element
                    prefixCls="about-banner"
                    key="1"
                  >
                    <img src="http://oow7renvm.bkt.clouddn.com/qt.jpg"/>
                  </Element>
                  <Element
                    prefixCls="about-banner"
                    key="2"
                  >
                    <img src="http://oow7renvm.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170424182428.jpg"/>
                 </Element>
                </BannerAnim>
              </Col>
              <Col span={10} className="about-info">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;成都创源地文化传播有限公司位于素有天府之国美誉的四川蓉城，是南京文化艺术
                产权交易所西南地区的代理机构，代理文交所钱币、邮票藏品挂牌、托管及免费开户等业务。同时，公司与多个文交所平台强化互联合作，
                充分发挥公司具有的独特资源优势，以保障藏品爱好者的核心利益。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司积极响应国家“一带一路”发展战略，充分融合“互联网+金融+文化”模式，
                以丰富的中华文化艺术为底蕴，以务实包容的企业文化为理念，以完善的服务体系为保障，坚持共创、共赢、共享的价值观，始终贯
                彻“质量第一、信誉至上”的经营宗旨。
                </p>
              </Col>
            </Row>
            <Row className="about-item-container" gutter={16}>
              <Col span={8}>
                <Card className="about-item">
                  <div className="about-item-img" style={{backgroundImage:'url(http://oow7renvm.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20109164500.jpg)'}}>
                  </div>
                  <div className="about-item-desc">
                    <p>骨干领导层</p>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="about-item">
                  <div className="about-item-img" style={{backgroundImage:'url(http://oow7renvm.bkt.clouddn.com/bghj1.jpg)'}}>
                  </div>
                  <div className="about-item-desc">
                    <p>舒适的办公环境</p>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="about-item">
                  <div className="about-item-img" style={{backgroundImage:'url(http://oow7renvm.bkt.clouddn.com/team1.jpg)'}}>
                  </div>
                  <div className="about-item-desc">
                    <p>优秀的精英团队</p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </AbItem>
        <AbItem info="02" title="企业人文环境" desc="ENTERPRISE ENVIRONMENT">
          <div>
            <BannerAnim prefixCls="banner-user" type="across" autoPlaySpeed={3000} dragPlay={true}>
              <Element
                prefixCls="about-banner"
                key="0"
              >
                <img src="http://oow7renvm.bkt.clouddn.com/qyhj.jpg"/></Element>
              <Element
                prefixCls="about-banner"
                key="1"
              >
                <img src="http://oow7renvm.bkt.clouddn.com/zt.jpg"/>
              </Element>
              <Element
                prefixCls="about-banner"
                key="2"
              >
                <img src="http://oow7renvm.bkt.clouddn.com/team2.jpg"/>
             </Element>
            </BannerAnim>
            <div className="office-info">
              <h3>舒适的办公环境</h3>
              <p>创源地文化传播有限公司位于天府之国，现有部门：总经办、客服部、接待部、综合部。
                 拥有一支朝气蓬勃、经验丰富、眼光独特的年轻精英团队。完善的工作制度、舒适的工作环境，
                 秉承“全民收藏”理念，公司与多家优秀企业合作，为您的投资保驾护航。
              </p>
            </div>
          </div>
        </AbItem>
        <AbItem info="03" title="联系方式" desc="CONTENT INFORMATION">
          <div className="contact-info"><img src="http://oow7renvm.bkt.clouddn.com/map.jpg"/><p>地址：成都市成华区建设路钻石广场B座2310、2303</p><p>联系电话：028-69290215 &nbsp;&nbsp; 028-69290213</p><p>邮箱：15520728137@163.com</p></div>
        </AbItem>
      </Content>
    )
  }
}
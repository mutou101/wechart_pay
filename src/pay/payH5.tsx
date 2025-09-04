import React, { useState } from 'react';
import { Button, Card, List, Modal, Toast } from 'antd-mobile';
import { ChatAddOutline , AlipayCircleFill, CalendarOutline,  } from 'antd-mobile-icons';
import { login, pay } from '../api/payApi';

import './pay.css';

type Plan = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  desc: string;
  recommended?: boolean;
};

const PayH5 =() =>{ 
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const plans: Plan[] = [
    {
      id: 1,
      name: '月度会员',
      price: 25,
      desc: '解锁高清画作下载权限',
    },
    {
      id: 2,
      name: '年度会员',
      price: 228,
      originalPrice: 285,
      desc: '享8折优惠+专属画作解析',
      recommended: true,
    },
  ];

  const handlePayment1 = () => {
    if (!selectedPlan) {
      Toast.show('请选择会员套餐');
      return;
    }
    if (!paymentMethod) {
      Toast.show('请选择支付方式');
      return;
    }

    Modal.confirm({
      content: `确认支付 ¥${selectedPlan.price} 开通${selectedPlan.name}？`,
      onConfirm: () => {
        if (paymentMethod === 'wechat') {
          const redirectUrl = encodeURIComponent(window.location.href + '?payment=success');
          const mwebUrl = `https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx123456789&package=WAP&redirect_url=${redirectUrl}`;
          
          const isWechat = /MicroMessenger/i.test(navigator.userAgent);
          if(isWechat) {
            window.location.href = mwebUrl;
          } else {
            Toast.show('请在微信客户端内完成支付');
          }
        } else {
          Toast.show('支付功能开发中');
        }
      },
    });
  };

  const handlePayment = async () => {
    const params = {
      subject: '会员',
      outTradeNo: 'GT88545121012',
      total: 100,
      payType: 101,
      description: '微信扫码支付。',
      Notifyurl: 'https://www.douyin.com/?recommend=1',
    }
    const result = await pay(params);
    console.log(result);
  };

  return (
    <div className="pay">
      <Card className="header-card">
        <div className="header-content">
          <h1>印象会员</h1>
          <p>解锁莫奈艺术世界特权</p>
        </div>
      </Card>

      <Card title="选择会员套餐" className="plan-card">
        <List>
          {plans.map((plan) => (
            <List.Item
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              extra={
                <div className="price-column">
                  <span className="current-price">¥{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="original-price">¥{plan.originalPrice}</span>
                  )}
                </div>
              }
              className={`plan-item ${selectedPlan?.id === plan.id ? 'selected' : ''} ${
                plan.recommended ? 'recommended' : ''
              }`}
            >
              <div className="plan-info">
                <div className="plan-name">{plan.name}</div>
                <div className="plan-desc">{plan.desc}</div>
              </div>
            </List.Item>
          ))}
        </List>
      </Card>

      <Card title="选择支付方式" className="payment-card">
        <div className="payment-methods">
          <div
            className={`method ${paymentMethod === 'wechat' ? 'selected' : ''}`}
            onClick={() => setPaymentMethod('wechat')}
          >
            <ChatAddOutline fontSize={24} />
            <span>微信支付</span>
          </div>
          <div
            className={`method ${paymentMethod === 'alipay' ? 'selected' : ''}`}
            onClick={() => setPaymentMethod('alipay')}
          >
            <AlipayCircleFill fontSize={24} />
            <span>支付宝</span>
          </div>
          <div
            className={`method ${paymentMethod === 'unionpay' ? 'selected' : ''}`}
            onClick={() => setPaymentMethod('unionpay')}
          >
            <CalendarOutline fontSize={24} />
            <span>银联支付</span>
          </div>
        </div>
      </Card>

      <div className="footer">
        <Button
          block
          color="primary"
          size="large"
          onClick={handlePayment}
          disabled={!selectedPlan || !paymentMethod}
        >
          {selectedPlan ? `立即开通 ¥${selectedPlan.price}` : '选择套餐'}
        </Button>
        <p className="agreement">点击即表示同意《会员服务协议》</p>
      </div>
    </div>
  );
}

export default PayH5;